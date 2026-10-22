"use client";

import { motion, useReducedMotion } from "framer-motion";

const nextSteps = [
  {
    title: "Perdalam proses bisnis",
    description: "Ikut pembahasan kebutuhan dan petakan alur kerja pengguna SIMONTOK.",
  },
  {
    title: "Biasakan validasi",
    description: "Konfirmasi perubahan dalam PRD, lalu gunakan UAT awal untuk menentukan perbaikan.",
  },
] as const;

export function OjtNextStepsSlide() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex h-full w-full flex-col overflow-auto bg-[#0b0d0f] p-12 text-white md:p-24">
      <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-5 font-mono text-xs uppercase tracking-widest">
        <span className="text-blue-300">Rencana Pengembangan</span>
        <span className="text-right text-zinc-500">PT. BPR BKK Jateng</span>
      </div>

      <div className="flex flex-1 flex-col justify-center py-4">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl 2xl:text-6xl"
        >
          Memahami proses bisnis lebih dalam.
        </motion.h1>
        <motion.div
          aria-hidden="true"
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: reduceMotion ? 0 : 0.3, duration: 0.6 }}
          className="mt-5 h-px w-24 origin-left bg-yellow-300"
        />
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.45, duration: 0.4 }}
          className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-400"
        >
          Agar keputusan teknis sesuai dengan cara kerja pengguna.
        </motion.p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {nextSteps.map(({ title, description }, index) => (
            <motion.div
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.7 + index * 0.2, duration: 0.4 }}
              className="border-t border-white/20 pt-5"
            >
              <span className={`font-mono text-xs ${index === 0 ? "text-blue-300" : "text-yellow-300"}`}>0{index + 1}</span>
              <h2 className="mt-3 text-xl font-semibold">{title}</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-4 font-mono text-xs text-zinc-500">
        <span>Rifqis Sakha Hilmi Aziz</span>
        <span>OJT / 2026</span>
      </div>
    </div>
  );
}
