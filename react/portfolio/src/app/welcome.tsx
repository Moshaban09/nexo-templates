import { ArrowRight, Briefcase, Share2, User } from 'lucide-react';

export default function PortfolioWelcome() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center page-fade-in">
      <title>My Portfolio - Powered by Nexo</title>
      <meta name="description" content="Showcasing professional skills with premium design and React 19 speed." />

      <div className="max-w-3xl">
        <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white shadow-2xl shadow-primary-500/20">
          <User size={32} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">Build your <span className="text-primary-600 text-glow">Legend</span></h1>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto font-medium">
          Welcome to your professional portfolio. This template is crafted to highlight your skills
          with smooth motion and crystal-clear typography.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
           <div className="p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
              <h4 className="flex items-center gap-2 text-white font-bold mb-3"><Briefcase size={16} className="text-primary-600" /> Projects</h4>
              <p className="text-sm text-slate-500">Add your work history and project gallery in the home page component.</p>
           </div>
           <div className="p-6 bg-white/5 rounded-2xl border border-white/10 shadow-lg">
              <h4 className="flex items-center gap-2 text-white font-bold mb-3"><Share2 size={16} className="text-primary-600" /> Social Links</h4>
              <p className="text-sm text-slate-500">Configure your GitHub, LinkedIn, and Twitter in the footer or social section.</p>
           </div>
        </div>

        <button className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-black flex items-center gap-3 mx-auto hover:bg-primary-700 transition shadow-xl shadow-primary-600/20 active:scale-95">
           Start Personalizing <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
