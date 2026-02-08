"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Ban, ArrowRight, CheckCircle2, CircleOff } from "lucide-react";

export default function Slide03_GoalScope() {
  return (
    <div className="w-full h-full p-12 md:p-24 flex flex-col space-y-8 overflow-y-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4 mb-2">
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Tujuan & Batasan Masalah
          </h2>
        </div>
        <p className="text-xl text-muted-foreground ml-20">
          Fokus Penelitian & Ruang Lingkup
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1 pt-4">
        {/* Left Column: Tujuan Penelitian */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-card border border-blue-200 dark:border-blue-900/50 p-8 rounded-2xl shadow-sm h-full flex flex-col">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-blue-700 dark:text-blue-400">
              <Target className="w-6 h-6 mr-3" />
              Tujuan Penelitian
            </h3>
            <ul className="space-y-4 flex-1">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 shrink-0" />
                <span className="text-sm">
                  Membangun sistem yang mandiri tanpa ketergantungan teknologi
                  pihak ketiga yang usang (<strong>jQuery</strong>).
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 shrink-0" />
                <span className="text-sm">
                  Memastikan penyajian berita dan live streaming selalu aktual
                  melalui <strong>sinkronisasi data otomatis</strong>.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 shrink-0" />
                <span className="text-sm">
                  Menyederhanakan pemeliharaan sistem sehingga penambahan fitur
                  di masa depan menjadi <strong>lebih cepat dan efisien</strong>
                  .
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 shrink-0" />
                <span className="text-sm">
                  Mencapai standar kualitas web internasional (
                  <strong>Core Web Vitals</strong>) untuk meningkatkan daya
                  saing media.
                </span>
              </li>
            </ul>

            {/* Tech Stack Visuals */}
            {/* Tech Stack Visuals */}
            {/* <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                Teknologi Solusi
              </p>
              <div className="flex flex-wrap items-center gap-6 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="relative h-6 w-20">
                  <Image
                    src="/nextjs-logo.svg"
                    alt="Next.js"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-8 w-8">
                  <Image
                    src="/react-query-logo.svg"
                    alt="React Query"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-8 w-8">
                  <Image
                    src="/zustand-logo.png"
                    alt="Zustand"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-6 w-24">
                  <Image
                    src="/tailwind-logo.svg"
                    alt="Tailwind CSS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Right Column: Batasan Masalah */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-card border border-orange-200 dark:border-orange-900/50 p-8 rounded-2xl shadow-sm h-full">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-orange-700 dark:text-orange-400">
              <Ban className="w-6 h-6 mr-3" />
              Batasan Masalah
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 mr-3 shrink-0" />
                <span className="text-sm">
                  Berfokus pada <strong>Client-side</strong> aplikasi TVKU
                  (tidak mencakup server/API).
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 mr-3 shrink-0" />
                <span className="text-sm">
                  Refaktorisasi meliputi: pemisahan state, penghapusan{" "}
                  <strong>jQuery</strong>, dan perombakan struktur folder.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 mr-3 shrink-0" />
                <span className="text-sm">
                  Pengukuran performa menggunakan <strong>Lighthouse</strong>{" "}
                  dan <strong>Core Web Vitals</strong>.
                </span>
              </li>
              <li className="flex items-start">
                <CircleOff className="w-5 h-5 text-orange-500 mt-1 mr-3 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Tidak mencakup pengembangan fitur pada hak akses administratif
                  (admin).
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span
      className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${color}`}
    >
      {text}
    </span>
  );
}
