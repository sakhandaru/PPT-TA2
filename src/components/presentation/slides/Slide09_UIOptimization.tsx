"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  Zap,
  FileImage,
  Scissors,
  PackageOpen,
  Component,
  Box,
  FileCode,
  Settings,
  Layout,
  Search,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide09_UIOptimization() {
  return (
    <div className="w-full h-full px-6 pt-6 pb-20 flex flex-col overflow-hidden gap-4">
      <motion.div
        className="shrink-0 mb-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4 mb-2">
          <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full">
            <Palette className="w-8 h-8 text-pink-600 dark:text-pink-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Desain UI & Optimasi Performa
          </h2>
        </div>
        <p className="text-xl text-muted-foreground ml-16">
          Pendekatan{" "}
          <span className="font-semibold text-pink-600 dark:text-pink-400">
            Atomic Design
          </span>{" "}
          & Strategi Optimasi Next.js
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Left Column: Explanations */}
        <div className="flex flex-col gap-4 h-full pr-2">
          {/* Design System Section */}
          <DetailSection
            title="Desain Berbasis Komponen"
            icon={<Component className="w-5 h-5 text-indigo-500" />}
            delay={0.2}
            className="flex-1"
          >
            <ul className="space-y-3 mt-1 flex-1">
              <li className="flex items-start gap-3">
                <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded-md shrink-0 mt-0.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <span className="font-semibold text-base">
                    Atomic Design Hierarchy
                  </span>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Memecah UI kompleks menjadi komponen kecil (Atom &rarr;
                    Organisme). Konsistensi visual & mudah dimaintain.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 bg-cyan-100 dark:bg-cyan-900/50 rounded-md shrink-0 mt-0.5">
                  <Palette className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <span className="font-semibold text-base">
                    Utility-First CSS (Tailwind)
                  </span>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    Styling modern tanpa file CSS manual. Ukuran file akhir
                    sangat kecil (hanya class yang dipakai).
                  </p>
                </div>
              </li>
            </ul>
          </DetailSection>

          {/* Optimization Section */}
          <DetailSection
            title="Optimasi Aset & Berkas"
            icon={<Zap className="w-5 h-5 text-amber-500" />}
            delay={0.3}
            className="flex-1"
          >
            <div className="flex flex-col gap-3 mt-1">
              <OptCard
                icon={<FileImage className="w-4 h-4" />}
                title="Image Optimization"
                desc="Auto-convert ke WebP/AVIF & resize sesuai device. Hemat bandwidth s/d 80%."
                color="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              />
              <OptCard
                icon={<PackageOpen className="w-4 h-4" />}
                title="Code Splitting"
                desc="Load JS hanya yang diperlukan per halaman. Initial load jauh lebih cepat."
                color="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              />
              <OptCard
                icon={<Box className="w-4 h-4" />}
                title="Tree Shaking"
                desc="Eliminasi 'dead code' (kode tak terpakai) untuk bundle size minimal."
                color="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
              />
            </div>
          </DetailSection>
        </div>

        {/* Right Column: Visuals */}
        <div className="flex flex-col gap-4 h-full">
          {/* Atomic Design Animation */}
          <div className="flex-1 bg-muted/20 border border-border rounded-xl p-4 relative overflow-hidden group min-h-0">
            <div className="absolute top-2 left-4 z-10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Atomic Design Hierarchy
              </h4>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <span className="text-[10px] font-mono bg-background/80 backdrop-blur border px-2 py-1 rounded shadow-sm text-foreground">
                Animated
              </span>
            </div>

            <AtomicDesignVisualizer />
          </div>

          {/* Tailwind Pipeline Visualizer (Gambar 10 Replacement) */}
          <motion.div
            className="flex-1 bg-muted/20 border border-border rounded-xl flex flex-col items-center justify-center p-3 relative overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-50 z-20">
              <span className="text-[10px] font-mono border px-1.5 py-0.5 rounded bg-background">
                Fig. 10
              </span>
            </div>

            <TailwindPipelineVisualizer />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function DetailSection({
  title,
  icon,
  children,
  delay,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "flex flex-col gap-2 p-3 bg-card border border-border/50 rounded-xl shadow-sm",
        className,
      )}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div className="flex items-center gap-2 border-b border-border/50 pb-2">
        {icon}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div>{children}</div>
    </motion.div>
  );
}

