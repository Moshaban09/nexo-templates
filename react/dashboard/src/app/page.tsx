import { ArrowRight, BarChart3, FileCode, Folder, LayoutDashboard, Settings } from 'lucide-react';
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
  { name: 'widgets/', isFolder: true, indent: 1, desc: 'Dashboard cards' },
  { name: 'charts/', isFolder: true, indent: 1, desc: 'Data visualizations' },
  { name: 'sidebar/', isFolder: true, indent: 1, desc: 'Navigation' },
  { name: 'pages/', isFolder: true, indent: 1, desc: 'Dashboard pages' },
  { name: 'lib/', isFolder: true, indent: 1, desc: 'Utilities' },
  { name: 'assets/', isFolder: true, indent: 1, desc: 'Images' },
  { name: 'styles/', isFolder: true, indent: 1, desc: 'Global CSS' },
];

export default function HomePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-4">
            <LayoutDashboard size={16} />
            <span>NEXO CLI • Dashboard Template</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Track Your
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Metrics.</span>
          </h1>

          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Admin dashboard with widgets, charts, and sidebar navigation.
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
              <LayoutDashboard size={18} className="text-indigo-400" />
              Components Included
            </h2>
            <FeatureCard icon={<BarChart3 className="text-indigo-400" size={16} />} title="Widgets" description="Stats & metrics cards" />
            <FeatureCard icon={<BarChart3 className="text-purple-400" size={16} />} title="Charts" description="Data visualizations" />
            <FeatureCard icon={<Settings className="text-pink-400" size={16} />} title="Sidebar" description="Navigation menu" />
          </div>

          {/* File Structure */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600/50 hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <Folder size={18} className="text-purple-400" />
              Project Structure
            </h2>
            <div className="space-y-1.5">
              {fileStructure.map((file, i) => (
                <div key={i} className="flex items-center justify-between text-sm py-1 px-2 rounded-lg hover:bg-slate-700/30 transition-colors" style={{ paddingLeft: `${file.indent * 16 + 8}px` }}>
                  <div className="flex items-center gap-2">
                    {file.isFolder ? <Folder size={14} className="text-purple-400" /> : <FileCode size={14} className="text-indigo-400" />}
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
          <button onClick={() => setClicked(true)} className="cursor-pointer group inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-xl font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300">
            {clicked ? '🎉 Ready to Build!' : 'Start Building'}
            {!clicked && <ArrowRight size={18} />}
          </button>
          {clicked && <p className="mt-4 text-slate-400 text-sm animate-pulse">Edit <code className="text-purple-400">src/app/page.tsx</code></p>}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800/80 hover:border-indigo-500/30 hover:scale-[1.02] transition-all duration-300 cursor-default">
      <div className="w-9 h-9 bg-slate-700/50 rounded-lg flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <p className="text-slate-400 text-xs">{description}</p>
      </div>
    </div>
  );
}
