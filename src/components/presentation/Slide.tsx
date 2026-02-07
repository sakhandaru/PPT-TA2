"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SlideVariant =
  | "cover"
  | "content"
  | "section"
  | "image-left"
  | "image-right";

export interface SlideProps {
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  variant?: SlideVariant;
  className?: string;
}

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const transition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export function Slide({
  title,
  subtitle,
  content,
  variant = "content",
  className,
}: SlideProps) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={transition}
      className={cn(
        "flex h-full w-full flex-col p-12 md:p-24 overflow-hidden",
        className,
      )}
    >
      {variant === "cover" ? (
        <div className="flex flex-1 flex-col items-center justify-center text-center space-y-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      ) : (
        <div className="flex flex-1 flex-col space-y-8">
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="border-b pb-6"
          >
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground mt-2">{subtitle}</p>
            )}
          </motion.header>

          <motion.div
            className="flex-1 text-lg leading-relaxed space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {content}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
