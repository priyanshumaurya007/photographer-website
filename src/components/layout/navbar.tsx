"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-warm-gray-dark/20 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="outline" size="sm" className="ml-4 border-gold text-gold hover:bg-gold hover:text-black">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-warm-gray-dark/20 py-4 px-4 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground/80 hover:text-gold transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full mt-2">Book Now</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
