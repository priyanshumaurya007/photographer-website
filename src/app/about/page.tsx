import Image from "next/image";
import Link from "next/link";
import { Camera, Heart, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const values = [
  {
    icon: Heart,
    title: "Passion & Emotion",
    description: "We believe the best photos are the ones that make you feel something. We hunt for real emotion, not just perfect poses."
  },
  {
    icon: Sparkles,
    title: "Cinematic Quality",
    description: "Our approach to lighting, composition, and editing ensures every image looks like it belongs in a luxury magazine."
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Your memories are irreplaceable. We use redundant storage, backup equipment, and clear contracts so you can relax."
  }
];

const behindTheScenes = [
  {
    title: "The Editing Process",
    description: "Every single image delivered goes through our rigorous post-production workflow. We color correct, tone, and meticulously retouch to achieve our signature luxury aesthetic while keeping you looking natural.",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Premium Equipment",
    description: "We invest in the industry's best gear. Sony Alpha mirrorless cameras, G-Master prime lenses, and professional lighting equipment ensure flawless results in any lighting condition.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1974&auto=format&fit=crop"
          alt="About LensCraft Studios"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <AnimatedSection className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-xl text-white/80 font-light tracking-wide max-w-2xl mx-auto">
            More than just photographers. We are storytellers.
          </p>
        </AnimatedSection>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Profile */}
        <section className="py-24 border-b border-warm-gray-dark/10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <AnimatedSection className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
                  alt="Aarav Sharma - Founder"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="w-full md:w-1/2">
              <h2 className="text-sm text-gold font-semibold tracking-widest uppercase mb-3">Meet The Founder</h2>
              <h3 className="text-4xl font-heading font-bold text-foreground mb-2">Aarav Sharma</h3>
              <p className="text-gold font-medium mb-8">Lead Photographer & Creative Director &bull; 8+ Years Experience</p>
              
              <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                <p>
                  "Photography isn't just about what something looks like; it's about what it feels like."
                </p>
                <p>
                  I started LensCraft Studios eight years ago with a simple mission: to capture the fleeting moments of human connection and preserve them forever. What began as a passion for street photography quickly evolved into a love for documenting love stories and grand celebrations.
                </p>
                <p>
                  My philosophy is rooted in observation rather than orchestration. I want to capture the tear your father sheds when he sees you in your dress, the nervous laughter before a big presentation, the unscripted joy of a shared secret.
                </p>
              </div>
              
              <div className="mt-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/signature.svg" alt="Aarav Sharma Signature" width={150} height={60} className="dark:invert opacity-70 mb-4" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 border-b border-warm-gray-dark/10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Our Philosophy</h2>
            <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
              We are driven by a singular vision: to provide a luxury, stress-free experience that results in breathtaking, heirloom-quality artwork.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.2} className="text-center px-6">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-xl font-heading font-bold text-foreground mb-4">{value.title}</h4>
                <p className="text-foreground/70">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Behind The Scenes */}
        <section className="py-24">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm text-gold font-semibold tracking-widest uppercase mb-3">The Process</h2>
            <h3 className="text-4xl font-heading font-bold text-foreground">Behind The Scenes</h3>
          </AnimatedSection>

          <div className="space-y-24">
            {behindTheScenes.map((item, index) => (
              <AnimatedSection key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h4 className="text-2xl font-heading font-bold text-foreground mb-4">{item.title}</h4>
                  <p className="text-foreground/70 leading-relaxed text-lg">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* CTA */}
        <AnimatedSection className="py-24 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Ready to create something beautiful?</h2>
          <Link href="/contact">
            <Button size="lg">Let's Talk</Button>
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
