"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideNavigation from "./SlideNavigation";

interface SlideContainerProps {
  slides: React.ReactNode[];
  slideTitles?: string[];
}

export function SlideContainer({ slides, slideTitles }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events if user is typing in an input (if any existed, good practice)
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === " ") {
        e.preventDefault(); // Prevent page scroll
        setIsGridOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsGridOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const [isGridOpen, setIsGridOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check system preference on load
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="relative h-screen w-full bg-background overflow-hidden flex flex-col">
      {/* Slide Area */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <div key={currentSlide} className="h-full w-full absolute inset-0">
            {slides[currentSlide]}
          </div>
        </AnimatePresence>

        {/* Grid Navigation Overlay */}
        <AnimatePresence>
          {isGridOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/70 backdrop-blur-md p-8"
              onClick={() => setIsGridOpen(false)}
            >
              <div className="w-full max-w-5xl max-h-full overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-2">
                  <h2 className="text-xl font-mono font-bold text-zinc-100 tracking-tight">
                    _NAVIGATION_SYSTEM
                  </h2>
                  <button
                    onClick={() => setIsGridOpen(false)}
                    className="text-zinc-500 hover:text-white transition-colors text-xs font-mono"
                  >
                    [ESC] TO CLOSE
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pb-20">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index);
                        setIsGridOpen(false);
                      }}
                      className={`group relative h-24 p-3 rounded-md border text-left transition-all duration-200 ${
                        currentSlide === index
                          ? "bg-white/10 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                          : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex flex-col justify-between h-full">
                        <span
                          className={`text-[10px] font-mono ${
                            currentSlide === index
                              ? "text-white"
                              : "text-zinc-600 group-hover:text-zinc-400"
                          }`}
                        >
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <span
                          className={`font-mono text-xs leading-tight line-clamp-3 ${
                            currentSlide === index
                              ? "text-white font-semibold"
                              : "text-zinc-400 group-hover:text-zinc-200"
                          }`}
                        >
                          {slideTitles?.[index] || `SLIDE_DATA_${index + 1}`}
                        </span>
                      </div>

                      {/* Active Indicator Corner */}
                      {currentSlide === index && (
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/60 rounded-tr-sm" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Page Number System */}
      {currentSlide !== slides.length - 1 && (
        <div
          className={`absolute z-40 pointer-events-none transition-all duration-500 ${
            currentSlide === 0
              ? "bottom-6 left-12 right-12 flex justify-between items-end"
              : "top-6 right-8 flex flex-col items-end"
          }`}
        >
          {/* Page Number */}
          <div
            className={`font-bold text-zinc-200 dark:text-zinc-900 leading-none select-none transition-all duration-500 ${
              currentSlide === 0
                ? "text-7xl -mb-3 opacity-50 dark:opacity-80 mix-blend-difference dark:mix-blend-normal"
                : "text-6xl opacity-50 dark:opacity-80"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="block"
              >
                {currentSlide + 1 < 10
                  ? `0${currentSlide + 1}`
                  : currentSlide + 1}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* University Info (Cover Only) */}
          {currentSlide === 0 && (
            <div className="flex flex-col items-end gap-1">
              <div className="h-1 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  key={currentSlide}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-zinc-900 dark:bg-white"
                />
              </div>
              <p className="text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mt-2 mix-blend-difference dark:mix-blend-normal">
                Dian Nuswantoro University
              </p>
            </div>
          )}
        </div>
      )}

      {/* New Navigation Bar */}
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onToggleGrid={() => setIsGridOpen(!isGridOpen)}
        onToggleTheme={toggleTheme}
        theme={theme}
      />

      {/* Progress Bar Line */}
      <div className="absolute bottom-0 left-0 h-1 bg-muted w-full z-50">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
