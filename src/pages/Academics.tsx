import React from "react";
import { Link } from "wouter";
import {
  Code2,
  BookOpen,
  GraduationCap,
  Cpu,
  Layers,
  Terminal,
  CheckCircle2,
  FileCode,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function Academics() {
  const COURSES = [
    {
      id: "ap-csa",
      name: "AP Computer Science A",
      code: "AP CSA",
      level: "Advanced Placement (College Board)",
      language: "Java",
      summary: "Rigorous object-oriented programming, data structures, and algorithmic design corresponding to a first-semester college computer science curriculum.",
      topics: [
        "Object-Oriented Program Design & Class Hierarchies",
        "Primitive Types, Strings & Boolean Logic",
        "Arrays, ArrayLists & 2D Data Structures",
        "Searching & Sorting Algorithms (Binary, Merge, Insertion)",
        "Recursion, Inheritance & Polymorphic Behavior",
      ],
      tag: "College Board Aligned",
    },
    {
      id: "ap-csp",
      name: "AP Computer Science Principles",
      code: "AP CSP",
      level: "Advanced Placement (College Board)",
      language: "Multi-Language / Pseudocode / JavaScript",
      summary: "Broad exploration of foundational computing concepts, creative innovation, internet architecture, cybersecurity, and societal impact of technology.",
      topics: [
        "Big Idea 1: Creative Development & Collaboration",
        "Big Idea 2: Data Representation & Information Processing",
        "Big Idea 3: Algorithms & Programming Constructs",
        "Big Idea 4: Computer Systems & Global Networks",
        "Big Idea 5: Societal, Ethical & Legal Impact of Computing",
      ],
      tag: "College Board Aligned",
    },
    {
      id: "ecs",
      name: "Exploring Computer Science",
      code: "ECS",
      level: "High School Foundation",
      language: "Scratch / Web Languages / Python",
      summary: "An inquiry-based curriculum designed to introduce foundational computer science practices through collaborative hands-on projects and problem solving.",
      topics: [
        "Human Computer Interaction & Interface Design",
        "Problem Solving Strategies & Logic Systems",
        "Web Design, HTML & Cascading Style Sheets",
        "Introductory Algorithmic Programming",
        "Data Analysis & Introduction to Robotics",
      ],
      tag: "CSTA Level 2/3",
    },
    {
      id: "cs-discoveries",
      name: "Computer Science Discoveries",
      code: "CSD",
      level: "Introductory / Exploratory",
      language: "Block & Text Coding (JavaScript/Web)",
      summary: "An empowering introductory course that engages students in creating personal apps, animations, interactive games, and physical computing artifacts.",
      topics: [
        "Problem Solving Process & Computational Mindset",
        "Web Development & Digital Publishing",
        "Interactive Animations & Game Design Mechanics",
        "Physical Computing & Sensor Inputs",
        "Data Insights & AI Foundations",
      ],
      tag: "CSTA Level 2",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
          <span>Curriculum &bull; CSTA K-12 Alignment</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight mb-4">
          Academic Pathways
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Explore the rigorous, standards-aligned computer science courses offered at Grand Blanc High School that qualify students for GBCSHS membership.
        </p>
      </section>

      {/* Academic Standards Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-muted/40 border border-border rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider block">
                Article VII &bull; Section 2 Standard
              </span>
              <span className="text-muted-foreground text-xs">&bull;</span>
              <span className="font-mono text-xs text-muted-foreground uppercase">
                6 Active GBHS CS Sections
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground">
              Chapter CS Scholarship Standard (80% / 3.0 / B)
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              Grand Blanc High School offers 6 sections of computer science coursework across introductory, foundational, and Advanced Placement pathways. Candidates become eligible for GBCSHS selection by completing at least one semester with an average of at least 80% (3.0 on a 4.0 scale) in qualifying coursework.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all shadow-xs cursor-pointer"
            >
              <span>Selection Criteria</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Course Profiles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="space-y-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-card border border-card-border rounded-2xl p-6 sm:p-8 shadow-xs hover:border-primary/40 transition-all space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-2xl font-serif font-bold text-foreground">
                        {course.name}
                      </h3>
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-muted text-foreground font-semibold border border-border">
                        {course.code}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">
                      {course.level}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-md bg-muted text-foreground text-xs font-mono border border-border">
                    {course.language}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-medium border border-primary/20">
                    {course.tag}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {course.summary}
              </p>

              <div className="pt-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-foreground/80 font-semibold mb-3">
                  Core Competencies &amp; Syllabi Highlights
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                  {course.topics.map((topic, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 p-2 rounded-md bg-muted/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standards & Philosophy */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-serif font-bold text-foreground">
              Aligned with CSTA K-12 National Standards
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All computing coursework at Grand Blanc High School follows the rigorous curriculum standards published by the Computer Science Teachers Association and ACM. Students are challenged to write modular, well-documented code, understand computational complexity, collaborate responsibly, and evaluate the ethical ramifications of technological systems.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Algorithmic Problem Solving
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Abstraction &amp; Architecture
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Ethical &amp; Inclusive Computing
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Academics;
