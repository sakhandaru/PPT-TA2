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
  User,
  LayoutTemplate,
  Server,
  Database,
  ArrowRight,
  ArrowLeft,
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
            Use Case & Sequence Diagram
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 flex-1 min-h-0">
        {/* Left Column: Use Case Diagram (Span 5) */}
        <div className="xl:col-span-5 flex flex-col h-full">
          <ModelSection
            title="Fitur Berorientasi Pengguna (Use Case)"
            icon={<Users className="w-5 h-5 text-blue-500" />}
            delay={0.2}
            className="h-full"
          >
            <div className="h-full flex items-center justify-center p-4">
              <UseCaseDiagram />
            </div>
          </ModelSection>
        </div>

        {/* Right Column: Sequence Diagram (Span 7) */}
        <div className="xl:col-span-7 flex flex-col h-full">
          <ModelSection
            title="Alur Data & Logika (Sequence)"
            icon={<MessageSquareCode className="w-5 h-5 text-purple-500" />}
            delay={0.3}
            className="h-full"
          >
            <div className="h-full flex items-center justify-center p-2 pt-8">
              <SequenceDiagram />
            </div>
          </ModelSection>
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
        "p-5 rounded-2xl bg-card/50 border border-border shadow-sm flex flex-col backdrop-blur-sm",
        className,
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border/50 shrink-0">
        {icon}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <div className="flex-1 min-h-0 overflow-hidden relative">{children}</div>
    </motion.div>
  );
}

// --- USE CASE DIAGRAM COMPONENTS ---

