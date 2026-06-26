import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next-Gen AI Platform | Data Automation",
  description: "Advanced AI-driven data automation platform for premium enterprises. Built for architectural integrity and speed.",
  keywords: ["AI automation", "data engineering", "SaaS", "Next-Gen AI", "data pipeline"],
  authors: [{ name: "AI Automation Team" }],
  openGraph: {
    title: "Next-Gen AI Platform | Data Automation",
    description: "Advanced AI-driven data automation platform.",
    type: "website",
    url: "https://ai-automate.platform",
    siteName: "AI Automate",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next-Gen AI Platform",
    description: "Advanced AI-driven data automation platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-blue-500/30`}
      >
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
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
               <button className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors">Login</button>
               <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all active:scale-95">
                Join Waitlist
              </button>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-white/5 py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2">
                 <div className="text-xl font-bold tracking-tighter mb-6">AI.AUTOMATE</div>
                 <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
                   Providing architectural integrity for the next generation of AI-driven enterprises.
                 </p>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-300">Product</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-white">Features</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">API Docs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-300">Company</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs">
              <div>© 2026 AI Automation Platform. All rights reserved.</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
