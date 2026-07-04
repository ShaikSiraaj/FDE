import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-black bg-grid-pattern">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20 animate-fade-in animate-float">
              v4.0 Protocol Active
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
              Automate Your Data Architecture with AI
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              The next-generation platform for engineering-grade data automation.
              Built for speed, accuracy, and architectural integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all">
                Start Deploying
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold transition-all">
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]"></div>
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
