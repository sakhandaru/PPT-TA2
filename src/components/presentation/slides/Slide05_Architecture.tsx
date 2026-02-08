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
  Users,
  Cloud,
  Server,
  Smartphone,
  PlayCircle,
  Zap,
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
            className="pt-4 border-t border-border"
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
                desc="Perubahan di satu layer tidak merusak layer lain (Decoupling)."
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
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-muted/40 border-2 border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
              <Layers className="w-12 h-12 text-muted-foreground/50 mb-3" />
              <p className="font-semibold text-muted-foreground">
                Struktur Arsitektur Umum
              </p>
              <span className="text-xs text-muted-foreground/70 mt-2 bg-background/50 px-2 py-1 rounded border shadow-sm">
                Hover to reveal
              </span>
            </div>
            <div className="absolute inset-0 bg-background border border-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 overflow-hidden shadow-xl z-10 flex flex-col">
              <ArchitectureStructureDiagram />
            </div>
          </div>

          {/* Data Flow Card */}
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-muted/40 border-2 border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center justify-center p-6 transition-opacity duration-300 group-hover:opacity-0">
              <Workflow className="w-12 h-12 text-muted-foreground/50 mb-3" />
              <p className="font-semibold text-muted-foreground">
                Pola Aliran Data
              </p>
              <span className="text-xs text-muted-foreground/70 mt-2 bg-background/50 px-2 py-1 rounded border shadow-sm">
                Hover to reveal
              </span>
            </div>
            <div className="absolute inset-0 bg-background border border-border rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 overflow-hidden shadow-xl z-10 flex flex-col">
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

function ArchitectureStructureDiagram() {
  return (
    <div className="w-full h-full flex flex-col p-1 gap-1">
      <div className="text-[10px] font-bold text-center text-muted-foreground uppercase tracking-widest mb-1">
        Architecture Layers
      </div>

      {/* UI Layer */}
      <div className="border border-indigo-200 bg-indigo-50/50 dark:bg-indigo-900/20 dark:border-indigo-800 rounded-lg p-2 flex flex-col gap-1 shadow-sm">
        <div className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 text-center">
          UI Layer
        </div>
        <div className="flex justify-center flex-wrap gap-1">
          <Node label="Homepage" color="bg-indigo-100 dark:bg-indigo-800" />
          <Node label="News" color="bg-indigo-100 dark:bg-indigo-800" />
          <Node label="Live" color="bg-indigo-100 dark:bg-indigo-800" />
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center -my-0.5 z-10">
        <ArrowRight className="w-3 h-3 text-muted-foreground rotate-90" />
      </div>

      {/* State Mgmt */}
      <div className="border border-orange-200 bg-orange-50/50 dark:bg-orange-900/20 dark:border-orange-800 rounded-lg p-2 flex flex-col gap-1 shadow-sm">
        <div className="text-[10px] font-bold text-orange-700 dark:text-orange-300 text-center">
          State Management
        </div>
        <div className="flex justify-center gap-2">
          <Node label="Zustand" color="bg-orange-100 dark:bg-orange-800" />
          <Node label="React Query" color="bg-red-100 dark:bg-red-800" />
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex justify-center -my-0.5 z-10">
        <ArrowRight className="w-3 h-3 text-muted-foreground rotate-90" />
      </div>

      {/* Data Source */}
      <div className="border border-emerald-200 bg-emerald-50/50 dark:bg-emerald-900/20 dark:border-emerald-800 rounded-lg p-2 flex-1 shadow-sm">
        <div className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 mb-1 text-center">
          Data Source
        </div>
        <div className="flex justify-center gap-2">
          <Node
            label="REST API"
            icon={<Cloud className="w-3 h-3" />}
            color="bg-emerald-100 dark:bg-emerald-800"
          />
          <Node
            label="Streaming"
            icon={<PlayCircle className="w-3 h-3" />}
            color="bg-emerald-100 dark:bg-emerald-800"
          />
        </div>
      </div>
    </div>
  );
}

function DataFlowDiagram() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-slate-50 dark:bg-slate-900/30 rounded-xl relative">
      <div className="text-[10px] font-bold text-center text-muted-foreground uppercase tracking-widest mb-4">
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
          icon={
            <Smartphone className="w-3 h-3 md:w-4 md:h-4 text-indigo-500" />
          }
          label="UI"
        />
      </div>

      {/* Feedback Loop Visual */}
      <div className="mt-4 flex items-center gap-2 text-[10px] text-muted-foreground border-t border-dashed border-border pt-2 w-full justify-center">
        <ArrowRight className="w-3 h-3 rotate-180" />
        <span>User Interaction triggers State Update</span>
      </div>
    </div>
  );
}

function Node({ label, icon, color = "bg-background" }: any) {
  return (
    <div
      className={`${color} px-2 py-1 rounded-md shadow-sm border border-black/5 dark:border-white/5 flex items-center justify-center gap-1.5 min-w-[60px]`}
    >
      {icon}
      <span className="text-[9px] md:text-[10px] font-medium text-foreground">
        {label}
      </span>
    </div>
  );
}

function FlowStep({ icon, label }: any) {
  return (
    <div className="flex flex-col items-center gap-1.5 z-10 bg-background p-2 rounded-lg shadow-sm border border-border">
      {icon}
      <span className="text-[8px] font-bold uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
