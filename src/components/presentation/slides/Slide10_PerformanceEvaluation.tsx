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
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden">
      <motion.div
        className="shrink-0 mb-6"
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
        <p className="text-xl text-muted-foreground ml-16">
          Core Web Vitals:{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            High Performance
          </span>{" "}
          & Optimasi Lighthouse
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 min-h-0">
        {/* Left Column: Metrics & Comparison */}
        <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
          {/* Key Metrics Comparison */}
          <div className="space-y-4">
            <MetricComparison
              label="Largest Contentful Paint (LCP)"
              before="19.4s"
              after="1.2s"
              improvement="93.8%"
              icon={<Timer className="w-4 h-4" />}
              delay={0.2}
            />
            <MetricComparison
              label="Total Blocking Time (TBT)"
              before="80ms"
              after="30ms"
              improvement="62.5%"
              icon={<MousePointerClick className="w-4 h-4" />}
              delay={0.3}
            />
            <MetricComparison
              label="Cumulative Layout Shift (CLS)"
              before="0.063"
              after="0.001"
              improvement="98.4%"
              icon={<Layout className="w-4 h-4" />}
              delay={0.4}
            />
          </div>

          {/* Performance Score Card */}
          <motion.div
            className="bg-card border border-border rounded-xl p-5 shadow-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <div>
                <h3 className="font-bold text-lg">
                  Lighthouse Performance Score
                </h3>
                <p className="text-xs text-muted-foreground">
                  Overall Efficiency
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-900/50 w-full">
                <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 uppercase">
                  Sebelum
                </span>
                <span className="text-3xl font-black text-yellow-600 dark:text-yellow-400">
                  62
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground shrink-0" />
              <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/50 w-full">
                <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">
                  Sesudah
                </span>
                <span className="text-3xl font-black text-green-600 dark:text-green-400">
                  93
                </span>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Peningkatan signifikan sebesar <strong>+50%</strong>.
            </p>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            className="p-4 bg-green-50/50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-sm text-green-800 dark:text-green-300 font-medium text-center">
              ✅ Sistem memenuhi standar ideal Core Web Vitals (Good Tier).
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual Charts & Tables */}
        <div className="flex flex-col gap-6 h-full">
          {/* Lighthouse Evidence Image */}
          <motion.div
            className="flex-[0.4] bg-card border border-border rounded-2xl p-4 relative overflow-hidden flex items-center justify-center group"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-muted/10 group-hover:bg-muted/20 transition-colors" />
            <div className="relative w-full h-full min-h-[150px] flex items-center justify-center">
              <img
                src="/lighthousebukti.png"
                alt="Bukti Lighthouse"
                className="w-full h-full object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Hover Caption */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Bukti Audit Lighthouse
            </div>
          </motion.div>

          {/* Table 15 (Metrics Table) */}
          <motion.div
            className="flex-[1.2] bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
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
          <h4 className="font-semibold text-sm text-foreground">{label}</h4>
          <div className="flex items-center gap-2 text-xs mt-0.5">
            <span className="text-red-500 line-through decoration-red-500/50">
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
    <table className="w-full text-xs text-left">
      <thead className="text-[10px] uppercase text-muted-foreground bg-muted/40 font-bold tracking-wider">
        <tr>
          <th className="px-4 py-3">Metrik Performa</th>
          <th className="px-3 py-3">Target Ideal</th>
          <th className="px-3 py-3">
            Sebelum{" "}
            <span className="normal-case font-normal block opacity-70">
              (Refactor)
            </span>
          </th>
          <th className="px-3 py-3">
            Sesudah{" "}
            <span className="normal-case font-normal block opacity-70">
              (Refactor)
            </span>
          </th>
          <th className="px-3 py-3">Peningkatan</th>
          <th className="px-4 py-3">Status Akhir</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border/50">
        {/* LCP Row */}
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="px-4 py-3 font-semibold">LCP</td>
          <td className="px-3 py-3 text-muted-foreground">≤ 2,5 detik</td>
          <td className="px-3 py-3">
            <div className="flex flex-col">
              <span className="font-medium text-red-600 dark:text-red-400">
                19,4 detik
              </span>
              <span className="text-[10px] text-red-600/70">(Buruk)</span>
            </div>
          </td>
          <td className="px-3 py-3">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                1,2 detik
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-3 font-bold text-green-600">Naik 93,8%</td>
          <td className="px-4 py-3">
            <Badge variant="success">Memenuhi standar</Badge>
          </td>
        </tr>

        {/* TBT Row */}
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="px-4 py-3 font-semibold">TBT (Total Blocking)</td>
          <td className="px-3 py-3 text-muted-foreground">≤ 200 ms</td>
          <td className="px-3 py-3">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                80 ms
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-3">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                30 ms
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-3 font-bold text-green-600">Naik 62,5%</td>
          <td className="px-4 py-3">
            <Badge variant="success">Responsif tinggi</Badge>
          </td>
        </tr>

        {/* CLS Row */}
        <tr className="hover:bg-muted/30 transition-colors">
          <td className="px-4 py-3 font-semibold">CLS</td>
          <td className="px-3 py-3 text-muted-foreground">≤ 0,1</td>
          <td className="px-3 py-3">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                0,063
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-3">
            <div className="flex flex-col">
              <span className="font-medium text-green-600 dark:text-green-400">
                0,001
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-3 font-bold text-green-600">Naik 98,4%</td>
          <td className="px-4 py-3">
            <Badge variant="success">Stabil secara visual</Badge>
          </td>
        </tr>

        {/* Score Row */}
        <tr className="bg-primary/5 hover:bg-primary/10 transition-colors border-t-2 border-primary/20">
          <td className="px-4 py-3 font-bold text-primary">
            Performance Score
          </td>
          <td className="px-3 py-3 text-muted-foreground">≥ 90</td>
          <td className="px-3 py-3">
            <div className="flex flex-col">
              <span className="font-bold text-yellow-600 dark:text-yellow-400">
                62 / 100
              </span>
              <span className="text-[10px] text-yellow-600/70">
                (Perlu Perbaikan)
              </span>
            </div>
          </td>
          <td className="px-3 py-3">
            <div className="flex flex-col">
              <span className="font-bold text-green-600 dark:text-green-400">
                93 / 100
              </span>
              <span className="text-[10px] text-green-600/70">(Baik)</span>
            </div>
          </td>
          <td className="px-3 py-3 font-black text-green-600 text-sm">
            Naik 50%
          </td>
          <td className="px-4 py-3">
            <div className="flex items-center gap-1.5 text-green-700 dark:text-green-400 font-bold uppercase text-[9px] tracking-wider bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded-md border border-green-200 dark:border-green-800">
              <Trophy className="w-3 h-3" />
              Kelas performa tinggi
            </div>
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
