'use client'

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

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-blue-500/30`}>
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-black">
          <div className="w-20 h-20 bg-red-600/20 rounded-3xl flex items-center justify-center text-red-500 mb-8 border border-red-500/20">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter text-white">Critical System Error</h2>
          <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">
            A fatal exception has occurred in the root protocol.
            The entire architecture is being recalibrated.
          </p>
          <button
            onClick={() => reset()}
            className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            Attempt System Recovery
          </button>
        </div>
      </body>
    </html>
  )
}
