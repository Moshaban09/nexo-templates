import { Book, Github, Globe, Twitter } from 'lucide-react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [isRtl, setIsRtl] = useState(false);

  const toggleRtl = () => {
    const newRtl = !isRtl;
    setIsRtl(newRtl);
    document.documentElement.dir = newRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = newRtl ? 'ar' : 'en';
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary-100 selection:text-primary-600">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Book className="text-primary-600" />
            <span className="text-xl font-black tracking-tight">NEXO<span className="text-slate-500">DOCS</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-primary-600 transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Blog</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Changelog</a>
          </div>

          <div className="flex items-center gap-4">
             <button
              onClick={toggleRtl}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-full hover:bg-slate-50 transition"
            >
              <Globe size={14} />
              {isRtl ? 'English' : 'عربي'}
            </button>
            <div className="flex items-center gap-2">
              <Github size={20} className="text-slate-400 hover:text-slate-900 cursor-pointer" />
              <Twitter size={20} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t py-12 bg-slate-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">© 2026 Nexo Documentation. Built with Nexo CLI.</p>
          <div className="flex gap-6 text-slate-400 text-sm font-bold">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
