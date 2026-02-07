"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileCode2,
  FolderTree,
  ArrowRight,
  Trash2,
  Blocks,
  LayoutTemplate,
  FileJson,
  FileType,
  Files,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide07_Refactoring() {
  return (
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden">
      <motion.div
        className="shrink-0 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4 mb-2">
          <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
            <FileCode2 className="w-8 h-8 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Transformasi Struktur Kode
          </h2>
        </div>
        <p className="text-xl text-muted-foreground ml-16">
          Refaktorisasi dari{" "}
          <span className="font-semibold text-red-500/80 line-through decoration-2 decoration-red-500/50 mr-2">
            Flat Structure
          </span>{" "}
          ke{" "}
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            Modular Architecture
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 min-h-0">
        {/* Left Column: Interactive Visualizer */}
        <div className="flex flex-col gap-6 h-full">
          {/* Monolith to Modular Animation Container */}
          <div className="flex-1 bg-muted/20 border border-border rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-xs font-mono bg-background/80 backdrop-blur border px-2 py-1 rounded shadow-sm text-foreground">
                Hover to Refactor
              </span>
            </div>

            <MonolithToModularVisualizer />

            {/* Labels/Legend placed at bottom */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-[10px] text-muted-foreground uppercase tracking-wider font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-300">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> UI
                Components
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
                Logic/Hooks
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>{" "}
                Features
              </span>
            </div>
          </div>

          {/* Projrect Hierarchy Placeholder (Gbr 27) */}
          <motion.div
            className="flex-[0.8] bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-2xl flex flex-col items-center justify-center p-4 relative overflow-hidden"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 p-3 opacity-50">
              <span className="text-[10px] font-mono border px-1.5 py-0.5 rounded bg-background">
                Fig. 27
              </span>
            </div>
            <div className="flex flex-col items-center text-center z-10 w-full">
              <LayoutTemplate className="w-8 h-8 text-muted-foreground/40 mb-2" />
              <p className="font-semibold text-sm text-muted-foreground">
                [Placeholder Gambar 27]
              </p>
              <div className="flex gap-2 mt-2 text-[10px] font-mono text-muted-foreground/60">
                <span className="bg-muted px-2 py-1 rounded">/app</span>
                <span className="bg-muted px-2 py-1 rounded">/components</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Explanations */}
        <div className="flex flex-col justify-center space-y-6 overflow-y-auto pl-2">
          {/* 1. Restrukturisasi */}
          <DetailSection
            title="Restrukturisasi Proyek"
            icon={<FolderTree className="w-5 h-5 text-blue-500" />}
            delay={0.5}
          >
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <span>
                  Migrasi ke <strong>Next.js 14 App Router</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" />
                <span>Organisasi folder berbasis fitur vs teknis.</span>
              </li>
            </ul>
          </DetailSection>

          {/* 2. Modularisasi */}
          <DetailSection
            title="Modularisasi Komponen"
            icon={<Blocks className="w-5 h-5 text-indigo-500" />}
            delay={0.6}
          >
            <div className="grid grid-cols-1 gap-3 mt-1">
              <div className="p-3 bg-red-50/50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/30">
                <h5 className="text-xs font-bold text-red-600 dark:text-red-400 uppercase mb-1">
                  Old System
                </h5>
                <p className="text-xs text-muted-foreground">
                  Script jQuery global & logic UI tercampur (Hard to Debug).
                </p>
              </div>
              <div className="p-3 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">
                  New System
                </h5>
                <p className="text-xs text-muted-foreground">
                  Pemisahan <code>/ui</code>, <code>/features</code>, dan{" "}
                  <code>/hooks</code> (Reusable).
                </p>
              </div>
            </div>
          </DetailSection>

          {/* 3. Impact */}
          <DetailSection
            title="Dampak Internal"
            icon={<Trash2 className="w-5 h-5 text-rose-500" />}
            delay={0.7}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              Eliminasi <strong>technical debt</strong> signifikan. Kode lebih
              bersih, terprediksi, dan dependensi antar berkas menjadi teratur.
            </p>
          </DetailSection>
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
      className="flex flex-col gap-2"
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-muted rounded-lg shrink-0">{icon}</div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="pl-12">{children}</div>
    </motion.div>
  );
}

