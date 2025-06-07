import Link from "next/link";
import Image from "next/image";

export default function BioPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{background: 'radial-gradient(ellipse at 60% 0%, #1e293b 0%, #0f172a 60%, #000 100%)'}}>
      {/* Top Navigation - modern, spaced, and fixed at the very top with logo */}
      <nav className="fixed top-0 left-0 w-full flex items-center gap-10 px-10 py-5 z-30 bg-gradient-to-r from-black/90 via-blue-950/80 to-yellow-900/70 backdrop-blur-2xl border-b-2 border-blue-400/30 shadow-2xl shadow-blue-900/30 animate-fade-in-down">
        <span className="text-white text-3xl font-extrabold tracking-widest mr-14 select-none flex items-center gap-3 drop-shadow-lg">
          <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-blue-700 bg-clip-text text-transparent animate-gradient-x">
            GJ
          </span>
        </span>
        <Link
          href="/"
          className="relative text-white text-lg font-bold tracking-widest border-b-2 border-blue-400 pb-1 hover:scale-110 hover:text-yellow-300 transition-all duration-200 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-blue-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          HOME
        </Link>
        <Link
          href="/cv"
          className="relative text-blue-200 text-lg font-semibold tracking-widest hover:text-yellow-300 hover:scale-110 transition-all duration-200 pb-1 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          CV
        </Link>
        <Link
          href="/bio"
          className="relative text-blue-200 text-lg font-semibold tracking-widest hover:text-yellow-300 hover:scale-110 transition-all duration-200 pb-1 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          BIO
        </Link>
        <Link
          href="/publications"
          className="relative text-blue-200 text-lg font-semibold tracking-widest hover:text-yellow-300 hover:scale-110 transition-all duration-200 pb-1 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          PUBLICATIONS
        </Link>
        <Link
          href="/blog"
          className="relative text-blue-200 text-lg font-semibold tracking-widest hover:text-yellow-300 hover:scale-110 transition-all duration-200 pb-1 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          BLOG
        </Link>
        <div className="ml-auto flex items-center gap-5">
          <a
            href="https://github.com/gaganjain1582"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-200 group"
          >
            <Image
              src="/globe.svg"
              alt="GitHub"
              width={32}
              height={32}
              className="w-8 h-8 opacity-80 group-hover:opacity-100 drop-shadow-md group-hover:drop-shadow-blue-400 animate-bounce"
            />
          </a>
          <a
            href="mailto:gagan.jain@microsoft.com"
            className="hover:scale-125 transition-transform duration-200 group"
          >
            <Image
              src="/vercel.svg"
              alt="Email"
              width={32}
              height={32}
              className="w-8 h-8 opacity-80 group-hover:opacity-100 drop-shadow-md group-hover:drop-shadow-yellow-400 animate-pulse"
            />
          </a>
        </div>
      </nav>
      <main className="min-h-screen flex flex-col items-center justify-start bg-black/90 px-4 pt-32 pb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 tracking-tight flex items-center gap-4 bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-700 bg-clip-text text-transparent animate-gradient-x drop-shadow-xl" style={{ fontFamily: 'Montserrat, Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-1px' }}>
          <span className="inline-block align-middle text-5xl">👤</span>
          <span>About Me</span>
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