function OptCard({
  icon,
  title,
  desc,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-muted/30 border border-transparent hover:border-border transition-colors">
      <div className={cn("p-2.5 rounded-md shrink-0", color)}>{icon}</div>
      <div>
        <h4 className="font-bold text-base mb-1.5">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function AtomicDesignVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-4 gap-2">
      <div className="flex-1 grid grid-cols-3 gap-4">
        {/* API: Atoms */}
        <motion.div
          className={cn(
            "flex flex-col gap-2 p-2 rounded-lg border transition-all duration-500",
            activeStep === 0
              ? "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 scale-105 shadow-md z-10"
              : "bg-muted/10 border-transparent opacity-60 scale-95",
          )}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 text-center mb-1">
            Atoms
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <div className="p-1.5 bg-background rounded shadow-sm border">
              <Search className="w-3 h-3 text-muted-foreground" />
            </div>
            <div className="h-6 w-full bg-background rounded border px-2 flex items-center">
              <span className="text-[8px] text-muted-foreground">Input...</span>
            </div>
            <div className="h-6 px-3 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">Button</span>
            </div>
          </div>
        </motion.div>

        {/* API: Molecules */}
        <motion.div
          className={cn(
            "flex flex-col gap-2 p-2 rounded-lg border transition-all duration-500",
            activeStep === 1
              ? "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800 scale-105 shadow-md z-10"
              : "bg-muted/10 border-transparent opacity-60 scale-95",
          )}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 text-center mb-1">
            Molecules
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full bg-background p-2 rounded-lg border shadow-sm flex gap-1 items-center">
              <Search className="w-3 h-3 text-muted-foreground" />
              <div className="h-5 flex-1 bg-muted/20 rounded border border-transparent px-1 flex items-center">
                <span className="text-[8px] text-muted-foreground">
                  Search...
                </span>
              </div>
              <div className="h-5 px-2 bg-blue-500 rounded flex items-center">
                <span className="text-[8px] font-bold text-white">Go</span>
              </div>
            </div>
            <p className="text-[8px] text-center text-muted-foreground mt-2">
              (Search Bar Component)
            </p>
          </div>
        </motion.div>

        {/* API: Organisms */}
        <motion.div
          className={cn(
            "flex flex-col gap-2 p-2 rounded-lg border transition-all duration-500",
            activeStep === 2
              ? "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800 scale-105 shadow-md z-10"
              : "bg-muted/10 border-transparent opacity-60 scale-95",
          )}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 text-center mb-1">
            Organisms
          </div>
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            <div className="w-full bg-background rounded-lg border shadow-sm overflow-hidden">
              {/* Header Organism */}
              <div className="h-8 border-b flex items-center px-2 justify-between bg-muted/10">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20" />
                <div className="flex gap-1">
                  <div className="w-8 h-1.5 rounded-full bg-muted" />
                  <div className="w-8 h-1.5 rounded-full bg-muted" />
                </div>
              </div>
              <div className="p-2 gap-2 flex flex-col">
                <div className="w-full h-8 bg-muted/10 rounded border border-dashed flex items-center justify-center">
                  <span className="text-[8px] text-muted-foreground">
                    Search Molecule
                  </span>
                </div>
                <div className="w-full h-12 bg-muted/5 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Flow Indicator with Active State */}
      <div className="flex items-center justify-center gap-2 text-[9px] text-muted-foreground mt-1">
        <span
          className={cn(
            "font-medium transition-colors",
            activeStep === 0 && "text-blue-600 font-bold",
          )}
        >
          Komponen Kecil
        </span>
        <ArrowRight
          className={cn(
            "w-3 h-3 transition-opacity",
            activeStep === 0 ? "opacity-100" : "opacity-30",
          )}
        />
        <span
          className={cn(
            "font-medium transition-colors",
            activeStep === 1 && "text-indigo-600 font-bold",
          )}
        >
          Komponen Sedang
        </span>
        <ArrowRight
          className={cn(
            "w-3 h-3 transition-opacity",
            activeStep === 1 ? "opacity-100" : "opacity-30",
          )}
        />
        <span
          className={cn(
            "font-medium transition-colors",
            activeStep === 2 && "text-emerald-600 font-bold",
          )}
        >
          Fitur Utuh
        </span>
      </div>
    </div>
  );
}

