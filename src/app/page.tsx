"use client";

import React from "react";
import { SlideContainer } from "@/components/presentation/SlideContainer";
import Slide01_Cover from "@/components/presentation/slides/Slide01_Cover";
import Slide02_Background from "@/components/presentation/slides/Slide02_Background";
import Slide03_GoalScope from "@/components/presentation/slides/Slide03_GoalScope";
import Slide04_Methodology from "@/components/presentation/slides/Slide04_Methodology";
import Slide05_Architecture from "@/components/presentation/slides/Slide05_Architecture";
import Slide06_SystemModeling from "@/components/presentation/slides/Slide06_SystemModeling";
import Slide07_Refactoring from "@/components/presentation/slides/Slide07_Refactoring";
import Slide08_StateManagement from "@/components/presentation/slides/Slide08_StateManagement";
import Slide09_UIOptimization from "@/components/presentation/slides/Slide09_UIOptimization";
import Slide10_PerformanceEvaluation from "@/components/presentation/slides/Slide10_PerformanceEvaluation";
import Slide11_UAT from "@/components/presentation/slides/Slide11_UAT";
import Slide12_Conclusion from "@/components/presentation/slides/Slide12_Conclusion";
import Slide13_ThankYou from "@/components/presentation/slides/Slide13_ThankYou";
import { ojtSlides, ojtSlideTitles } from "@/components/presentation/OjtDeck";

const Page = () => {
  const [activeDeckId, setActiveDeckId] = React.useState<string | null>(null);

  const skripsiSlides = [
    <Slide01_Cover key="cover" />,
    <Slide02_Background key="background" />,
    <Slide03_GoalScope key="goalscope" />,
    <Slide04_Methodology key="methodology" />,
    <Slide05_Architecture key="architecture" />,
    <Slide06_SystemModeling key="systemmodeling" />,
    <Slide07_Refactoring key="refactoring" />,
    <Slide08_StateManagement key="statemanagement" />,
    <Slide09_UIOptimization key="uioptimization" />,
    <Slide10_PerformanceEvaluation key="performance" />,
    <Slide11_UAT key="uat" />,
    <Slide12_Conclusion key="conclusion" />,
    <Slide13_ThankYou key="thankyou" />,
  ];

  const skripsiSlideTitles = [
    "Cover",
    "Latar Belakang",
    "Rumusan Masalah & Tujuan",
    "Metodologi",
    "Arsitektur Sistem",
    "Pemodelan Sistem",
    "Refactoring Strategy",
    "State Management",
    "UI Optimization",
    "Performance Evaluation",
    "User Acceptance Test",
    "Kesimpulan",
    "Terima Kasih",
  ];

  const activeDeck = activeDeckId === "ojt"
    ? { slides: ojtSlides, slideTitles: ojtSlideTitles }
    : { slides: skripsiSlides, slideTitles: skripsiSlideTitles };

  if (!activeDeckId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-8 text-zinc-100">
        <section className="w-full max-w-5xl">
          <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-3">
            <div>
              <h1 className="font-mono text-xl font-bold tracking-tight">_PRESENTATION_SELECT</h1>
              <p className="mt-2 font-mono text-xs text-zinc-500">Pilih materi presentasi untuk dibuka</p>
            </div>
            <span className="font-mono text-xs text-zinc-600">[SELECT_DECK]</span>
          </div>

          <div className="grid gap-2 md:grid-cols-2">
            <button
              type="button"
              onClick={() => setActiveDeckId("skripsi")}
              className="group relative h-48 border border-white/10 bg-transparent p-4 text-left transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400">01</span>
                <div>
                  <h2 className="font-mono text-sm text-zinc-300 group-hover:text-white">Presentasi Skripsi</h2>
                  <p className="mt-2 max-w-md font-mono text-xs leading-relaxed text-zinc-600 group-hover:text-zinc-400">Penerapan refaktorisasi berbasis komponen modular pada aplikasi web TVKU.</p>
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveDeckId("ojt")}
              className="group relative h-48 border border-white/10 bg-transparent p-4 text-left transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400">02</span>
                <div>
                  <h2 className="font-mono text-sm text-zinc-300 group-hover:text-white">Evaluasi OJT</h2>
                  <p className="mt-2 max-w-md font-mono text-xs leading-relaxed text-zinc-600 group-hover:text-zinc-400">Ringkasan pelaksanaan, kontribusi, dan evaluasi kompetensi selama On The Job Training.</p>
                </div>
              </div>
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <SlideContainer
        slides={activeDeck.slides}
        slideTitles={activeDeck.slideTitles}
        activeDeckId={activeDeckId}
        onHome={() => setActiveDeckId(null)}
      />
    </main>
  );
};

export default Page;
