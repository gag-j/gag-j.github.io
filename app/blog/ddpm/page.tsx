"use client";
import React from "react";
import Image from "next/image";

export default function DDPMPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black/90 px-4 pt-32 pb-16">
      <div className="w-full max-w-3xl bg-black/60 rounded-2xl p-10 shadow-2xl border border-white/10 text-gray-200 animate-fade-in-up">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-4 tracking-tight">
          Denoising Diffusion Probabilistic Models (DDPM)
        </h1>
        <div className="text-gray-400 mb-6 text-sm">May 2025</div>
        <div className="w-full flex justify-center mb-8">
          <Image src="/gdm.jpg" alt="DDPM" width={400} height={220} className="rounded-xl shadow-lg" />
        </div>
        <p className="mb-4">
          Exploring the core ideas behind DDPMs and their impact on image synthesis.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">What is DDPM?</h2>
        <p className="mb-4">
          DDPMs are a type of generative model that iteratively denoise data, starting from pure noise, to generate realistic samples. They have set new benchmarks in image generation quality.
        </p>
        <h2 className="text-2xl font-bold text-yellow-300 mb-2 mt-8">Key Concepts</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Forward and reverse diffusion processes</li>
          <li>Score matching</li>
          <li>Sampling with neural networks</li>
        </ul>
        <p className="mb-4">
          DDPMs are widely used in modern generative AI systems, including text-to-image models.
        </p>
      </div>
    </div>
  );
}
