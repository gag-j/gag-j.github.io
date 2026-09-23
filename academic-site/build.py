from pathlib import Path
from html.parser import HTMLParser
from email.utils import parsedate_to_datetime
import html, json, re, shutil, xml.etree.ElementTree as ET
root = Path(__file__).resolve().parent
dist = root / 'dist'
(dist / 'writing').mkdir(parents=True, exist_ok=True)
for asset in ['style.css', 'theme.js', 'portrait.jpg']:
 shutil.copyfile(root / asset, dist / asset)
theme_init = (root / 'content/theme-init.js').read_text()
cv = 'https://drive.google.com/file/d/11fC3_yT_D9idYbdLQEmR9TnzYQP7Sdbz/view'

def page(title, body, prefix='', active='home', description='Gagan Jain works on reinforcement learning environments, model post-training, and efficient generative models.'):
 links = [('home','Home','index.html'),('research','Research','research.html'),('background','Background','background.html'),('service','Service','service.html'),('writing','Writing','writing/index.html')]
 nav = ''.join(f'<a href="{prefix}{url}"'+(' aria-current="page"' if key == active else '')+f'>{label}</a>' for key,label,url in links)
 return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{html.escape(title)}</title><script>{theme_init}</script><script src="{prefix}theme.js" defer></script><meta name="description" content="{html.escape(description,quote=True)}"><link rel="stylesheet" href="{prefix}style.css"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='8' fill='%234654a3'/%3E%3Ctext x='10' y='44' font-family='Georgia' font-size='34' fill='white'%3EGJ%3C/text%3E%3C/svg%3E"></head><body><a class="skip" href="#main">Skip to content</a><div class="shell"><header class="top"><a class="brand" href="{prefix}index.html">Gagan Jain</a><nav class="nav" aria-label="Main navigation">{nav}<a href="{cv}">CV</a><button class="theme-toggle" type="button" aria-label="Dark theme" aria-pressed="false">Dark theme</button></nav></header>{body}<footer class="footer"><span>© 2026 Gagan Jain</span><span><a href="mailto:gaganjain1582@gmail.com">Email</a> · <a href="https://github.com/gag-j">GitHub</a> · <a href="https://medium.com/@gaganjain1582">Medium</a></span></footer></div></body></html>'''

def heading(number, title, intro=''):
 return f'<header class="page-heading"><p class="eyebrow">{number} / Gagan Jain</p><h1>{title}</h1>'+ (f'<p>{intro}</p>' if intro else '')+'</header>'

papers = json.loads((root / 'publications.json').read_text())
paper_resources = json.loads((root/'content/paper-resources.json').read_text())
def resource_links(aid):
 links = [{'label':'Paper','url':f'https://arxiv.org/abs/{aid}'}] + paper_resources.get(aid, [])
 return ''.join('<a href="'+html.escape(link['url'],quote=True)+'">'+html.escape(link['label'])+'</a>' for link in links)
pubs = ''.join(f'<article class="publication"><div class="venue">{venue}<span>{year}</span></div><div><h3><a href="https://arxiv.org/abs/{aid}">{title}</a></h3><p class="authors">{authors.replace("Gagan Jain","<strong>Gagan Jain</strong>")}</p><p class="summary">{desc}</p><div class="paper-links">{resource_links(aid)}</div></div></article>' for year,venue,title,authors,desc,aid in papers)
research = '<main id="main">'+heading('01','Research','My research spans efficient generative models, adaptive computation, and learning from feedback.')+'<div class="topics"><span>Generative modeling</span><span>Efficient inference</span><span>Reinforcement learning</span><span>Post-training</span></div><section id="research"><div class="section-head"><h2>Publications & preprints</h2><a href="https://scholar.google.com/citations?user=qsIjwG4AAAAJ&hl=en">Google Scholar ↗</a></div>'+pubs+'</section></main>'
(dist / 'research.html').write_text(page('Research — Gagan Jain',research,active='research'))
background = '<main id="main">'+heading('02','Background')+'<nav class="section-nav" aria-label="Background sections"><a href="#experience">Experience & education</a><a href="#early-research">Early research</a><a href="#honors">Honors</a></nav>'+(root/'content/background.html').read_text()+'</main>'
(dist/'background.html').write_text(page('Background — Gagan Jain',background,active='background'))
service = '<main id="main">'+heading('03','Service & talks')+(root/'content/service.html').read_text()+'<details class="news-archive"><summary>News archive</summary><div class="archive-content">'+(root/'content/news.html').read_text()+'</div></details></main>'
(dist/'service.html').write_text(page('Service & talks — Gagan Jain',service,active='service'))
class Clean(HTMLParser):
 def __init__(self): super().__init__(); self.out=[];self.text=[]
 def handle_starttag(self,t,attrs):
  d=dict(attrs)
  if t in {'p','h2','h3','h4','strong','em','b','i','blockquote','ul','ol','li','figure','figcaption','br','pre','code'}: self.out.append('<'+t+'>')
  elif t=='a' and d.get('href','').startswith(('https://','http://')): self.out.append('<a href="'+html.escape(d['href'],quote=True)+'">')
 def handle_endtag(self,t):
  if t in {'p','h2','h3','h4','strong','em','b','i','blockquote','ul','ol','li','figure','figcaption','pre','code','a'}:self.out.append('</'+t+'>')
 def handle_data(self,d):self.out.append(html.escape(d));self.text.append(d)

