import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Award, Users, Globe, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";
import { PressBar } from "@/components/ui/press-bar";

const stats = [
  { label: "Photoshoots Completed", value: "500+", icon: Award },
  { label: "Years Experience", value: "8+", icon: Star },
  { label: "Happy Clients", value: "250+", icon: Users },
  { label: "Destination Weddings", value: "50+", icon: Globe },
];

const featuredWork = [
  { title: "Royal Udaipur Wedding",   category: "Wedding",     imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" },
  { title: "Mountain Engagement",     category: "Pre-Wedding", imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop" },
  { title: "Vogue Elegance",          category: "Fashion",     imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" },
  { title: "Corporate Gala",          category: "Events",      imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" },
  { title: "Golden Hour Maternity",   category: "Maternity",   imageUrl: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=1925&auto=format&fit=crop" },
  { title: "Newborn Innocence",       category: "Newborn",     imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop" },
  { title: "Bali Destination",        category: "Travel",      imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop" },
  { title: "Tech Summit 2024",        category: "Corporate",   imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" },
];

const beforeAfterPairs = [
  {
    label: "Wedding Portrait",
    before: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=40&w=1200&auto=format&fit=crop&sat=-100&bri=-20",
    after:  "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Couple Shoot",
    before: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=40&w=1200&auto=format&fit=crop&sat=-100",
    after:  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "Bridal Edit",
    before: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=30&w=1200&auto=format&fit=crop&sat=-80",
    after:  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
  },
];

const reasons = [
  { title: "Creative Storytelling",     description: "We don't just take pictures; we capture the emotion, the unscripted moments, and the true essence of your story." },
  { title: "High-End Editing",          description: "Every image is meticulously retouched to ensure a cinematic, magazine-quality finish that stands the test of time." },
  { title: "Personalized Experience",   description: "From the first consultation to the final album delivery, we offer a tailored, stress-free experience." },
  { title: "Fast Delivery",             description: "We understand your excitement. Get a sneak peek within 48 hours and your full gallery in record time." },
];

const testimonials = [
  {
    name: "Priya & Rahul",
    text: "The photos exceeded every expectation. Every moment felt beautifully captured. Aarav made us feel so comfortable, and the results are simply magical.",
    role: "Wedding Clients",
    avatar: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=200&auto=format&fit=crop&facepad=3&face=1",
    location: "Mumbai",
  },
  {
    name: "Sarah Jenkins",
    text: "LensCraft Studios brought our corporate vision to life. Professional, punctual, and incredibly talented. Highly recommended for any commercial work.",
    role: "Marketing Director, TechCorp",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop&facepad=3",
    location: "Delhi",
  },
  {
    name: "Amit & Neha",
    text: "Looking at our maternity photos brings tears to my eyes. They perfectly captured the anticipation and love. Thank you for these memories.",
    role: "Maternity Clients",
    avatar: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=200&auto=format&fit=crop",
    location: "Bangalore",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop"
          alt="Cinematic Wedding Photography"
          fill
          priority
          className="object-cover scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Capturing Moments <br />
              <span className="text-gold italic font-light">That Last Forever</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide drop-shadow-md">
              Wedding, lifestyle, and commercial photography crafted with creativity, emotion, and elegance.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg" className="w-full sm:w-auto text-lg">View Portfolio</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white hover:text-black">
                Book a Session
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Press / Featured In Bar */}
      <PressBar />

      {/* Trust Section */}
      <section className="py-20 bg-background border-b border-warm-gray-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-foreground/60 uppercase tracking-widest">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm text-gold font-semibold tracking-widest uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Featured Work</h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWork.map((work, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <PortfolioCard {...work} />
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="group">
                View All Projects <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Before / After Editing Showcase */}
      <section className="py-24 bg-warm-gray-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm text-gold font-semibold tracking-widest uppercase mb-3">The Edit</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              See the LensCraft Difference
            </h3>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Drag the slider to reveal our signature editing — from raw capture to cinematic masterpiece.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterPairs.map((pair, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <p className="text-center text-sm text-foreground/50 uppercase tracking-widest mb-3 font-medium">
                  {pair.label}
                </p>
                <BeforeAfterSlider
                  beforeSrc={pair.before}
                  afterSrc={pair.after}
                  beforeLabel="RAW"
                  afterLabel="EDITED"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <AnimatedSection>
                <h2 className="text-sm text-gold font-semibold tracking-widest uppercase mb-3">The LensCraft Difference</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">Why Choose Us</h3>
                <div className="space-y-8">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                        <span className="text-gold font-heading font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-foreground mb-2">{reason.title}</h4>
                        <p className="text-foreground/70 leading-relaxed">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
            <div className="w-full md:w-1/2 relative">
              <AnimatedSection delay={0.2}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1974&auto=format&fit=crop"
                    alt="Photographer behind the scenes"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 border-2 border-gold/50 rounded-2xl m-4 z-10 pointer-events-none mix-blend-overlay" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — upgraded with avatars */}
      <section className="py-24 bg-warm-gray-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm text-gold font-semibold tracking-widest uppercase mb-3">Kind Words</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Client Testimonials</h3>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className="bg-background p-8 rounded-2xl h-full flex flex-col border border-warm-gray-dark/10 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-gold/20 mb-2" />
                  <p className="text-foreground/80 italic mb-8 flex-1 leading-relaxed text-[15px]">
                    "{testimonial.text}"
                  </p>
                  {/* Client info with avatar */}
                  <div className="flex items-center gap-4 pt-6 border-t border-warm-gray-dark/10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-gold/30">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-gold">{testimonial.role}</p>
                      <p className="text-xs text-foreground/40">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop"
          alt="Book a shoot"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        
        <AnimatedSection className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg text-white/80 mb-10 font-light">
            Ready to capture your memories? Reach out to check availability and discuss your vision.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-12 py-6 h-auto">Book Your Shoot</Button>
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
