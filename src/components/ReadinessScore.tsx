import { TrendingUp, BadgeCheck, Database, Radio, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export function ReadinessScore() {
  return (
    <div className="bg-white rounded-3xl p-8 flex items-center justify-between shadow-sm ghost-border relative overflow-hidden transition-all hover:shadow-md">
      <div className="relative z-10">
        <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Current Readiness</span>
        <div className="flex items-baseline space-x-2">
          <span className="text-8xl font-black text-on-surface tracking-tighter">88</span>
          <span className="text-3xl font-bold text-on-surface-variant">%</span>
        </div>
        <p className="mt-4 text-on-surface-variant flex items-center text-sm">
          <TrendingUp size={18} className="text-primary mr-2" />
          <span className="font-semibold text-primary">+12.4%</span> since last scanning cycle
        </p>
        <div className="mt-8 flex space-x-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Critical Issues</span>
            <span className="text-xl font-bold text-error">02</span>
          </div>
          <div className="w-px h-10 bg-outline-variant/20"></div>
          <div className="flex flex-col">
            <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Estimated Completion</span>
            <span className="text-xl font-bold text-on-surface">Oct 24, 2024</span>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-64 h-64">
        {/* Background glow */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none blur-3xl animate-pulse" 
          style={{ backgroundImage: 'radial-gradient(circle at center, #0053dc 0%, transparent 70%)' }}
        />
        
        {/* Readiness Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="112"
                fill="none"
                stroke="currentColor"
                strokeWidth="16"
                className="text-surface-container"
              />
              <motion.circle
                cx="128"
                cy="128"
                r="112"
                fill="none"
                stroke="currentColor"
                strokeWidth="16"
                strokeDasharray="703.7"
                initial={{ strokeDashoffset: 703.7 }}
                animate={{ strokeDashoffset: 84.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/10 rounded-full p-4">
                <BadgeCheck size={64} className="text-primary" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KpiCards() {
  const kpis = [
    { icon: Database, label: 'Total Records', value: '1.2M' },
    { icon: Radio, label: 'Entities Scanned', value: '45.8k' },
    { icon: Sparkles, label: 'Auto-mappable', value: '92.4%' },
    { icon: Terminal, label: 'Custom Scripts', value: '124' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="bg-white rounded-2xl p-5 shadow-sm ghost-border flex flex-col justify-between transition-all hover:bg-surface-container/20 group">
          <kpi.icon size={24} className="text-primary-fixed-dim transition-transform group-hover:scale-110" />
          <div className="mt-4">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider block">{kpi.label}</span>
            <span className="text-2xl font-black text-on-surface">{kpi.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
