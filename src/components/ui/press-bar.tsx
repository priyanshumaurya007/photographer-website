"use client";

import { useEffect, useRef } from "react";

const pressLogos = [
  { name: "Vogue India",         abbr: "VOGUE" },
  { name: "Brides Today",        abbr: "BRIDES TODAY" },
  { name: "WeddingWire",         abbr: "WeddingWire" },
  { name: "Times Food",          abbr: "TIMES FOOD" },
  { name: "Harper's Bazaar",     abbr: "HARPER'S BAZAAR" },
  { name: "The Better India",    abbr: "THE BETTER INDIA" },
  { name: "Femina",              abbr: "FEMINA" },
  { name: "Wedding Sutra",       abbr: "WEDDING SUTRA" },
  { name: "Grazia",              abbr: "GRAZIA" },
];

// Duplicate for seamless infinite scroll
const allLogos = [...pressLogos, ...pressLogos];

export function PressBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-14 border-y border-warm-gray-dark/10 overflow-hidden bg-warm-gray-dark/3">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-foreground/40">
          As Seen & Featured In
        </p>
      </div>
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div ref={trackRef} className="flex items-center gap-16 animate-[marquee_30s_linear_infinite] w-max">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 shrink-0 group cursor-default"
            >
              <span className="text-xl font-heading font-bold tracking-wider text-foreground/25 group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
                {logo.abbr}
              </span>
              {i < allLogos.length - 1 && (
                <span className="ml-16 w-1 h-1 rounded-full bg-gold/30 inline-block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
