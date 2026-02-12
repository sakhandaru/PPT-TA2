"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  TrendingUp,
  Timer,
  MousePointerClick,
  Layout,
  Trophy,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide10_PerformanceEvaluation() {
  return (
    <div className="w-full h-full px-4 pt-4 pb-16 flex flex-col overflow-hidden gap-3">
      <motion.div
        className="shrink-0 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4 mb-2">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
            <Activity className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Hasil Evaluasi Performa
          </h2>
        </div>
        <p className="text-2xl text-foreground/80 ml-16">
          Core Web Vitals:{" "}
          <span className="font-semibold text-green-700 dark:text-green-400">
            High Performance
          </span>{" "}
          & Optimasi Lighthouse
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Left Column: Metrics & Comparison */}
        <div className="flex flex-col gap-4 h-full overflow-y-auto pr-2">
          {/* Animated Score Graph (Replacing Core Web Vitals) */}
          <motion.div
            className="flex-1 bg-card border border-border rounded-xl p-4 shadow-sm flex flex-col justify-center gap-2 relative overflow-hidden min-h-0"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <TrendingUp className="w-24 h-24 text-blue-500" />
            </div>

            <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Peningkatan Performa</h3>
                <p className="text-sm text-foreground/70">
                  Skor Lighthouse (Mobile)
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-end gap-2 relative z-10">
              <div className="flex items-end justify-around h-24 px-4 gap-8">
                {/* Before Bar */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <span className="font-bold text-2xl text-red-500">62</span>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-32 relative overflow-hidden">
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-red-400 dark:bg-red-500/80 rounded-t-lg"
                      initial={{ height: 0 }}
                      animate={{ height: "62%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.5,
                      }}
                    />
                  </div>
                  <span className="text-sm font-bold text-foreground/70 uppercase tracking-wide">
                    Sebelum
                  </span>
                </div>

                {/* Arrow */}
                <div className="pb-8">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                </div>

                {/* After Bar */}
                <div className="flex flex-col items-center gap-2 w-full">
                  <motion.span
                    className="font-black text-4xl text-green-600 dark:text-green-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                  >
                    <CountUp to={93} />
                  </motion.span>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-32 relative overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-green-400 dark:from-green-700 dark:to-green-500 rounded-t-lg"
                      initial={{ height: 0 }}
                      animate={{ height: "93%" }}
                      transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: 0.8,
                      }}
                    />
                  </div>
                  <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">
                    Sesudah
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Performance Score Card */}
          <motion.div
            className="flex-1 bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Lighthouse Score</h3>
                <p className="text-sm text-foreground/70">
                  Overall Performance
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex flex-col items-center p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-xl border border-yellow-100 dark:border-yellow-900/30 w-full relative overflow-hidden">
                <span className="text-sm font-bold text-yellow-700 dark:text-yellow-400 uppercase mb-1">
                  Sebelum
                </span>
                <span className="text-4xl font-black text-yellow-600 dark:text-yellow-400">
                  62
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground/50 shrink-0" />
              <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-xl border border-green-100 dark:border-green-900/30 w-full relative overflow-hidden">
                <span className="text-sm font-bold text-green-700 dark:text-green-400 uppercase mb-1">
                  Sesudah
                </span>
                <span className="text-4xl font-black text-green-600 dark:text-green-400">
                  93
                </span>
              </div>
            </div>

            <div className="p-3 bg-green-100/80 dark:bg-green-900/40 border border-green-300 dark:border-green-800 rounded-lg text-center">
              <p className="text-base text-green-900 dark:text-green-300 font-medium flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Memenuhi standar &quot;Good Tier&quot; Web Vitals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Charts & Tables */}
        <div className="flex flex-col gap-4 h-full min-h-0">
          {/* Lighthouse Evidence Image */}
          <motion.div
            className="flex-1 bg-card border border-border rounded-xl p-2 relative overflow-hidden flex items-center justify-center group min-h-[100px]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-muted/10 group-hover:bg-muted/20 transition-colors" />
            <div className="relative w-full h-full min-h-[120px] flex items-center justify-center">
              <img
                src="/lighthousebukti.png"
                alt="Bukti Lighthouse"
                className="w-full h-full object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Hover Caption */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[8px] px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Bukti Audit Lighthouse
            </div>
          </motion.div>

          {/* Table 15 (Metrics Table) */}
          <motion.div
            className="flex-1 bg-card border border-border rounded-xl overflow-hidden flex flex-col min-h-[200px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="p-4 border-b border-border bg-muted/20">
              <h4 className="font-bold text-sm text-foreground">
                Tabel 15. Metrik Performa (Lighthouse)
              </h4>
            </div>
            <div className="flex-1 p-0 overflow-auto">
              <PerformanceTable />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MetricComparison({
  label,
  before,
  after,
  improvement,
  icon,
  delay,
}: {
  label: string;
  before: string;
  after: string;
  improvement: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-center justify-between p-3 bg-card border border-border/50 rounded-lg hover:bg-muted/50 transition-colors"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-muted rounded-md text-foreground/80">{icon}</div>
        <div>
          <h4 className="font-semibold text-base text-foreground">{label}</h4>
          <div className="flex items-center gap-2 text-sm mt-0.5">
            <span className="text-red-600 line-through decoration-red-600/50 font-medium">
              {before}
            </span>
            <ArrowRight className="w-3 h-3 text-muted-foreground" />
            <span className="text-green-600 font-bold">{after}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xs font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
          +{improvement}
        </span>
      </div>
    </motion.div>
  );
}

