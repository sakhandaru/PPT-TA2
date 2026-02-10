"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Slide13_ThankYou() {
  return (
    <div className="w-full h-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white p-6 md:p-8 flex flex-col justify-between">
      {/* Top Bar */}
      <div className="flex justify-between items-start border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            {/* Logo Udinus */}
            <div className="relative w-12 h-12 hover:scale-105 transition-transform">
              <Image
                src="/udinus.png"
                alt="Logo Udinus"
                fill
                className="object-contain"
              />
            </div>
            {/* Logo TVKU */}
            <div className="relative w-16 h-8 hover:scale-105 transition-transform">
              <Image
                src="/tvku2.png"
                alt="Logo TVKU"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="h-8 w-[1px] bg-zinc-200 dark:bg-zinc-800"></div>
          <span className="text-sm font-mono tracking-widest uppercase text-zinc-500">
            Sidang Akhir Skripsi
          </span>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500 font-mono">SEMESTER GENAP</p>
          <p className="text-xs text-zinc-500 font-mono">2026</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="w-full max-w-4xl text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase font-display">
              Terima Kasih
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light tracking-wide">
              Mohon Arahan dan Masukan dari Dewan Penguji
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-8">
              Dewan Penguji
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ExaminerCard role="Ketua" name="Fauzi Adi Rafrastara, M.Cs" />
              <ExaminerCard role="Anggota 1" name="Christy Atika Sari, M.Kom" />
              <ExaminerCard
                role="Anggota 2"
                name="Harun Al Azies, S.Stat., M.Stat."
              />
              <ExaminerCard
                role="Pembimbing"
                name="Gustina Alfa Trisnapradika, M.Kom"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ExaminerCard({ role, name }: { role: string; name: string }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group">
      <span className="text-xs uppercase tracking-widest text-zinc-400 mb-2 font-mono">
        {role}
      </span>
      <span className="text-base font-semibold text-zinc-700 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}
