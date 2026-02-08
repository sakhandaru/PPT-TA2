"use client";

import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
  fontFamily: "inherit",
});

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export default function MermaidDiagram({
  chart,
  className,
}: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.contentLoaded();
      const renderDiagram = async () => {
        try {
          const { svg } = await mermaid.render(`mermaid-${Date.now()}`, chart);
          if (containerRef.current) {
            containerRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error("Mermaid render error:", error);
          if (containerRef.current) {
            containerRef.current.textContent = "Failed to render diagram.";
          }
        }
      };

      renderDiagram();
    }
  }, [chart]);

  return <div ref={containerRef} className={className} />;
}
