"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="aurora-1" />
      <div className="aurora-2" />
      <div className="aurora-3" />
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Mouse train effect: keep a trail of recent mouse positions
  const [trail, setTrail] = useState<{x: number, y: number, t: number}[]>([]);
  const TRAIL_DURATION = 1200; // ms each point stays unblurred
  const TRAIL_RADIUS = 120; // px

  useEffect(() => {
    // Detect touch device
    function handleTouch() {
      setIsTouch(true);
    }
    window.addEventListener("touchstart", handleTouch, { once: true });
    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  // Clean up old trail points only when mouse is not stationary
  useEffect(() => {
    if (trail.length === 0) return;
    const lastMove = trail[trail.length - 1]?.t || 0;
    let interval: NodeJS.Timeout | null = null;
    function cleanup() {
      setTrail((prev) => {
        // If mouse hasn't moved for TRAIL_DURATION, keep only the last point
        const now = Date.now();
        if (now - lastMove > TRAIL_DURATION) {
          return prev.length > 0 ? [prev[prev.length - 1]] : [];
        }
        return prev.filter(p => now - p.t < TRAIL_DURATION);
      });
    }
    interval = setInterval(cleanup, 60);
    return () => interval && clearInterval(interval);
  }, [trail]);

  // When mouse leaves, blur the image immediately
  const handleMouseLeave = isTouch ? undefined : () => {
    setTimeout(() => setTrail([]), TRAIL_DURATION);
  };

  // On mount, ensure the image is blurred (no reveal) by default
  useEffect(() => {
    setTrail([]);
  }, []);


  // On mouse move, update mask position
  const handleMouseMove = isTouch ? undefined : (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTrail((prev) => [...prev, { x, y, t: Date.now() }]);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <AuroraBackground />
      {/* HERO IMAGE: Move outside main, make full-bleed, touches both edges, immediately below navbar */}
      <div
        ref={heroRef}
        className="relative w-screen min-h-[60vh] flex flex-col justify-end items-start overflow-hidden lg:aspect-[16/7] mx-auto"
        onMouseMove={isTouch ? undefined : handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ borderRadius: 0, boxShadow: 'none', margin: 0 }}
      >
        {/* Profile Image and Gradient Overlay, only for hero */}
        <div className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#ff9800] opacity-60" />
          <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
          {/* Mobile: Unblurred image, Desktop: Blurred with reveal */}
          <Image
            src="/bg.jpg"
            alt="profile"
            width={1920}
            height={1080}
            className="absolute left-0 bottom-0 w-full h-full object-cover opacity-98 grayscale-[0.2] contrast-110 block md:hidden"
            style={{ maxWidth: 'none', filter: 'none', borderRadius: 0, boxShadow: 'none', border: 'none' }}
            draggable={false}
          />
          {/* Desktop: Blurred image with reveal */}
          <Image
            src="/bg.jpg"
            alt="profile"
            width={1920}
            height={1080}
            className="absolute left-0 bottom-0 w-full h-full object-cover opacity-98 grayscale-[0.2] contrast-110 hidden md:block"
            style={{ maxWidth: 'none', filter: 'blur(18px)', transition: 'filter 0.2s', borderRadius: 0, boxShadow: 'none', border: 'none' }}
            draggable={false}
          />
          {/* Desktop: Unblurred reveal under mouse */}
          {trail.length > 0 && !isTouch && (
            <Image
              src="/bg.jpg"
              alt="profile"
              width={1920}
              height={1080}
              className="absolute left-0 bottom-0 w-full h-full object-cover opacity-98 grayscale-[0.2] contrast-110 pointer-events-none hidden md:block"
              style={{
                maxWidth: 'none',
                filter: 'none',
                WebkitMaskImage: trail.map(p => `radial-gradient(circle ${TRAIL_RADIUS}px at ${p.x}px ${p.y}px, white 0%, white 60%, transparent 100%)`).join(', '),
                maskImage: trail.map(p => `radial-gradient(circle ${TRAIL_RADIUS}px at ${p.x}px ${p.y}px, white 0%, white 60%, transparent 100%)`).join(', '),
                pointerEvents: 'none',
                transition: 'filter 0.2s',
                borderRadius: 0, boxShadow: 'none', border: 'none'
              }}
              draggable={false}
            />
          )}
        </div>
        {/* Horizontal Outlined Name, top right of hero image, outlined style (desktop only) */}
        <div className="absolute top-8 right-10 z-20 hidden md:block">
          <span
            className="font-extrabold text-4xl md:text-6xl tracking-widest uppercase"
            style={{
              color: 'transparent',
              WebkitTextStroke: '3px #fff',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.02em',
              lineHeight: 1,
              display: 'block',
              textAlign: 'right',
              opacity: 0.95,
              filter: 'drop-shadow(0 2px 24px #0008)'
            }}
          >
            GAGAN JAIN
          </span>
        </div>
        {/* Hero Text Content */}
        {/* Desktop: original position, Mobile: bottom left small box */}
        <main className="relative z-20 flex-1 flex flex-col justify-end items-start px-4 md:px-16 pb-6 md:pb-24">
          <div className="max-w-2xl bg-black/60 rounded-2xl p-4 md:p-12 shadow-2xl border border-white/10"
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              margin: '1rem',
              width: '90vw',
              maxWidth: '320px',
              display: 'block',
            }}
          >
            <div className="w-20 h-2 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full mb-4 md:mb-8" />
            <h1 className="text-base md:text-lg font-normal uppercase tracking-widest text-yellow-400 mb-4" style={{ fontFamily: 'Montserrat, Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.08em' }}>
              Hi, I&apos;m Gagan
            </h1>
            <p className="text-gray-200 text-base md:text-xl font-medium mb-0 max-w-xl" style={{fontFamily: 'Inter, Segoe UI, Arial, sans-serif'}}>Machine Learning Researcher</p>
            <div className="text-blue-400 text-lg md:text-2xl font-extrabold mb-2 md:mb-4 tracking-wider uppercase" style={{fontFamily: 'Inter, Segoe UI, Arial, sans-serif'}}>Microsoft AI</div>
          </div>
        </main>
        {/* Add contact row below hero card, with accurate Google Scholar and email icons */}
        {/* Removed Google Scholar and Email icons as requested */}
        {/* End contact row */}
      </div>
      {/* MAIN CONTENT: add pt-10 to separate from hero, remove pt-32 */}
      <main className="min-h-screen flex flex-col items-center justify-start px-4 pt-10 pb-16 backdrop-blur-sm">
        {/* Featured Publications Section (no bg image/gradient) */}
        <section className="w-full max-w-4xl mx-auto mt-20 mb-16 animate-fade-in-up delay-400 relative z-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-10 tracking-tight flex items-center gap-4 drop-shadow-lg" style={{ fontFamily: 'Montserrat, Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-1px' }}>
            <span className="text-3xl md:text-4xl">🚀</span> Featured Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Publication 1: Mixture of Nested Experts */}
            <div className="group relative bg-gradient-to-br from-blue-900/80 via-yellow-900/40 to-blue-700/60 rounded-3xl p-8 shadow-2xl border-2 border-blue-400/30 backdrop-blur-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-blue-400/30">
              {/* Venue Ribbon */}
              <div className="absolute left-0 top-0 z-20 w-full flex justify-start pointer-events-none">
                <div className="bg-gradient-to-r from-yellow-400 via-blue-400 to-blue-700 text-white font-semibold text-xs md:text-sm px-4 py-1 shadow-lg tracking-widest uppercase drop-shadow-lg border-2 border-blue-400/40"
                  style={{
                    width: '220px', // increased width
                    textAlign: 'center',
                    position: 'absolute',
                    left: '-80px', // shifted left to keep visible
                    top: '24px',
                    transform: 'rotate(-45deg)',
                    boxShadow: '0 4px 16px #0004',
                    letterSpacing: '0.12em',
                    borderRadius: '0.75rem',
                    zIndex: 30,
                    pointerEvents: 'auto',
                    overflow: 'visible', // ensure text is not clipped
                    whiteSpace: 'nowrap', // prevent wrapping
                  }}
                >
                  NIPS&apos;24
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-blue-400/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <Image
                src="/mone.png"
                alt="Mixture of Nested Experts teaser"
                width={320}
                height={192}
                className="w-full max-w-[320px] h-48 object-cover rounded-2xl shadow-lg mb-6 border-2 border-blue-400/40 mx-auto group-hover:scale-105 transition-transform"
              />
              <div className="text-blue-300 font-bold text-lg mb-1 text-center group-hover:text-yellow-300 transition-colors font-[Montserrat,Inter,Segoe UI,Arial,sans-serif] tracking-tight">
                Mixture of Nested Experts: Adaptive Processing of Visual Tokens
              </div>
              <div className="text-gray-200 font-medium mb-1 text-center truncate">
                <b>Gagan Jain</b>, Nidhi Hegde, ...
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <span className="text-blue-300 font-bold">NeurIPS 2024</span>
                <span className="bg-blue-900/40 text-blue-200 rounded-lg px-3 py-1 text-sm font-semibold">Mixture of Experts</span>
                <span className="bg-yellow-900/40 text-yellow-300 rounded-lg px-3 py-1 text-sm font-semibold">Conditional Computation</span>
              </div>
              <div className="text-gray-300 mb-4 text-center">
                <b>TL;DR:</b> Token-wise routing between nested experts for tackling redundancy.
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="https://arxiv.org/abs/2407.19985"
                  className="font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg px-5 py-2 shadow hover:from-blue-700 hover:to-blue-500 transition"
                  target="_blank" rel="noopener noreferrer"
                >
                  Read Paper
                </a>
                <a
                  href="https://x.com/gaganjain1582/status/1820107343369035819"
                  className="font-bold text-blue-300 bg-blue-900/40 rounded-lg px-5 py-2 shadow hover:bg-blue-800/60 transition"
                  target="_blank" rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
            {/* Publication 2: LookupViT */}
            <div className="group relative bg-gradient-to-br from-blue-900/80 via-yellow-900/40 to-blue-700/60 rounded-3xl p-8 shadow-2xl border-2 border-blue-400/30 backdrop-blur-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-blue-400/30">
              {/* Venue Ribbon */}
              <div className="absolute left-0 top-0 z-20 w-full flex justify-start pointer-events-none">
                <div className="bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-700 text-white font-semibold text-xs md:text-sm px-4 py-1 shadow-lg tracking-widest uppercase drop-shadow-lg border-2 border-blue-400/40"
                  style={{
                    width: '220px', // increased width
                    textAlign: 'center',
                    position: 'absolute',
                    left: '-80px', // shifted left to keep visible
                    top: '24px',
                    transform: 'rotate(-45deg)',
                    boxShadow: '0 4px 16px #0004',
                    letterSpacing: '0.12em',
                    borderRadius: '0.75rem',
                    zIndex: 30,
                    pointerEvents: 'auto',
                    overflow: 'visible', // ensure text is not clipped
                    whiteSpace: 'nowrap', // prevent wrapping
                  }}
                >
                  ECCV&apos;24
                </div>
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-blue-400/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition" />
              <Image
                src="/lookupvit.png"
                alt="LookupViT teaser"
                width={320}
                height={192}
                className="w-full max-w-[320px] h-48 object-cover rounded-2xl shadow-lg mb-6 border-2 border-blue-400/40 mx-auto group-hover:scale-105 transition-transform"
              />
              <div className="text-blue-300 font-bold text-lg mb-1 text-center group-hover:text-yellow-300 transition-colors font-[Montserrat,Inter,Segoe UI,Arial,sans-serif] tracking-tight">
                LookupViT: Compressing Visual Information to a smaller number of tokens
              </div>
              <div className="text-gray-200 font-medium mb-1 text-center truncate">
                Rajat Koner, <b>Gagan Jain</b>, ...
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <span className="text-blue-300 font-bold">ECCV 2024</span>
                <span className="bg-blue-900/40 text-blue-200 rounded-lg px-3 py-1 text-sm font-semibold">Vision</span>
                <span className="bg-yellow-900/40 text-yellow-300 rounded-lg px-3 py-1 text-sm font-semibold">Efficiency</span>
              </div>
              <div className="text-gray-300 mb-4 text-center">
                <b>TL;DR:</b> An asynchronous version of attention with sub-quadratic scaling and superior performance.
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="https://arxiv.org/abs/2407.12753"
                  className="font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg px-5 py-2 shadow hover:from-blue-700 hover:to-blue-500 transition"
                  target="_blank" rel="noopener noreferrer"
                >
                  Read Paper
                </a>
                <a
                  href="https://x.com/gaganjain1582/status/1813951259222921629"
                  className="font-bold text-blue-300 bg-blue-900/40 rounded-lg px-5 py-2 shadow hover:bg-blue-800/60 transition"
                  target="_blank" rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* News & Updates Archive Section - Enhanced Visuals */}
        <section className="w-full max-w-3xl mx-auto mb-24 animate-fade-in-up delay-500 relative z-20">
          <div className="relative">
            {/* Decorative Orbs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400/40 to-yellow-400/30 rounded-full blur-3xl opacity-80 z-0 animate-spin-slow" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400/40 to-blue-400/30 rounded-full blur-3xl opacity-80 z-0 animate-spin-slow" style={{animationDuration: '14s'}} />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-10 tracking-tight flex items-center gap-4 drop-shadow-lg" style={{ fontFamily: 'Montserrat, Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-1px' }}>
                <span className="text-3xl md:text-4xl">📰</span> News & Updates Archive
              </h2>
              <ul className="space-y-5 text-[1.09em] pl-0 list-none">
                {/* News Card Example */}
                {[{
                  date: "[May'25]",
                  icon: "🎉",
                  content: <span>Moved to <b>Microsoft AI.</b> Working on Retrieval Augmented Generation.</span>
                }, {
                  date: "[May'25]",
                  icon: "📄",
                  content: <span><a href='https://arxiv.org/abs/2502.00382' className="text-blue-400 underline hover:text-yellow-400 font-semibold"><b>Decode time scaling</b></a> accepted at <b>ICML&apos;25</b> &amp; <b>ICLR&apos;25 Workshop</b>.</span>
                }, {
                  date: "[Dec'24]",
                  icon: "📄",
                  content: <span><a href="https://arxiv.org/abs/2410.21405" className="text-blue-400 underline hover:text-yellow-400 font-semibold"><b>Collaborative bandits</b></a> accepted at <b>AAMAS&apos;25</b>! Optimal regret bounds!</span>
                }, {
                  date: "[Dec'24]",
                  icon: "🎤",
                  content: <span>Presented DL efficiency at <a href="https://www.uclaml.org/" className="text-blue-400 underline hover:text-yellow-400 font-semibold">UCLA Artificial General Intelligence Lab</a>.</span>
                }, {
                  date: "[May'24]",
                  icon: "🚀",
                  content: <span>Joined Google DeepMind&apos;s Foundational Research Unit.</span>
                }, {
                  date: "[Sep'23]",
                  icon: "🚀",
                  content: <span>Started as Pre-doctoral Researcher at Google Research.</span>
                }].map((item, idx) => (
                  <li key={idx} className="relative group bg-gradient-to-br from-blue-900/80 via-yellow-900/30 to-blue-700/50 rounded-2xl px-6 py-4 shadow-xl border border-blue-400/20 flex items-start gap-4 hover:scale-[1.03] hover:shadow-blue-400/20 transition-transform duration-200 overflow-hidden">
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-yellow-400 to-blue-700 rounded-l-2xl opacity-80" />
                    <span className="text-red-600 font-bold mt-1 min-w-[70px]">{item.date}</span>
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Visitors Section */}
        <section className="w-full max-w-3xl mx-auto mb-24 animate-fade-in-up delay-600 relative z-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-10 tracking-tight flex items-center gap-4 drop-shadow-lg" style={{ fontFamily: 'Montserrat, Inter, Segoe UI, Arial, sans-serif', letterSpacing: '-1px' }}>
            <span className="text-3xl md:text-4xl">🌍</span> Visitors
          </h2>
          <div className="rounded-2xl p-6 mb-8 shadow-xl border border-blue-200/40" style={{background: 'linear-gradient(90deg,#e3f2fd 60%,#fffde7 100%)'}}>
            <a href="https://clustrmaps.com/site/1c1z2" target="_blank" rel="noopener noreferrer">
              <Image
                src="//clustrmaps.com/map_v2.png?cl=ffe296&w=800&t=n&d=U600mkYyjnXucg1kTmKnUH5nokSrVr-IWPD9akBU-r0&co=40a7f0"
                alt="Visitor Map"
                width={700}
                height={200}
                className="w-full max-w-[700px] rounded-xl mx-auto shadow-lg"
                style={{boxShadow:'0 2px 12px rgba(25,118,210,0.13)'}}
              />
            </a>
          </div>
          <div className="mt-10 text-gray-500 text-sm italic text-right">
            Last updated: June 2025
          </div>
        </section>
      </main>
    </div>
  );
}