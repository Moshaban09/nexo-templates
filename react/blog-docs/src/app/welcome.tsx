import { ArrowRight, BookOpen, FileText, Globe, PenTool } from 'lucide-react';

export default function BlogWelcome() {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 page-fade-in">
      <title>Nexo Blog - Share your Story</title>
      <meta name="description" content="Technical documentation and blogs powered by MDX and React 19." />

      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 bg-slate-900 dark:bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-lg">
          <BookOpen size={32} />
        </div>
        <div>
          <h1 className="text-3xl font-black dark:text-white">Nexo Blog & Docs</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Ready to share your knowledge with the world.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2 dark:text-white">
            <PenTool size={20} className="text-primary-600" /> Writing Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Your template is set up with **MDX** support (logic placeholder).
            Write your posts in Markdown and import them as React components for a powerful hybrid experience.
          </p>
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4">
            <FileText className="text-slate-400" />
            <div className="text-sm">
               <p className="font-bold dark:text-white">Next Step:</p>
               <p className="text-slate-500 dark:text-slate-400">Edit `/src/app/page.tsx` to add your first post data.</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
           <h3 className="font-bold mb-6 flex items-center gap-2"><Globe size={18} /> Global Reach</h3>
           <p className="text-sm text-slate-400 mb-8 leading-relaxed">
             This template uses the Cairo font for Arabic and Inter for English.
             Click the globe icon in the header to see the layout transform instantly.
           </p>
           <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition shadow-lg">
             Preview Blog <ArrowRight size={18} />
           </button>
        </section>
      </div>
    </div>
  );
}
