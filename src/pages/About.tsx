import React from "react";
import { Link } from "wouter";
import {
  Users,
  Shield,
  Award,
  BookOpen,
  CheckCircle2,
  FileText,
  Building,
  Target,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
          <span>Charter &amp; Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight mb-4">
          About Our Chapter
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The Grand Blanc High School Computer Science Honor Society is dedicated to inspiring student leaders in technology, broadening computing participation, and serving our community.
        </p>
      </section>

      {/* Main Narrative & Background */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-10 shadow-xs space-y-6 text-foreground/90 leading-relaxed">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <Building className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif font-bold text-foreground">
                National Heritage &amp; School Community
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <BrandMark size={44} variant="crest" />
            </div>
          </div>
          <p>
            Established under the national charter of the <strong>Computer Science Teachers Association (CSTA)</strong> and authorized by Principal Michael Fray, the Grand Blanc High School Chapter (GBCSHS) exists to recognize high school students who excel in computing coursework and demonstrate outstanding leadership and service.
          </p>
          <p>
            Computer science is more than syntax and algorithms: it is a fundamental literacy for solving real-world challenges. Our members represent Grand Blanc High School in local outreach, technology initiatives, peer mentoring, and collaborative programming projects.
          </p>
          <div className="p-4 rounded-xl bg-muted/60 border border-border flex items-start gap-3 text-sm">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              <strong className="text-foreground">CSTA Chapter Designation:</strong> Our society operates under the standardized national constitution approved by the Computer Science Teachers Association (July 21, 2022; adopted by GBHS CSHS March 20, 2025), upholding uniform standards for equity, academic excellence, and community service.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Pillars in Depth */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold block mb-2">
            Constitutional Foundations &bull; Article I, Section 3
          </span>
          <h2 className="text-3xl font-serif font-bold text-foreground">
            Our Three Guiding Pillars
          </h2>
          <p className="text-muted-foreground mt-2">
            Every initiative, meeting, and member obligation centers on these constitutional values.
          </p>
        </div>

        <div className="space-y-8">
          {/* Equity */}
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                  Pillar I &bull; Article I §3.1 &amp; Article XIII
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Equity in Computing
                </h3>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed pl-0 sm:pl-16">
              <p className="italic text-foreground/90 border-l-2 border-primary/50 pl-3">
                &ldquo;A realization that any student has the potential to enroll, to grow, and to excel in computing.&rdquo;
              </p>
              <p>
                In direct alignment with Article XIII of our constitution, our chapter actively works to expand access, engagement, and achievement among underrepresented groups in computer science.
              </p>
              <p>
                To make this commitment tangible, the Executive Committee is constitutionally required to examine and compare society membership demographics against total Grand Blanc High School enrollment at least once annually, executing proactive recruitment plans to ensure the society reflects the diversity of our school community.
              </p>
            </div>
          </div>

          {/* Service */}
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-foreground flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                  Pillar II &bull; Article I §3.2 &amp; Article XII
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Ambassador Service &amp; Outreach
                </h3>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed pl-0 sm:pl-16">
              <p className="italic text-foreground/90 border-l-2 border-primary/50 pl-3">
                &ldquo;Empowering members to become ambassadors of the computer science discipline, helping underscore its importance as a mainstay in the school and community.&rdquo;
              </p>
              <p>
                Technical skill carries an obligation to serve. Each member completes a minimum of 10 hours of approved service each academic year (Article XII §5), with at least 5 hours dedicated directly to computing outreach, peer mentoring in Room 504, or elementary/middle school coding labs.
              </p>
              <p>
                Members who surpass baseline obligations can earn annual Bronze (25 hours), Silver (50 hours), and Gold (100 hours) service distinction awards.
              </p>
            </div>
          </div>

          {/* Excellence */}
          <div className="bg-card border border-card-border rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                  Pillar III &bull; Article I §3.3 &amp; Article VI/VII
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Outstanding Scholarship &amp; Integrity
                </h3>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed pl-0 sm:pl-16">
              <p className="italic text-foreground/90 border-l-2 border-primary/50 pl-3">
                &ldquo;A commitment to promoting outstanding scholarship in computer science coursework.&rdquo;
              </p>
              <p>
                We celebrate rigorous achievement across 6 active sections of computer science at Grand Blanc High School. Candidates satisfy the chapter scholarship standard (Article VII §2) by maintaining at least an 80% (3.0 / B) average in qualifying computing classes.
              </p>
              <p>
                Furthermore, every inductee pledges strict adherence to the CSHS Honor Code (Article VI §6 / Footnote 1), submitting only original work and upholding academic honesty across all coursework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Insignia & Branding Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold block mb-2">
            Visual Identity
          </span>
          <h2 className="text-3xl font-serif font-bold text-foreground">
            Official Chapter Insignia &amp; Marks
          </h2>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Our visual identity unites Grand Blanc Bobcat pride with computing heritage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Logo 1: Collegiate Crest */}
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xs hover:border-primary/40 transition-all group">
            <div className="p-4 rounded-2xl bg-muted/50 border border-border/80 mb-5 w-44 h-44 flex items-center justify-center">
              <BrandMark size={140} variant="crest" animated={true} />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
              <span>Primary Chapter Crest</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Collegiate Bobcat Crest
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Academic shield emblazoned with the Grand Blanc Bobcat, integrated circuit traces, coding brackets, and the official school banner.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}gbcshs-crest.png`}
              download="gbcshs-crest.png"
              className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-accent border border-border text-foreground text-xs font-mono font-medium transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              <span>Download Crest (PNG)</span>
            </a>
          </div>

          {/* Logo 2: Geometric Tech Mark */}
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-xs hover:border-primary/40 transition-all group">
            <div className="p-4 rounded-2xl bg-muted/50 border border-border/80 mb-5 w-44 h-44 flex items-center justify-center">
              <BrandMark size={140} variant="mark" animated={true} />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary/10 text-foreground text-xs font-mono font-medium mb-3">
              <span>Digital &amp; App Insignia</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Geometric Tech Mark
            </h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Modern polygon Bobcat silhouette crafted with sharp crimson and charcoal facets and embedded &lt; &gt; code bracket angles.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}gbcshs-mark.png`}
              download="gbcshs-mark.png"
              className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-accent border border-border text-foreground text-xs font-mono font-medium transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              <span>Download Mark (PNG)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Chapter Governance & Constitution Download */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-muted/40 border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-primary font-mono text-xs font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>Official Chapter Charter</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground">
              Read the Full GBCSHS Constitution
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Review all 15 articles governing candidate selection, officer duties, executive committees, service benchmarks, and bylaws.
            </p>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}constitution.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all flex-shrink-0 shadow-xs"
          >
            <FileText className="w-4 h-4" />
            <span>Download Constitution (PDF)</span>
          </a>
        </div>
      </section>
    </div>
  );
}
