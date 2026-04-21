/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ReadinessScore, KpiCards } from './components/ReadinessScore';
import { DiscoveryPulse, StatusBreakdown } from './components/DashboardCharts';
import { RecentScansTable, SmartOptimizer } from './components/TableAndOptimizer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
      <Sidebar />
      <main className="ml-72 min-h-screen">
        <Header />
        
        <div className="p-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <h2 className="text-5xl font-black tracking-tighter text-on-surface mb-3">Readiness Dashboard</h2>
              <p className="text-on-surface-variant max-w-lg text-sm font-medium leading-relaxed">
                Real-time telemetry and validation status for the Global IT Infrastructure Migration. 
                Monitoring 148 active endpoints across 3 regions.
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-3 rounded-full border border-outline-variant/30 text-primary font-bold text-xs uppercase tracking-widest hover:bg-white transition-all active:scale-95">
                Export Report
              </button>
              <button className="px-6 py-3 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-2xl transition-all active:scale-95">
                Run Validation
              </button>
            </div>
          </motion.section>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Left: Score */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-12 lg:col-span-8"
            >
              <ReadinessScore />
            </motion.div>

            {/* Right: KPIs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-4"
            >
              <KpiCards />
            </motion.div>

            {/* Left: Pulse Chart */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="col-span-12 lg:col-span-8"
            >
              <DiscoveryPulse />
            </motion.div>

            {/* Right: Status */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="col-span-12 lg:col-span-4"
            >
              <StatusBreakdown />
            </motion.div>
          </div>

          {/* Bottom: Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <RecentScansTable />
          </motion.div>
        </div>

        {/* Global Floating Elements */}
        <SmartOptimizer />
      </main>
    </div>
  );
}
