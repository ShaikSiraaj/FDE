"use client";

import React from "react";

const STEPS = [
  {
    title: "Ingest",
    description: "Connect your data sources with a single click. We support all major clouds and databases.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    )
  },
  {
    title: "Synthesize",
    description: "Our AI models analyze your schema and automatically generate optimized data pipelines.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.691.346a6 6 0 01-3.86.517l-2.388-.477a2 2 0 00-1.022.547l-1.168 1.168a2 2 0 00-.547 1.022l-.477 2.387a6 6 0 00.517 3.86l.346.691a6 6 0 01.517 3.86l-.477 2.388a2 2 0 00.547 1.022l1.168 1.168a2 2 0 001.022.547l2.387.477a6 6 0 003.86-.517l.691-.346a6 6 0 013.86-.517l2.388.477a2 2 0 001.022-.547l1.168-1.168a2 2 0 00.547-1.022l.477-2.387a6 6 0 00-.517-3.86l-.346-.691a6 6 0 01-.517-3.86l.477-2.388a2 2 0 00-.547-1.022l-1.168-1.168z" />
      </svg>
    )
  },
  {
    title: "Deploy",
    description: "Production-ready infrastructure is provisioned and deployed automatically to your cloud.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400">Complex automation made simple for engineering teams.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 -translate-y-1/2 -z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
