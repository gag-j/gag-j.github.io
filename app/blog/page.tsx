"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import ReactMarkdown from "react-markdown";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

// const markdown = `# Blog

// This blog supports math!

// Inline math: $E=mc^2$

// Block math:

// $$\\int_0^1 x^2 dx$$`;

const topics = [
  {
    key: "diffusion",
    label: "Diffusion Models",
    posts: [
      {
        title: "Understanding Score-Based Generative Models",
        date: "June 2025",
        description:
          "A gentle introduction to score-based diffusion models and their applications in generative AI.",
        image: "/msft_ai.jpg",
        link: "/blog/score-based-generative-models",
      },
      {
        title: "Denoising Diffusion Probabilistic Models (DDPM)",
        date: "May 2025",
        description:
          "Exploring the core ideas behind DDPMs and their impact on image synthesis.",
        image: "/gdm.jpg",
        link: "/blog/ddpm",
      },
    ],
  },
  {
    key: "rlhf",
    label: "RL for Post Training",
    posts: [
      {
        title: "Reinforcement Learning from Human Feedback (RLHF)",
        date: "April 2025",
        description:
          "How RLHF is used to align large language models with human preferences.",
        image: "/msft.png",
        link: "/blog/rlhf",
      },
      {
        title: "Reward Modeling in LLMs",
        date: "March 2025",
        description:
          "A practical guide to reward modeling and its role in post-training of LLMs.",
        image: "/iitb.png",
        link: "/blog/reward-modeling-llms",
      },
    ],
  },
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState(topics[0].key);
  const currentTopic = topics.find((t) => t.key === activeTab);
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
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
        <a
          href="/cv"
          className="relative text-blue-200 text-lg font-semibold tracking-widest hover:text-yellow-300 hover:scale-110 transition-all duration-200 pb-1 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          CV
        </a>
        <a
          href="/bio"
          className="relative text-blue-200 text-lg font-semibold tracking-widest hover:text-yellow-300 hover:scale-110 transition-all duration-200 pb-1 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          BIO
        </a>
        <a
          href="/publications"
          className="relative text-blue-200 text-lg font-semibold tracking-widest hover:text-yellow-300 hover:scale-110 transition-all duration-200 pb-1 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          PUBLICATIONS
        </a>
        <a
          href="/blog"
          className="relative text-blue-200 text-lg font-semibold tracking-widest hover:text-yellow-300 hover:scale-110 transition-all duration-200 pb-1 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-yellow-400 after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-300"
        >
          BLOG
        </a>
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-10 tracking-tight">
          Blog
        </h1>
        {/* Tabs for topics */}
        <div className="flex gap-6 mb-10">
          {topics.map((topic) => (
            <button
              key={topic.key}
              onClick={() => setActiveTab(topic.key)}
              className={`px-6 py-2 rounded-full font-bold text-lg transition-all duration-200 border-2 focus:outline-none ${
                activeTab === topic.key
                  ? "bg-gradient-to-r from-yellow-400 to-blue-400 text-black border-blue-400 shadow-lg scale-105"
                  : "bg-black/60 text-blue-200 border-blue-400 hover:bg-blue-950/40 hover:text-yellow-300"
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>
        {/* Blog posts for selected topic */}
        <section className="w-full max-w-3xl grid gap-8 grid-cols-1">
          {currentTopic && currentTopic.posts.map((post, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-black/60 rounded-2xl p-6 shadow-2xl border border-white/10 text-gray-200 animate-fade-in-up hover:scale-[1.02] transition-transform duration-200 group"
            >
              <div className="md:w-48 w-full h-40 md:h-32 flex-shrink-0 mb-4 md:mb-0 md:mr-8 overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-yellow-900/30 flex items-center justify-center">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={192}
                  height={128}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-1">
                    {post.title}
                  </h3>
                  <div className="text-gray-400 mb-2 text-sm">{post.date}</div>
                  <div className="mb-2">{post.description}</div>
                </div>
                <a
                  href={post.link}
                  className="font-bold text-blue-400 underline hover:text-yellow-300 mt-2 w-fit"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
      <footer className="w-full text-center py-6 text-gray-400 text-sm bg-black/80 border-t border-white/10 mt-8 z-30 relative">
        &copy; {new Date().getFullYear()} Gagan Jain. Powered by Next.js.
      </footer>
    </div>
  );
}
