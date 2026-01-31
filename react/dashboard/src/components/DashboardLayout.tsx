import {
    BarChart3,
    Bell,
    Globe,
    LayoutDashboard,
    LogOut,
    Menu,
    Search,
    Settings,
    Users,
    X
} from 'lucide-react';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function DashboardLayout() {
  const [isRtl, setIsRtl] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleRtl = () => {
    const newRtl = !isRtl;
    setIsRtl(newRtl);
    document.documentElement.dir = newRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = newRtl ? 'ar' : 'en';
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--background)]">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-accent shadow-xl transition-all duration-300">
        <div className="p-6">
          <span className="text-2xl font-black tracking-tighter text-primary-400">NEXO ADMIN</span>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <SidebarItem icon={<Users size={20} />} label="Users" />
          <SidebarItem icon={<BarChart3 size={20} />} label="Analytics" />
          <SidebarItem icon={<Settings size={20} />} label="Settings" />
        </nav>

        <div className="p-4 border-t border-sidebar-accent">
          <SidebarItem icon={<LogOut size={20} />} label="Logout" />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
          <button
            className="lg:hidden p-2 text-slate-500"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>

          <div className="hidden md:flex items-center flex-1 max-w-md px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <Search size={18} className="text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 bg-transparent border-none outline-none text-sm w-full dark:text-white"
            />
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleRtl}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <Globe size={14} />
              {isRtl ? 'English' : 'عربي'}
            </button>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-sm">
              MS
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[var(--background)] page-fade-in">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
          <aside className="relative flex flex-col w-72 bg-sidebar text-sidebar-foreground border-r border-sidebar-accent shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="p-6 flex items-center justify-between">
              <span className="text-2xl font-black text-primary-400">NEXO ADMIN</span>
              <button
                className="p-1 text-sidebar-foreground/60 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 px-4 space-y-2">
              <SidebarItem icon={<LayoutDashboard size={20} />} label="Overview" active />
              <SidebarItem icon={<Users size={20} />} label="Users" />
              <SidebarItem icon={<BarChart3 size={20} />} label="Analytics" />
              <SidebarItem icon={<Settings size={20} />} label="Settings" />
            </nav>
          </aside>
        </div>
      )}
    </div>
  );
}

function SidebarItem({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
        active
          ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20'
          : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
