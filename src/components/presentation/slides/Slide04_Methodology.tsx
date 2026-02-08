"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GitMerge,
  Cpu,
  Zap,
  ShieldCheck,
  LayoutTemplate,
  RefreshCw,
  Rocket,
  Code2,
  PenTool,
  TestTube2,
  Users,
} from "lucide-react";

export default function Slide04_Methodology() {
  return (
    // Added overflow-hidden and adjusted padding for no-scroll
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden bg-zinc-50 dark:bg-zinc-950">
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
            Mengadopsi standar industri modern untuk menjamin{" "}
            <strong className="text-zinc-900 dark:text-zinc-100">
              kualitas, performa, dan skalabilitas
            </strong>{" "}
            jangka panjang.
          </motion.p>

          <div className="grid gap-4">
            <StandardItem
              title="Next.js 14 Framework"
              desc="Standar SEO & Kecepatan Loading (Google Friendly)."
              icon={<Cpu className="w-5 h-5" />}
              delay={0.3}
            />
            <StandardItem
              title="Tailwind CSS System"
              desc="Pengembangan UI Cepat & Konsisten (Design System)."
              icon={<LayoutTemplate className="w-5 h-5" />}
              delay={0.4}
            />
            <StandardItem
              title="Lighthouse Audit"
              desc="Standar Kualitas Global (Performance & Accessibility)."
              icon={<ShieldCheck className="w-5 h-5" />}
              delay={0.5}
            />
            <StandardItem
              title="Extreme Programming"
              desc="Metode Agile untuk adaptasi perubahan bisnis yang cepat."
              icon={<Zap className="w-5 h-5" />}
              delay={0.6}
              isHighlight
            />
          </div>
        </div>

        {/* Right Column: XP Cycle Diagram - Scaled down to fit */}
        <motion.div
          className="flex items-center justify-center relative h-full max-h-[450px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          {/* Central XP Core */}
          <div className="absolute z-20 flex flex-col items-center justify-center bg-white dark:bg-zinc-900 border-4 border-purple-100 dark:border-purple-900/30 rounded-full w-36 h-36 shadow-xl">
            <div className="text-3xl font-black text-purple-600 dark:text-purple-400">
              XP
            </div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
              Looping Process
            </div>
            <RefreshCw className="w-6 h-6 text-purple-400 mt-2 animate-spin-slow" />
          </div>

          {/* Orbiting Container */}
          <div className="absolute w-[350px] h-[350px]">
            {/* Dashed Ring */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40 text-zinc-400"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Looping Satellite (The Process Flow) */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-[2%] left-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] -translate-x-1/2" />
            </motion.div>

            {/* Nodes - Fixed Rotation but positioned on ring */}
            {/* 1. Planning (Top Left - 225deg) */}
            <CycleNode
              angle={225}
              color="bg-blue-500"
              icon={<Users className="w-6 h-6 text-white" />}
              label="Planning"
              delay={0}
            />

            {/* 2. Design (Top Right - 315deg) */}
            <CycleNode
              angle={315}
              color="bg-indigo-500"
              icon={<PenTool className="w-6 h-6 text-white" />}
              label="Design"
              delay={2}
            />

            {/* 3. Coding (Bottom Right - 45deg) */}
            <CycleNode
              angle={45}
              color="bg-pink-500"
              icon={<Code2 className="w-6 h-6 text-white" />}
              label="Coding"
              delay={4}
            />

            {/* 4. Testing (Bottom Left - 135deg) */}
            <CycleNode
              angle={135}
              color="bg-orange-500"
              icon={<TestTube2 className="w-6 h-6 text-white" />}
              label="Testing"
              delay={6}
            />
          </div>

          {/* Release Escape Velocity */}
          <motion.div
            className="absolute -bottom-8 lg:-right-8 lg:bottom-auto lg:top-1/2 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <div className="h-4 lg:h-1 w-1 lg:w-16 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-green-500 rounded-full"></div>
              <div className="bg-green-500 text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-3">
                <Rocket className="w-6 h-6" />
                <span className="font-bold text-sm uppercase tracking-wide">
                  Release
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
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

function CycleNode({
  angle,
  color,
  icon,
  label,
  delay,
}: {
  angle: number;
  color: string;
  icon: React.ReactNode;
  label: string;
  delay: number;
}) {
  // 160px radius to match container roughly
  return (
    <div
      className="absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12"
      style={{
        transform: `rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`,
      }}
    >
      <div
        className={`flex flex-col items-center justify-center w-full h-full rounded-full shadow-lg border-4 border-white dark:border-zinc-950 ${color} text-white`}
      >
        {icon}
        <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}
