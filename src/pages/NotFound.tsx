import React from "react";
import { Link } from "wouter";
import { ArrowLeft, Home, BookOpen, ShieldCheck } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

export function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <BrandMark size={56} className="mx-auto justify-center mb-2" />
        <div className="space-y-2">
          <span className="font-mono text-sm text-primary font-semibold">404 &bull; Page Not Found</span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Lost in the Codebase?
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The page you are looking for does not exist or has been moved. Use the links below to return to safety.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/membership"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-muted hover:bg-accent border border-border text-foreground font-medium text-sm transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Membership</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
