"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Weddings", "Pre-Weddings", "Maternity", "Corporate", "Fashion", "Events"];

// Curated unique images — no duplicates, matched to categories
const portfolioItems = [
  // Weddings (6 images)
  { id: 0,  category: "Weddings",     title: "Golden Vows",            imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 1,  category: "Weddings",     title: "Royal Mandap",           imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-square" },
  { id: 2,  category: "Weddings",     title: "Bridal Glow",            imageUrl: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 3,  category: "Weddings",     title: "First Dance",            imageUrl: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1974&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 4,  category: "Weddings",     title: "Ceremony Kiss",          imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 5,  category: "Weddings",     title: "Floral Archway",         imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop",  aspectRatio: "aspect-square" },

  // Pre-Weddings (5 images)
  { id: 6,  category: "Pre-Weddings", title: "Mountain Escape",        imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 7,  category: "Pre-Weddings", title: "Bali Sunset Couple",     imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 8,  category: "Pre-Weddings", title: "Tuscan Dream",           imageUrl: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop",  aspectRatio: "aspect-square" },
  { id: 9,  category: "Pre-Weddings", title: "Lakeside Romance",       imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 10, category: "Pre-Weddings", title: "Floral Fields",          imageUrl: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=2069&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },

  // Maternity (4 images)
  { id: 11, category: "Maternity",    title: "Golden Hour Glow",       imageUrl: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=1925&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 12, category: "Maternity",    title: "Nature's Bloom",         imageUrl: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-square" },
  { id: 13, category: "Maternity",    title: "Newborn Innocence",      imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 14, category: "Maternity",    title: "Tender Moments",         imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },

  // Corporate (5 images)
  { id: 15, category: "Corporate",    title: "Tech Summit 2024",       imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 16, category: "Corporate",    title: "Product Launch",         imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",  aspectRatio: "aspect-square" },
  { id: 17, category: "Corporate",    title: "Leadership Portrait",    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 18, category: "Corporate",    title: "Conference Hall",        imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 19, category: "Corporate",    title: "Annual Gala Awards",     imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },

  // Fashion (5 images)
  { id: 20, category: "Fashion",      title: "Vogue Noir",             imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 21, category: "Fashion",      title: "Studio Couture",         imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1980&auto=format&fit=crop",  aspectRatio: "aspect-square" },
  { id: 22, category: "Fashion",      title: "Golden Drapes",          imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 23, category: "Fashion",      title: "Rooftop Editorial",      imageUrl: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 24, category: "Fashion",      title: "Avant-Garde",            imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-square" },

  // Events (7 images)
  { id: 25, category: "Events",       title: "Sangeet Night",          imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 26, category: "Events",       title: "Haldi Ritual",           imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-square" },
  { id: 27, category: "Events",       title: "Birthday Gala",          imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 28, category: "Events",       title: "Cultural Dance",         imageUrl: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
  { id: 29, category: "Events",       title: "Fireworks Reception",    imageUrl: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-square" },
  { id: 30, category: "Events",       title: "Fashion Week Show",      imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[3/4]" },
  { id: 31, category: "Events",       title: "Award Ceremony",         imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",  aspectRatio: "aspect-[4/3]" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string } | null>(null);

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
                onClick={() => setLightboxImage({ url: item.imageUrl, title: item.title })}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-white font-heading font-semibold text-base mb-1">{item.title}</p>
                    <p className="text-gold/80 tracking-wider uppercase text-xs">{item.category}</p>
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
              src={lightboxImage.url}
              alt={lightboxImage.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-8 text-center">
            <p className="text-white font-heading text-xl font-semibold">{lightboxImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
