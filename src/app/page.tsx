"use client";

import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import InteractiveGlow from "@/components/InteractiveGlow";

export default function Home() {
  return (
    <main className="min-h-screen bg-black bg-grid-pattern overflow-x-hidden">
      {/* Interactive Background Glow - Isolated for performance */}
      <InteractiveGlow />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20 animate-fade-in">
              v4.0 Protocol Active
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent leading-[1.1]">
              Automate Your Data Architecture
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              The next-generation platform for engineering-grade data automation.
              Built for speed, accuracy, and architectural integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] active:scale-95">
                Start Deploying
                <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-full font-bold transition-all hover:border-white/20 active:scale-95">
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px] animate-pulse [animation-delay:1s]"></div>
        </div>
      </section>

      {/* Features Component */}
      <Features />

      {/* Testimonials Component */}
      <Testimonials />

      {/* How It Works Component */}
      <HowItWorks />

      {/* Pricing Component */}
      <Pricing />
    </main>
  );
}
