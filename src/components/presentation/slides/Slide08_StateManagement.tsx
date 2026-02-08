"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Server,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide08_StateManagement() {
  return (
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden">
      <motion.div
        className="shrink-0 mb-4"
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Left Column: Technology Details */}
        <div className="flex flex-col space-y-4 overflow-y-auto pr-2">
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

        {/* Right Column: Explanations & Reasons */}
        <div className="flex flex-col gap-4 h-full overflow-y-auto pr-2">
          {/* Why React Query? */}
          <motion.div
            className="bg-card border border-red-200 dark:border-red-900/30 rounded-2xl p-5 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Server className="w-24 h-24 text-red-500" />
            </div>

            <h3 className="font-bold text-lg text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
              Mengapa React Query?
            </h3>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm mb-1 text-foreground">
                  Masalah yang Diselesaikan
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Managing server state secara manual (dengan{" "}
                  <code>useEffect</code>) sangat rawan bug: race conditions,
                  caching yang tidak konsisten, dan boilerplate yang repetitif.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-1 text-foreground">
                  Kelebihan Utama
                </h4>
                <ul className="grid grid-cols-1 gap-1.5">
                  <ReasonItem
                    title="Automatic Background Refetching"
                    desc="Data selalu fresh tanpa user perlu refresh halaman manual (SWR strategy)."
                  />
                  <ReasonItem
                    title="Smart Caching & Deduping"
                    desc="Mencegah request redundant ke server, menghemat bandwidth."
                  />
                  <ReasonItem
                    title="Simplified Async Logic"
                    desc="Menggantikan ratusan baris kode <code>useEffect</code> & <code>useState</code> menjadi hook deklaratif."
                  />
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Why Zustand? */}
          <motion.div
            className="bg-card border border-yellow-200 dark:border-yellow-900/30 rounded-2xl p-5 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <MonitorSmartphone className="w-24 h-24 text-yellow-500" />
            </div>

            <h3 className="font-bold text-lg text-yellow-600 dark:text-yellow-400 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-yellow-500 rounded-full"></div>
              Mengapa Zustand?
            </h3>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm mb-1 text-foreground">
                  Masalah yang Diselesaikan
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Redux memerlukan boilerplate yang besar (store, reducer,
                  action). Context API sering menyebabkan *unnecessary
                  re-renders* pada komponen child.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-1 text-foreground">
                  Kelebihan Utama
                </h4>
                <ul className="grid grid-cols-1 gap-1.5">
                  <ReasonItem
                    title="Minimalist API"
                    desc="Sangat mudah dipahami. Tanpa provider wrapping yang rumit."
                  />
                  <ReasonItem
                    title="Performance Optimization"
                    desc="Komponen hanya me-render ulang jika spefisik *slice* state berubah."
                  />
                  <ReasonItem
                    title="Transient Updates"
                    desc="Update state tanpa re-render (berguna untuk animasi/input frekuensi tinggi)."
                  />
                </ul>
              </div>
            </div>
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

function ReasonItem({ title, desc }: { title: string; desc: string }) {
  return (
    <li className="flex flex-col gap-0.5 p-2 rounded hover:bg-muted/50 transition-colors">
      <span className="text-xs font-bold text-foreground">{title}</span>
      <span className="text-[10px] text-muted-foreground leading-tight">
        {desc}
      </span>
    </li>
  );
}
