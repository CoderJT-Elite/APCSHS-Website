import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Values', href: '#values' },
  { name: 'Membership', href: '#membership' },
  { name: 'Service', href: '#service' },
];

export function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const visibleSections = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    const thresholds = Array.from({ length: 21 }, (_, i) => i * 0.05);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.current.set(entry.target.id, entry);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        });

        const allVisible = Array.from(visibleSections.current.values());
        if (allVisible.length === 0) return;

        const best = allVisible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        setActive(best.target.id);
      },
      { threshold: thresholds, rootMargin: '-80px 0px -40% 0px' }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
