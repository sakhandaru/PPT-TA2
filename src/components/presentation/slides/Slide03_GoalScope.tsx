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
                <span className="text-base md:text-lg">
                  Membangun sistem yang <strong>Mandiri & Modern</strong> <br />
                  <span className="text-base text-muted-foreground font-normal">
                    (Tidak bergantung teknologi lama yang usang).
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 shrink-0" />
                <span className="text-base md:text-lg">
                  Mempermudah <strong>Pengembangan Fitur Baru</strong> <br />
                  <span className="text-base text-muted-foreground font-normal">
                    (Struktur kode lebih rapi dan mudah dirawat).
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 shrink-0" />
                <span className="text-base md:text-lg">
                  Memastikan <strong>Akses Website Cepat</strong> <br />
                  <span className="text-base text-muted-foreground font-normal">
                    (Lebih ringan dan responsif bagi pengguna).
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 shrink-0" />
                <span className="text-base md:text-lg">
                  Efisiensi <strong>Desain Tampilan</strong> <br />
                  <span className="text-base text-muted-foreground font-normal">
                    (Penataan gaya (CSS) yang lebih praktis).
                  </span>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 shrink-0" />
                <span className="text-base md:text-lg">
                  Memberikan <strong>Rekomendasi Terbaik</strong> <br />
                  <span className="text-base text-muted-foreground font-normal">
                    (Panduan standar modern untuk website media).
                  </span>
                </span>
              </li>
            </ul>
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
                <span className="text-base md:text-lg">
                  Fokus pada <strong>Client-side</strong> (Tidak mencakup
                  Server/API).
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 mr-3 shrink-0" />
                <span className="text-base md:text-lg">
                  Refactor: Hapus jQuery, Struktur Modular, Split State,
                  Tailwind, React Query + Zustand.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 mr-3 shrink-0" />
                <span className="text-base md:text-lg">
                  Tidak membahas fitur <strong>Admin</strong>.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 mr-3 shrink-0" />
                <span className="text-base md:text-lg">
                  Metrik: <strong>Core Web Vitals</strong> via
                  Lighthouse.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 mr-3 shrink-0" />
                <span className="text-base md:text-lg">
                  Fokus <strong>Maintainability</strong>: Code Clean-up,
                  Modularization, Dependency Removal.
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