function MonolithToModularVisualizer() {
  const [isHovered, setIsHovered] = useState(false);

  // Simulated files with their Monolith (chaos) and Modular (ordered) positions
  const files = [
    {
      id: 1,
      type: "ui",
      icon: <LayoutTemplate className="w-4 h-4" />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "logic",
      icon: <FileCode2 className="w-4 h-4" />,
      color: "bg-orange-500",
    },
    {
      id: 3,
      type: "feature",
      icon: <Blocks className="w-4 h-4" />,
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "ui",
      icon: <FileType className="w-4 h-4" />,
      color: "bg-blue-500",
    },
    {
      id: 5,
      type: "logic",
      icon: <FileJson className="w-4 h-4" />,
      color: "bg-orange-500",
    },
    {
      id: 6,
      type: "feature",
      icon: <Files className="w-4 h-4" />,
      color: "bg-purple-500",
    },
    {
      id: 7,
      type: "ui",
      icon: <LayoutTemplate className="w-4 h-4" />,
      color: "bg-blue-500",
    },
    {
      id: 8,
      type: "logic",
      icon: <FileCode2 className="w-4 h-4" />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div
      className="w-full h-full flex items-center justify-center relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="relative w-full max-w-sm h-64">
        {/* Background Containers */}
        <div className="absolute inset-0 transition-all duration-500">
          {/* Monolith Container - Fades out on hover */}
          <div
            className={cn(
              "absolute inset-0 border-4 border-dashed border-red-300 dark:border-red-900/50 rounded-3xl flex items-center justify-center transition-all duration-500 bg-red-50/30 dark:bg-red-950/20",
              isHovered
                ? "opacity-0 scale-110 pointer-events-none"
                : "opacity-100 scale-100",
            )}
          >
            <span className="text-xl font-black text-red-300 dark:text-red-900/50 uppercase tracking-widest">
              Monolith
            </span>
          </div>

          {/* Modular Containers - Fade in on hover */}
          <div
            className={cn(
              "absolute inset-0 grid grid-cols-2 gap-4 transition-all duration-500",
              isHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90 pointer-events-none",
            )}
          >
            {/* UI Container */}
            <div className="border-2 border-blue-200 dark:border-blue-900/50 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 col-span-2 row-span-1 flex items-start justify-start p-2">
              <span className="text-[10px] font-bold text-blue-400 uppercase">
                UI / Components
              </span>
            </div>
            {/* Logic Container */}
            <div className="border-2 border-orange-200 dark:border-orange-900/50 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 flex items-start justify-start p-2">
              <span className="text-[10px] font-bold text-orange-400 uppercase">
                Hooks
              </span>
            </div>
            {/* Features Container */}
            <div className="border-2 border-purple-200 dark:border-purple-900/50 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 flex items-start justify-start p-2">
              <span className="text-[10px] font-bold text-purple-400 uppercase">
                Features
              </span>
            </div>
          </div>
        </div>

        {/* Flying Files */}
        {files.map((file, i) => {
          // Random positions for Monolith state
          const randomX = ((i % 3) - 1) * 60 + (Math.random() * 20 - 10);
          const randomY =
            (Math.floor(i / 3) - 1) * 60 + (Math.random() * 20 - 10);
          const randomRotate = Math.random() * 40 - 20;

          // Ordered positions for Modular state
          let targetX = 0,
            targetY = 0;
          if (file.type === "ui") {
            targetX = ((i % 3) - 1) * 50;
            targetY = -70;
          } // Top row
          if (file.type === "logic") {
            targetX = -70;
            targetY = 60 + (i % 2) * 10;
          } // Bottom Left
          if (file.type === "feature") {
            targetX = 70;
            targetY = 60 + (i % 2) * 10;
          } // Bottom Right

          return (
            <motion.div
              key={file.id}
              className={cn(
                "absolute w-10 h-10 rounded-lg shadow-sm flex items-center justify-center text-white z-10 transition-colors duration-500",
                file.color,
              )}
              animate={{
                x: isHovered ? targetX : randomX,
                y: isHovered ? targetY : randomY,
                rotate: isHovered ? 0 : randomRotate,
                scale: isHovered ? 1 : 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: i * 0.05,
              }}
              style={{
                left: "50%",
                top: "50%",
                marginLeft: -20,
                marginTop: -20,
              }}
            >
              {file.icon}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
