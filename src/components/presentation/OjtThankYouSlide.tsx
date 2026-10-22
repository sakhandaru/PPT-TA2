"use client";

import { motion, useReducedMotion } from "framer-motion";

export function OjtThankYouSlide() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-[#0b0d0f] p-12 text-white md:p-24">
      <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5 font-mono text-xs uppercase tracking-widest">
        <span className="text-blue-300">07 / Penutup</span>
        <span className="text-right text-zinc-500">Evaluasi OJT · 2026</span>
      </div>

      <div className="flex flex-1 flex-col justify-center py-8">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="font-mono text-xs uppercase tracking-[0.24em] text-blue-300"
        >
          Dari belajar menuju kontribusi
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-6xl font-semibold leading-none tracking-[-0.065em] sm:text-7xl md:text-8xl"
        >
          Terima <span className="text-yellow-300">kasih.</span>
        </motion.h1>
        <div className="mt-9 flex h-px w-40 overflow-hidden">
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.45, duration: 0.55 }}
            className="h-full w-24 origin-left bg-blue-400"
          />
          <motion.div
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: reduceMotion ? 0 : 0.85, duration: 0.4 }}
            className="h-full w-16 origin-left bg-yellow-300"
          />
        </div>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.65, duration: 0.45 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl"
        >
          Saya siap berdiskusi dan menerima masukan.
        </motion.p>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-5 border-t border-white/10 pt-5">
        <div>
          <p className="text-sm font-medium">Rifqis Sakha Hilmi Aziz</p>
          <p className="mt-1 font-mono text-xs text-zinc-500">Staf IT dan Jaringan · Divisi Operasional</p>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-blue-300">Diskusi & Tanya Jawab</p>
      </div>
    </div>
  );
}
