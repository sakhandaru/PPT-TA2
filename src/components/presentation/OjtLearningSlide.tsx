"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, FileText, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slide } from "./Slide";

const lessons = [
  {
    label: "Pahami",
    icon: Search,
    headline: "Mengenali alur permintaan dan konteks aplikasi.",
    evidence: "Helpdesk, CBS, dan SIMONTOK.",
  },
  {
    label: "Rumuskan",
    icon: FileText,
    headline: "Mencatat kebutuhan dalam PRD sebagai acuan kerja.",
    evidence: "PRD SIMONTOK selesai disusun.",
  },
  {
    label: "Validasi",
    icon: ClipboardCheck,
    headline: "Menyiapkan pengecekan fungsi terhadap kebutuhan.",
    evidence: "Persiapan UAT internal awal.",
  },
] as const;

export function OjtLearningSlide() {
  const [activeLesson, setActiveLesson] = useState(0);
  const reduceMotion = useReducedMotion();
  const selected = lessons[activeLesson];

  return (
    <Slide
      title="Pembelajaran yang Didapat"
      subtitle="Memahami kebutuhan sebelum membangun."
      className="overflow-auto bg-zinc-50 dark:bg-zinc-950"
      content={
        <div className="flex h-full flex-col justify-center gap-6">
          <div className="relative w-full">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[16.6667%] right-[16.6667%] top-8 h-px bg-zinc-300 dark:bg-zinc-700"
            />
            <motion.div
              aria-hidden="true"
              initial={reduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.35, duration: 1.1, ease: "easeInOut" }}
              className="pointer-events-none absolute left-[16.6667%] right-[16.6667%] top-8 h-0.5 origin-left bg-blue-400"
            />
            <div className="relative grid grid-cols-3">
              {lessons.map(({ label, icon: Icon }, index) => {
                const isActive = activeLesson === index;

                return (
                  <motion.button
                    key={label}
                    type="button"
                    onClick={() => setActiveLesson(index)}
                    onMouseEnter={() => setActiveLesson(index)}
                    onFocus={() => setActiveLesson(index)}
                    aria-pressed={isActive}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.4 + index * 0.25, duration: 0.4 }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.span
                      animate={reduceMotion ? undefined : { scale: isActive ? 1.08 : 1, y: isActive ? -3 : 0 }}
                      transition={{ type: "spring", stiffness: 320, damping: 24 }}
                      className={cn(
                        "relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 transition-colors",
                        isActive
                          ? "border-yellow-400 bg-yellow-300 text-zinc-950"
                          : "border-zinc-300 bg-zinc-50 text-zinc-500 dark:border-zinc-700 dark:bg-zinc-950",
                      )}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.6} />
                    </motion.span>
                    <span className="mt-4 font-mono text-xs text-zinc-500">0{index + 1} / 03</span>
                    <span className={cn("mt-1 text-base font-semibold", isActive && "text-blue-700 dark:text-blue-300")}>
                      {label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLesson}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid min-h-28 gap-4 border-t border-zinc-200 pt-6 sm:grid-cols-[8rem_1fr] lg:pl-[12%] dark:border-zinc-800"
            >
              <div>
                <span className="font-mono text-sm text-yellow-700 dark:text-yellow-300">0{activeLesson + 1} / 03</span>
                <p className="mt-2 font-semibold">{selected.label}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-snug md:text-2xl">{selected.headline}</h3>
                <p className="mt-2 text-sm text-zinc-500">{selected.evidence}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 1.2, duration: 0.35 }}
            className="border-t border-zinc-200 pt-4 text-sm text-zinc-500 dark:border-zinc-800"
          >
            Masih perlu didalami: proses bisnis perbankan.
          </motion.p>
        </div>
      }
    />
  );
}
