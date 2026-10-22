"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ClipboardList, Database, FileText, FolderOpen, HelpCircle, MessageSquareText, Search, Workflow } from "lucide-react";
import { Slide } from "./Slide";

const sourceIcons = [FileText, MessageSquareText, FolderOpen, ClipboardList, Search, Database];

export function OjtChallengeSlide() {
  const [activeSource, setActiveSource] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <Slide
      title="Kendala & Solusi"
      subtitle="Mencari alur SIMONTOK di tengah banyak sumber informasi."
      className="bg-zinc-50 dark:bg-zinc-950"
      content={
        <div className="flex h-full flex-col justify-center gap-5">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Beragam sumber informasi</p>
            <p className="font-mono text-xs text-zinc-500">Arahkan untuk menyorot</p>
          </div>

          <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
            {sourceIcons.map((Icon, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => setActiveSource(activeSource === index ? null : index)}
                onMouseEnter={() => setActiveSource(index)}
                onMouseLeave={() => setActiveSource(null)}
                onFocus={() => setActiveSource(index)}
                onBlur={() => setActiveSource(null)}
                aria-label={`Sumber informasi ${index + 1}`}
                aria-pressed={activeSource === index}
                initial={reduceMotion ? false : { opacity: 0, y: -12 }}
                animate={{ opacity: activeSource !== null && activeSource !== index ? 0.35 : 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.1 + index * 0.08, duration: 0.3 }}
                className={`flex flex-col items-center gap-2 border p-3 transition-colors ${activeSource === index ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20" : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"}`}
              >
                <Icon className="h-7 w-7 shrink-0 text-blue-600 dark:text-blue-300" strokeWidth={1.5} />
                <span className="font-mono text-[10px] text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
              </motion.button>
            ))}
          </div>

          <svg className="hidden h-10 w-full shrink-0 md:block" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
            {sourceIcons.map((_, index) => {
              const start = (index + 0.5) * (1000 / sourceIcons.length);
              return (
                <motion.path
                  key={index}
                  d={`M${start} 0 C${start} 25 500 10 500 40`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-400"
                  initial={reduceMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1, opacity: activeSource !== null && activeSource !== index ? 0.15 : 1 }}
                  transition={{ delay: reduceMotion ? 0 : 0.55 + index * 0.08, duration: 0.5 }}
                />
              );
            })}
          </svg>
          <div className="mx-auto h-8 w-px bg-blue-400 md:hidden" aria-hidden="true" />

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.85, duration: 0.4 }}
            className="relative overflow-hidden border border-zinc-300 bg-zinc-100 p-5 dark:border-zinc-700 dark:bg-zinc-900"
          >
            <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(59,130,246,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.25)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Workflow className="h-7 w-7 text-blue-600 dark:text-blue-300" />
                <div>
                  <p className="font-semibold">Alur SIMONTOK</p>
                  <p className="text-xs text-zinc-500">Belum saya pahami di awal OJT</p>
                </div>
              </div>
              <div className="flex gap-2" aria-hidden="true">
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 1.1 + index * 0.15 }}
                    className="flex h-10 w-10 items-center justify-center border border-dashed border-zinc-400 bg-white/70 text-zinc-500 dark:border-zinc-600 dark:bg-zinc-800"
                  >
                    <HelpCircle className="h-5 w-5" />
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-3">
            <motion.div
              initial={reduceMotion ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: reduceMotion ? 0 : 1.35, duration: 0.4 }}
              className="h-8 w-px origin-top bg-yellow-400"
            />
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 1.65, duration: 0.4 }}
              className="flex w-full items-center justify-between gap-4 border-l-4 border-yellow-400 bg-zinc-950 px-5 py-4 text-white dark:bg-white dark:text-zinc-950"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-yellow-300 dark:text-yellow-700">Acuan tertulis</p>
                <p className="mt-1 text-lg font-semibold">PRD SIMONTOK</p>
              </div>
              <FileText className="h-9 w-9 shrink-0 text-yellow-300 dark:text-yellow-700" strokeWidth={1.5} />
            </motion.div>
          </div>

          <p className="text-sm text-zinc-500">
            Meninjau aplikasi dan dokumentasi → menelaah kajian → menyusun PRD sebagai acuan pengembangan.
          </p>
        </div>
      }
    />
  );
}
