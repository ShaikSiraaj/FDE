"use client";

import React from "react";

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "CTO at Nexus Data",
    content: "The automated architecture is mind-blowing. We reduced our deployment cycles from weeks to minutes.",
    avatar: "AR"
  },
  {
    name: "Sarah Chen",
    role: "Lead Engineer, Velocity AI",
    content: "Architectural integrity is often sacrificed for speed. AI.AUTOMATE is the first platform that delivers both.",
    avatar: "SC"
  },
  {
    name: "Michael Frost",
    role: "Data Architect, Global Cloud",
    content: "The self-healing network mesh has saved us from dozens of potential outages. Truly next-gen tech.",
    avatar: "MF"
  }
];

export default function Testimonials() {
  return (
    <section id="about" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Experts</h2>
          <p className="text-slate-400">Join the leaders in high-performance data automation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="relative group p-8 rounded-3xl bg-slate-900/20 border border-white/5 hover:border-blue-600/30 hover:bg-slate-900/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold border border-blue-600/30 group-hover:scale-110 transition-transform">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed italic">&ldquo;{t.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
