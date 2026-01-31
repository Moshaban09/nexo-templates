import {
    ArrowRight,
    CheckCircle2,
    Globe,
    Star,
    Zap
} from 'lucide-react';

export default function LandingWelcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center page-fade-in">
      <title>Nexo Landing - High Conversion Awaits</title>
      <meta name="description" content="Launch your next marketing campaign with native RTL and React 19 speed." />

      <div className="max-w-4xl">
        <div className="w-20 h-20 bg-primary-600 rounded-3xl mx-auto mb-10 flex items-center justify-center text-white shadow-2xl shadow-primary-200 dark:shadow-none">
          <Zap size={40} />
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter dark:text-white">
          The <span className="text-primary-600">Ultimate</span> <br />
          Marketing Foundation.
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 mb-16 max-w-2xl mx-auto font-medium">
          Welcome to your high-conversion landing page. Built with React 19,
          Tailwind v4, and native RTL support. Ready to launch?
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <Star className="text-yellow-400 mb-4" />
            <h3 class="font-black mb-2 dark:text-white">Visual Impact</h3>
            <p class="text-xs text-slate-400">Pixel-perfect designs that wow your customers instantly.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <Globe className="text-blue-500 mb-4" />
            <h3 class="font-black mb-2 dark:text-white">Global Ready</h3>
            <p class="text-xs text-slate-400">Full Arabic support is just a toggle away. Native RTL.</p>
          </div>
          <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <CheckCircle2 className="text-green-500 mb-4" />
            <h3 class="font-black mb-2 dark:text-white">SEO Optimized</h3>
            <p class="text-xs text-slate-400">The fastest way to reach the first page. Built for Google.</p>
          </div>
        </div>

        <button className="px-10 py-5 bg-slate-900 dark:bg-primary-600 text-white rounded-2xl font-black hover:scale-105 transition active:scale-95 shadow-2xl">
          Launch Preview <ArrowRight size={20} className="inline ml-2" />
        </button>
      </div>
    </div>
  );
}
