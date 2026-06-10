"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Weddings", "Pre-Weddings", "Maternity", "Corporate", "Fashion", "Events"];

// Generate realistic placeholder images
const generatePortfolio = () => {
  const categoriesList = categories.filter((c) => c !== "All");
  const baseUrls = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628190772274-124b130e6cc4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",
  ];

  return Array.from({ length: 32 }).map((_, i) => ({
    id: i,
    category: categoriesList[i % categoriesList.length],
    imageUrl: baseUrls[i % baseUrls.length],
    // Randomize aspect ratio for masonry effect
    aspectRatio: i % 3 === 0 ? "aspect-square" : i % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]",
  }));
};

const portfolioItems = generatePortfolio();

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Our Portfolio
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A curated collection of our favorite moments. Filter by category to explore our diverse range of photography services.
          </p>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </AnimatedSection>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={Math.min((index % 10) * 0.1, 0.5)}>
              <div
                className={cn(
                  "relative group overflow-hidden rounded-xl bg-warm-gray-dark/10 cursor-pointer break-inside-avoid",
                  item.aspectRatio
                )}
                onClick={() => setLightboxImage(item.imageUrl)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.category}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-white font-medium tracking-wider uppercase text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm">
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] px-4">
            <Image
              src={lightboxImage}
              alt="Lightbox"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
