"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GitMerge,
  LayoutTemplate,
  RefreshCw,
  Rocket,
  Code2,
  PenTool,
  TestTube2,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function Slide04_Methodology() {
  const steps = [
    {
      label: "Planning",
      icon: <Users className="w-5 h-5 text-white" />,
      color: "bg-blue-500",
      angle: -90, // Top
    },
    {
      label: "Design",
      icon: <PenTool className="w-5 h-5 text-white" />,
      color: "bg-indigo-500",
      angle: -18, // Top Right
    },
    {
      label: "Coding",
      icon: <Code2 className="w-5 h-5 text-white" />,
      color: "bg-pink-500",
      angle: 54, // Bottom Right
    },
    {
      label: "Testing",
      icon: <TestTube2 className="w-5 h-5 text-white" />,
      color: "bg-orange-500",
      angle: 126, // Bottom Left
    },
    {
      label: "Release",
      icon: <Rocket className="w-5 h-5 text-white" />,
      color: "bg-green-500",
      angle: 198, // Left
    },
  ];

  return (
    // Added overflow-hidden and adjusted padding for no-scroll
    <div className="w-full h-full px-8 pt-8 pb-16 md:px-12 md:pt-12 md:pb-16 flex flex-col overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <motion.div
        className="shrink-0 mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-6 mb-2">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
            <GitMerge className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Metodologi & Standar Teknologi
          </h2>
        </div>
        <p className="text-xl text-zinc-500 ml-20 flex items-center gap-3">
          Kombinasi{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            Extreme Programming (XP)
          </span>{" "}
          &{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            Enterprise Grade Stack
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1 min-h-0 items-center">
        {/* Left Column: Tech Standards (The "Why") */}
        <div className="flex flex-col justify-center space-y-6 h-full">
          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Metode ini dipilih karena{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">
              siklusnya cepat dan iteratif
            </strong>
            . Mengadopsi standar industri modern untuk menjamin{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">
              kualitas, performa, dan skalabilitas
            </strong>{" "}
            jangka panjang.
          </motion.p>

          <div className="grid gap-4">
            <StandardItem
              title="Continuous Refactoring"
              desc="Kode diperbaiki secara terus menerus untuk menjaga kualitas & adaptabilitas."
              icon={<RefreshCw className="w-5 h-5 text-blue-500" />}
              delay={0.3}
            />
            <StandardItem
              title="Simple Design"
              desc="Mengutamakan solusi arsitektur yang sederhana, bersih, namun efektif."
              icon={<LayoutTemplate className="w-5 h-5 text-amber-500" />}
              delay={0.4}
            />
            <StandardItem
              title="Strict Testing (TDD)"
              desc="Memastikan setiap komponen teruji secara otomatis sebelum digabungkan."
              icon={<TestTube2 className="w-5 h-5 text-emerald-500" />}
              delay={0.5}
            />
            <StandardItem
              title="Iterative Delivery"
              desc="Selaras dengan siklus: Planning, Design, Coding, Testing, & Deploy."
              icon={<Rocket className="w-5 h-5 text-purple-600" />}
              delay={0.6}
              isHighlight
            />
          </div>
        </div>

        {/* Right Column: XP Cycle Diagram - Proportional Redesign */}
        <div className="flex items-center justify-center h-full max-h-[450px]">
          <motion.div
            className="relative w-[340px] h-[340px] aspect-square shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            {/* Dashed Orbit Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-200 dark:border-zinc-800" />

            {/* Central XP Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center bg-white dark:bg-zinc-900 border-4 border-purple-100 dark:border-purple-900/30 rounded-full w-32 h-32 shadow-2xl">
              <div className="text-4xl font-black text-purple-600 dark:text-purple-400">
                XP
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">
                Cycle
              </div>
              <RefreshCw className="w-5 h-5 text-purple-400 mt-2 animate-spin-slow opacity-70" />
            </div>

            {/* Process Nodes Container - Static */}
            <div className="absolute inset-0">
              {steps.map((step, index) => {
                // Calculate position based on angle
                const radius = 170;
                const x = Math.cos((step.angle * Math.PI) / 180) * radius;
                const y = Math.sin((step.angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={step.label}
                    className="absolute top-1/2 left-1/2 -mt-10 -ml-10 w-20 h-20 z-30"
                    style={{
                      x,
                      y,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.4, // Sequential appearance
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <motion.div
                        className={`w-12 h-12 rounded-2xl ${step.color} shadow-lg flex items-center justify-center text-white mb-2 border-2 border-white dark:border-zinc-900 relative`}
                        animate={{
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            "0 0 15px rgba(168, 85, 247, 0.5)",
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          delay: 3 + index * 2, // Highlight loop after appearance
                          repeat: Infinity,
                          repeatDelay: 8, // Wait for other nodes
                        }}
                      >
                        {step.icon}
                      </motion.div>
                      <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-white/80 dark:bg-zinc-900/80 px-2 py-0.5 rounded-full backdrop-blur-sm border border-zinc-100 dark:border-zinc-800">
                        {step.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Connecting Arrows (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30 text-zinc-400 dark:text-zinc-600"
              viewBox="0 0 340 340"
              fill="none"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
              {/* Draw curved paths between nodes */}
              {/* This is a simplified visual representation of flow */}
              <circle
                cx="170"
                cy="170"
                r="170"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="8 8"
                opacity="0.5"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function StandardItem({
  title,
  desc,
  icon,
  delay,
  isHighlight,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay: number;
  isHighlight?: boolean;
}) {
  return (
    <motion.div
      className={`flex items-center p-4 rounded-xl border transition-colors ${isHighlight ? "bg-purple-50 border-purple-200 dark:bg-purple-900/10 dark:border-purple-900/30" : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"}`}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-lg mr-4 shrink-0 ${isHighlight ? "bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
          {title}
        </h4>
        <p className="text-base text-zinc-500 dark:text-zinc-400 truncate">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
