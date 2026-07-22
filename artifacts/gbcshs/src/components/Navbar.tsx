import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const visibleSections = useRef<Map<string, IntersectionObserverEntry>>(new Map());
  const scrollLock = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

        if (scrollLock.current) return;

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
      scrollLock.current = true;
      if (lockTimer.current) clearTimeout(lockTimer.current);
      lockTimer.current = setTimeout(() => {
        scrollLock.current = false;
      }, 1000);

      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setActive(id);
    }
    setMobileOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled || mobileOpen ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-4" : "bg-transparent py-6"
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
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-foreground p-2 -mr-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden container mx-auto px-6 pt-6 pb-2 flex flex-col space-y-4 border-t border-border mt-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary cursor-pointer",
                active === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
