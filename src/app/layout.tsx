import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LensCraft Studios | Professional Photography",
  description: "Wedding, lifestyle, and commercial photography crafted with creativity, emotion, and elegance.",
  keywords: ["photography", "wedding photography", "premium photography", "LensCraft Studios", "Aarav Sharma"],
  openGraph: {
    title: "LensCraft Studios | Professional Photography",
    description: "Wedding, lifestyle, and commercial photography crafted with creativity, emotion, and elegance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    "name": "LensCraft Studios",
    "image": "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070",
    "description": "Wedding, lifestyle, and commercial photography crafted with creativity, emotion, and elegance.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Luxury Lane, Bandra West",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "postalCode": "400050",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210",
    "founder": {
      "@type": "Person",
      "name": "Aarav Sharma"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
