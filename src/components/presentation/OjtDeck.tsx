"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ClipboardCheck, Code2, FileText, Network } from "lucide-react";
import { Slide } from "./Slide";
import { OjtExperienceVisualizer } from "./OjtExperienceVisualizer";
import { OjtChallengeSlide } from "./OjtChallengeSlide";
import { OjtLearningSlide } from "./OjtLearningSlide";
import { OjtNextStepsSlide } from "./OjtNextStepsSlide";
import { OjtThankYouSlide } from "./OjtThankYouSlide";

function OjtExperienceSlide() {
  const [activeStory, setActiveStory] = useState(1);
  const stories = [["Sebelumnya", "Latar belakang non-ekonomi membuat dunia perbankan masih terasa asing."], ["Di proyek ini", "CBS, helpdesk, kebutuhan pengguna, dan proses bisnis dipelajari melalui SIMONTOK."], ["Yang berubah", "Aplikasi dipahami sebagai bagian dari kebutuhan bisnis yang nyata."]];
  return (
    <Slide
      key="ojt-objectives"
      title="Momen Paling Berkesan"
      subtitle="SIMONTOK membuat saya mulai memahami dunia perbankan dari dekat."
      className="bg-zinc-50 dark:bg-zinc-950"
      content={
        <div className="flex h-full flex-col justify-center gap-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <OjtExperienceVisualizer stage={activeStory as 0 | 1 | 2} />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {stories.map(([title, description], index) => (
                <motion.button
                  type="button"
                  key={title}
                  onClick={() => setActiveStory(index)}
                  onMouseEnter={() => setActiveStory(index)}
                  whileHover={{ y: -4 }}
                  aria-pressed={activeStory === index}
                  className={`min-h-32 border p-4 text-left transition-colors ${activeStory === index ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20 dark:shadow-[0_0_20px_rgba(96,165,250,0.12)]" : "border-zinc-200 dark:border-zinc-800"}`}
                >
                  <span className="font-mono text-xs text-blue-700 dark:text-blue-300">0{index + 1}</span>
                  <p className="mt-4 font-mono text-xs uppercase tracking-wider text-zinc-500">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{description}</p>
                </motion.button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-zinc-200 pt-5 font-mono text-xs text-zinc-500 dark:border-zinc-800">
            <span>Mempelajari aplikasi → Menyusun PRD → Memulai implementasi → Menyiapkan UAT</span>
            <span className="text-yellow-700 dark:text-yellow-300">{String(activeStory + 1).padStart(2, "0")} / 03</span>
          </div>
        </div>
      }
    />
  );
}

