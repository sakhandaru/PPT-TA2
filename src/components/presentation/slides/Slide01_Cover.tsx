"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Slide01_Cover() {
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
          <p className="text-xs text-zinc-500 font-mono">SEMESTER GANJIL</p>
          <p className="text-xs text-zinc-500 font-mono">2026</p>
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="flex-1 flex flex-col md:flex-row items-center md:items-center gap-8 py-4">
        <div className="flex-1 space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight uppercase font-display"
          >
            Penerapan Refaktorisasi
            <br />
            <span className="text-zinc-400 dark:text-zinc-600">
              Berbasis Komponen Modular
            </span>
            <br />
            Untuk Meningkatkan Kinerja
            <br />
            <span className="text-zinc-400 dark:text-zinc-600">
              Dan Kualitas Arsitektur
            </span>
            <br />
            Pada Aplikasi Web TVKU
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            <div className="px-4 py-1.5 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              Web Performance
            </div>
            <div className="px-4 py-1.5 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              Modular Architecture
            </div>
            <div className="px-4 py-1.5 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-500 dark:text-zinc-400 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              Code Refactoring
            </div>
          </motion.div>
        </div>

        {/* Presenter & Academic Info */}
        <div className="w-full md:w-[400px] space-y-6">
          {/* Presenter Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-blue-900/20 text-blue-400 rounded-full flex items-center justify-center border border-blue-900/50">
                <span className="font-bold text-2xl">👨🏻‍💻</span>
              </div>
              <ArrowUpRight className="text-zinc-400 dark:text-zinc-600 w-5 h-5" />
            </div>

            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-wider">
                Mahasiswa
              </p>
              <p className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                Rifqis Sakha Hilmi Aziz
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-400 font-mono">
                A11.2022.14254
              </p>
            </div>
          </motion.div>

          {/* Academic Supervision */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 gap-4"
          >
            <div className="border border-zinc-200 dark:border-zinc-800/50 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/30">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">
                Pembimbing
              </p>
              <p className="text-base font-bold text-zinc-700 dark:text-zinc-200">
                Gustina Alfa Trisnapradika, M.Kom
              </p>
            </div>
            <div className="border border-zinc-200 dark:border-zinc-800/50 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/30">
              <p className="text-zinc-500 text-xs uppercase tracking-wider mb-3">
                Dewan Penguji
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-zinc-400 mb-0.5 uppercase tracking-wider">
                    Ketua
                  </p>
                  <p className="text-base font-bold text-zinc-700 dark:text-zinc-200">
                    Fauzi Adi Rafrastara, M.Cs
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-0.5 uppercase tracking-wider">
                    Anggota 1
                  </p>
                  <p className="text-base font-bold text-zinc-700 dark:text-zinc-200">
                    Christy Atika Sari, M.Kom
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-400 mb-0.5 uppercase tracking-wider">
                    Anggota 2
                  </p>
                  <p className="text-base font-bold text-zinc-700 dark:text-zinc-200">
                    Harun Al Azies, S.Stat., M.Stat.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
