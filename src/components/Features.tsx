"use client";

import React, { useState, useEffect } from "react";

const FEATURES = [
  {
    title: "Neural Engine",
    description: "Deep learning models optimized for high-throughput data processing.",
    color: "from-blue-600/20 to-blue-600/5",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Elastic Mesh",
    description: "Self-healing network architecture that scales with your infrastructure.",
    color: "from-indigo-600/20 to-indigo-600/5",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  },
  {
    title: "Quantum Logic",
    description: "Probabilistic computing cores for complex decision-making at scale.",
    color: "from-slate-600/20 to-slate-600/5",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Vector Stream",
    description: "Optimized pipelines for massive-scale vector database operations.",
    color: "from-blue-400/20 to-blue-400/5",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  },
];

function Bar() {
  const [height, setHeight] = useState("20%");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setHeight(`${20 + Math.random() * 80}%`);
    });

    const interval = setInterval(() => {
      setHeight(`${20 + Math.random() * 80}%`);
    }, 1000 + Math.random() * 2000);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="w-full bg-gradient-to-t from-blue-600/20 to-blue-400 rounded-t-full transition-all duration-1000 ease-in-out"
      style={{ height }}
    ></div>
  );
}

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
    });
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // When transitioning, the state is already preserved in activeIndex
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Engineered for Performance</h2>
          <p className="text-slate-400 max-w-2xl">
            A specialized suite of AI tools designed to integrate seamlessly into your
            modern data stack.
          </p>
        </div>

        {!mounted ? (
          /* Initial static placeholder to avoid hydration mismatch */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[600px]">
            {FEATURES.map((feature, index) => (
              <div key={index} className="p-8 rounded-3xl border border-white/5 bg-slate-900/10 opacity-50">
                <div className="w-12 h-12 rounded-2xl bg-white/5 mb-6"></div>
                <div className="h-6 w-24 bg-white/5 mb-3 rounded"></div>
                <div className="h-4 w-full bg-white/5 rounded"></div>
              </div>
            ))}
          </div>
        ) : isMobile ? (
          /* Mobile Accordion */
          <div className="space-y-4">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-2xl overflow-hidden bg-slate-900/20"
              >
                <button
                  onClick={() => setActiveIndex(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                >
                  <span className="font-medium flex items-center gap-3">
                    <span className="text-blue-500">{feature.icon}</span>
                    {feature.title}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop Bento Grid */
          <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[600px]">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden group ${
                  activeIndex === index
                    ? "border-blue-500/50 bg-slate-900/40 scale-[1.02] shadow-2xl shadow-blue-500/20"
                    : "border-white/5 bg-slate-900/10 grayscale opacity-50 hover:opacity-100 hover:grayscale-0"
                } ${
                  index === 0 ? "col-span-2 row-span-2" :
                  index === 1 ? "col-span-2 row-span-1" :
                  "col-span-1 row-span-1"
                }`}
              >
                {/* Active Glow Effect */}
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-blue-500/5 blur-3xl animate-pulse"></div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    activeIndex === index
                    ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    : "bg-white/5 text-slate-500"
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 transition-colors ${activeIndex === index ? "text-white" : "text-slate-400"}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors ${activeIndex === index ? "text-slate-300" : "text-slate-500"}`}>
                    {feature.description}
                  </p>

                  {index === 0 && (
                    <div className="mt-auto pt-8">
                      <div className="flex items-end gap-1.5 h-16 px-2 bg-white/5 rounded-2xl py-3 border border-white/5">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                          <Bar key={i} />
                        ))}
                      </div>
                      <div className="mt-4 flex justify-between items-center text-[10px] font-bold tracking-widest text-blue-500/50 uppercase">
                        <span>Throughput</span>
                        <span>100% Load</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
