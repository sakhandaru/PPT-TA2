"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ClipboardCheck,
  ThumbsUp,
  BarChart3,
  CheckCircle2,
  PieChart as PieChartIcon,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide11_UAT() {
  return (
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden">
      <motion.div
        className="shrink-0 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4 mb-2">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
            <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            User Acceptance Testing (UAT)
          </h2>
        </div>
        <p className="text-xl text-muted-foreground ml-16">
          Evaluasi Kepuasan Pengguna & Validasi Fungsional
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 min-h-0">
        {/* Left Column: Methodology & Results */}
        <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
          {/* Methodology Card */}
          <motion.div
            className="bg-muted/30 border border-border/50 rounded-xl p-5"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3 border-b border-border/50 pb-2">
              <ClipboardCheck className="w-5 h-5 text-purple-500" />
              <h3 className="font-bold text-lg">Metodologi Pengujian</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Users className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <span className="font-semibold text-sm">
                    Responden: 15 Orang
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Tim redaksi & pengguna umum.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <span className="font-semibold text-sm">
                    Skala Likert (1-4)
                  </span>
                  <p className="text-xs text-muted-foreground">
                    1: Sangat Tidak Setuju — 4: Sangat Setuju.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Key Aspects Scores */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Aspek Penilaian Utama
            </h3>

            <ScoreBar
              label="Antarmuka & Navigasi"
              score={3.2}
              max={4}
              delay={0.3}
              color="bg-indigo-500"
            />
            <ScoreBar
              label="Performa & Responsivitas"
              score={3.2}
              max={4}
              delay={0.4}
              color="bg-cyan-500"
            />
            <ScoreBar
              label="Fungsionalitas Sistem"
              score={3.2}
              max={4}
              delay={0.5}
              color="bg-emerald-500"
            />
          </div>

          <motion.div
            className="p-4 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-lg flex gap-3 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
            <p className="text-sm text-blue-800 dark:text-blue-300 font-medium">
              Kesimpulan: Mayoritas pengguna memberikan respon positif dan
              sistem dinilai layak digunakan.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual Charts & Highlights */}
        <div className="flex flex-col gap-6 h-full items-center justify-center">
          {/* Overall Score Highlight (Pie Chart Visualization) */}
          <motion.div
            className="w-full aspect-square max-w-[400px] bg-card border border-border rounded-full p-8 relative flex items-center justify-center shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Simulated Pie Chart Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 p-4"
              viewBox="0 0 100 100"
            >
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/20"
              />
              {/* Progress Circle (approx 80% for 3.18/4) */}
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
                className="text-blue-600 dark:text-blue-500"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0.795 }} // 3.18 / 4 = 0.795
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              />
            </svg>

            {/* Center Content */}
            <div className="flex flex-col items-center text-center z-10">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-1">
                Rata-Rata
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-6xl md:text-7xl font-black text-foreground tracking-tighter">
                  3.18
                </span>
                <span className="text-xl text-muted-foreground font-medium">
                  / 4.00
                </span>
              </div>
              <div className="mt-4 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                <span className="text-sm font-bold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4" /> Kategori: Sangat Setuju
                </span>
              </div>
            </div>

            {/* Decorative particles */}
            <div className="absolute top-10 right-14 text-yellow-500 opacity-80">
              <Star className="w-6 h-6 fill-current animate-pulse" />
            </div>
          </motion.div>

          {/* Table Placeholder Note */}
          <motion.div
            className="w-full max-w-[400px] bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-xl p-4 flex items-center justify-center gap-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <PieChartIcon className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground font-medium">
              Visualisasi dari Tabel 16 (Hasil UAT)
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ScoreBar({
  label,
  score,
  max,
  delay,
  color,
}: {
  label: string;
  score: number;
  max: number;
  delay: number;
  color: string;
}) {
  const percentage = (score / max) * 100;

  return (
    <motion.div
      className="space-y-2"
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="font-bold tabular-nums">{score.toFixed(2)}</span>
      </div>
      <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", color)}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
        />
      </div>
    </motion.div>
  );
}
