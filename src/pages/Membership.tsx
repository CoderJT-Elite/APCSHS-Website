import React from "react";
import { Link } from "wouter";
import {
  CheckCircle2,
  ShieldCheck,
  Award,
  BookOpen,
  GraduationCap,
  Sparkles,
  AlertCircle,
  FileText,
  Clock,
  ArrowRight,
  UserCheck,
} from "lucide-react";

export function Membership() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
          <span>Article VI &bull; Article VII</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight mb-4">
          Membership &amp; Selection
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Membership in the Grand Blanc Computer Science Honor Society is an earned honor recognizing excellence, integrity, and leadership in computing.
        </p>
      </section>

      {/* Eligibility Requirements Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Candidate Eligibility Criteria
            </h2>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Per Article VII of our chapter constitution, any student seeking induction into the society must satisfy each of the following baseline standards:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Grade Level &amp; Attendance</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                Enrolled in grades 9 through 12 and in attendance at Grand Blanc High School for at least one full semester.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>CS Coursework Completion</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                Completion of at least one semester of rigorous computer science coursework aligned with CSTA K-12 standards.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Academic Scholarship Standard</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                Maintenance of a minimum 80% GPA (B / 3.0 on a 4.0 scale) across all completed high school computer science coursework.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Honor Code Adherence</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                Uncompromising commitment to ethical computing, submitting original code, and upholding academic honesty.
              </p>
            </div>
          </div>

          {/* Holistic Selection Note */}
          <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm text-foreground/90 leading-relaxed">
            <strong className="text-primary font-serif block mb-1">Holistic Candidate Evaluation:</strong>
            Meeting the minimum academic threshold qualifies a candidate for formal review. Candidates are evaluated holistically by the Society Advisor and Faculty Council on computing achievement, demonstrated leadership, and proven commitment to community service.
          </div>
        </div>
      </section>

      {/* Constitutional Non-Discrimination Policy */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-muted/40 border border-border rounded-xl p-6 sm:p-8 space-y-3">
          <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider block">
            Article VII &bull; Section 4
          </span>
          <h3 className="text-xl font-serif font-bold text-foreground">
            Universal Non-Discrimination Clause
          </h3>
          <blockquote className="italic text-foreground/90 text-sm sm:text-base border-l-2 border-primary pl-4 my-2 leading-relaxed">
            &ldquo;No student shall be denied membership on account of discrimination or limitation based upon race, gender, gender identity, pregnancy, national origin, political affiliation, religion, ethnicity, physical or mental disability, citizenship status, and/or sexual orientation.&rdquo;
          </blockquote>
          <p className="text-xs text-muted-foreground pt-1">
            GBCSHS actively welcomes students of all backgrounds who meet the constitutional requirements for computer science achievement and service.
          </p>
        </div>
      </section>

      {/* The CSHS Official Honor Code */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 sm:p-10 shadow-xs space-y-5">
          <div className="flex items-center gap-3 pb-3 border-b border-border">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-wider font-semibold">
                Article VII &bull; Footnote 1
              </span>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                The CSHS Honor Code
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              A computer program written to satisfy a course requirement is, like an academic paper, expected to be the <strong>original work of the student submitting it</strong>.
            </p>
            <div className="p-4 rounded-lg bg-muted/60 border border-border text-foreground/90 text-sm space-y-2">
              <p>
                &bull; <strong>Plagiarism &amp; Copying:</strong> Copying code from another student, online repository, or external source without explicit instructor authorization is a direct form of academic dishonesty, as is deriving code substantially from the work of another.
              </p>
              <p>
                &bull; <strong>Collaboration:</strong> Students must assume that collaboration in completing coursework assignments is prohibited unless explicitly authorized by the course instructor.
              </p>
              <p>
                &bull; <strong>Attribution:</strong> Students must clearly acknowledge any authorized collaboration and its full extent in all submitted work.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Violation of the honor code is grounds for immediate review and potential dismissal by the Society Advisor or Faculty Council per Article VIII.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Induction Pathway */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold block mb-1">
            Path to Induction
          </span>
          <h2 className="text-3xl font-serif font-bold text-foreground">
            The Induction Journey
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            From eligibility to official installation as a GBCSHS member.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Enroll & Excel in CS Coursework",
              desc: "Complete at least one semester of an approved qualifying CS course at Grand Blanc High School with an 80%+ (3.0/B) GPA.",
              badge: "Prerequisite",
            },
            {
              step: "02",
              title: "Submit Candidate Application",
              desc: "During the open application window, submit your academic record and statement of interest highlighting your leadership and service goals.",
              badge: "Application",
            },
            {
              step: "03",
              title: "Faculty Council Review",
              desc: "The Society Advisor and Faculty Council review all submissions holistically to select candidates who embody the society's values.",
              badge: "Evaluation",
            },
            {
              step: "04",
              title: "Induction Ceremony & Installation",
              desc: "Selected candidates are formally inducted at a special ceremony, receive their official CSTA society insignia, and assume active member status.",
              badge: "Induction",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-card-border hover:border-primary/40 transition-colors shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-mono font-bold text-sm flex-shrink-0">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-serif font-bold text-base text-foreground">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground uppercase font-semibold">
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transfer Students & Graduation Status */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-muted/40 border border-border space-y-2">
            <h4 className="font-serif font-bold text-foreground text-lg flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-primary" />
              Transfer Student Acceptance
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Per Article VI Section 4: A CSHS member who transfers to Grand Blanc High School with an advisor or principal letter from their previous school is accepted automatically, and must satisfy GBCSHS standards within one semester to retain active membership.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-muted/40 border border-border space-y-2">
            <h4 className="font-serif font-bold text-foreground text-lg flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              Graduate Membership Status
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Per Article VI Section 2: Active members in good standing become Graduate Members upon high school graduation, retaining lifelong alumni distinction and the privilege of wearing the CSTA honor cord.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Membership;
