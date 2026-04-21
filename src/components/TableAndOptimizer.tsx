import { Cloud, AlertTriangle, MoreVertical, Zap, CheckCircle2, RefreshCcw, Bolt, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export function RecentScansTable() {
  const assets = [
    {
      id: 'AWS-Cloud-DB-Cluster-01',
      status: 'Production Environment',
      type: 'cloud',
      tags: [{ label: 'S3', color: 'bg-blue-100 text-blue-600' }, { label: 'L', color: 'bg-purple-100 text-purple-600' }, { label: '+2', color: 'bg-slate-100 text-slate-400' }],
      path: 'One-to-One Lift',
      pathColor: 'bg-surface-container text-on-surface'
    },
    {
      id: 'Legacy-Mainframe-Legacy-12',
      status: 'On-Premise (Deprecating)',
      type: 'legacy',
      tags: [{ label: 'CR', color: 'bg-error/10 text-error' }],
      path: 'Refactoring Needed',
      pathColor: 'bg-error/10 text-error'
    }
  ];

  return (
    <section className="bg-white rounded-3xl overflow-hidden shadow-sm ghost-border mt-10">
      <div className="p-8 border-b border-surface-container flex items-center justify-between">
        <h3 className="text-xl font-black text-on-surface">Recent Scans & Entities</h3>
        <div className="flex space-x-2">
          <span className="px-4 py-2 bg-secondary-container text-on-secondary-container text-[10px] font-black uppercase tracking-widest rounded-full cursor-pointer transition-colors hover:opacity-80">All Regions</span>
          <span className="px-4 py-2 bg-surface-container text-on-surface-variant text-[10px] font-black uppercase tracking-widest rounded-full cursor-pointer transition-colors hover:bg-surface-container-high">US-East-1</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant text-[10px] uppercase tracking-widest font-black">
              <th className="px-8 py-5">Entity Identity</th>
              <th className="px-8 py-5">Dependency Chain</th>
              <th className="px-8 py-5">Migration Path</th>
              <th className="px-8 py-5 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
                      asset.type === 'cloud' ? "bg-primary/10 text-primary" : "bg-error/10 text-error"
                    )}>
                      {asset.type === 'cloud' ? <Cloud size={20} /> : <AlertTriangle size={20} fill="currentColor" />}
                    </div>
                    <div>
                      <p className="font-black text-sm text-on-surface">{asset.id}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">{asset.status}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="flex -space-x-2.5">
                    {asset.tags.map((tag, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black shadow-sm",
                          tag.color
                        )}
                        style={{ zIndex: 10 - i }}
                      >
                        {tag.label}
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className={cn("text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full", asset.pathColor)}>
                    {asset.path}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="text-on-surface-variant hover:text-primary hover:bg-primary/5 p-2 rounded-full transition-all">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function SmartOptimizer() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-8 right-8 z-[100] group"
        >
          <div className="glass-card ghost-border p-5 rounded-2xl shadow-2xl flex items-center space-x-4 max-w-sm border-white/40 ring-1 ring-black/5">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:rotate-12 transition-transform">
              <Bolt size={24} fill="currentColor" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-black text-on-surface leading-snug">Smart Optimizer Active</h4>
              <p className="text-xs text-on-surface-variant font-medium mt-0.5">We've identified 12 redundant scripts that can be merged for faster migration.</p>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-2 text-on-surface-variant hover:text-error transition-colors self-start -mr-2 -mt-2"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
