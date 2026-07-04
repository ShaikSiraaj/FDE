"use client";

import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span>AI.AUTOMATE</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>
        <div className="flex items-center gap-4">
           <button className="hidden lg:block text-sm font-medium text-slate-400 hover:text-white transition-colors">Login</button>
           <button className="hidden sm:block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all active:scale-95">
            Join Waitlist
          </button>
           <button
             className="md:hidden p-2 text-slate-400"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
             </svg>
           </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/5 py-6 px-6 flex flex-col gap-6 animate-fade-in">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-400 hover:text-white">Features</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-400 hover:text-white">Pricing</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-400 hover:text-white">About</a>
          <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
            <button className="text-left text-slate-400">Login</button>
            <button className="bg-white text-black px-5 py-3 rounded-full font-semibold">Join Waitlist</button>
          </div>
        </div>
      )}
    </header>
  );
}
