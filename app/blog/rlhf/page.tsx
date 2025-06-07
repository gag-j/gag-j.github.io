"use client";
import React from "react";
import Image from "next/image";

export default function RLHFPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black/90 px-4 pt-32 pb-16">
      <div className="w-full max-w-3xl bg-black/60 rounded-2xl p-10 shadow-2xl border border-white/10 text-gray-200 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-4 tracking-tight">
          Reinforcement Learning from Human Feedback (RLHF)
        </h1>
        <div className="text-gray-400 mb-6 text-sm">April 2025</div>
        <div className="w-full flex justify-center mb-8">
          <Image src="/msft.png" alt="RLHF" width={400} height={220} className="rounded-xl shadow-lg" />
        </div>
        <p className="mb-4">
          How RLHF is used to align large language models with human preferences.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">What is RLHF?</h2>
        <p className="mb-4">
          RLHF is a technique for training AI systems by incorporating feedback from humans, making models more helpful, harmless, and honest.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">Applications</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Chatbots and conversational AI</li>
          <li>Content moderation</li>
          <li>Personalized assistants</li>
        </ul>
        <p className="mb-4">
          RLHF is a key part of modern LLM training pipelines.
        </p>
      </div>
    </div>
  );
}
