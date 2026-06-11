import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";

const services = [
  {
    title: "Wedding Photography",
    description: "Comprehensive coverage of your special day, capturing every emotion, ritual, and celebration with a cinematic touch.",
    price: "Starting at ₹1,50,000",
    deliverables: "500+ Edited Photos, High-Res Gallery, Premium Album",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Pre-Wedding Shoots",
    description: "Tell your unique love story before the big day. We help conceptualize themes, scout locations, and direct your perfect shoot.",
    price: "Starting at ₹50,000",
    deliverables: "100+ Edited Photos, 1 Minute Teaser Video",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Maternity & Newborn",
    description: "Preserve the miracle of life. Gentle, comfortable, and beautifully styled sessions for expecting mothers and newborns.",
    price: "Starting at ₹35,000",
    deliverables: "50+ Edited Photos, 3 Outfit Changes, Prop Setup",
    image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Corporate & Events",
    description: "Professional coverage for corporate galas, product launches, and brand events. High-quality imagery for marketing and PR.",
    price: "Custom Quote",
    deliverables: "Rapid 24h Delivery Available, Commercial Licensing",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
  }
];

const packages = [
  {
    name: "Silver Package",
    price: "₹80,000",
    features: [
      "4 Hours Coverage",
      "100 Edited Photos",
      "Online Digital Gallery",
      "Print Release"
    ],
    recommended: false
  },
  {
    name: "Gold Package",
    price: "₹1,50,000",
    features: [
      "Full Day Coverage (10 Hours)",
      "300 Edited Photos",
      "Second Shooter Included",
      "Premium Leather Album",
      "Engagement Session (1 Hour)"
    ],
    recommended: true
  },
  {
    name: "Platinum Package",
    price: "₹2,50,000",
    features: [
      "Multi-Day Coverage (Up to 3 Days)",
      "Unlimited Edited Photos",
      "Cinematic Video Edit",
      "Drone Photography",
      "2 Premium Albums + 2 Parent Albums",
      "Same Day Edit (Sneak Peek)"
    ],
    recommended: false
  }
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Services & Pricing
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            We offer bespoke photography experiences tailored to your unique needs. From intimate elopements to grand celebrations, we've got you covered.
          </p>
        </AnimatedSection>

        {/* Services List */}
        <div className="space-y-32 mb-32">
          {services.map((service, index) => (
            <AnimatedSection key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-foreground/70 leading-relaxed mb-8 text-lg">{service.description}</p>
                <div className="bg-warm-gray-dark/5 border border-warm-gray-dark/10 p-6 rounded-xl mb-8">
                  <p className="font-semibold text-gold mb-2 text-xl">{service.price}</p>
                  <p className="text-sm text-foreground/60"><span className="font-medium text-foreground">Includes:</span> {service.deliverables}</p>
                </div>
                <Link href="/contact">
                  <Button variant="outline">Inquire Now</Button>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pricing Packages */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-sm text-gold font-semibold tracking-widest uppercase mb-3">Investment</h2>
          <h3 className="text-4xl font-heading font-bold text-foreground">Wedding Packages</h3>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className={`relative p-8 rounded-2xl border ${pkg.recommended ? 'border-gold bg-gold/5 shadow-2xl scale-105 z-10' : 'border-warm-gray-dark/20 bg-background'}`}>
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h4 className="text-2xl font-heading font-bold text-foreground mb-2 text-center">{pkg.name}</h4>
                <div className="text-center mb-8 pb-8 border-b border-warm-gray-dark/20">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full">
                  <Button className="w-full" variant={pkg.recommended ? "default" : "outline"}>
                    Choose {pkg.name.split(' ')[0]}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
