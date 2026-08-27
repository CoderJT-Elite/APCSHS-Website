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
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <Building className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">
              National Heritage &amp; School Community
            </h2>
          </div>
          <p>
            Established under the national charter of the <strong>Computer Science Teachers Association (CSTA)</strong>, the Grand Blanc High School Chapter (GBCSHS) exists to recognize high school students who excel in computing coursework and demonstrate outstanding leadership and service.
          </p>
          <p>
            Computer science is more than syntax and algorithms—it is a fundamental literacy for solving real-world challenges. Our members represent Grand Blanc High School in local outreach, technology initiatives, peer mentoring, and collaborative programming projects.
          </p>
          <div className="p-4 rounded-xl bg-muted/60 border border-border flex items-start gap-3 text-sm">
            <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-muted-foreground">
              <strong className="text-foreground">CSTA Chapter Designation:</strong> Our society follows the standardized national constitution approved by the Computer Science Teachers Association, upholding uniform standards for equity, academic excellence, and community service.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Pillars in Depth */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold block mb-2">
            Constitutional Foundations
          </span>
          <h2 className="text-3xl font-serif font-bold text-foreground">
            Our Three Guiding Pillars
          </h2>
          <p className="text-muted-foreground mt-2">
            Every initiative, meeting, and member obligation centers on these values.
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
                  Pillar I &bull; Article XIII
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Equity in Computing
                </h3>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed pl-0 sm:pl-16">
              <p>
                We believe that every student possesses the potential to explore, understand, and thrive in computer science. In alignment with Article XIII of our constitution, our chapter actively works to expand access and engagement among historically underrepresented groups in technology.
              </p>
              <p>
                The executive committee regularly evaluates chapter recruitment and demographics against school-wide enrollment, ensuring that computer science education at Grand Blanc High School is welcoming, supportive, and accessible to everyone.
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
                  Pillar II &bull; Article XII
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Ambassador Service &amp; Community Outreach
                </h3>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed pl-0 sm:pl-16">
              <p>
                Technical skill carries an obligation to serve. Members act as computing ambassadors for Grand Blanc Community Schools. Each inductee completes a minimum of 10 hours of approved service annually, with at least 5 hours dedicated directly to computing-related outreach.
              </p>
              <p>
                Example service projects include organizing coding activities for younger elementary and middle school students, assisting during Hour of Code workshops, providing peer tutoring in high school computer science courses, and building helpful digital resources for the school.
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
                  Pillar III &bull; Article VI &amp; VII
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground">
                  Scholarly Excellence &amp; Ethical Integrity
                </h3>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed pl-0 sm:pl-16">
              <p>
                Excellence requires continuous dedication to learning, critical thinking, and algorithmic problem-solving. Candidates must maintain a minimum 80% (3.0 / B) GPA in rigorous computer science coursework, encompassing foundational and advanced courses including AP Computer Science A, AP CSP, and IB Computer Science.
              </p>
              <p>
                Furthermore, all members pledge adherence to the CSHS Honor Code, committing to originality, intellectual honesty, and strict academic integrity in all computing endeavors.
              </p>
            </div>
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
