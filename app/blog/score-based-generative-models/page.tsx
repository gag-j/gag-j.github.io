"use client";
import React from "react";
import Image from "next/image";

export default function ScoreBasedGenerativeModels() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black/90 px-4 pt-32 pb-16">
      <div className="w-full max-w-3xl bg-black/60 rounded-2xl p-10 shadow-2xl border border-white/10 text-gray-200 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-4 tracking-tight">
          Understanding Score-Based Generative Models
        </h1>
        <div className="text-gray-400 mb-6 text-sm">June 2025</div>
        <div className="w-full flex justify-center mb-8">
          <Image src="/msft_ai.jpg" alt="Score-Based Generative Models" width={400} height={220} className="rounded-xl shadow-lg" />
        </div>
        <p className="mb-4">
          A gentle introduction to score-based diffusion models and their applications in generative AI.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">Introduction</h2>
        <p className="mb-4">
          Score-based generative models are a class of probabilistic models that use the gradient (score) of the data distribution to generate new samples. They have become popular for their ability to generate high-quality images and other data types.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">How They Work</h2>
        <p className="mb-4">
          These models learn to estimate the score function of the data and use stochastic differential equations (SDEs) to sample from the learned distribution. This approach is closely related to diffusion models and has led to state-of-the-art results in generative modeling.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">Applications</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Image synthesis</li>
          <li>Audio generation</li>
          <li>Text-to-image models</li>
        </ul>
        <p className="mb-4">
          For more details, see the original papers and recent tutorials on score-based generative modeling.
        </p>
      </div>
    </div>
  );
}
