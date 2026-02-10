"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  Code2,
  Database,
  Layers,
  ArrowRight,
  Bomb,
} from "lucide-react";

export default function Slide02_Background() {
  const [activeFeature, setActiveFeature] = useState<string>("default");

  return (
    <div className="w-full h-full p-6 md:p-8 flex flex-col space-y-6 overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      {/* Header Section */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between shrink-0"
      >
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Urgensi Refaktorisasi
            </h2>
          </div>
          <p className="text-base text-zinc-500 ml-11">
            Technical Debt & Risiko Operasional Sistem
          </p>
        </div>
      </motion.div>

      {/* Bento Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
        {/* LEFT COLUMN (Control/List) - Span 5 */}
        <div className="lg:col-span-5 flex flex-col gap-6 h-full">
          {/* Card 1: Legacy Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center text-zinc-800 dark:text-zinc-100">
              <Code2 className="w-5 h-5 mr-2 text-orange-500" />
              Kondisi Eksisting
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-zinc-600 dark:text-zinc-400 text-base">
                <span className="w-2 h-2 bg-zinc-300 rounded-full mr-3 shrink-0" />
                Dominasi jQuery dalam ekosistem React
              </li>
              <li className="flex items-center text-zinc-600 dark:text-zinc-400 text-base">
                <span className="w-2 h-2 bg-zinc-300 rounded-full mr-3 shrink-0" />
                Struktur Monolitik yang Kaku
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Interactive Problem List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-sm flex-1 flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center text-zinc-800 dark:text-zinc-100">
              <Layers className="w-5 h-5 mr-2 text-red-500" />
              Identifikasi Masalah
            </h3>

            <div className="space-y-3 flex-1">
              {/* Item: Performance (Key Item) */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer group relative overflow-hidden ${activeFeature === "performance" ? "bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800 ring-1 ring-orange-200 dark:ring-orange-700" : "bg-zinc-50 border-transparent dark:bg-zinc-800/50 hover:bg-zinc-100"}`}
                onMouseEnter={() => setActiveFeature("performance")}
                onMouseLeave={() => setActiveFeature("default")}
              >
                <div className="flex items-center justify-between mb-1 relative z-10">
                  <strong
                    className={`block ${activeFeature === "performance" ? "text-orange-700 dark:text-orange-300" : "text-zinc-700 dark:text-zinc-300"}`}
                  >
                    Performa Rendah (LCP 19.4s)
                  </strong>
                  <Clock
                    className={`w-4 h-4 ${activeFeature === "performance" ? "text-orange-500" : "text-zinc-400"}`}
                  />
                </div>
                <p className="text-sm text-zinc-500 relative z-10 leading-relaxed">
                  Sangat Kritis (&gt; 3 detik).
                  <br />
                  <span className="font-semibold text-orange-600 dark:text-orange-400">
                    Potensi kehilangan 53% audiens (Lost Opportunity).
                  </span>
                </p>
                {activeFeature === "performance" && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-orange-100/50 dark:bg-orange-900/10 z-0"
                  />
                )}
              </div>

              {/* Item: Architecture */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 cursor-default group ${activeFeature === "arch" ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800" : "bg-zinc-50 border-transparent dark:bg-zinc-800/50 hover:border-zinc-200"}`}
                onMouseEnter={() => setActiveFeature("arch")}
                onMouseLeave={() => setActiveFeature("default")}
              >
                <div className="flex items-center justify-between mb-1">
                  <strong
                    className={`block ${activeFeature === "arch" ? "text-blue-700 dark:text-blue-300" : "text-zinc-700 dark:text-zinc-300"}`}
                  >
                    Tight Coupling (Ketergantungan Tinggi)
                  </strong>
                  <Layers
                    className={`w-4 h-4 ${activeFeature === "arch" ? "text-blue-500" : "text-zinc-400"}`}
                  />
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  High Maintenance Cost.
                  <br />
                  <span className="font-semibold text-red-600 dark:text-red-400">
                    Perubahan kecil berisiko merusak fitur lain.
                  </span>
                </p>
              </div>

              {/* Item: State */}
              <div
                className={`p-4 rounded-xl border transition-all duration-300 cursor-default group ${activeFeature === "state" ? "bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800" : "bg-zinc-50 border-transparent dark:bg-zinc-800/50 hover:border-zinc-200"}`}
                onMouseEnter={() => setActiveFeature("state")}
                onMouseLeave={() => setActiveFeature("default")}
              >
                <div className="flex items-center justify-between mb-1">
                  <strong
                    className={`block ${activeFeature === "state" ? "text-purple-700 dark:text-purple-300" : "text-zinc-700 dark:text-zinc-300"}`}
                  >
                    Prop Drilling & Alur Data Rumit
                  </strong>
                  <Database
                    className={`w-4 h-4 ${activeFeature === "state" ? "text-purple-500" : "text-zinc-400"}`}
                  />
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Manajemen state tidak terpusat (Prop Drilling).
                  <br />
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    Risiko Inkonsistensi Data & UX terganggu
                    (Janky/Patah-patah).
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN (Display Area) - Span 7 */}
        <div className="lg:col-span-7 h-full">
          <motion.div
            className="w-full h-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden relative shadow-inner p-6 flex flex-col justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              {activeFeature === "performance" && (
                /* EVIDENCE VIEW */
                <motion.div
                  key="evidence"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex flex-col p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono uppercase tracking-widest text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                      Lighthouse Audit
                    </span>
                    <span className="text-xs text-zinc-400">Bukti 2024</span>
                  </div>
                  <div className="relative flex-1 w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-xl">
                    <Image
                      src="/buktiperforma.png"
                      alt="Performance Evidence"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="text-center text-sm text-zinc-500 mt-4">
                    Score performa *critical* yang menjadi dasar argumen
                    refaktorisasi.
                  </p>
                </motion.div>
              )}

              {activeFeature === "arch" && (
                <motion.div
                  key="arch"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-white dark:bg-zinc-900"
                >
                  <DependencyGraph />
                </motion.div>
              )}

              {activeFeature === "state" && (
                <motion.div
                  key="state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-white dark:bg-zinc-900"
                >
                  <PropDrillingViz />
                </motion.div>
              )}

              {activeFeature === "default" && (
                /* DEFAULT SUMMARY TABLE VIEW */
                <motion.div
                  key="summary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                      Impact Analysis
                    </h3>
                    <Layers className="text-zinc-300 w-8 h-8" />
                  </div>

                  <div className="flex-1 overflow-auto rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 shadow-sm">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-zinc-50 dark:bg-zinc-900/80 sticky top-0 z-10">
                        <tr>
                          <th className="p-4 font-medium text-zinc-500 dark:text-zinc-400">
                            Domain
                          </th>
                          <th className="p-4 font-medium text-zinc-500 dark:text-zinc-400">
                            Current State
                          </th>
                          <th className="p-4 font-medium text-zinc-500 dark:text-zinc-400">
                            Operational Impact (Dampak Nyata)
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                        <tr>
                          <td className="p-4 font-medium text-zinc-700 dark:text-zinc-300">
                            Performance
                          </td>
                          <td className="p-4 text-zinc-500">
                            LCP 19.4s (Critical)
                          </td>
                          <td className="p-4 text-zinc-600 dark:text-zinc-400">
                            <strong className="block text-red-600 dark:text-red-400 text-xs mb-0.5">
                              Lost Opportunity (Audiens Kabur)
                            </strong>
                            Pengunjung meninggalkan situs sebelum konten tampil.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-zinc-700 dark:text-zinc-300">
                            Architecture
                          </td>
                          <td className="p-4 text-zinc-500">Tight Coupling</td>
                          <td className="p-4 text-zinc-600 dark:text-zinc-400">
                            <strong className="block text-red-600 dark:text-red-400 text-xs mb-0.5">
                              High Maintenance Cost
                            </strong>
                            Setiap perubahan kecil berisiko merusak fitur lain.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-zinc-700 dark:text-zinc-300">
                            State Mgmt
                          </td>
                          <td className="p-4 text-zinc-500">Prop Drilling</td>
                          <td className="p-4 text-zinc-600 dark:text-zinc-400">
                            <strong className="block text-orange-600 dark:text-orange-400 text-xs mb-0.5">
                              Data Inconsistency Risk
                            </strong>
                            Sulit melacak alur data, rawan error saat update.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium text-zinc-700 dark:text-zinc-300">
                            UX
                          </td>
                          <td className="p-4 text-zinc-500">
                            Janky Interactions
                          </td>
                          <td className="p-4 text-zinc-600 dark:text-zinc-400">
                            <strong className="block text-yellow-600 dark:text-yellow-400 text-xs mb-0.5">
                              Reputasi Turun
                            </strong>
                            Platform terlihat tidak profesional.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Technical Debt Alert */}
                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-start gap-4 border border-red-100 dark:border-red-800/50">
                    <div className="p-2 bg-white dark:bg-red-950/50 rounded-full shrink-0 shadow-sm border border-red-100 dark:border-red-900">
                      <Bomb className="w-5 h-5 text-red-600 dark:text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-red-900 dark:text-red-200 mb-1">
                        Technical Debt Alert
                      </h4>
                      <p className="text-xs text-red-700 dark:text-red-300 leading-relaxed">
                        Sistem lama memiliki{" "}
                        <span className="font-semibold italic">
                          Technical Debt
                        </span>{" "}
                        yang jika tidak dibayar sekarang (lewat refactor), akan
                        menyebabkan biaya pemeliharaan membengkak di masa depan.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function DependencyGraph() {
  const nodes = [
    { id: 1, x: 50, y: 50, color: "bg-red-500" },
    { id: 2, x: 30, y: 30, color: "bg-zinc-400" },
    { id: 3, x: 70, y: 30, color: "bg-zinc-400" },
    { id: 4, x: 20, y: 70, color: "bg-zinc-400" },
    { id: 5, x: 80, y: 70, color: "bg-zinc-400" },
    { id: 6, x: 50, y: 90, color: "bg-zinc-400" },
  ];

  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 2, to: 3 },
    { from: 4, to: 5 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
      <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/5 rounded-xl" />
      <div className="relative w-64 h-64">
        {/* Edges */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {edges.map((edge, i) => {
            const n1 = nodes.find((n) => n.id === edge.from)!;
            const n2 = nodes.find((n) => n.id === edge.to)!;
            return (
              <motion.line
                key={i}
                x1={`${n1.x}%`}
                y1={`${n1.y}%`}
                x2={`${n2.x}%`}
                y2={`${n2.y}%`}
                stroke="currentColor"
                strokeWidth="2"
                className="text-zinc-300 dark:text-zinc-600"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className={`absolute w-8 h-8 rounded-full border-2 border-white dark:border-zinc-800 shadow-md flex items-center justify-center z-10 ${node.id === 1 ? "bg-red-500" : "bg-zinc-400 dark:bg-zinc-600"}`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              x: "-50%",
              y: "-50%",
            }}
            animate={
              node.id === 1
                ? { scale: [1, 1.2, 1] }
                : {
                    x: ["-50%", "-55%", "-50%", "-45%", "-50%"],
                    y: ["-50%", "-55%", "-50%", "-45%", "-50%"],
                  }
            }
            transition={{
              duration: node.id === 1 ? 2 : 0.5,
              repeat: Infinity,
              repeatDelay: node.id === 1 ? 1 : Math.random() * 2,
              delay: node.id === 1 ? 0 : 0.5,
            }}
          >
            {node.id === 1 && <AlertTriangle className="w-4 h-4 text-white" />}
          </motion.div>
        ))}

        {/* Ripple Effect for Center Node */}
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-red-500/30 z-0"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          animate={{ scale: [1, 3], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
      <p className="mt-8 text-center text-sm font-medium text-zinc-500 max-w-xs">
        Visualisasi{" "}
        <span className="text-red-600 dark:text-red-400">Tight Coupling</span>:
        Satu error di modul inti (tengah) menyebabkan kegagalan cascade ke modul
        lain.
      </p>
    </div>
  );
}

function PropDrillingViz() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-4">
      <div className="absolute inset-0 bg-purple-50/50 dark:bg-purple-900/5 rounded-xl" />

      <div className="flex flex-col items-center gap-4 relative z-10">
        {/* Level 1: App */}
        <div className="w-32 p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-sm text-center">
          <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
            App (State)
          </span>
        </div>

        {/* Connection */}
        <div className="h-6 w-0.5 bg-zinc-300 dark:bg-zinc-700 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-purple-500 absolute top-0"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Level 2: Layout */}
        <div className="w-32 p-2 bg-zinc-50 dark:bg-zinc-800/50 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-center opacity-70">
          <span className="text-xs text-zinc-500">Layout</span>
        </div>

        {/* Connection */}
        <div className="h-6 w-0.5 bg-zinc-300 dark:bg-zinc-700 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-purple-500 absolute top-0"
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
            }}
          />
        </div>

        {/* Level 3: Page */}
        <div className="w-32 p-2 bg-zinc-50 dark:bg-zinc-800/50 border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-center opacity-70">
          <span className="text-xs text-zinc-500">Page Container</span>
        </div>

        {/* Connection */}
        <div className="h-6 w-0.5 bg-zinc-300 dark:bg-zinc-700 relative overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-purple-500 absolute top-0"
            animate={{ y: ["-100%", "200%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
        </div>

        {/* Level 4: Component (Target) */}
        <div className="w-32 p-2 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg text-center shadow-sm">
          <span className="text-xs font-bold text-purple-700 dark:text-purple-300">
            Target Component
          </span>
        </div>
      </div>

      {/* Animated Data Packet - Overlay */}
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-purple-600 shadow-lg z-20 border-2 border-white"
        animate={{ y: [0, 160], opacity: [1, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        style={{ top: "60px" }} // Adjust start position
      />

      <p className="mt-8 text-center text-sm font-medium text-zinc-500 max-w-xs">
        Visualisasi{" "}
        <span className="text-purple-600 dark:text-purple-400">
          Prop Drilling
        </span>
        : Data harus melewati banyak layer komponen yang tidak membutuhkannya.
      </p>
    </div>
  );
}
