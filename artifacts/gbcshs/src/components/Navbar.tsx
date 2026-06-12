import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Values', href: '#values' },
  { name: 'Membership', href: '#membership' },
  { name: 'Academics', href: '#academics' },
  { name: 'Service', href: '#service' },
];

export function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => {
        const el = document.getElementById(item.href.substring(1));
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        return { id: item.href.substring(1), top, bottom };
      }).filter(Boolean);

      const viewportTop = window.scrollY + 80;
      const viewportBottom = window.scrollY + window.innerHeight;

      let bestSection = 'home';
      let maxOverlap = 0;

      for (const section of sections) {
        const overlapTop = Math.max(section.top, viewportTop);
        const overlapBottom = Math.min(section.bottom, viewportBottom);
        const overlap = Math.max(0, overlapBottom - overlapTop);
        if (overlap > maxOverlap) {
          maxOverlap = overlap;
          bestSection = section.id;
        }
      }

      setActive(bestSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-bold font-mono text-primary tracking-tighter">
          &lt;GBCSHS /&gt;
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative cursor-pointer",
                active === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
              {active === item.href.substring(1) && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