function UseCaseDiagram() {
  const useCases = [
    "Melihat Beranda",
    "Melihat Daftar Berita",
    "Melihat Detail Berita",
    "Melihat Jadwal Siaran",
    "Menonton Live Streaming",
  ];

  return (
    <div className="relative w-full max-w-md h-full flex items-center justify-between gap-8">
      {/* Actor */}
      <motion.div
        className="flex flex-col items-center gap-2 z-10 shrink-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="w-16 h-16 bg-white dark:bg-slate-200 rounded-full flex items-center justify-center shadow-md border-2 border-slate-300">
          <User className="w-10 h-10 text-slate-700" />
        </div>
        <span className="font-bold text-sm text-center bg-card/80 backdrop-blur px-2 py-1 rounded border border-border">
          Pengunjung
          <br />
          Website
        </span>
      </motion.div>

      {/* Connecting Lines (Simplified for CSS) */}
      <div className="absolute left-16 top-0 bottom-0 w-12 flex flex-col justify-center pointer-events-none">
        {useCases.map((_, i) => (
          <motion.div
            key={i}
            className="border-t-2 border-slate-300 dark:border-slate-600 absolute left-0"
            style={{
              top: "50%",
              width: "100%",
              transformOrigin: "left center",
              transform: `translateY(-50%) rotate(${(i - 2) * 15}deg)`, // Fan out lines
            }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.1 }}
          />
        ))}
      </div>

      {/* System Boundary Box */}
      <motion.div
        className="flex-1 border-2 border-slate-400 dark:border-slate-600 rounded-lg p-6 relative bg-slate-50/50 dark:bg-slate-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="absolute -top-3 left-4 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 text-xs font-bold text-slate-800 dark:text-slate-100 rounded">
          Website Publik TVKU (Client Side)
        </div>

        <div className="flex flex-col gap-4">
          {useCases.map((text, i) => (
            <UseCaseNode key={i} text={text} delay={0.7 + i * 0.1} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function UseCaseNode({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 border-2 border-blue-200 dark:border-blue-900/50 rounded-[50%] px-6 py-3 shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-default flex items-center justify-center text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay }}
    >
      <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200">
        {text}
      </span>
    </motion.div>
  );
}

// --- SEQUENCE DIAGRAM COMPONENTS ---

// --- SEQUENCE DIAGRAM COMPONENTS ---

function SequenceDiagram() {
  const lifelines = [
    {
      id: "user",
      label: "Pengunjung",
      icon: <StickFigure />,
      color: "text-pink-700 dark:text-pink-400",
    },
    {
      id: "ui",
      label: "Lapisan Presentasi",
      icon: null,
      color:
        "bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800",
    },
    {
      id: "logic",
      label: "Lapisan Logika",
      icon: null,
      color:
        "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800",
    },
    {
      id: "data",
      label: "Lapisan Data",
      icon: null,
      color:
        "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-800",
    },
  ];

  const messages = [
    { from: 0, to: 1, id: 1, text: "Mengakses halaman Berita", type: "solid" },
    {
      from: 1,
      to: 2,
      id: 2,
      text: "Inisialisasi halaman Berita",
      type: "solid",
    },
    { from: 2, to: 3, id: 3, text: "Meminta data berita", type: "solid" },
    { from: 3, to: 2, id: 4, text: "Mengirim data berita", type: "dashed" },
    {
      from: 2,
      to: 1,
      id: 5,
      text: "Mengirim data untuk ditampilkan",
      type: "dashed",
    },
    {
      from: 1,
      to: 0,
      id: 6,
      text: "Menampilkan daftar berita",
      type: "dashed",
    },
    // Gap handled by spacing
    { from: 0, to: 1, id: 7, text: "Memilih salah satu berita", type: "solid" },
    { from: 1, to: 2, id: 8, text: "Meminta detail berita", type: "solid" },
    { from: 2, to: 3, id: 9, text: "Meminta detail berita", type: "solid" },
    { from: 3, to: 2, id: 10, text: "Mengirim detail berita", type: "dashed" },
    { from: 2, to: 1, id: 11, text: "Mengirim detail berita", type: "dashed" },
    {
      from: 1,
      to: 0,
      id: 12,
      text: "Menampilkan detail berita",
      type: "dashed",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col relative text-[10px] md:text-xs">
      {/* Lifeline Headers */}
      <div className="flex justify-between px-2 md:px-8 mb-4 relative z-20">
        {lifelines.map((line, i) => (
          <motion.div
            key={line.id}
            className={cn(
              "flex flex-col items-center gap-1 z-20",
              i === 0 ? "w-16" : "w-24",
            )}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            {line.id === "user" ? (
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 mb-1 text-pink-500 dark:text-pink-400">
                  <StickFigure />
                </div>
                <span className="font-bold text-xs text-center">
                  {line.label}
                </span>
              </div>
            ) : (
              <div
                className={cn(
                  "px-3 py-2 rounded-lg border shadow-sm w-full text-center font-bold bg-background",
                  line.color,
                )}
              >
                {line.label}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lifeline Vertical Lines & Activation Bars */}
      <div className="absolute top-14 bottom-8 left-2 right-2 flex justify-between px-8 md:px-14 pointer-events-none z-0">
        {lifelines.map((line, i) => (
          <div key={i} className="relative h-full flex justify-center">
            {/* Main Line */}
            <motion.div
              className="w-px bg-slate-300 dark:bg-slate-700 h-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            />
          </div>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 flex flex-col justify-evenly relative z-10 px-2 py-2">
        {messages.map((msg, i) => (
          <SequenceMessage
            key={i}
            id={msg.id}
            from={msg.from}
            to={msg.to}
            text={msg.text}
            dashed={msg.type === "dashed"}
            delay={1.5 + i * 0.15}
          />
        ))}
      </div>

      {/* Lifeline Footers */}
      <div className="flex justify-between px-2 md:px-8 mt-2 relative z-20 opacity-70">
        {lifelines.map((line, i) => (
          <motion.div
            key={`footer-${line.id}`}
            className={cn(
              "flex flex-col items-center gap-1 w-16 md:w-24 text-center",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {line.id === "user" ? (
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 mb-1 text-pink-500 dark:text-pink-400 opacity-50">
                  <StickFigure />
                </div>
                <span className="font-bold text-[9px] bg-pink-100 dark:bg-pink-900/30 px-2 rounded text-pink-700 dark:text-pink-300">
                  {line.label}
                </span>
              </div>
            ) : (
              <div
                className={cn(
                  "px-2 py-1 rounded border w-full text-[9px] font-bold bg-background opacity-80",
                  line.color,
                )}
              >
                {line.label}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StickFigure() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />
      <path d="M12 11v12" />
      <path d="M8 14l4-3 4 3" />
      <path d="M8 23l4-5 4 5" />
    </svg>
  );
}

function SequenceMessage({
  id,
  from,
  to,
  text,
  dashed,
  delay,
}: {
  id: number;
  from: number;
  to: number;
  text: string;
  dashed: boolean;
  delay: number;
}) {
  const isLeft = from > to;
  // Calculation: 3 gaps. Lifelines at 0, 1, 2, 3.
  // Total width is 100%. Lifelines are distributed with justify-between.
  // We can assume strict % positions for the arrows.
  // 0: 0%, 1: 33%, 2: 66%, 3: 100% (Approx relative to inner area)

  // Using absolute positioning percentages based on 4 columns
  const positions = [0, 33.33, 66.66, 100];
  const leftPos = Math.min(positions[from], positions[to]);
  const widthVal = Math.abs(positions[from] - positions[to]);

  return (
    <motion.div
      className="relative h-6"
      initial={{ opacity: 0, x: isLeft ? 10 : -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      {/* Arrow Container */}
      <div
        className="absolute top-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
        style={{
          left: `calc(4% + ${leftPos * 0.92}%)`, // Adjust for padding. 4% left pad, 92% available width
          width: `${widthVal * 0.92}%`,
        }}
      >
        {/* Label */}
        <div className="absolute -top-4 flex items-center gap-1.5 whitespace-nowrap z-10 bg-background/50 backdrop-blur-[1px] px-1 rounded">
          <span className="flex items-center justify-center w-3.5 h-3.5 bg-black text-white dark:bg-white dark:text-black rounded-full text-[8px] font-bold shadow-sm">
            {id}
          </span>
          <span className="text-[9px] md:text-[10px] font-medium text-slate-700 dark:text-slate-200">
            {text}
          </span>
        </div>

        {/* Line */}
        <div
          className={cn(
            "w-full h-px relative",
            dashed
              ? "border-b border-dashed border-slate-500 bg-transparent"
              : "bg-slate-800 dark:bg-slate-400",
          )}
        >
          {/* Arrow Head */}
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2",
              isLeft ? "left-0" : "right-0",
            )}
          >
            {isLeft ? (
              dashed ? (
                <OpenArrowLeft className="w-3 h-3 text-slate-600 dark:text-slate-400" />
              ) : (
                <SolidArrowLeft className="w-3 h-3 text-slate-800 dark:text-slate-200" />
              )
            ) : dashed ? (
              <OpenArrowRight className="w-3 h-3 text-slate-600 dark:text-slate-400" />
            ) : (
              <SolidArrowRight className="w-3 h-3 text-slate-800 dark:text-slate-200" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Custom Arrow Components for precision
const SolidArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 10 10" className={className} fill="currentColor">
    <path d="M0 0 L10 5 L0 10 Z" />
  </svg>
);
const SolidArrowLeft = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 10 10" className={className} fill="currentColor">
    <path d="M10 0 L0 5 L10 10 Z" />
  </svg>
);
const OpenArrowRight = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 10 10"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M0 0 L8 5 L0 10" />
  </svg>
);
const OpenArrowLeft = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 10 10"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M10 0 L2 5 L10 10" />
  </svg>
);
