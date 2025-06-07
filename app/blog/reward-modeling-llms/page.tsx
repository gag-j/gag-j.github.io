"use client";
import React from "react";
import Image from "next/image";

export default function RewardModelingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black/90 px-4 pt-32 pb-16">
      <div className="w-full max-w-3xl bg-black/60 rounded-2xl p-10 shadow-2xl border border-white/10 text-gray-200 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-4 tracking-tight">
          Reward Modeling in LLMs
        </h1>
        <div className="text-gray-400 mb-6 text-sm">March 2025</div>
        <div className="w-full flex justify-center mb-8">
          <Image src="/iitb.png" alt="Reward Modeling in LLMs" width={400} height={220} className="rounded-xl shadow-lg" />
        </div>
        <p className="mb-4">
          A practical guide to reward modeling and its role in post-training of LLMs.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">What is Reward Modeling?</h2>
        <p className="mb-4">
          Reward modeling is the process of training a model to predict human preferences, which is then used to guide reinforcement learning for language models.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">Why is it Important?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Aligns LLMs with human values</li>
          <li>Improves safety and usefulness</li>
          <li>Enables fine-tuning for specific tasks</li>
        </ul>
        <p className="mb-4">
          Reward modeling is a foundational step in the RLHF pipeline for LLMs.
        </p>
      </div>
    </div>
  );
}