function TailwindPipelineVisualizer() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2">
      <div className="mb-6 w-full text-center">
        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80 border-b border-border/50 pb-2 inline-block px-4">
          Tailwind CSS Processing Pipeline
        </h4>
      </div>

      <div className="w-full max-w-md flex items-center justify-between relative">
        {/* Step 1: Config */}
        <PipelineNode
          icon={<Settings className="w-4 h-4 text-cyan-500" />}
          label="Config"
          subLabel="tailwind.config.js"
          color="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-900/20"
          delay={0}
        />

        {/* Arrow 1 */}
        <PipelineConnector delay={0.5} />

        {/* Step 2: Build */}
        <PipelineNode
          icon={<Zap className="w-4 h-4 text-pink-500" />}
          label="Build"
          subLabel="PostCSS"
          color="border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-900/20"
          delay={1}
        />

        {/* Arrow 2 */}
        <PipelineConnector delay={1.5} />

        {/* Step 3: Output */}
        <PipelineNode
          icon={<FileCode className="w-4 h-4 text-emerald-500" />}
          label="Output"
          subLabel="Optimized CSS"
          color="border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20"
          delay={2}
        />

        {/* Arrow 3 */}
        <PipelineConnector delay={2.5} />

        {/* Step 4: Next.js */}
        <PipelineNode
          icon={<Layout className="w-4 h-4 text-indigo-500" />}
          label="Next.js"
          subLabel="Pages & Layouts"
          color="border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-900/20"
          delay={3}
        />
      </div>

      <div className="w-full max-w-md mt-6 px-4">
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-pink-500 to-indigo-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[9px] text-muted-foreground font-mono uppercase tracking-wider">
          <span>Scan Sources</span>
          <span>Generate Classes</span>
          <span>Purge Unused</span>
          <span>Inject</span>
        </div>
      </div>
    </div>
  );
}

function PipelineNode({ icon, label, subLabel, color, delay }: any) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center w-20 h-20 rounded-xl border-2 shadow-sm relative z-10",
        color,
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-1 p-1.5 bg-background rounded-full shadow-sm">
        {icon}
      </div>
      <span className="text-[10px] font-bold text-foreground">{label}</span>
      <span className="text-[8px] text-muted-foreground text-center leading-tight px-1">
        {subLabel}
      </span>
    </motion.div>
  );
}

function PipelineConnector({ delay }: { delay: number }) {
  return (
    <motion.div
      className="flex-1 h-0.5 bg-border mx-2 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-foreground/50"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay }}
      />
    </motion.div>
  );
}

function Label({
  text,
  pos,
  color = "text-muted-foreground",
}: {
  text: string;
  pos: "top" | "bottom";
  color?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "absolute whitespace-nowrap text-[9px] font-bold uppercase tracking-wider bg-background/90 px-1.5 py-0.5 rounded border shadow-sm",
        pos === "top"
          ? "-top-6 left-1/2 -translate-x-1/2"
          : "-bottom-6 left-1/2 -translate-x-1/2",
        color,
      )}
    >
      {text}
    </motion.span>
  );
}

function StepDot({
  active,
  label,
  color,
}: {
  active: boolean;
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 transition-all duration-300">
      <div
        className={cn(
          "w-3 h-3 rounded-full transition-all duration-300 border-2",
          active
            ? `${color} border-transparent scale-125`
            : "bg-transparent border-muted-foreground/30",
        )}
      />
      <span
        className={cn(
          "text-[9px] uppercase font-bold transition-colors duration-300",
          active ? "text-foreground" : "text-muted-foreground/50",
        )}
      >
        {label}
      </span>
    </div>
  );
}
