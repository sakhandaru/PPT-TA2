"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Projector,
  Users,
  MessageSquareCode,
  MonitorPlay,
  Calendar,
  Newspaper,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Slide06_SystemModeling() {
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
            <Projector className="w-8 h-8 text-pink-600 dark:text-pink-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Pemodelan Sistem (UML)
          </h2>
        </div>
        <p className="text-xl text-muted-foreground ml-16">
          Visualisasi perilaku sistem:{" "}
          <span className="font-semibold text-foreground">
            Use Case, Activity, & Sequence Diagram
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 flex-1 min-h-0">
        {/* Left Column: Explanations (Span 1) */}
        <div className="xl:col-span-1 flex flex-col space-y-5 overflow-y-auto pr-2">
          {/* 1. Use Case */}
          <ModelSection
            title="Interaksi Pengguna (Use Case)"
            icon={<Users className="w-5 h-5 text-blue-500" />}
            delay={0.2}
          >
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Pengunjung dapat mengakses 3 fitur utama:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <FeatureTag
                  icon={<Newspaper className="w-3 h-3" />}
                  text="Berita"
                  color="blue"
                />
                <FeatureTag
                  icon={<Calendar className="w-3 h-3" />}
                  text="Jadwal"
                  color="indigo"
                />
                <FeatureTag
                  icon={<MonitorPlay className="w-3 h-3" />}
                  text="Live Streaming"
                  color="red"
                />
              </div>
            </div>
          </ModelSection>

          {/* 2. Activity */}
          <ModelSection
            title="Alur Kerja (Activity)"
            icon={<Activity className="w-5 h-5 text-emerald-500" />}
            delay={0.3}
          >
            <p className="text-sm text-muted-foreground">
              Sistem otomatis memvalidasi pemuatan data. Terdapat mekanisme{" "}
              <span className="font-semibold text-red-500/80">Error Alert</span>{" "}
              jika data gagal dimuat.
            </p>
          </ModelSection>

          {/* 3. Sequence */}
          <ModelSection
            title="Komunikasi (Sequence)"
            icon={<MessageSquareCode className="w-5 h-5 text-purple-500" />}
            delay={0.4}
          >
            <p className="text-sm text-muted-foreground">
              Visualisasi komunikasi <strong>Asinkron</strong> antara Frontend &
              API. Inisialisasi halaman dilakukan sebelum request data.
            </p>
          </ModelSection>
        </div>

        {/* Right Column: Visual Placeholders (Span 2) */}
        <div className="xl:col-span-2 flex flex-col gap-6 h-full">
          {/* Top: Use Case Diagram */}
          <motion.div
            className="flex-1 bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-2xl flex flex-row items-center p-6 relative group overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <span className="text-xs font-mono border px-2 py-1 rounded bg-background">
                Fig. 18
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center mr-8">
              <Users className="w-10 h-10 text-muted-foreground/40 mb-2" />
              <p className="font-semibold text-muted-foreground">
                [Placeholder Gambar 18]
              </p>
              <p className="text-xs text-muted-foreground/70">
                Use Case Diagram
              </p>
            </div>

            {/* Simulated Diagram Nodes */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-4 opacity-50 grayscale blur-[1px]">
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                👤
              </div>
              <div className="h-0.5 w-10 bg-slate-400"></div>
              <div className="w-24 h-12 border-2 border-slate-400 rounded-[50%] flex items-center justify-center text-[10px]">
                Access News
              </div>
            </div>
          </motion.div>

          {/* Bottom: Sequence Diagram */}
          <motion.div
            className="flex-[1.5] bg-muted/30 border-2 border-dashed border-muted-foreground/20 rounded-2xl flex flex-col items-center justify-center p-6 relative group overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-50">
              <span className="text-xs font-mono border px-2 py-1 rounded bg-background">
                Fig. 25
              </span>
            </div>

            <div className="text-center z-10">
              <MessageSquareCode className="w-10 h-10 text-muted-foreground/40 mb-2 mx-auto" />
              <p className="font-semibold text-muted-foreground">
                [Placeholder Gambar 25]
              </p>
              <p className="text-xs text-muted-foreground/70">
                Sequence Diagram (Interface - Logic - Data)
              </p>
            </div>

            {/* Minimalist Sequence lines decoration */}
            <div className="absolute inset-0 flex justify-around px-20 pt-10 opacity-10 pointer-events-none">
              <div className="w-0.5 h-full bg-foreground/50 border-l border-dashed"></div>
              <div className="w-0.5 h-full bg-foreground/50 border-l border-dashed"></div>
              <div className="w-0.5 h-full bg-foreground/50 border-l border-dashed"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ModelSection({
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
      className="p-5 rounded-2xl bg-card border border-border shadow-sm hover:translate-x-1 transition-transform"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border/50">
        {icon}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div>{children}</div>
    </motion.div>
  );
}

function FeatureTag({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  const colorStyles: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    indigo:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300",
    red: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium",
        colorStyles[color],
      )}
    >
      {icon}
      {text}
    </span>
  );
}
