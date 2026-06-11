import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-warm-gray-dark/20 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <img
                src="/camera-logo.svg"
                alt="LensCraft logo"
                width={36}
                height={36}
                className="transition-transform group-hover:scale-110"
                style={{ filter: "invert(74%) sepia(45%) saturate(600%) hue-rotate(5deg) brightness(105%) contrast(95%)" }}
              />
              <span className="font-heading text-2xl font-bold tracking-wider text-foreground">
                LensCraft
              </span>
            </Link>
            <p className="text-foreground/70 max-w-sm mb-6 leading-relaxed">
              Wedding, lifestyle, and commercial photography crafted with creativity, emotion, and elegance. Based in Mumbai, traveling worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-warm-gray-dark/50 flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-colors font-bold text-sm">
                IG
              </a>
              <a href="mailto:hello@lenscraft.com" className="w-10 h-10 rounded-full border border-warm-gray-dark/50 flex items-center justify-center text-foreground hover:border-gold hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {['Portfolio', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-foreground/70 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/70">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>123 Luxury Lane, Bandra West<br />Mumbai, MH 400050</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/70">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>hello@lenscraft.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-gray-dark/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} LensCraft Studios. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
