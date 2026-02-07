"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Code2, Database, Layers } from "lucide-react";

export default function Slide02_Background() {
  return (
    <div className="w-full h-full p-12 md:p-24 flex flex-col space-y-8 overflow-y-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4 mb-2">
          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Latar Belakang & Masalah
          </h2>
        </div>
        <p className="text-xl text-muted-foreground ml-20">
          Analisis Kondisi Eksisting (Legacy System)
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
        {/* Left Column: Masalah Utama */}
        <div className="space-y-8">
          {/* Legacy System Card */}
          <motion.div
            className="bg-card border border-border/50 p-6 rounded-xl shadow-sm"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Code2 className="w-6 h-6 mr-3 text-orange-500" />
              Kondisi Eksisting
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 shrink-0" />
                <span className="text-lg">
                  Penggunaan <strong>jQuery</strong> dalam React/Next.js
                  (Konflik Paradigma)
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 shrink-0" />
                <span className="text-lg">
                  Struktur kode <strong>monolitik</strong> & sulit dikelola
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Core Problems Card */}
          <motion.div
            className="bg-card border border-border/50 p-6 rounded-xl shadow-sm"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Layers className="w-6 h-6 mr-3 text-red-500" />
              Identifikasi Masalah Utama
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
                <Database className="w-5 h-5 text-red-500 mt-1 mr-3 shrink-0" />
                <div>
                  <strong className="block text-foreground">
                    Prop Drilling
                  </strong>
                  <span className="text-muted-foreground">
                    Pengiriman data antar komponen terlalu dalam & tidak
                    efisien.
                  </span>
                </div>
              </li>
              <li className="flex items-start bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
                <Clock className="w-5 h-5 text-red-500 mt-1 mr-3 shrink-0" />
                <div>
                  <strong className="block text-foreground">
                    Performa Rendah (LCP 4.2s)
                  </strong>
                  <span className="text-muted-foreground">
                    Jauh di atas standar Google (&lt; 2.5s).
                  </span>
                </div>
              </li>
              <li className="flex items-start bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-1 mr-3 shrink-0" />
                <div>
                  <strong className="block text-foreground">
                    Technical Debt
                  </strong>
                  <span className="text-muted-foreground">
                    Kode sulit direfaktor tanpa merusak fungsi lain.
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column: Table Summary */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-muted/50 rounded-2xl p-8 border border-border/50">
            <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground uppercase tracking-wider">
              Ringkasan Masalah & Dampak
            </h3>

            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <table className="w-full text-left">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="p-4 font-semibold text-muted-foreground">
                      Aspek
                    </th>
                    <th className="p-4 font-semibold text-muted-foreground">
                      Kondisi Saat Ini
                    </th>
                    <th className="p-4 font-semibold text-muted-foreground">
                      Dampak
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-500" /> Arsitektur
                    </td>
                    <td className="p-4 text-muted-foreground">
                      Monolitik / Flat
                    </td>
                    <td className="p-4 text-red-600 dark:text-red-400 font-medium">
                      Sulit dikembangkan (Scalability rendah)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Database className="w-4 h-4 text-purple-500" /> State
                    </td>
                    <td className="p-4 text-muted-foreground">Prop Drilling</td>
                    <td className="p-4 text-red-600 dark:text-red-400 font-medium">
                      Kode redundan & sulit di-debug
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" /> Performa
                    </td>
                    <td className="p-4 text-muted-foreground">LCP 4,2 detik</td>
                    <td className="p-4 text-red-600 dark:text-red-400 font-medium">
                      Pengalaman pengguna buruk (Lambat)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
