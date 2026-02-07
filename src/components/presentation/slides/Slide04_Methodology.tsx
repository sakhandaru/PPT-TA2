"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GitMerge,
  PenTool,
  Code2,
  TestTube2,
  Rocket,
  RefreshCw,
  Users,
} from "lucide-react";

export default function Slide04_Methodology() {
  return (
    // Added overflow-hidden and adjusted padding for no-scroll
    <div className="w-full h-full p-8 md:p-12 flex flex-col overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Metodologi Penelitian
          </h2>
        </div>
        <p className="text-2xl text-muted-foreground ml-20 flex items-center gap-3">
          Metode:{" "}
          <span className="font-semibold text-foreground">
            Extreme Programming (XP)
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 text-base rounded-full font-bold">
            Iterative & Loop
          </span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1 min-h-0 items-center">
        {/* Left Column: Tahapan Detail - Scaled Up Text */}
        <div className="flex flex-col justify-center space-y-6 h-full">
          <motion.p
            className="text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Pendekatan iteratif yang berfokus pada kecepatan adaptasi &
            kualitas.
          </motion.p>

          <div className="grid gap-4">
            <StageItem
              number="1"
              title="Planning"
              desc="Identifikasi kebutuhan & user stories."
              icon={<Users className="w-5 h-5" />}
              delay={0.3}
            />
            <StageItem
              number="2"
              title="Design"
              desc="Simple Design komponen modular."
              icon={<PenTool className="w-5 h-5" />}
              delay={0.4}
            />
            <StageItem
              number="3"
              title="Coding"
              desc="Implementasi & Continuous Refactoring."
              icon={<Code2 className="w-5 h-5" />}
              delay={0.5}
            />
            <StageItem
              number="4"
              title="Testing"
              desc="Unit, Integration & Performance Test."
              icon={<TestTube2 className="w-5 h-5" />}
              delay={0.6}
            />
            <StageItem
              number="5"
              title="Release"
              desc="Deployment ke Vercel & Evaluasi."
              icon={<Rocket className="w-5 h-5" />}
              delay={0.7}
              isLast
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
          <div className="absolute z-20 flex flex-col items-center justify-center bg-background border-4 border-purple-100 dark:border-purple-900/30 rounded-full w-36 h-36 shadow-xl">
            <div className="text-3xl font-black text-purple-600 dark:text-purple-400">
              XP
            </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
              Looping Process
            </div>
            <RefreshCw className="w-6 h-6 text-purple-400 mt-2 animate-spin-slow" />
          </div>

          {/* Orbiting Container */}
          <div className="absolute w-[350px] h-[350px]">
            {/* Dashed Ring */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40"
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

function StageItem({
  number,
  title,
  desc,
  icon,
  delay,
  isLast,
}: {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay: number;
  isLast?: boolean;
}) {
  return (
    <motion.div
      className={`flex items-center p-4 rounded-xl border transition-colors ${isLast ? "bg-green-50/50 border-green-200 dark:bg-green-900/10 dark:border-green-900/30" : "bg-card border-border/50 hover:bg-muted/50"}`}
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-lg mr-4 shrink-0 ${isLast ? "bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400" : "bg-secondary text-primary"}`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
          {title}
        </h4>
        <p className="text-base text-muted-foreground truncate">{desc}</p>
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
        className={`flex flex-col items-center justify-center w-full h-full rounded-full shadow-lg border-4 border-background ${color} text-white`}
      >
        {icon}
        <span className="text-[10px] font-bold mt-1 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}
