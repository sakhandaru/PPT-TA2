"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Slide13_ThankYou() {
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Background Noise & Gradient Orbs */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] mix-blend-screen"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] mix-blend-screen"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center p-8 max-w-4xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-2xl">
            Terima Kasih
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-blue-200/80 font-medium mb-12 max-w-2xl leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Atas perhatian, waktu, dan kesempatan yang telah diberikan dalam sesi
          ini.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <ContactLink
            icon={<Mail className="w-5 h-5" />}
            label="email@anda.com"
            href="mailto:email@anda.com"
          />
          <ContactLink
            icon={<Github className="w-5 h-5" />}
            label="github.com/username"
            href="https://github.com"
          />
          <ContactLink
            icon={<Linkedin className="w-5 h-5" />}
            label="linkedin.com/in/username"
            href="https://linkedin.com"
          />
        </motion.div>

        <motion.div
          className="mt-16 text-sm text-white/20 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © 2026 Presentation Deck • Built with Next.js & Framer Motion
        </motion.div>
      </div>
    </div>
  );
}

function ContactLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md group"
    >
      <span className="text-blue-300 group-hover:text-blue-200 transition-colors">
        {icon}
      </span>
      <span className="font-semibold text-white/90 group-hover:text-white">
        {label}
      </span>
      <ExternalLink className="w-3 h-3 text-white/30 group-hover:text-white/50 opacity-0 group-hover:opacity-100 transition-all -ml-1" />
    </a>
  );
}
