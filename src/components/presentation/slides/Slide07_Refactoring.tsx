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
    <div className="w-full h-full p-4 md:p-8 flex flex-col overflow-hidden">
      <motion.div
        className="shrink-0 mb-4"
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

      <div className="flex flex-col gap-4 md:gap-6 flex-1 min-h-0">
        {/* Top Row: Visualizers (Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
          {/* Monolith to Modular Animation Container */}
          <div className="bg-muted/20 border border-border rounded-2xl p-4 relative overflow-hidden group hover:border-blue-500/50 transition-colors h-full">
            <div className="absolute top-4 left-4 z-10">
              <span className="text-xs font-mono bg-background/80 backdrop-blur border px-2 py-1 rounded shadow-sm text-foreground">
                Visualisasi Arsitektur
              </span>
            </div>

            <MonolithToModularVisualizer />
          </div>

          {/* Project Hierarchy Reveal (Gbr 27) */}
          <motion.div
            className="group relative bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-2xl flex flex-col items-center justify-center p-4 overflow-hidden hover:border-emerald-500/50 hover:bg-muted/50 transition-all duration-500 h-full"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Initial State Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 group-hover:opacity-0 transition-opacity duration-300">
              <div className="p-4 bg-background rounded-full shadow-sm mb-3 border">
                <LayoutTemplate className="w-8 h-8 text-emerald-500" />
              </div>
              <p className="font-semibold text-sm text-muted-foreground">
                Lihat Struktur Project
              </p>
              <div className="flex gap-2 mt-2 text-[10px] font-mono text-muted-foreground/60">
                <span className="bg-muted px-2 py-1 rounded">
                  Hover to Reveal
                </span>
              </div>
            </div>

            {/* Revealed Image Content */}
            <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/95 backdrop-blur-sm z-30 flex items-center justify-center">
              <img
                src="/struktur.png"
                alt="Architecture Structure"
                className="w-full h-full object-contain drop-shadow-md rounded-lg"
              />
              <div className="absolute top-2 right-2">
                <span className="text-[10px] font-mono bg-muted px-1.5 py-0.5 rounded border">
                  /src structure
                </span>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:opacity-5 transition-opacity">
              <div className="w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Explanations (Horizontal Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">
          <div className="p-4 bg-card border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                <FolderTree className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base">Restrukturisasi Proyek</h3>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground ml-1">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 mt-0.5 text-blue-400 shrink-0" />
                <span>
                  Migrasi ke <strong>Next.js 14 App Router</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 mt-0.5 text-blue-400 shrink-0" />
                <span>Organisasi folder berbasis fitur vs teknis.</span>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600">
                <Blocks className="w-5 h-5" />
              </div>
              <h3 className="font-bold">Modularisasi Komponen</h3>
            </div>

            <div className="grid grid-cols-1 gap-2 mt-2">
              <div className="p-2 bg-red-50/50 dark:bg-red-900/10 rounded border border-red-100 dark:border-red-900/30">
                <h5 className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase mb-0.5">
                  Old System
                </h5>
                <p className="text-[10px] text-muted-foreground">
                  Script jQuery global & logic UI tercampur (Hard to Debug).
                </p>
              </div>
              <div className="p-2 bg-emerald-50/50 dark:bg-emerald-900/10 rounded border border-emerald-100 dark:border-emerald-900/30">
                <h5 className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-0.5">
                  New System
                </h5>
                <p className="text-[10px] text-muted-foreground">
                  Pemisahan <code>/ui</code>, <code>/features</code>, dan{" "}
                  <code>/hooks</code> (Reusable).
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-card border rounded-xl shadow-sm hover:shadow-md transition-shadow flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg text-rose-600">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold">Dampak Internal</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Eliminasi <strong>technical debt</strong> signifikan. Kode lebih
              bersih, terprediksi, dan dependensi antar berkas menjadi teratur.
            </p>
          </div>
        </div>
      </div>
    </div>
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
      <div className="relative w-full max-w-sm h-48 md:h-64">
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
