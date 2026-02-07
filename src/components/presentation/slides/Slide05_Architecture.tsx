"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Database,
  Monitor,
  Cpu,
  Network,
  ArrowRight,
  Split,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide05_Architecture() {
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
            <Network className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Arsitektur Sistem Usulan
          </h2>
        </div>
        <p className="text-xl text-muted-foreground ml-16">
          Implementasi{" "}
          <span className="font-semibold text-foreground">
            Layered Architecture
          </span>{" "}
          & Pola Aliran Data
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 min-h-0">
        {/* Left Column: Layers & Advantages */}
        <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
          {/* Layered Architecture Section */}
          <motion.div
            className="space-y-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold">Pemisahan Lapisan (Layered)</h3>
            </div>

            <div className="grid gap-3">
              <LayerCard
                title="Presentation Layer"
                icon={<Monitor className="w-5 h-5 text-indigo-500" />}
                desc="Antarmuka pengguna (Berita, Jadwal, Live)."
                bgClass="bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-900/50"
              />
              <LayerCard
                title="Logic / State Layer"
                icon={<Cpu className="w-5 h-5 text-orange-500" />}
                desc="React Query (Server State) & Zustand (Client State)."
                bgClass="bg-orange-50/50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900/50"
              />
              <LayerCard
                title="Data Layer"
                icon={<Database className="w-5 h-5 text-emerald-500" />}
                desc="Integrasi API eksternal TVKU (Real-time data)."
                bgClass="bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50"
              />
            </div>
          </motion.div>

          {/* Key Advantages Section */}
          <motion.div
            className="pt-4 border-t border-border"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Workflow className="w-5 h-5 text-purple-500" />
              <h3 className="text-xl font-bold">Keunggulan Arsitektur</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdvantageCard
                title="Decoupling"
                desc="Pemisahan tegas logika bisnis dari tampilan UI."
                icon={<Split className="w-5 h-5" />}
              />
              <AdvantageCard
                title="Efficient Data Flow"
                desc="Aliran data satu arah (traceability tinggi)."
                icon={<ArrowRight className="w-5 h-5" />}
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Placeholders */}
        <div className="flex flex-col gap-6 h-full">
          {/* Placeholder: Struktur Arsitektur Umum (Gambar 16) */}
          <motion.div
            className="flex-1 bg-muted/40 border-2 border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center justify-center p-6 relative group overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <Layers className="w-12 h-12 text-muted-foreground/50 mb-3 group-hover:scale-110 transition-transform duration-500" />
            <p className="text-center font-semibold text-muted-foreground">
              [Placeholder Gambar 16]
            </p>
            <p className="text-center text-sm text-muted-foreground/70">
              Struktur Arsitektur Umum Sistem Frontend
            </p>
            <div className="mt-4 px-4 py-1.5 bg-background/80 backdrop-blur text-xs font-mono rounded-full border shadow-sm">
              Drag & Drop Image Here
            </div>
          </motion.div>

          {/* Placeholder: Pola Aliran Data (Gambar 7) */}
          <motion.div
            className="flex-1 bg-muted/40 border-2 border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center justify-center p-6 relative group overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5" />
            <Workflow className="w-12 h-12 text-muted-foreground/50 mb-3 group-hover:scale-110 transition-transform duration-500" />
            <p className="text-center font-semibold text-muted-foreground">
              [Placeholder Gambar 7]
            </p>
            <p className="text-center text-sm text-muted-foreground/70">
              Pola Aliran Data Berbasis Komponen
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function LayerCard({
  title,
  desc,
  icon,
  bgClass,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  bgClass?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center p-4 rounded-xl border transition-all hover:shadow-sm",
        bgClass,
      )}
    >
      <div className="flex items-center justify-center w-10 h-10 bg-background rounded-lg mr-4 shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-foreground font-lg">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function AdvantageCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="p-4 rounded-xl bg-card border border-border hover:bg-accent/50 transition-colors">
      <div className="flex items-center gap-2 mb-2 text-primary font-bold">
        {icon}
        <h4>{title}</h4>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
