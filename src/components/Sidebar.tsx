import { 
  Rocket, 
  LayoutDashboard, 
  SearchCheck, 
  Settings, 
  BarChart3, 
  Plus, 
  HelpCircle, 
  BookOpen 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function Sidebar() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: SearchCheck, label: 'Asset Discovery' },
    { icon: Rocket, label: 'Migration Planner' },
    { icon: BarChart3, label: 'Readiness Reports' },
    { icon: Settings, label: 'Configuration' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low border-r border-outline-variant/10 p-4 flex flex-col space-y-6 z-[60]">
      <div className="flex items-center px-4 py-2 space-x-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <Rocket size={20} fill="currentColor" />
        </div>
        <div>
          <h1 className="text-lg font-black text-primary leading-none">Migration Hub</h1>
          <p className="text-[10px] text-on-surface-variant/70 tracking-widest uppercase mt-1">Enterprise Migration v2.4</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ease-out group text-sm font-medium",
              item.active 
                ? "bg-white text-primary shadow-sm" 
                : "text-on-surface-variant hover:bg-white/40"
            )}
          >
            <item.icon size={18} className={cn(item.active ? "text-primary" : "text-on-surface-variant")} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="pt-6 border-t border-outline-variant/10 space-y-4">
        <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-3 px-4 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center justify-center space-x-2 active:scale-95 transition-transform">
          <Plus size={18} strokeWidth={3} />
          <span>Start New Migration</span>
        </button>
        
        <div className="space-y-1">
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
            <HelpCircle size={14} />
            <span>Support</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-2 text-xs text-on-surface-variant hover:text-primary transition-colors">
            <BookOpen size={14} />
            <span>Documentation</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
