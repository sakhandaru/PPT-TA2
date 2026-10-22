"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Code2, FileText, Landmark, Monitor } from "lucide-react";

type Stage = 0 | 1 | 2;

function Connection({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative h-px min-w-5 flex-1 bg-blue-950 sm:min-w-8">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay, duration: 0.55 }}
        className="absolute inset-0 origin-left bg-blue-400"
      />
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.45 }}
        className="absolute -right-1 -top-[5px] h-[10px] w-[10px] rotate-45 border-r border-t border-yellow-300"
      />
    </div>
  );
}

export function OjtExperienceVisualizer({ stage }: { stage: Stage }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-zinc-950 p-5 text-white dark:bg-zinc-900 md:p-7">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(59,130,246,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.25)_1px,transparent_1px)] [background-size:28px_28px]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.28 }}
          className="relative w-full max-w-md"
        >
          {stage === 0 && (
            <div className="flex items-center justify-between gap-3">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                className="flex w-28 flex-col items-center gap-3 border border-blue-400/60 bg-blue-400/10 px-3 py-5 sm:w-32"
              >
                <Code2 className="h-12 w-12 text-blue-300" strokeWidth={1.5} />
                <span className="font-mono text-xs font-semibold text-blue-200">IT</span>
              </motion.div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.45 }}
                className="h-px flex-1 border-t border-dashed border-zinc-500"
              />
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55 }}
                className="flex w-28 flex-col items-center gap-3 border border-yellow-400/60 bg-yellow-400/10 px-3 py-5 sm:w-32"
              >
                <Landmark className="h-12 w-12 text-yellow-300" strokeWidth={1.5} />
                <span className="font-mono text-xs font-semibold text-yellow-200">EKONOMI</span>
              </motion.div>
            </div>
          )}

          {stage === 1 && (
            <div className="flex items-center gap-2">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-center gap-2 text-blue-300"
              >
                <Code2 className="h-9 w-9" strokeWidth={1.5} />
                <span className="font-mono text-[10px]">IT</span>
              </motion.div>
              <Connection delay={reduceMotion ? 0 : 0.25} />
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.45, type: "spring" }}
                className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-2 border-2 border-blue-400 bg-blue-400/15 shadow-[0_0_30px_rgba(96,165,250,0.18)] sm:h-28 sm:w-28"
              >
                <Monitor className="h-9 w-9 text-blue-300" strokeWidth={1.5} />
                <span className="font-mono text-[10px] font-semibold text-yellow-200">SIMONTOK</span>
              </motion.div>
              <Connection delay={reduceMotion ? 0 : 0.8} />
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduceMotion ? 0 : 1.05 }}
                className="flex flex-col items-center gap-2 text-yellow-300"
              >
                <Landmark className="h-9 w-9" strokeWidth={1.5} />
                <span className="font-mono text-[10px]">BISNIS</span>
              </motion.div>
            </div>
          )}

          {stage === 2 && (
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center justify-center gap-4">
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: -45 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/70 bg-blue-400/10"
                >
                  <Code2 className="h-8 w-8 text-blue-300" />
                </motion.div>
                <motion.span
                  initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduceMotion ? 0 : 0.45 }}
                  className="font-mono text-3xl text-yellow-300"
                >
                  +
                </motion.span>
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, x: 45 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-400/70 bg-yellow-400/10"
                >
                  <Landmark className="h-8 w-8 text-yellow-300" />
                </motion.div>
              </div>
              <motion.div
                initial={reduceMotion ? false : { scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.75, duration: 0.35 }}
                className="h-7 w-px origin-top bg-blue-400"
              />
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : 1.05, duration: 0.4 }}
                className="flex items-center gap-3 border border-yellow-400 bg-yellow-400/10 px-5 py-3"
              >
                <FileText className="h-7 w-7 text-yellow-300" />
                <span className="font-mono text-xs font-semibold text-yellow-200">PRD → APLIKASI</span>
              </motion.div>
            </div>
          )}

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduceMotion ? 0 : 1.3 }}
            className="mt-7 text-center text-xs text-zinc-400"
          >
            {[
              "Dua bidang yang awalnya terasa jauh",
              "SIMONTOK menghubungkan IT dengan proses bisnis",
              "Pemahaman bisnis ikut membentuk solusi teknis",
            ][stage]}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