function PerformanceTable() {
  return (
    <table className="w-full text-base text-left">
      <thead className="text-sm uppercase text-foreground/70 bg-muted/40 font-bold tracking-wider">
        <tr>
          <th className="px-3 py-2">Metrik</th>
          <th className="px-3 py-2">Target</th>
          <th className="px-3 py-2">
            Sebelum{" "}
            <span className="normal-case font-normal block opacity-70">
              (Refactor)
            </span>
          </th>
          <th className="px-3 py-2">
            Sesudah{" "}
            <span className="normal-case font-normal block opacity-70">
              (Refactor)
            </span>
          </th>
          <th className="px-3 py-2">Peningkatan</th>
          <th className="px-3 py-2">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border/50">
        {/* LCP Row */}
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="px-3 py-2 font-semibold">LCP</td>
          <td className="px-3 py-2 text-muted-foreground">≤ 2,5s</td>
          <td className="px-3 py-2">
            <div className="flex flex-col">
              <span className="font-medium text-red-600 dark:text-red-400">
                19,4s
              </span>
              <span className="text-[10px] text-red-600/70">(Buruk)</span>
            </div>
          </td>
          <td className="px-3 py-2">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                1,2s
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-2 font-bold text-green-600">Naik 93,8%</td>
          <td className="px-3 py-2">
            <Badge variant="success">Pass</Badge>
          </td>
        </tr>

        {/* TBT Row */}
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="px-3 py-2 font-semibold">TBT (Total Blocking)</td>
          <td className="px-3 py-2 text-muted-foreground">≤ 200 ms</td>
          <td className="px-3 py-2">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                80 ms
              </span>
              <span className="text-xs text-green-700/80 font-semibold">
                (Baik)
              </span>
            </div>
          </td>
          <td className="px-3 py-2">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                30 ms
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-2 font-bold text-green-600">Naik 62,5%</td>
          <td className="px-3 py-2">
            <Badge variant="success">Responsif</Badge>
          </td>
        </tr>

        {/* CLS Row */}
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="px-3 py-2 font-semibold">CLS</td>
          <td className="px-3 py-2 text-muted-foreground">≤ 0,1</td>
          <td className="px-3 py-2">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                0,063
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-2">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                0,001
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-2 font-bold text-green-600">Naik 98,4%</td>
          <td className="px-3 py-2">
            <Badge variant="success">Stabil</Badge>
          </td>
        </tr>

        {/* Score Row */}
        <tr className="bg-primary/5 hover:bg-primary/10 transition-colors border-t-2 border-primary/20">
          <td className="px-3 py-2 font-bold text-primary">Score</td>
          <td className="px-3 py-2 text-foreground/80">≥ 90</td>
          <td className="px-3 py-2">
            <div className="flex flex-col">
              <span className="font-bold text-yellow-600 dark:text-yellow-400">
                62 / 100
              </span>
              <span className="text-xs text-yellow-600/70">
                (Perlu Perbaikan)
              </span>
            </div>
          </td>
          <td className="px-3 py-2">
            <div className="flex flex-col">
              <span className="font-bold text-green-600 dark:text-green-400">
                93 / 100
              </span>
              <span className="text-[10px] text-green-600/70">
                (Sangat Baik)
              </span>
            </div>
          </td>
          <td className="px-3 py-2 font-bold text-primary">Naik 50%</td>
          <td className="px-3 py-2">
            <Badge variant="success">LULUS</Badge>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Badge({
  variant,
  children,
}: {
  variant: "success" | "warning" | "danger";
  children: React.ReactNode;
}) {
  const styles = {
    success:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    warning:
      "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    danger:
      "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  };

  const icons = {
    success: <CheckCircle2 className="w-3 h-3" />,
    warning: <AlertCircle className="w-3 h-3" />,
    danger: <XCircle className="w-3 h-3" />,
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium border",
        styles[variant],
      )}
    >
      {icons[variant]}
      {children}
    </span>
  );
}

function CountUp({ to }: { to: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 1500; // 1.5s
    const steps = 60;
    const interval = duration / steps;
    const increment = to / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    // Initial delay to sync with bar animation
    const startDelay = setTimeout(() => {}, 800);

    return () => {
      clearInterval(timer);
      clearTimeout(startDelay);
    };
  }, [to]);

  return <>{count}</>;
}
