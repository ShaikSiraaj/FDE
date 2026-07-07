import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>

      <h1 className="text-[12rem] md:text-[20rem] font-black text-white/5 absolute select-none pointer-events-none">
        404
      </h1>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">Lost in Space</h2>
        <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg">
          The resource you&apos;re looking for has been moved or purged from our data clusters.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold transition-all hover:bg-slate-200 hover:scale-105 active:scale-95"
        >
          Return to Command Center
        </Link>
      </div>
    </div>
  )
}
