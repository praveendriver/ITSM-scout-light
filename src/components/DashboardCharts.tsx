import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';
import { ChevronRight, HardDrive, Key, History } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const data = [
  { time: '08:00', value: 40, type: 'active' },
  { time: '09:00', value: 55, type: 'active' },
  { time: '10:00', value: 45, type: 'active' },
  { time: '11:00', value: 70, type: 'active' },
  { time: '12:00', value: 65, type: 'active' },
  { time: '13:00', value: 90, type: 'active' },
  { time: '14:00', value: 80, type: 'active' },
  { time: '15:00', value: 60, type: 'active' },
  { time: '16:00', value: 40, type: 'active' },
  { time: '17:00', value: 30, type: 'forecast' },
  { time: '18:00', value: 25, type: 'forecast' },
  { time: '19:00', value: 20, type: 'forecast' },
];

export function DiscoveryPulse() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm ghost-border">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-lg font-black text-on-surface">Discovery Pulse</h3>
          <p className="text-xs text-on-surface-variant font-medium">Asset discovery frequency across all gateways</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            <span className="w-2.5 h-2.5 rounded-full bg-primary mr-2"></span> Active
          </div>
          <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            <span className="w-2.5 h-2.5 rounded-full bg-outline-variant mr-2"></span> Forecast
          </div>
        </div>
      </div>

      <div className="h-48 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fontWeight: 700, fill: '#596064' }}
              interval={2}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-on-surface text-white p-2 rounded-lg text-xs font-bold shadow-xl">
                      {`${payload[0].value}% Readiness`}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.type === 'active' ? '#0053dc' : '#acb3b7'} 
                  fillOpacity={entry.type === 'active' ? (60 + index * 5) / 100 : 0.3}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function StatusBreakdown() {
  const statuses = [
    { title: 'Core DB', status: 'Validated', percentage: 100, icon: HardDrive, color: 'bg-green-100 text-green-700' },
    { title: 'SAML Auth', status: 'Syncing...', percentage: 74, icon: Key, color: 'bg-blue-100 text-blue-700' },
    { title: 'Legacy Flows', status: 'Conflict Detected', percentage: 42, icon: History, color: 'bg-error/10 text-error' },
  ];

  return (
    <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col h-full">
      <h3 className="text-lg font-black text-on-surface mb-6">Status Breakdown</h3>
      <div className="space-y-4 flex-1">
        {statuses.map((item) => (
          <div key={item.title} className="bg-white p-4 rounded-2xl shadow-sm border border-white/50 flex items-center justify-between group transition-all hover:translate-x-1">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                <item.icon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-on-surface leading-tight">{item.title}</h4>
                <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">{item.status}</span>
              </div>
            </div>
            <span className={cn("text-xs font-black px-2.5 py-1 rounded-full", item.color)}>
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
      <button className="mt-8 text-xs font-black text-primary flex items-center justify-center hover:translate-x-1 transition-transform uppercase tracking-widest">
        View Detailed Log
        <ChevronRight size={14} className="ml-1" />
      </button>
    </div>
  );
}