quotes = json.loads((root/'content/essay-quotes.json').read_text())
posts=[]
for item in ET.parse(root/'content/medium.xml').findall('./channel/item'):
 title=item.findtext('title');url=item.findtext('link').split('?')[0];slug=url.rsplit('/',1)[-1]
 date=parsedate_to_datetime(item.findtext('pubDate')).strftime('%B %d, %Y').replace(' 0',' ')
 c=Clean();c.feed(item.findtext('{http://purl.org/rss/1.0/modules/content/}encoded',''))
 body=''.join(c.out);text=' '.join(c.text);minutes=max(1,round(len(text.split())/220))
 quote = quotes.get(title, '')
 if quote and ' '.join(quote.split()) not in ' '.join(text.split()):
  raise ValueError('Quote is not verbatim in source: '+title)
 posts.append({'title':title,'url':url,'slug':slug,'date':date,'minutes':minutes,'quote':quote})
 article=f'<main id="main" class="article"><a class="text-link" href="index.html">← All writing</a><h1>{html.escape(title)}</h1><p class="subtle">Gagan Jain · {date} · {minutes} min read</p><p class="subtle">Originally published on <a href="{url}">Medium</a>.</p><div class="prose">{body}</div></main>'
 (dist/'writing'/f'{slug}.html').write_text(page(title+' — Gagan Jain',article,'../','writing',text[:155]))

def essays(prefix='',limit=None, captions=False):
 entries=[]
 for p in posts[:limit]:
  quote = '<blockquote class="essay-excerpt">“'+html.escape(p['quote'])+'”</blockquote>' if captions and p['quote'] else ''
  entries.append(f'<article class="essay"><span class="date">{p["date"]} · {p["minutes"]} min read</span><h3><a href="{prefix}{p["slug"]}.html">{html.escape(p["title"])}</a></h3>{quote}</article>')
 return ''.join(entries)
(dist/'writing/index.html').write_text(page('Writing — Gagan Jain','<main id="main">'+heading('04','Writing','Essays on attention, agency, work, and the life around it.')+'<div class="writing-grid">'+essays(captions=True)+'</div></main>','../','writing'))
news=''.join(re.findall(r'<div class="news-row">.*?</div>',(root/'content/news.html').read_text())[:3])
home='''<main id="main"><section class="intro" aria-labelledby="name"><div><p class="eyebrow">Machine learning · Reinforcement learning</p><h1 id="name">Gagan Jain</h1><p class="lead">I study how models <em>learn from feedback</em> and use computation efficiently.</p><p>At <strong>Proximal</strong>, I build reinforcement learning environments and post-train models. Previously, I worked on generative retrieval at <strong>Microsoft AI</strong>.</p><p>Before that, I was a pre-doctoral researcher at <strong>Google DeepMind and Google Research</strong>, working on training and decoding efficiency for <strong>Gemini and Veo</strong>. I co-developed <a href="https://arxiv.org/abs/2407.19985">Mixture of Nested Experts</a>, <a href="https://arxiv.org/abs/2407.12753">LookupViT</a>, and <a href="https://arxiv.org/abs/2502.00382">MaGNeTS</a>. These projects explored how conditional computation, token compression, and decode-time scaling can make visual understanding and generation more efficient.</p><p>My path into machine learning began with autonomous driving and robotics at <strong>IIT Bombay</strong>, where I earned my B.Tech. (Hons.). Alongside my research, I co-organized <a href="https://spoticlr.github.io/">SPOT at ICLR 2026</a>, a workshop on scaling post-training for LLMs.</p><div class="social"><a href="mailto:gaganjain1582@gmail.com">Email</a><a href="https://scholar.google.com/citations?user=qsIjwG4AAAAJ&hl=en">Scholar</a><a href="https://www.linkedin.com/in/gaganjain15/">LinkedIn</a><a href="https://x.com/gaganjain1582">X / Twitter</a><a href="https://github.com/gag-j">GitHub</a></div></div><figure class="portrait-frame"><img class="portrait" src="portrait.jpg" alt="Gagan Jain at a marina" width="235" height="280"><figcaption><strong>Currently at Proximal</strong><br>Since September 2026<br><a href="background.html">Background & experience ↗</a></figcaption></figure></section><div class="home-lower"><section aria-labelledby="recent"><h2 id="recent">Recently</h2>'''+news+'''<a class="text-link" href="research.html">Explore my research ↗</a></section><section aria-labelledby="latest-writing"><h2 id="latest-writing">Away from the papers</h2>'''+essays('writing/',2)+'''<a class="text-link" href="writing/index.html">All writing ↗</a></section></div></main>'''
(dist/'index.html').write_text(page('Gagan Jain — Machine Learning Researcher',home))
# Preserve links from the previous single-page template.
legacy="""(() => { const routes = {'#experience':'background.html#experience','#early-research':'background.html#early-research','#honors':'background.html#honors','#research':'research.html','#writing':'writing/index.html'}; const next=routes[location.hash]; if(next) location.replace(next); })();"""
p=dist/'index.html';p.write_text(p.read_text().replace('</head>','<script>'+legacy+'</script></head>'))
(dist/'.nojekyll').touch()
(root/'medium-posts.json').write_text(json.dumps(posts,indent=2,ensure_ascii=False))
for article in (dist/'writing').glob('*.html'):
 text=article.read_text()
 for post in posts:
  if article.stem!=post['slug']:text=text.replace(post['url']+'">',post['slug']+'.html">')
 article.write_text(text)
print('Built Home, Research, Background, Service, Writing, and four essays.')

# Keep established URLs working after the redesign.
for old, target in {'bio':'background.html', 'cv':cv, 'publications':'research.html', 'blog':'writing/index.html'}.items():
 escaped=html.escape(target, quote=True)
 (dist/f'{old}.html').write_text(f'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url={escaped}"><link rel="canonical" href="{escaped}"><title>Page moved — Gagan Jain</title></head><body><p>This page has moved. <a href="{escaped}">Continue here</a>.</p></body></html>')
