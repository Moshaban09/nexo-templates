import { ArrowRight, Box, Code, Layers, Palette } from 'lucide-react';

export default function ComponentsWelcome() {
  return (
    <div className="p-12 max-w-5xl page-fade-in">
       <title>Nexo UI Engine - Component Library</title>
       <meta name="description" content="Explore the atomic design system powered by Tailwind v4 and React 19." />

       <div className="mb-16">
          <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary-200">
             <Layers size={24} />
          </div>
          <h1 className="text-5xl font-black mb-4 dark:text-white">The <span className="text-primary-600">UI Engine</span></h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl font-medium max-w-xl">
             Explore and build your own component library with our pre-built Atomic Design structure.
          </p>
       </div>

       <div className="grid md:grid-cols-2 gap-12 mb-16">
          <section className="space-y-6">
             <h3 className="text-xl font-bold flex items-center gap-2 dark:text-white"><Box size={20} /> The Hierarchy</h3>
             <ul className="space-y-4">
                <li className="flex gap-4 p-4 border dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
                   <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-primary-600"><Code size={16} /></div>
                   <div>
                      <p className="font-bold text-sm dark:text-white">Atoms</p>
                      <p className="text-xs text-slate-400">Buttons, Inputs, Spans.</p>
                   </div>
                </li>
                <li className="flex gap-4 p-4 border dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
                   <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-primary-600"><Layers size={16} /></div>
                   <div>
                      <p className="font-bold text-sm dark:text-white">Organisms</p>
                      <p className="text-xs text-slate-400">Navbars, Footers, Complex Forms.</p>
                   </div>
                </li>
             </ul>
          </section>

          <div className="p-8 bg-slate-100 dark:bg-slate-800/50 rounded-[32px] border border-slate-200 dark:border-slate-700 shadow-xl">
             <h3 className="font-bold mb-6 flex items-center gap-2 dark:text-white"><Palette size={18} /> Theme Control</h3>
             <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                All styles are centralized in `/src/styles/globals.css`.
                You can change the primary color and fonts globally from one place.
             </p>
             <button className="w-full py-4 bg-slate-900 dark:bg-primary-600 text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 transition shadow-lg">
                Live Components Preview <ArrowRight size={18} />
             </button>
          </div>
       </div>
    </div>
  );
}
