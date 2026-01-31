import { ArrowRight, CreditCard, Layout, Package, Zap } from 'lucide-react';

export default function EcommerceWelcome() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-6 page-fade-in">
      <title>Nexo Shop - Future of E-commerce</title>
      <meta name="description" content="Build your online store with mobile-first design and native RTL support." />

      <div className="bg-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden mb-12 shadow-2xl">
        <div className="relative z-10 max-w-2xl">
           <h1 className="text-5xl font-black mb-6">Build your <span className="text-primary-600">Store</span> without limits.</h1>
           <p className="text-slate-400 text-lg mb-10 font-medium">
             This template provides the UI structure for catalogs, carts, and checking out.
             Optimized for conversion and mobile shopping.
           </p>
           <button className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-black flex items-center gap-3 transition hover:bg-primary-700 shadow-xl shadow-primary-500/20">
             Explore Products <ArrowRight size={20} />
           </button>
        </div>
        <Package className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <EcomFeature icon={<CreditCard />} title="Payment Ready" desc="Skeleton UI for Stripe/PayPal integration included." />
        <EcomFeature icon={<Layout />} title="Responsive Grid" desc="Modern product listings that look good on all devices." />
        <EcomFeature icon={<Zap />} title="RTL Fast" desc="Arabic e-commerce made easy with native direction support." />
      </div>
    </div>
  );
}

function EcomFeature({ icon, title, desc }: any) {
  return (
    <div className="p-8 border border-slate-100 dark:border-slate-800 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
        <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-xl flex items-center justify-center mb-6">{icon}</div>
        <h3 className="font-bold mb-2 dark:text-white">{title}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
