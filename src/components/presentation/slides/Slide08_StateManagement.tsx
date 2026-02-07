"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Zap,
  RefreshCw,
  Layout,
  ArrowRightLeft,
  Server,
  MonitorSmartphone,
  CheckCircle2,
  TableProperties,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide08_StateManagement() {
  return (
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden">
      <motion.div
        className="shrink-0 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4 mb-2">
          <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 rounded-full">
            <ArrowRightLeft className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Strategi State Management
          </h2>
        </div>
        <p className="text-xl text-muted-foreground ml-16">
          Pemisahan tanggung jawab:{" "}
          <span className="font-semibold text-red-500">Server State</span> vs{" "}
          <span className="font-semibold text-yellow-500">Client State</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 min-h-0">
        {/* Left Column: Technology Details */}
        <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
          {/* React Query Section */}
          <motion.div
            className="bg-card border border-red-200 dark:border-red-900/30 rounded-2xl p-5 shadow-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-3 border-b border-red-100 dark:border-red-900/30 pb-3">
              <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg text-red-600 dark:text-red-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-red-700 dark:text-red-400">
                  Server State (React Query)
                </h3>
                <p className="text-xs text-muted-foreground">
                  Synchronized Data
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <FeatureItem text="Sinkronisasi data API secara deklaratif." />
              <FeatureItem text="Caching otomatis & Background updates." />
              <FeatureItem text="Mengurangi beban network request." />
            </ul>
          </motion.div>

          {/* Zustand Section */}
          <motion.div
            className="bg-card border border-yellow-200 dark:border-yellow-900/30 rounded-2xl p-5 shadow-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3 border-b border-yellow-100 dark:border-yellow-900/30 pb-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg text-yellow-600 dark:text-yellow-400">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-yellow-700 dark:text-yellow-400">
                  Client State (Zustand)
                </h3>
                <p className="text-xs text-muted-foreground">
                  UI Interaction State
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <FeatureItem text="Manajemen status UI internal (Nav, Modal)." />
              <FeatureItem text="Ringan & Tanpa Boilerplate" highlight />
              <FeatureItem text="Eliminasi Prop Drilling via Hooks." />
            </ul>
          </motion.div>

          {/* Result Summary */}
          <motion.div
            className="bg-muted/50 rounded-xl p-4 border border-border"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm font-medium text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Hasil: Stabilitas sinkronisasi & Keterlacakan data meningkat.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual Placeholders */}
        <div className="flex flex-col gap-6 h-full">
          {/* Placeholder: Pola Aliran Data (Gambar 7) */}
          <motion.div
            className="flex-[1.2] bg-muted/40 border-2 border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center justify-center p-6 relative group overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-50">
              <span className="text-[10px] font-mono border px-1.5 py-0.5 rounded bg-background">
                Fig. 7
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
            <ArrowRightLeft className="w-12 h-12 text-muted-foreground/50 mb-3 group-hover:scale-110 transition-transform duration-500" />
            <p className="text-center font-semibold text-muted-foreground">
              [Placeholder Gambar 7]
            </p>
            <p className="text-center text-sm text-muted-foreground/70">
              Pola Aliran Data Berbasis Komponen
            </p>
          </motion.div>

          {/* Placeholder: Tabel Perbandingan (Tabel 4) */}
          <motion.div
            className="flex-1 bg-muted/40 border-2 border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center justify-center p-6 relative group overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-50">
              <span className="text-[10px] font-mono border px-1.5 py-0.5 rounded bg-background">
                Table 4
              </span>
            </div>
            <TableProperties className="w-10 h-10 text-muted-foreground/50 mb-3 group-hover:scale-110 transition-transform duration-500" />
            <p className="text-center font-semibold text-muted-foreground">
              [Placeholder Tabel 4]
            </p>
            <p className="text-center text-sm text-muted-foreground/70">
              Perbandingan Teknologi Pengelolaan Data
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  text,
  highlight,
}: {
  text: string;
  highlight?: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
      <span
        className={cn(
          "text-sm",
          highlight ? "font-semibold text-foreground" : "text-muted-foreground",
        )}
      >
        {text}
      </span>
    </li>
  );
}
