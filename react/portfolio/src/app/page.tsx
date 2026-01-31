import { ArrowRight, Briefcase, FileCode, Folder, Palette, User } from 'lucide-react';
import { useState } from 'react';

const techStack = [
  { name: 'React 19', icon: '⚛️' },
  { name: 'Vite 6', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind v4', icon: '🎨' },
  { name: 'Lucide Icons', icon: '✨' },
];

const fileStructure = [
  { name: 'src/', isFolder: true, indent: 0, desc: 'Source files' },
  { name: 'projects/', isFolder: true, indent: 1, desc: 'Work showcase' },
  { name: 'about/', isFolder: true, indent: 1, desc: 'Bio & skills' },
  { name: 'contact/', isFolder: true, indent: 1, desc: 'Contact form' },
  { name: 'components/', isFolder: true, indent: 1, desc: 'UI elements' },
  { name: 'lib/', isFolder: true, indent: 1, desc: 'Utilities' },
  { name: 'assets/', isFolder: true, indent: 1, desc: 'Images' },
  { name: 'styles/', isFolder: true, indent: 1, desc: 'Global CSS' },
];

export default function HomePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-800 to-fuchsia-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-400 text-sm font-medium mb-4">
            <Palette size={16} />
            <span>NEXO CLI • Portfolio Template</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Showcase Your
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent"> Work.</span>
          </h1>

          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Personal portfolio with projects gallery, about section, and contact form.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {techStack.map((tech) => (
            <span key={tech.name} className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-300">
              <span>{tech.icon}</span>
              <span>{tech.name}</span>
            </span>
          ))}
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Features */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
              <Palette size={18} className="text-rose-400" />
              Sections Included
            </h2>
            <FeatureCard icon={<Briefcase className="text-rose-400" size={16} />} title="Projects" description="Work gallery" />
            <FeatureCard icon={<User className="text-pink-400" size={16} />} title="About" description="Bio & skills" />
            <FeatureCard icon={<Palette className="text-fuchsia-400" size={16} />} title="Contact" description="Get in touch" />
          </div>

          {/* File Structure */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600/50 hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <Folder size={18} className="text-pink-400" />
              Project Structure
            </h2>
            <div className="space-y-1.5">
              {fileStructure.map((file, i) => (
                <div key={i} className="flex items-center justify-between text-sm py-1 px-2 rounded-lg hover:bg-slate-700/30 transition-colors" style={{ paddingLeft: `${file.indent * 16 + 8}px` }}>
                  <div className="flex items-center gap-2">
                    {file.isFolder ? <Folder size={14} className="text-pink-400" /> : <FileCode size={14} className="text-rose-400" />}
                    <span className="text-slate-200 font-mono text-xs">{file.name}</span>
                  </div>
                  <span className="text-slate-500 text-xs">{file.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button onClick={() => setClicked(true)} className="cursor-pointer group inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-rose-600 to-pink-500 text-white rounded-xl font-semibold shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-105 transition-all duration-300">
            {clicked ? '🎉 Ready to Shine!' : 'Start Building'}
            {!clicked && <ArrowRight size={18} />}
          </button>
          {clicked && <p className="mt-4 text-slate-400 text-sm animate-pulse">Edit <code className="text-pink-400">src/app/page.tsx</code></p>}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800/80 hover:border-rose-500/30 hover:scale-[1.02] transition-all duration-300 cursor-default">
      <div className="w-9 h-9 bg-slate-700/50 rounded-lg flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <p className="text-slate-400 text-xs">{description}</p>
      </div>
    </div>
  );
}
