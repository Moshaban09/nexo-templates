import {
    BarChart3,
    Settings,
    Users,
    Zap
} from 'lucide-react';

export default function DashboardWelcome() {
  return (
    <div className="p-10 max-w-6xl mx-auto page-fade-in">
      <title>Nexo Dashboard - Admin Space</title>
      <meta name="description" content="Manage your operations with the most advanced React 19 admin dashboard." />

      <header className="mb-16">
        <h1 className="text-4xl font-black mb-4 dark:text-white">Welcome to <span className="text-primary-600">Admin Central</span></h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">This is your high-performance workspace for data management.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <DashboardCard
          icon={<BarChart3 />}
          title="Real-time Analytics"
          desc="Monitor your growth as it happens with zero-latency charts."
        />
        <DashboardCard
          icon={<Users />}
          title="User Management"
          desc="Full control over user permissions and activity logs."
        />
        <DashboardCard
          icon={<Zap />}
          title="System Core"
          desc="Optimized for performance with React 19 data loading."
        />
      </div>

      <div className="bg-primary-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-primary-500/20">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-4">Start your Journey</h2>
          <p className="text-primary-100 mb-8 max-w-lg font-medium">
             Customize your dashboard widgets and connect your data sources.
             Everything is pre-configured for Arabic and English.
          </p>
          <button className="px-8 py-3 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition shadow-lg transition-transform active:scale-95">
             See Active Dashboard
          </button>
        </div>
        <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12" />
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
