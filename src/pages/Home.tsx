import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Users,
  Shield,
  Award,
  ArrowRight,
  BookOpen,
  Code2,
  CheckCircle2,
  Sparkles,
  FileText,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

export default function Home() {
  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-28">
        {/* Subtle background decorative shapes in school warm crimson & stone */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-mono font-medium mb-6 shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>CSTA Affiliate Chapter &bull; Grand Blanc High School</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-foreground tracking-tight leading-[1.08] mb-6"
          >
            Grand Blanc <br className="hidden sm:inline" />
            <span className="text-primary italic">Computer Science</span>{" "}
            Honor Society
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
          >
            Honoring academic achievement, promoting equity, and empowering student ambassadors in computing at Grand Blanc High School.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <span>Membership Pathway</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-muted hover:bg-accent border border-border text-foreground font-medium text-sm transition-all cursor-pointer"
            >
              <span>Our Core Values</span>
            </Link>

            <a
              href={`${import.meta.env.BASE_URL}constitution.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-card hover:bg-muted border border-border text-muted-foreground hover:text-foreground text-sm font-mono transition-all"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span>Constitution (PDF)</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Snapshot / Key Facts Strip */}
      <section className="py-10 border-y border-border/80 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-card border border-card-border/80 shadow-xs">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-primary block mb-1">
                9–12
              </span>
              <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground block font-medium">
                Eligible Grades
              </span>
              <p className="text-xs text-muted-foreground/80 mt-1">
                1+ semester attendance
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-card-border/80 shadow-xs">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-primary block mb-1">
                3.0 / 80%
              </span>
              <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground block font-medium">
                CS GPA Standard
              </span>
              <p className="text-xs text-muted-foreground/80 mt-1">
                In qualifying coursework
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-card-border/80 shadow-xs">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-primary block mb-1">
                10 Hours
              </span>
              <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground block font-medium">
                Annual Service
              </span>
              <p className="text-xs text-muted-foreground/80 mt-1">
                Min. 5 hours in computing
              </p>
            </div>

            <div className="p-4 rounded-xl bg-card border border-card-border/80 shadow-xs">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-primary block mb-1">
                5 Courses
              </span>
              <span className="text-xs uppercase tracking-wider font-mono text-muted-foreground block font-medium">
                Rigorous Pathways
              </span>
              <p className="text-xs text-muted-foreground/80 mt-1">
                CSTA standards-aligned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars Section */}
      <section className="py-20 md:py-28 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold block mb-2">
            Charter Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            The Three Pillars of GBCSHS
          </h2>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg">
            Our chapter operates on three core principles defined by the Computer Science Teachers Association national charter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1: Equity */}
          <div className="bg-card border border-card-border rounded-xl p-8 hover:border-primary/40 transition-all flex flex-col justify-between shadow-xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Equity
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe computing is for every student. Our society actively dismantles barriers, engages underrepresented peers, and champions inclusive access to computer science education across Grand Blanc High School.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline cursor-pointer"
              >
                <span>Read equity commitment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 2: Service */}
          <div className="bg-card border border-card-border rounded-xl p-8 hover:border-primary/40 transition-all flex flex-col justify-between shadow-xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6 text-foreground">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Service
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Members serve as technology ambassadors. From mentoring middle schoolers to assisting peers in lab coursework, every inductee commits at least 10 annual service hours (with tiered Bronze, Silver, and Gold honors).
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60">
              <Link
                href="/service"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline cursor-pointer"
              >
                <span>View service tiers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Pillar 3: Excellence */}
          <div className="bg-card border border-card-border rounded-xl p-8 hover:border-primary/40 transition-all flex flex-col justify-between shadow-xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                Excellence
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We celebrate outstanding scholarship in rigorous computer science coursework, from AP Computer Science A to IB Computer Science, upholding rigorous standards of computational thinking and academic integrity.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-border/60">
              <Link
                href="/academics"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-primary hover:underline cursor-pointer"
              >
                <span>Explore qualifying courses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selection & Honor Code Overview */}
      <section className="py-16 bg-muted/30 border-y border-border/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
                Article VII &bull; Selection Charter
              </span>
              <h2 className="text-3xl font-serif font-bold text-foreground">
                Holistic Selection & Unwavering Integrity
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Membership in the Grand Blanc Computer Science Honor Society is an earned honor. Candidates are evaluated holistically on computer science achievement, demonstrated leadership, and a steadfast commitment to service.
              </p>
              <div className="p-4 rounded-lg bg-background border border-border text-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium">
                    Strict adherence to the CSHS Honor Code (original work, zero plagiarism).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium">
                    Equal opportunity: Zero discrimination on race, gender, background, or identity.
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline cursor-pointer"
                >
                  <span>Learn how candidates are evaluated & inducted</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-card border border-card-border p-6 sm:p-8 rounded-xl shadow-xs space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-5 h-5 text-primary" />
                  <h4 className="font-serif font-bold text-lg text-foreground">
                    Qualifying Coursework
                  </h4>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  Min. 1 Semester
                </span>
              </div>
              <ul className="space-y-3 font-sans text-sm">
                {[
                  { name: "AP Computer Science A", desc: "Object-oriented Java & data structures" },
                  { name: "AP Computer Science Principles", desc: "Computing innovations & societal impact" },
                  { name: "IB Computer Science", desc: "International Baccalaureate computational theory" },
                  { name: "Exploring Computer Science", desc: "Broad foundational computing practices" },
                  { name: "CS Discoveries", desc: "Creative problem-solving & web development" },
                ].map((course, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-muted/40 hover:bg-muted/70 transition-colors"
                  >
                    <div>
                      <span className="font-semibold text-foreground block text-sm">
                        {course.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {course.desc}
                      </span>
                    </div>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-background border border-border text-primary font-medium">
                      0{idx + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-gradient-to-b from-card to-muted/50 border border-card-border p-8 sm:p-12 rounded-2xl shadow-xs relative overflow-hidden">
          <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-5">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
            Ready to Take Your Computing Journey Further?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Whether you are planning your course selections, completing your service hours, or looking to apply for the next induction class, we invite you to explore our society.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/membership"
              className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-xs cursor-pointer"
            >
              Membership Requirements
            </Link>
            <Link
              href="/leadership"
              className="px-6 py-2.5 rounded-lg bg-muted hover:bg-accent border border-border text-foreground text-sm font-medium transition-all cursor-pointer"
            >
              Meet Advisor & Leadership
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
