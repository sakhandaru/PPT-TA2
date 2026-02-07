"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onToggleGrid: () => void;
  onToggleTheme: () => void;
  theme: "dark" | "light";
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onToggleGrid,
  onToggleTheme,
  theme,
}: SlideNavigationProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 h-20 flex items-center justify-between px-8 z-40 group pointer-events-none">
      {/* Left Button */}
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="pointer-events-auto p-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 disabled:opacity-0 transition opacity-0 group-hover:opacity-100 text-zinc-800 dark:text-zinc-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Center Controls */}
      <div className="pointer-events-auto flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-sm font-mono text-zinc-500">
          {currentSlide + 1} / {totalSlides}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleGrid}
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white underline underline-offset-4"
          >
            View Grid
          </button>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all"
            title={
              theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="pointer-events-auto p-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-300/80 dark:hover:bg-zinc-700/80 disabled:opacity-0 transition opacity-0 group-hover:opacity-100 text-zinc-800 dark:text-zinc-100"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
