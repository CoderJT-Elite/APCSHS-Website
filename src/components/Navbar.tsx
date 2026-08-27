import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, FileText, ChevronRight } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Academics", href: "/academics" },
  { name: "Service", href: "/service" },
  { name: "Leadership", href: "/leadership" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border/80 shadow-xs py-3"
          : "bg-background/60 backdrop-blur-xs border-transparent py-4.5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <BrandMark size={32} showText={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border/60">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? location === "/"
                : location === link.href || location.startsWith(link.href + "/");

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
                  isActive
                    ? "bg-background text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right side items: Constitution Link + Theme Toggle + Mobile Menu button */}
        <div className="flex items-center gap-2.5">
          <a
            href={`${import.meta.env.BASE_URL}constitution.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-foreground/80 hover:text-primary bg-muted/60 hover:bg-muted border border-border/70 transition-colors"
            title="Read Chapter Constitution (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span>Constitution</span>
          </a>

          <ThemeToggle />

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-muted/80 border border-border/70 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-4 pt-3 pb-5 mt-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? location === "/"
                  : location === link.href || location.startsWith(link.href + "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium transition-colors cursor-pointer",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted"
                  )}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              );
            })}
            <div className="pt-2 mt-2 border-t border-border/60">
              <a
                href={`${import.meta.env.BASE_URL}constitution.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>View Constitution (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
