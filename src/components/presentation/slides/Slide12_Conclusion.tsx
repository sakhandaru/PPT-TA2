"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  Trophy,
  ArrowUpRight,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide12_Conclusion() {
  return (
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden">
      <motion.div
        className="shrink-0 mb-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
          Kesimpulan & Saran
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 flex-1 min-h-0 items-center">
        {/* Left Column: Conclusions */}
        <div className="flex flex-col gap-6 h-full justify-center">
          <motion.div
            className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm relative overflow-hidden"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Trophy className="w-24 h-24 text-emerald-500" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2.5 rounded-full">
                <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-2xl">Pencapaian Utama</h3>
            </div>

            <ul className="space-y-4">
              <ConclusionItem delay={0.3}>
                Refaktorisasi sukses meningkatkan performa sistem secara{" "}
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  signifikan & terukur
                </span>
                .
              </ConclusionItem>
              <ConclusionItem delay={0.4}>
                Skor Performa melonjak{" "}
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  104.4%
                </span>{" "}
                (45 <ArrowUpRight className="inline w-4 h-4" /> 92).
              </ConclusionItem>
              <ConclusionItem delay={0.5}>
                Perbaikan Core Web Vitals:
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <MetricBadge
                    label="LCP"
                    val="61.9%"
                    color="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  />
                  <MetricBadge
                    label="FID"
                    val="75.0%"
                    color="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                  />
                  <MetricBadge
                    label="CLS"
                    val="80.0%"
                    color="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                  />
                </div>
              </ConclusionItem>
              <ConclusionItem delay={0.6}>
                Sistem kini <span className="font-semibold">Sustainable</span>,{" "}
                <span className="font-semibold">Efisiensi Tinggi</span>, dan
                siap untuk{" "}
                <span className="font-semibold text-emerald-600">
                  Scale Up Bisnis
                </span>{" "}
                di masa depan.
              </ConclusionItem>
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Suggestions */}
        <div className="flex flex-col gap-6 h-full justify-center">
          {/* Suggestions */}
          <motion.div
            className="bg-muted/30 border border-border/50 rounded-2xl p-8"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full">
                <Lightbulb className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="font-bold text-2xl">Saran Pengembangan</h3>
            </div>
            <ul className="space-y-6">
              <SuggestionItem>
                Pemantauan berkala metrik{" "}
                <span className="font-medium text-foreground">
                  Core Web Vitals
                </span>{" "}
                untuk menjaga stabilitas jangka panjang dan pengalaman pengguna
                yang optimal.
              </SuggestionItem>
              <SuggestionItem>
                Fokus pada penyempurnaan{" "}
                <span className="font-medium text-foreground">
                  Static Code Analysis
                </span>{" "}
                (SonarQube/ESLint) untuk standarisasi dan menjaga kualitas kode
                secara otomatis.
              </SuggestionItem>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ConclusionItem({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.li
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <div className="mt-1 bg-emerald-100 dark:bg-emerald-900/50 rounded-full p-0.5 shrink-0">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      </div>
      <div className="text-base text-muted-foreground leading-relaxed">
        {children}
      </div>
    </motion.li>
  );
}

function SuggestionItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4 p-4 bg-background/80 rounded-xl border border-border/50 shadow-sm">
      <div className="mt-0.5 shrink-0">
        <ArrowUpRight className="w-5 h-5 text-yellow-500" />
      </div>
      <p className="text-base text-muted-foreground leading-relaxed">
        {children}
      </p>
    </li>
  );
}

function MetricBadge({
  label,
  val,
  color,
}: {
  label: string;
  val: string;
  color: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-2 rounded-lg border border-transparent",
        color,
      )}
    >
      <span className="text-[10px] font-bold uppercase opacity-70">
        {label}
      </span>
      <span className="text-sm font-black flex items-center gap-0.5">
        <ArrowUpRight className="w-3 h-3" /> {val}
      </span>
    </div>
  );
}
