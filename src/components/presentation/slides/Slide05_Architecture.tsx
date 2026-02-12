"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Database,
  Monitor,
  Cpu,
  Network,
  ArrowRight,
  Split,
  Workflow,
  Cloud,
  PlayCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide05_Architecture() {
  return (
    <div className="w-full h-full px-8 pt-8 pb-16 md:px-12 md:pt-12 md:pb-16 flex flex-col overflow-hidden">
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
        <div className="flex flex-col gap-6 h-full pr-2">
          {/* Layered Architecture Section */}
          <motion.div
            className="flex-1 bg-card border border-border rounded-2xl p-6 relative overflow-hidden flex flex-col"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold">Pemisahan Lapisan (Layered)</h3>
            </div>

            <div className="grid gap-3 flex-1">
              <LayerCard
                title="Presentation Layer"
                icon={<Monitor className="w-5 h-5 text-indigo-500" />}
                desc="Antarmuka Pengguna (Fokus UX & Interaksi)."
                bgClass="bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-900/50"
              />
              <LayerCard
                title="Logic / State Layer"
                icon={<Cpu className="w-5 h-5 text-orange-500" />}
                desc="Pusat Aturan Bisnis & Logika (Terisolasi dari UI)."
                bgClass="bg-orange-50/50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900/50"
              />
              <LayerCard
                title="Data Layer"
                icon={<Database className="w-5 h-5 text-emerald-500" />}
                desc="Konsistensi Data Pusat (Single Source of Truth)."
                bgClass="bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/50"
              />
            </div>
          </motion.div>

          {/* Key Advantages Section */}
          <motion.div
            className="flexd-0 bg-card border border-border rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Workflow className="w-5 h-5 text-purple-500" />
              <h3 className="text-xl font-bold">Keunggulan Strategis</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AdvantageCard
                title="Low Risk Updates"
                desc="Perubahan di satu layer tidak merusak layer lain."
                icon={<Split className="w-5 h-5" />}
              />
              <AdvantageCard
                title="Faster Debugging"
                desc="Aliran data terprediksi mempercepat perbaikan bug."
                icon={<ArrowRight className="w-5 h-5" />}
              />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Diagrams - Span 2 */}
        <div className="flex flex-col gap-6 h-full">
          {/* Architecture Structure Card */}
          <div className="flex-1 relative bg-background border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col hover:border-blue-500/30 transition-colors group">
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center gap-2 px-2 py-1 bg-muted/50 backdrop-blur-sm rounded-md border border-border/50">
                <Layers className="w-3 h-3 text-blue-500" />
                <span className="text-xs uppercase font-bold text-muted-foreground tracking-wider">
                  Structure
                </span>
              </div>
            </div>
            <div className="w-full h-full p-4 pt-10 flex">
              <ArchitectureStructureDiagram />
            </div>
          </div>

          {/* Data Flow Card */}
          <div className="flex-1 relative bg-background border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col hover:border-purple-500/30 transition-colors group">
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center gap-2 px-2 py-1 bg-muted/50 backdrop-blur-sm rounded-md border border-border/50">
                <Workflow className="w-3 h-3 text-purple-500" />
                <span className="text-xs uppercase font-bold text-muted-foreground tracking-wider">
                  Data Flow
                </span>
              </div>
            </div>
            <div className="w-full h-full p-4 pt-8">
              <DataFlowDiagram />
            </div>
          </div>
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
        <h4 className="font-bold text-foreground text-xl">{title}</h4>
        <p className="text-base text-muted-foreground">{desc}</p>
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
      <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function ArchitectureStructureDiagram() {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 3);
    }, 2000); // Slower interval for better readability
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-between relative py-2 gap-2">
      {/* 1. Presentation Layer (Top) */}
      <motion.div
        className={cn(
          "flex-1 border-2 rounded-xl p-3 flex flex-col justify-center transition-all duration-500 relative",
          activeLayer === 0
            ? "border-indigo-500 bg-indigo-50/80 dark:bg-indigo-900/20 shadow-lg z-10"
            : "border-border bg-background/50 opacity-60 grayscale-[0.5]",
        )}
        animate={{
          scale: activeLayer === 0 ? 1.02 : 1,
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2 shrink-0">
              <Monitor className="w-4 h-4" />
              Presentation
            </div>
            <div className="flex gap-2">
              <Node
                label="Homepage"
                isActive={activeLayer === 0}
                color="bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100"
              />
              <Node
                label="News"
                isActive={activeLayer === 0}
                color="bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100"
              />
            </div>
          </div>

          {activeLayer === 0 && (
            <motion.span
              layoutId="badge"
              className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full font-bold shadow-sm shrink-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Active
            </motion.span>
          )}
        </div>

        {/* Connector Arrow */}
        <div className="absolute -bottom-5 left-8 z-20 text-muted-foreground">
          <ArrowRight className="w-5 h-5 rotate-90" />
        </div>
      </motion.div>

      {/* 2. Logic Layer (Middle) */}
      <motion.div
        className={cn(
          "flex-1 border-2 rounded-xl p-3 flex flex-col justify-center transition-all duration-500 relative",
          activeLayer === 1
            ? "border-orange-500 bg-orange-50/80 dark:bg-orange-900/20 shadow-lg z-10"
            : "border-border bg-background/50 opacity-60 grayscale-[0.5]",
        )}
        animate={{
          scale: activeLayer === 1 ? 1.02 : 1,
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2 shrink-0">
              <Cpu className="w-4 h-4" />
              Logic & State
            </div>
            <div className="flex gap-2">
              <Node
                label="Zustand"
                isActive={activeLayer === 1}
                color="bg-orange-100 dark:bg-orange-800 text-orange-900 dark:text-orange-100"
              />
              <Node
                label="Query"
                isActive={activeLayer === 1}
                color="bg-orange-100 dark:bg-orange-800 text-orange-900 dark:text-orange-100"
              />
            </div>
          </div>

          {activeLayer === 1 && (
            <motion.span
              layoutId="badge"
              className="text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full font-bold shadow-sm shrink-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Active
            </motion.span>
          )}
        </div>

        {/* Connector Arrow */}
        <div className="absolute -bottom-5 left-8 z-20 text-muted-foreground">
          <ArrowRight className="w-5 h-5 rotate-90" />
        </div>
      </motion.div>

      {/* 3. Data Layer (Bottom) */}
      <motion.div
        className={cn(
          "flex-1 border-2 rounded-xl p-3 flex flex-col justify-center transition-all duration-500 relative",
          activeLayer === 2
            ? "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-900/20 shadow-lg z-10"
            : "border-border bg-background/50 opacity-60 grayscale-[0.5]",
        )}
        animate={{
          scale: activeLayer === 2 ? 1.02 : 1,
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2 shrink-0">
              <Database className="w-4 h-4" />
              Data
            </div>
            <div className="flex gap-2">
              <Node
                label="API"
                icon={<Cloud className="w-3 h-3" />}
                isActive={activeLayer === 2}
                color="bg-emerald-100 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100"
              />
              <Node
                label="Stream"
                icon={<PlayCircle className="w-3 h-3" />}
                isActive={activeLayer === 2}
                color="bg-emerald-100 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100"
              />
            </div>
          </div>

          {activeLayer === 2 && (
            <motion.span
              layoutId="badge"
              className="text-[10px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold shadow-sm shrink-0"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Active
            </motion.span>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function DataFlowDiagram() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-slate-50 dark:bg-slate-900/30 rounded-xl relative">
      <div className="text-xs font-bold text-center text-muted-foreground uppercase tracking-widest mb-4">
        Unidirectional Flow
      </div>
      <div className="flex items-center gap-1.5 md:gap-3 w-full justify-center">
        {/* Cycle */}
        <FlowStep
          icon={<Cloud className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />}
          label="API"
        />
        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground/50 shrink-0" />
        <FlowStep
          icon={<Database className="w-3 h-3 md:w-4 md:h-4 text-red-500" />}
          label="Cache"
        />
        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground/50 shrink-0" />
        <FlowStep
          icon={<Cpu className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />}
          label="State"
        />
        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-muted-foreground/50 shrink-0" />
        <FlowStep
          icon={<Monitor className="w-3 h-3 md:w-4 md:h-4 text-indigo-500" />}
          label="UI"
        />
      </div>

      {/* Feedback Loop Visual */}
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground border-t border-dashed border-border pt-2 w-full justify-center">
        <ArrowRight className="w-3 h-3 rotate-180" />
        <span>User Interaction triggers State Update</span>
      </div>
    </div>
  );
}

function Node({ label, icon, color, isActive = true }: any) {
  return (
    <div
      className={cn(
        "px-2 py-1 rounded-md shadow-sm border border-black/5 dark:border-white/5 flex items-center justify-center gap-1.5 min-w-[60px] transition-all duration-300",
        isActive
          ? color || "bg-background"
          : "bg-muted text-muted-foreground opacity-70",
      )}
    >
      {icon}
      <span className="text-[10px] md:text-xs font-medium">{label}</span>
    </div>
  );
}

function FlowStep({ icon, label }: any) {
  return (
    <div className="flex flex-col items-center gap-1.5 z-10 bg-background p-2 rounded-lg shadow-sm border border-border">
      {icon}
      <span className="text-[10px] font-bold uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
