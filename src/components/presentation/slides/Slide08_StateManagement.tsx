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
          Pemisahan Data:{" "}
          <span className="font-semibold text-red-500">Data Server (API)</span>{" "}
          &{" "}
          <span className="font-semibold text-yellow-500">
            Data Aplikasi (Lokal)
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 flex-1 min-h-0">
        {/* Left Column: State Management Visual Configuration */}
        <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900/30 rounded-2xl p-6 relative overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-800/20 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Data Flow Architecture
            </h3>

            <StateManagementIllustration />
          </div>
        </div>

        {/* Right Column: Explanations & Reasons */}
        <div className="flex flex-col gap-4 h-full pr-2">
          {/* Why React Query? */}
          <motion.div
            className="flex-1 bg-card border border-red-200 dark:border-red-900/30 rounded-2xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow flex flex-col"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <Server className="w-24 h-24 text-red-500" />
            </div>

            <h3 className="font-bold text-lg text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-red-500 rounded-full"></div>
              Manajemen Data Server (React Query)
            </h3>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-base mb-1 text-foreground">
                  Masalah yang Diselesaikan
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mengambil data dari server secara manual seringkali{" "}
                  <strong>lambat</strong>, <strong>rawan error</strong>, dan
                  membuat kode menjadi <strong>rumit</strong>.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base mb-1 text-foreground">
                  Kelebihan Utama
                </h4>
                <ul className="grid grid-cols-1 gap-1.5">
                  <ReasonItem
                    title="Otomatis Selalu Update"
                    desc="Data selalu terbaru. Pengguna tidak perlu refresh halaman manual untuk melihat info terkini."
                  />
                  <ReasonItem
                    title="Akses Cepat & Hemat Kuota"
                    desc="Menyimpan data sementara (cache) agar tidak perlu download ulang berulang kali."
                  />
                  <ReasonItem
                    title="Kode Lebih Rapi & Stabil"
                    desc="Mencegah bug dan error dengan menyederhanakan proses pengambilan data yang rumit."
                  />
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Why Zustand? */}
          <motion.div
            className="flex-1 bg-card border border-yellow-200 dark:border-yellow-900/30 rounded-2xl p-6 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow flex flex-col"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <MonitorSmartphone className="w-24 h-24 text-yellow-500" />
            </div>

            <h3 className="font-bold text-lg text-yellow-600 dark:text-yellow-400 mb-3 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-yellow-500 rounded-full"></div>
              Manajemen Data Aplikasi (Zustand)
            </h3>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-base mb-1 text-foreground">
                  Masalah yang Diselesaikan
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Metode lama (seperti Redux) seringkali{" "}
                  <strong>terlalu rumit</strong> dan membuat aplikasi terasa{" "}
                  <strong>berat</strong> saat digunakan.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-base mb-1 text-foreground">
                  Kelebihan Utama
                </h4>
                <ul className="grid grid-cols-1 gap-1.5">
                  <ReasonItem
                    title="Sangat Ringan"
                    desc="Ukuran pustaka sangat kecil, tidak memperlambat loading aplikasi sama sekali."
                  />
                  <ReasonItem
                    title="Kinerja Tinggi (Responsif)"
                    desc="Hanya memperbarui bagian layar yang berubah, membuat aplikasi terasa instan."
                  />
                  <ReasonItem
                    title="Interaksi Mulus"
                    desc="Cocok untuk fitur interaktif yang butuh kecepatan tinggi tanpa jeda (lag)."
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

function StateManagementIllustration() {
  return (
    <div className="w-full max-w-sm relative flex flex-col gap-6 p-4">
      {/* Server & Network Layer */}
      <div className="flex items-center justify-between gap-4">
        <ServerNode />
        <ConnectionLine active />
        <QueryNode />
      </div>

      {/* Connection to UI */}
      <div className="flex justify-center h-8">
        <motion.div
          className="w-0.5 bg-gradient-to-b from-red-500 to-indigo-500"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* UI & Client State Layer */}
      <div className="flex items-center justify-between gap-4">
        <ZustandNode />
        <ConnectionLine active color="bg-yellow-500" />
        <UINode />
      </div>
    </div>
  );
}

function ServerNode() {
  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700 shadow-sm relative w-24">
      <div className="absolute -top-2 px-2 py-0.5 bg-slate-600 text-white text-[9px] rounded-full font-bold">
        API
      </div>
      <Server className="w-6 h-6 text-slate-600 dark:text-slate-400" />
      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400">
        Server
      </span>
    </div>
  );
}

function QueryNode() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800 shadow-sm relative w-24"
      animate={{
        boxShadow: [
          "0 0 0px rgba(239, 68, 68, 0)",
          "0 0 10px rgba(239, 68, 68, 0.3)",
          "0 0 0px rgba(239, 68, 68, 0)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="absolute -top-2 px-2 py-0.5 bg-red-500 text-white text-[9px] rounded-full font-bold shadow-sm">
        Cache
      </div>
      <Server className="w-6 h-6 text-red-500" />
      <span className="text-[10px] font-bold text-red-600 dark:text-red-400">
        React Query
      </span>
    </motion.div>
  );
}

function ZustandNode() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800 shadow-sm relative w-24"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <div className="absolute -top-2 px-2 py-0.5 bg-yellow-500 text-white text-[9px] rounded-full font-bold shadow-sm">
        Store
      </div>
      <MonitorSmartphone className="w-6 h-6 text-yellow-500" />
      <span className="text-[10px] font-bold text-yellow-600 dark:text-yellow-400">
        Zustand
      </span>
    </motion.div>
  );
}

function UINode() {
  return (
    <div className="flex flex-col items-center gap-2 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800 shadow-sm relative w-24">
      <div className="absolute -top-2 px-2 py-0.5 bg-indigo-500 text-white text-[9px] rounded-full font-bold shadow-sm">
        View
      </div>
      <CheckCircle2 className="w-6 h-6 text-indigo-500" />
      <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
        Component
      </span>
    </div>
  );
}

function ConnectionLine({
  active,
  color = "bg-red-500",
}: {
  active?: boolean;
  color?: string;
}) {
  return (
    <div className="flex-1 h-0.5 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
      {active && (
        <motion.div
          className={`absolute inset-0 w-1/2 ${color}`}
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      )}
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
          "text-base",
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
