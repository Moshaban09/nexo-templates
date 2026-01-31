import { Button } from '@/components/ui';
import { ArrowRight, FileCode, Folder, Layers, Sparkles, Zap } from 'lucide-react';
import { useState } from 'react';

const techStack = [
  { name: 'React 19', icon: '⚛️' },
  { name: 'Vite 6', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Tailwind v4', icon: '🎨' },
  { name: 'React Router', icon: '🧭' },
  { name: 'Lucide Icons', icon: '✨' },
];

const fileStructure = [
  { name: 'src/', isFolder: true, indent: 0, desc: 'Source files' },
  { name: 'components/ui/', isFolder: true, indent: 1, desc: 'Reusable UI' },
  { name: 'hooks/', isFolder: true, indent: 1, desc: 'Custom hooks' },
  { name: 'lib/', isFolder: true, indent: 1, desc: 'Utilities' },
  { name: 'config/', isFolder: true, indent: 1, desc: 'Constants' },
  { name: 'types/', isFolder: true, indent: 1, desc: 'TypeScript types' },
  { name: 'services/', isFolder: true, indent: 1, desc: 'API client' },
  { name: 'layouts/', isFolder: true, indent: 1, desc: 'Page layouts' },
  { name: 'assets/', isFolder: true, indent: 1, desc: 'Images & icons' },
  { name: 'app/', isFolder: true, indent: 1, desc: 'Pages' },
  { name: 'styles/', isFolder: true, indent: 1, desc: 'Global CSS' },
  { name: 'App.tsx', indent: 1, desc: 'Router setup' },
  { name: 'main.tsx', indent: 1, desc: 'Entry point' },
];

export default function HomePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>NEXO CLI • SaaS Template</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Build Fast.
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent"> Ship Faster.</span>
          </h1>

          <p className="text-base text-slate-400 max-w-xl mx-auto">
            The ultimate React starter template for modern web applications.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-300"
            >
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
              <Layers size={18} className="text-violet-400" />
              Features
            </h2>
            <FeatureCard icon={<Zap className="text-amber-400" size={16} />} title="Lightning Fast" description="Vite with instant HMR" />
            <FeatureCard icon={<Layers className="text-violet-400" size={16} />} title="Modern Stack" description="React 19 + TypeScript" />
            <FeatureCard icon={<Sparkles className="text-cyan-400" size={16} />} title="Reusable Components" description="Button, Card & more" />
          </div>

          {/* File Structure */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600/50 hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <Folder size={18} className="text-cyan-400" />
              Project Structure
            </h2>
            <div className="space-y-1.5">
              {fileStructure.map((file, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm py-1 px-2 rounded-lg hover:bg-slate-700/30 transition-colors"
                  style={{ paddingLeft: `${file.indent * 16 + 8}px` }}
                >
                  <div className="flex items-center gap-2">
                    {file.isFolder ? (
                      <Folder size={14} className="text-cyan-400" />
                    ) : (
                      <FileCode size={14} className="text-violet-400" />
                    )}
                    <span className="text-slate-200 font-mono text-xs">{file.name}</span>
                  </div>
                  <span className="text-slate-500 text-xs">{file.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            onClick={() => setClicked(true)}
            className="gap-3"
          >
            {clicked ? '🎉 Ready to Build!' : 'Start Building'}
            {!clicked && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
          </Button>
          {clicked && (
            <p className="mt-4 text-slate-400 text-sm animate-pulse">
              Edit <code className="text-cyan-400">src/app/page.tsx</code> to get started!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800/80 hover:border-violet-500/30 hover:scale-[1.02] transition-all duration-300 cursor-default">
      <div className="w-9 h-9 bg-slate-700/50 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <p className="text-slate-400 text-xs">{description}</p>
      </div>
    </div>
  );
}
