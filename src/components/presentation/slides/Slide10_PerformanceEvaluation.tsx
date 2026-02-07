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
  TableProperties,
  ArrowRight,
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
              before="4.2s"
              after="1.2s"
              improvement="71%"
              icon={<Timer className="w-4 h-4" />}
              delay={0.2}
            />
            <MetricComparison
              label="First Input Delay (FID)"
              before="150ms"
              after="12ms"
              improvement="92%"
              icon={<MousePointerClick className="w-4 h-4" />}
              delay={0.3}
            />
            <MetricComparison
              label="Cumulative Layout Shift (CLS)"
              before="0.25"
              after="0.01"
              improvement="96%"
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
              <div className="flex flex-col items-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/50 w-full">
                <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase">
                  Sebelum
                </span>
                <span className="text-3xl font-black text-red-600 dark:text-red-400">
                  45
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground shrink-0" />
              <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/50 w-full">
                <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">
                  Sesudah
                </span>
                <span className="text-3xl font-black text-green-600 dark:text-green-400">
                  98
                </span>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Peningkatan signifikan sebesar <strong>+53 Poin</strong>.
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
          {/* Chart Visualization (LCP Reduction) */}
          <motion.div
            className="flex-1 bg-card border border-border rounded-2xl p-6 relative overflow-hidden flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Optimasi LCP (Detik)
            </h4>

            <div className="flex-1 flex items-end justify-center gap-8 md:gap-16 pb-2">
              {/* Before Bar */}
              <div className="flex flex-col items-center gap-2 w-24">
                <motion.div
                  className="w-full bg-red-500 rounded-t-lg relative group"
                  initial={{ height: 0 }}
                  animate={{ height: "80%" }}
                  transition={{ delay: 0.5, duration: 1, type: "spring" }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-red-600">
                    4.2s
                  </span>
                </motion.div>
                <span className="text-xs font-bold text-muted-foreground uppercase">
                  Sebelum
                </span>
              </div>

              {/* After Bar */}
              <div className="flex flex-col items-center gap-2 w-24">
                <motion.div
                  className="w-full bg-green-500 rounded-t-lg relative"
                  initial={{ height: 0 }}
                  animate={{ height: "20%" }} // Proportional to 1.2s vs 4.2s approx
                  transition={{ delay: 0.7, duration: 1, type: "spring" }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-green-600">
                    1.2s
                  </span>
                </motion.div>
                <span className="text-xs font-bold text-muted-foreground uppercase">
                  Sesudah
                </span>
              </div>
            </div>
            <div className="h-px bg-border w-full" />
          </motion.div>

          {/* Placeholder: Tabel 15 (Metrics Table) */}
          <motion.div
            className="flex-[0.8] bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden group"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-50">
              <span className="text-[10px] font-mono border px-1.5 py-0.5 rounded bg-background">
                Table 15
              </span>
            </div>
            <TableProperties className="w-10 h-10 text-muted-foreground/50 mb-3 group-hover:scale-110 transition-transform duration-500" />
            <p className="text-center font-semibold text-muted-foreground">
              [Placeholder Tabel 15]
            </p>
            <p className="text-center text-sm text-muted-foreground/70">
              Metrik Performa Lighthouse (Detil)
            </p>
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
