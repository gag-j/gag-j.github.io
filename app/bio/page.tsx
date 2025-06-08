function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="aurora-1" />
      <div className="aurora-2" />
      <div className="aurora-3" />
    </div>
  );
}

export default function BioPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground />
      <main className="min-h-screen flex flex-col items-center justify-start px-4 pt-32 pb-16 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-10 tracking-tight drop-shadow-lg">
          Bio
        </h1>
        <section className="w-full max-w-3xl bg-black/60 rounded-2xl p-10 shadow-2xl border border-white/10 text-gray-200 animate-fade-in-up mb-10">
          <div className="text-lg md:text-xl leading-relaxed mb-8">
            Hello!<br/>
            I&apos;m an <b className="text-yellow-300">Applied Scientist at Microsoft AI</b>. Previously, I was a pre-doctoral researcher in the <a href="https://research.google/teams/india-research-lab/" className="text-blue-400 underline hover:text-yellow-400 font-semibold">Machine Learning and Optimization</a> team at <a href="https://deepmind.google/" className="text-blue-400 underline hover:text-yellow-400 font-semibold">Google DeepMind</a>, Bangalore, India. My primary research interests are in <b className="text-yellow-300">generative models</b> and the <b className="text-yellow-300">foundations of deep learning</b>.
            <br/><br/>
            <b className="text-blue-300">At Google DeepMind</b>, I was advised by <a href="https://sujoyp.github.io/" className="text-blue-400 underline hover:text-yellow-400 font-semibold">Dr. Sujoy Paul</a>, <a href="https://www.prateekjain.org/" className="text-blue-400 underline hover:text-yellow-400 font-semibold">Dr. Prateek Jain</a>, <a href="https://research.google/people/arun-sai-suggala/" className="text-blue-400 underline hover:text-yellow-400 font-semibold">Dr. Arun Suggala</a>, and <a href="https://sites.google.com/corp/view/karthikeyan-shanmugam" className="text-blue-400 underline hover:text-yellow-400 font-semibold">Dr. Karthikeyan Shanmugam</a>, working on efficient machine learning models, reinforcement learning for diffusion models, and theoretical guarantees for collaborative bandit approaches. I also maintain a keen interest in unsupervised post-training for large language models, particularly via reinforcement learning.
            <br/><br/>
            Previously, I spent a year at Microsoft India R&D as a Data & Applied Scientist, working on extreme classification, machine learning of sets, and recommender systems. I graduated with a <b className="text-yellow-300">B.Tech (Hons.) in Mechanical Engineering</b> from the <a href="https://www.iitb.ac.in" className="text-blue-400 underline hover:text-yellow-400 font-semibold">Indian Institute of Technology Bombay</a>, with minors in Computer Science and Machine Intelligence. During my undergrad, I focused on robotics (ground and aerial vehicles), especially autonomous driving.
          </div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2"><span>🌱</span> <span>Beyond Work</span></h2>
          <div className="text-lg md:text-xl leading-relaxed mb-2">
            Outside of research, I enjoy hiking <span role="img" aria-label="mountain">🏔️</span>, badminton <span role="img" aria-label="badminton">🏸</span>, tennis <span role="img" aria-label="tennis">🎾</span>, traveling <span role="img" aria-label="globe">🌏</span>, and reading mystery thrillers <span role="img" aria-label="books">📚</span>.
          </div>
          <div className="mt-8 text-gray-500 text-sm italic text-right">
            Last updated: June 2025
          </div>
        </section>
      </main>
    </div>
  );
}
