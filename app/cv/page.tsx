import Image from "next/image";

function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="aurora-1" />
      <div className="aurora-2" />
      <div className="aurora-3" />
    </div>
  );
}

export default function CVPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground />
      <main className="min-h-screen flex flex-col items-center justify-start px-4 pt-32 pb-16 backdrop-blur-sm">
        {/* PDF Download Button */}
        <div className="w-full max-w-3xl flex justify-end mb-2 animate-fade-in-up">
          <a
            href="https://drive.google.com/file/d/11fC3_yT_D9idYbdLQEmR9TnzYQP7Sdbz/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-400 to-yellow-400 text-black font-semibold shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-blue-400 transition-all border border-blue-300/40 text-lg"
          >
            <span className="text-2xl">📄</span> Download PDF Version
          </a>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-10 tracking-tight drop-shadow-lg">
          CV
        </h1>
        <section className="w-full max-w-3xl bg-black/60 rounded-2xl p-10 shadow-2xl border border-white/10 text-gray-200 animate-fade-in-up">
          {/* Work Experience Cards */}
          <div className="mb-10">
            <h3 className="text-2xl font-extrabold text-blue-400 mb-6 flex items-center gap-2">
              <span>💼</span> Work Experience
            </h3>
            <div className="flex flex-col gap-6">
              {/* Microsoft AI */}
              <div className="flex items-start gap-6 bg-gradient-to-r from-blue-900/60 via-blue-800/40 to-yellow-900/20 rounded-xl p-5 shadow-md border border-blue-400/10">
                <Image
                  src="/msft_ai.jpg"
                  alt="Microsoft AI"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl border border-gray-300 bg-white p-2 object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-200 text-lg">
                      Microsoft AI
                    </span>
                    <span className="text-gray-400 text-sm font-semibold">
                      May 2025 – Present
                    </span>
                  </div>
                  <div className="font-medium text-gray-100">
                    Applied Scientist II
                  </div>
                  <div className="text-green-400 font-semibold text-sm">
                    Retrieval Augmented Generation
                  </div>
                </div>
              </div>
              {/* Google DeepMind */}
              <div className="flex items-start gap-6 bg-gradient-to-r from-yellow-900/40 via-blue-800/30 to-blue-900/10 rounded-xl p-5 shadow-md border border-yellow-400/10">
                <Image
                  src="/gdm.jpg"
                  alt="Google DeepMind"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl border border-gray-300 bg-white p-2 object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-yellow-200 text-lg">
                      Google DeepMind
                    </span>
                    <span className="text-gray-400 text-sm font-semibold">
                      Sept 2023 – May 2025
                    </span>
                  </div>
                  <div className="font-medium text-gray-100">
                    Pre-Doctoral Researcher
                  </div>
                  <div className="text-green-400 font-semibold text-sm">
                    Gemini: Efficiency, and Scaling
                  </div>
                </div>
              </div>
              {/* Microsoft India R&D */}
              <div className="flex items-start gap-6 bg-gradient-to-r from-blue-800/40 via-blue-900/20 to-yellow-900/10 rounded-xl p-5 shadow-md border border-blue-200/10">
                <Image
                  src="/msft.png"
                  alt="Microsoft India R&D"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl border border-gray-300 bg-white p-2 object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-100 text-lg">
                      Microsoft R&D
                    </span>
                    <span className="text-gray-400 text-sm font-semibold">
                      July 2022 – Sep 2023
                    </span>
                  </div>
                  <div className="font-medium text-gray-100">
                    Data & Applied Scientist
                  </div>
                  <div className="text-green-400 font-semibold text-sm">
                    Sparse Recommender Systems
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Education Cards */}
          <div className="mb-10">
            <h3 className="text-2xl font-extrabold text-blue-400 mb-6 flex items-center gap-2">
              <span>🎓</span> Education
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-6 bg-gradient-to-r from-yellow-900/40 via-blue-800/30 to-blue-900/10 rounded-xl p-5 shadow-md border border-yellow-400/10">
                <Image
                  src="/iitb.png"
                  alt="IIT Bombay"
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl border border-gray-300 bg-white p-2 object-contain"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-yellow-200 text-lg">
                      Indian Institute of Technology Bombay
                    </span>
                    <span className="text-gray-400 text-sm font-semibold">
                      2018 – 2022
                    </span>
                  </div>
                  <div className="font-medium text-gray-100">
                    B.Tech (Hons.), Mechanical Engineering
                  </div>
                  <div className="text-green-400 font-semibold text-sm">
                    Minors: Computer Science, Machine Intelligence
                  </div>
                  <div className="text-gray-400 text-xs">
                    Advised by Prof. Amit Sethi
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Awards & Honors */}
          <div className="mb-4">
            <h3 className="text-2xl font-extrabold text-blue-400 mb-6 flex items-center gap-2">
              <span>🌟</span> Awards & Honors
            </h3>
            <ul className="flex flex-col gap-4 ml-2">
              <li className="relative bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-yellow-900/10 rounded-lg p-4 border border-blue-400/10 shadow-sm">
                <span className="font-bold text-yellow-200">
                  Department Technical Citation & Organisational Color
                </span>
                <span className="absolute right-4 top-4 bg-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                  2022
                </span>
                <br />
                <span className="italic text-gray-300">
                  Exemplary efforts towards technical and organisational activities
                  throughout undergrad
                </span>
              </li>
              <li className="relative bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-yellow-900/10 rounded-lg p-4 border border-blue-400/10 shadow-sm">
                <span className="font-bold text-yellow-200">
                  Mentorship Recognition Award
                </span>
                <span className="absolute right-4 top-4 bg-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                  2022
                </span>
                <br />
                <span className="italic text-gray-300">
                  Recognized for dedicated efforts towards mentoring freshmen and
                  sophomores
                </span>
              </li>
              <li className="relative bg-gradient-to-r from-blue-900/40 via-blue-800/20 to-yellow-900/10 rounded-lg p-4 border border-blue-400/10 shadow-sm">
                <span className="font-bold text-yellow-200">
                  Institute Technical Special Mention
                </span>
                <span className="absolute right-4 top-4 bg-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                  2020
                </span>
                <br />
                <span className="italic text-gray-300">
                  Institute-wide recognition for technical excellence
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-8 text-gray-500 text-sm italic text-right">
            Last updated: June 2025
          </div>
        </section>
      </main>
    </div>
  );
}
