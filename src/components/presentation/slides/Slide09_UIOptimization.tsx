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
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide09_UIOptimization() {
  return (
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden">
      <motion.div
        className="shrink-0 mb-6"
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 min-h-0">
        {/* Left Column: Explanations */}
        <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
          {/* Design System Section */}
          <DetailSection
            title="Desain Berbasis Komponen"
            icon={<Component className="w-5 h-5 text-indigo-500" />}
            delay={0.2}
          >
            <ul className="space-y-3 mt-1">
              <li className="flex items-start gap-3">
                <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded-md shrink-0 mt-0.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <span className="font-semibold text-sm">Atomic Design</span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Membagi UI menjadi Atoms, Molecules, & Organisms untuk
                    reusability maksimal.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 bg-cyan-100 dark:bg-cyan-900/50 rounded-md shrink-0 mt-0.5">
                  <Palette className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <span className="font-semibold text-sm">
                    Tailwind CSS (Utility-First)
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Styling yang konsisten, modular, dan terprediksi tanpa CSS
                    global yang membengkak.
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
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
              <OptCard
                icon={<Scissors className="w-4 h-4" />}
                title="Purge & JIT"
                desc="Hapus CSS tak terpakai."
                color="bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
              />
              <OptCard
                icon={<FileImage className="w-4 h-4" />}
                title="WebP Images"
                desc="Auto-convert via Next/Image."
                color="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
              />
              <OptCard
                icon={<PackageOpen className="w-4 h-4" />}
                title="Code Splitting"
                desc="Pecah bundle JS per rute."
                color="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              />
              <OptCard
                icon={<Box className="w-4 h-4" />}
                title="Tree Shaking"
                desc="Buang fungsi mati saat build."
                color="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
              />
            </div>
          </DetailSection>
        </div>

        {/* Right Column: Visuals */}
        <div className="flex flex-col gap-6 h-full">
          {/* Atomic Design Animation */}
          <div className="flex-1 bg-muted/20 border border-border rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10">
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
            className="flex-[0.8] bg-muted/20 border border-border rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden"
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
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="flex flex-col gap-3 p-4 bg-card border border-border/50 rounded-xl shadow-sm"
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
    <div className="flex items-start gap-3 p-2 rounded-lg bg-muted/30 border border-transparent hover:border-border transition-colors">
      <div className={cn("p-1.5 rounded-md shrink-0", color)}>{icon}</div>
      <div>
        <h4 className="font-bold text-xs">{title}</h4>
        <p className="text-[10px] text-muted-foreground leading-tight">
          {desc}
        </p>
      </div>
    </div>
  );
}

function AtomicDesignVisualizer() {
  const [step, setStep] = useState(0);

  // Cycle through steps: 0=Atoms, 1=Molecules, 2=Organisms
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3000); // Slower interval for better comprehension
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      {/* Visualization Container */}
      <div className="relative w-full max-w-[280px] h-48 flex items-center justify-center">
        {/* ATOMS LAYER: Individual Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Atom 1: Avatar Image */}
          <motion.div
            className="absolute w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-sm z-20"
            animate={{
              top: step === 0 ? "20%" : step >= 1 ? "30%" : "20%",
              left: step === 0 ? "20%" : step >= 1 ? "15%" : "20%",
              scale: step === 0 ? 1 : 0.8,
            }}
          >
            <div className="w-6 h-6 bg-blue-200 rounded-full opacity-50" />
            {step === 0 && <Label text="Atom (Image)" pos="top" />}
          </motion.div>

          {/* Atom 2: Title Text */}
          <motion.div
            className="absolute w-32 h-4 bg-indigo-500 rounded-md z-20"
            animate={{
              top: step === 0 ? "20%" : step >= 1 ? "30%" : "20%",
              left: step === 0 ? "60%" : step >= 1 ? "35%" : "60%",
              scale: step === 0 ? 1 : 0.8,
            }}
          >
            {step === 0 && <Label text="Atom (Title)" pos="top" />}
          </motion.div>

          {/* Atom 3: Subtitle Text */}
          <motion.div
            className="absolute w-20 h-3 bg-indigo-300 rounded-md z-20"
            animate={{
              top: step === 0 ? "35%" : step >= 1 ? "42%" : "35%",
              left: step === 0 ? "60%" : step >= 1 ? "35%" : "60%",
              scale: step === 0 ? 1 : 0.8,
            }}
          >
            {step === 0 && <Label text="Atom (Text)" pos="bottom" />}
          </motion.div>

          {/* Atom 4: Button */}
          <motion.div
            className="absolute w-24 h-8 bg-purple-500 rounded-lg flex items-center justify-center z-20"
            animate={{
              bottom: step === 0 ? "15%" : step === 1 ? "20%" : "15%",
              left: step === 0 ? "40%" : step === 1 ? "60%" : "50%",
              x: step === 2 ? "-50%" : 0,
              scale: step === 0 ? 1 : 0.8,
            }}
          >
            <div className="w-12 h-2 bg-purple-200 rounded-sm opacity-50" />
            {step === 0 && <Label text="Atom (Button)" pos="bottom" />}
          </motion.div>
        </div>

        {/* MOLECULES LAYER: Groups */}
        <motion.div
          className="absolute z-10 border-2 border-dashed border-indigo-400 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            width: step >= 1 ? "220px" : "0px",
            height: step >= 1 ? "80px" : "0px",
            top: "20%",
            left: "10%",
          }}
        >
          {step === 1 && (
            <Label
              text="Molecule (Card Header)"
              pos="top"
              color="text-indigo-600"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute z-10 border-2 border-dashed border-purple-400 rounded-xl bg-purple-50/50 dark:bg-purple-900/20"
          initial={{ opacity: 0 }}
          animate={{
            opacity: step === 1 ? 1 : 0,
            width: step === 1 ? "120px" : "0px",
            height: step === 1 ? "50px" : "0px",
            bottom: "10%",
            right: "5%",
          }}
        >
          {step === 1 && (
            <Label
              text="Molecule (Action)"
              pos="bottom"
              color="text-purple-600"
            />
          )}
        </motion.div>

        {/* ORGANISMS LAYER: Full Component */}
        <motion.div
          className="absolute inset-0 z-0 bg-card border-2 border-emerald-500 shadow-xl rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: step === 2 ? 1 : 0,
            scale: step === 2 ? 1 : 0.9,
          }}
        >
          {step === 2 && (
            <div className="absolute -top-8 left-0 right-0 text-center">
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-sm">
                Organism (User Card)
              </span>
            </div>
          )}
        </motion.div>
      </div>

      {/* Step Indicators */}
      <div className="flex gap-2 mt-8">
        <StepDot active={step === 0} label="Atoms" color="bg-blue-500" />
        <div className="w-8 h-px bg-border self-center" />
        <StepDot active={step === 1} label="Molecules" color="bg-indigo-500" />
        <div className="w-8 h-px bg-border self-center" />
        <StepDot active={step === 2} label="Organisms" color="bg-emerald-500" />
      </div>
    </div>
  );
}

function TailwindPipelineVisualizer() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
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
