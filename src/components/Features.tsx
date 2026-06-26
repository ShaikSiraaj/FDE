"use client";

import React, { useState, useEffect, useRef } from "react";

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

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const activeIndexRef = useRef(0);

  // Sync ref with state for the "Context Lock" persistence
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // When transitioning, the state is already preserved in activeIndex
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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

        {isMobile ? (
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
          <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer overflow-hidden group ${
                  activeIndex === index
                    ? "border-blue-600/50 bg-slate-900/40"
                    : "border-white/5 bg-slate-900/20 grayscale opacity-50"
                } ${
                  index === 0 ? "col-span-2 row-span-2" :
                  index === 1 ? "col-span-2 row-span-1" :
                  "col-span-1 row-span-1"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className={`mb-4 transition-colors ${activeIndex === index ? "text-blue-500" : "text-slate-500"}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className={`text-sm leading-relaxed transition-colors ${activeIndex === index ? "text-slate-300" : "text-slate-500"}`}>
                    {feature.description}
                  </p>

                  {index === 0 && (
                    <div className="mt-auto pt-8">
                       <div className="flex gap-2">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="h-12 w-full bg-white/5 rounded-lg animate-pulse" style={{animationDelay: `${i * 100}ms`}}></div>
                          ))}
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
