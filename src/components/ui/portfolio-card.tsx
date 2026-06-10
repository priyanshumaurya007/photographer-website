import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: string;
  imageUrl: string;
  href?: string;
}

export function PortfolioCard({ title, category, imageUrl, href = "/portfolio" }: PortfolioCardProps) {
  return (
    <Link href={href} className="group relative block overflow-hidden rounded-lg aspect-[4/5] bg-warm-gray-dark/10">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
        <p className="text-gold text-sm font-medium mb-2 tracking-wider uppercase">{category}</p>
        <div className="flex items-center justify-between">
          <h3 className="text-white font-heading text-2xl font-semibold">{title}</h3>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
