import React from "react";
import { Link } from "wouter";
import { BrandMark } from "./BrandMark";
import { MapPin, Mail, UserCheck, BookOpen, ExternalLink, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Organization & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandMark size={52} variant="mark" />
              <div>
                <h3 className="font-serif font-bold text-xl text-secondary-foreground tracking-tight">
                  GBCSHS
                </h3>
                <p className="font-mono text-xs text-secondary-foreground/70 uppercase tracking-wider">
                  Grand Blanc High School
                </p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/75 leading-relaxed">
              Grand Blanc Computer Science Honor Society honors academic excellence, promotes equity in computing, and empowers student ambassadors.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-foreground/10 border border-secondary-foreground/15 text-xs text-secondary-foreground/90 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>CSTA National Affiliate</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-secondary-foreground/60 mb-4 font-semibold">
              Explore Chapter
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                  Home & Overview
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                  About & Core Values
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                  Membership & Honor Code
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                  Academics & Qualifying Courses
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                  Service & Award Tiers
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-secondary-foreground/80 hover:text-primary transition-colors cursor-pointer">
                  Leadership & Advisor
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Meeting Details */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-secondary-foreground/60 mb-4 font-semibold">
              Chapter Location
            </h4>
            <div className="space-y-3 text-sm text-secondary-foreground/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-snug">
                  <span className="font-semibold text-secondary-foreground block">Grand Blanc High School</span>
                  <span>Room 504 (Computer Lab)</span>
                  <span className="block">12500 Holly Rd</span>
                  <span>Grand Blanc, MI 48439</span>
                </address>
              </div>
              <p className="text-xs text-secondary-foreground/60 pt-1">
                Regular society meetings are conducted throughout the academic year.
              </p>
            </div>
          </div>

          {/* Column 4: Leadership & Documents */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-secondary-foreground/60 mb-4 font-semibold">
              Leadership & Contacts
            </h4>
            <div className="space-y-3 text-sm text-secondary-foreground/80">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-primary flex-shrink-0" />
                <span>
                  <strong className="text-secondary-foreground">Advisor:</strong> Mr. Todd Beard
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-secondary-foreground font-medium">Website Builder:</span>
                  <span className="block">John Tewolde</span>
                  <a
                    href="mailto:jg.tewolde@gmail.com"
                    className="text-xs text-primary hover:underline"
                  >
                    jg.tewolde@gmail.com
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`${import.meta.env.BASE_URL}constitution.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-medium text-secondary-foreground/90 hover:text-primary transition-colors bg-secondary-foreground/5 hover:bg-secondary-foreground/10 px-3 py-1.5 rounded border border-secondary-foreground/10"
                >
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span>Official Constitution (PDF)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secondary-foreground/60">
          <p>
            &copy; {currentYear} Grand Blanc Computer Science Honor Society. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono">Grand Blanc High School &bull; Home of the Bobcats</span>
            <span>&bull;</span>
            <span className="font-mono">Created by John Tewolde</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