function OjtAchievementSlide() {
  const milestones = [
    ["01", "Pemahaman proses bisnis & sistem IT perbankan", "Memahami helpdesk, CBS, SIM, dan SDLC di BPR", Network],
    ["02", "Analisis kebutuhan & dokumentasi sistem", "Menyusun PRD SIMONTOK dari kajian Litbang", FileText],
    ["03", "Implementasi & pengujian aplikasi", "Mulai mengembangkan SIMONTOK dan UAT internal awal", Code2],
    ["04", "Kedisiplinan & penyelesaian tugas", "Mengikuti OJT sesuai arahan pembimbing", ClipboardCheck],
  ] as const;
  const reduceMotion = useReducedMotion();
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const selected = milestones[activeMilestone];

  useEffect(() => {
    if (reduceMotion) {
      setRevealedCount(milestones.length);
      return;
    }

    const timers = milestones.map((_, index) => window.setTimeout(() => {
      setRevealedCount(index + 1);
      setActiveMilestone(index);
    }, 420 + index * 430));

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [reduceMotion, milestones.length]);

  const selectMilestone = (index: number) => {
    setActiveMilestone(index);
    setRevealedCount((current) => Math.max(current, index + 1));
  };

  return (
    <Slide
      key="ojt-profile"
      title="Capaian Target & Indikator Jabatan"
      subtitle="Pilih indikator untuk melihat bukti capaian yang paling relevan."
      className="bg-zinc-50 dark:bg-zinc-950"
      content={
        <div className="flex h-full flex-col justify-center gap-5">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Target menjadi bukti kerja</p>
            <p className="font-mono text-xs text-zinc-500">{String(revealedCount).padStart(2, "0")} / 04 terbuka</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-zinc-950 p-6 text-white dark:bg-white dark:text-zinc-950"
            >
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-blue-400/30"
                animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.25, 0.5, 0.25] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-blue-300 dark:text-blue-700">Target / Capaian</span>
                <span className="font-mono text-xs text-zinc-500">OJT 2026</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected[0]}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                >
                  <div className="mb-3 flex items-center gap-2 font-mono text-xs text-yellow-300 dark:text-yellow-700">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{selected[0]} / 04  TERCAPAI</span>
                  </div>
                  <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{selected[1]}</h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 dark:text-zinc-600">{selected[2]}</p>
                </motion.div>
              </AnimatePresence>

              <div className="relative mt-6">
                <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  <span>Perjalanan OJT</span>
                  <span>{Math.round(((activeMilestone + 1) / milestones.length) * 100)}%</span>
                </div>
                <div className="h-1 bg-white/15 dark:bg-zinc-200">
                  <motion.div
                    className="h-full bg-yellow-300 dark:bg-yellow-600"
                    animate={{ width: `${((activeMilestone + 1) / milestones.length) * 100}%` }}
                    transition={{ type: "spring", stiffness: 180, damping: 24 }}
                  />
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {milestones.map(([number, title, description, Icon], index) => {
                const isActive = activeMilestone === index;
                const isRevealed = index < revealedCount;

                return (
                  <motion.button
                    key={number}
                    type="button"
                    onClick={() => selectMilestone(index)}
                    onMouseEnter={() => selectMilestone(index)}
                    onFocus={() => selectMilestone(index)}
                    aria-pressed={isActive}
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: isRevealed ? 1 : 0.42, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.18 + index * 0.12, duration: 0.35 }}
                    className={`group relative flex min-h-36 flex-col justify-between overflow-hidden border p-4 text-left transition-colors ${isActive ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20" : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"}`}
                  >
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-1 origin-left bg-blue-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-xs text-blue-700 dark:text-blue-300">{number}</span>
                      <Icon className={`h-5 w-5 ${isActive ? "text-blue-600 dark:text-blue-300" : "text-zinc-400"}`} strokeWidth={1.6} />
                    </div>
                    <div className="mt-5">
                      <h3 className="text-sm font-semibold leading-snug">{title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-500">{description}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 1.1, duration: 0.4 }}
            className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-4 dark:border-zinc-800"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">Rekomendasi pembimbing</p>
              <p className="mt-1 text-sm font-semibold">Direkomendasikan lanjut sesuai jalur kepegawaian</p>
            </div>
            <p className="max-w-sm text-right text-xs leading-relaxed text-zinc-500">Kebutuhan dipahami, didokumentasikan, mulai diimplementasikan, lalu disiapkan untuk diuji.</p>
          </motion.div>
        </div>
      }
    />
  );
}

export const ojtSlides = [
  <div key="ojt-cover" className="flex h-full w-full flex-col justify-between overflow-hidden bg-[#0b0d0f] p-12 text-white md:p-24">
    <div className="flex items-start justify-between border-b border-white/10 pb-5"><div><p className="font-mono text-xs uppercase tracking-[0.28em] text-blue-300">Evaluasi OJT</p><p className="mt-2 font-mono text-xs text-zinc-500">Laporan Pengalaman Kerja / 2026</p></div><div className="text-right font-mono text-xs text-zinc-500"><p>PT. BPR BKK JATENG</p><p className="mt-1">PERSERODA</p></div></div>
    <div className="grid items-end gap-10 md:grid-cols-[1fr_320px]"><div><p className="mb-5 font-mono text-sm text-zinc-500">01 / PROFIL & PENEMPATAN</p><h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">IT &<br />Jaringan</h1><div className="mt-8 h-px w-24 bg-yellow-300 shadow-[0_0_14px_rgba(253,224,71,0.35)]" /><p className="mt-5 max-w-xl text-lg text-zinc-400">Evaluasi pengalaman dan kontribusi selama masa OJT.</p></div><div className="border-l border-white/10 pl-6 font-mono"><p className="text-xs uppercase tracking-widest text-zinc-500">Peserta</p><p className="mt-2 text-xl font-medium">Rifqis Sakha Hilmi Aziz</p><p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">Penempatan</p><p className="mt-2 text-sm text-zinc-300">Divisi Operasional</p><p className="text-sm text-zinc-300">Staf IT dan Jaringan</p><p className="mt-2 text-sm text-zinc-500">12–21 Oktober 2026</p><p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">Pembimbing Lapangan</p><p className="mt-2 text-sm text-zinc-300">Muhammad Sukron, S. Kom</p></div></div>
    <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-widest text-zinc-600"><span>Staf IT dan Jaringan</span><span>OJT / 001</span></div>
  </div>,
  <OjtAchievementSlide key="ojt-profile" />,
  <OjtExperienceSlide key="ojt-objectives" />,
  <OjtChallengeSlide key="ojt-activities" />,
  <OjtLearningSlide key="ojt-evaluation" />,
  <OjtNextStepsSlide key="ojt-closing" />,
  <OjtThankYouSlide key="ojt-thank-you" />,
];

export const ojtSlideTitles = ["Profil & Unit Penempatan", "Capaian Target & Indikator", "Momen Paling Berkesan", "Kendala & Solusi", "Pembelajaran yang Didapat", "Langkah Berikutnya", "Terima Kasih"];
