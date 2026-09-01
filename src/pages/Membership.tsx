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
            Per Article VII of the chapter constitution, any student seeking induction into the society must satisfy each of the following baseline standards:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Grade Level &amp; Attendance</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                Enrolled in grades 9 through 12 and in attendance at Grand Blanc High School for the equivalent of at least one full semester (Article VII §1).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>CS Coursework Completion</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                Completion of at least one semester of rigorous computer science coursework aligned with CSTA K-12 standards (Article VII §1, Footnote 2).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Chapter Scholarship Standard</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                Pursuant to Article VII §2, our chapter maintains an 80% GPA (3.0 on a 4.0 scale or B average) standard across completed CS courses.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Honor Code Adherence</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                Uncompromising commitment to ethical computing, submitting original code, and upholding academic honesty (Article VI §6 / Footnote 1).
              </p>
            </div>
          </div>

          {/* Holistic Selection Note */}
          <div className="mt-4 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm text-foreground/90 leading-relaxed">
            <strong className="text-primary font-serif block mb-1">Holistic Candidate Evaluation (Article VI §1 &amp; Article VII §5):</strong>
            Meeting academic criteria qualifies a candidate for formal consideration. The Society Advisor and Faculty Council evaluate each candidate holistically on computer science achievement, demonstrated leadership, and a proven dedication to community service.
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
            GBCSHS actively welcomes all Grand Blanc High School students who meet constitutional standards for computer science achievement and service.
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
                Article VI, Section 6 &bull; Footnote 1
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
                &bull; <strong>Plagiarism and Copying:</strong> Copying a program from another student or from any other source is a form of academic dishonesty, as is deriving a program substantially from the work of another.
              </p>
              <p>
                &bull; <strong>Collaboration Rules:</strong> Students must assume that collaboration in the completion of assignments is prohibited unless explicitly permitted by the instructor.
              </p>
              <p>
                &bull; <strong>Explicit Acknowledgement:</strong> Students must acknowledge any collaboration and its extent in all submitted work.
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Adherence to this code is mandatory across all computer science coursework. Violations are subject to disciplinary review and potential dismissal under Article VIII.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Induction Pathway */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold block mb-1">
            Application &amp; Installation
          </span>
          <h2 className="text-3xl font-serif font-bold text-foreground">
            How to Apply &amp; Join GBCSHS
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Clear, step-by-step guidance for Grand Blanc High School candidates.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              step: "Step 1",
              title: "Verify Coursework & Academic Record",
              desc: "Ensure you have completed at least one semester of an approved CS course (AP CSA, AP CSP, ECS, or CS Discoveries) and maintained an 80%+ (3.0/B) average.",
              badge: "Prerequisite",
            },
            {
              step: "Step 2",
              title: "Obtain & Submit Candidate Application",
              desc: "Pick up an application form from Mr. Todd Beard in Room 504 during the announced semester application window. Attach your academic transcript and statement of leadership and service goals.",
              badge: "Submission",
            },
            {
              step: "Step 3",
              title: "Faculty Council Evaluation",
              desc: "The Society Advisor and Faculty Council review all completed applications against constitutional standards (Article V & VII §5). Candidate decisions are communicated in writing.",
              badge: "Review",
            },
            {
              step: "Step 4",
              title: "Formal Induction Ceremony",
              desc: "Accepted candidates are formally installed at the chapter induction ceremony (Article VI §3), receive their official CSTA society emblem (Article XIV), and assume active member status.",
              badge: "Installation",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-card-border hover:border-primary/40 transition-colors shadow-xs"
            >
              <div className="w-16 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-mono font-bold text-xs flex-shrink-0">
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
