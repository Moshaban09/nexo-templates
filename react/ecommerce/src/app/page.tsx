import { ArrowRight, CreditCard, FileCode, Folder, Package, ShoppingCart } from 'lucide-react';
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
  { name: 'products/', isFolder: true, indent: 1, desc: 'Product catalog' },
  { name: 'cart/', isFolder: true, indent: 1, desc: 'Shopping cart' },
  { name: 'checkout/', isFolder: true, indent: 1, desc: 'Payment flow' },
  { name: 'categories/', isFolder: true, indent: 1, desc: 'Product types' },
  { name: 'lib/', isFolder: true, indent: 1, desc: 'Utilities' },
  { name: 'assets/', isFolder: true, indent: 1, desc: 'Images' },
  { name: 'styles/', isFolder: true, indent: 1, desc: 'Global CSS' },
];

export default function HomePage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-4">
            <ShoppingCart size={16} />
            <span>NEXO CLI • Ecommerce Template</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Sell Your
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> Products.</span>
          </h1>

          <p className="text-base text-slate-300 max-w-xl mx-auto">
            Online store with products grid, shopping cart, and checkout flow.
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
              <ShoppingCart size={18} className="text-orange-400" />
              Components Included
            </h2>
            <FeatureCard icon={<Package className="text-orange-400" size={16} />} title="Products" description="Catalog & grid view" />
            <FeatureCard icon={<ShoppingCart className="text-amber-400" size={16} />} title="Cart" description="Add/remove items" />
            <FeatureCard icon={<CreditCard className="text-yellow-400" size={16} />} title="Checkout" description="Payment flow" />
          </div>

          {/* File Structure */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-slate-600/50 hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
              <Folder size={18} className="text-amber-400" />
              Project Structure
            </h2>
            <div className="space-y-1.5">
              {fileStructure.map((file, i) => (
                <div key={i} className="flex items-center justify-between text-sm py-1 px-2 rounded-lg hover:bg-slate-700/30 transition-colors" style={{ paddingLeft: `${file.indent * 16 + 8}px` }}>
                  <div className="flex items-center gap-2">
                    {file.isFolder ? <Folder size={14} className="text-amber-400" /> : <FileCode size={14} className="text-orange-400" />}
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
          <button onClick={() => setClicked(true)} className="cursor-pointer group inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white rounded-xl font-semibold shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300">
            {clicked ? '🎉 Ready to Sell!' : 'Start Building'}
            {!clicked && <ArrowRight size={18} />}
          </button>
          {clicked && <p className="mt-4 text-slate-400 text-sm animate-pulse">Edit <code className="text-amber-400">src/app/page.tsx</code></p>}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800/80 hover:border-orange-500/30 hover:scale-[1.02] transition-all duration-300 cursor-default">
      <div className="w-9 h-9 bg-slate-700/50 rounded-lg flex items-center justify-center shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
        <p className="text-slate-400 text-xs">{description}</p>
      </div>
    </div>
  );
}
