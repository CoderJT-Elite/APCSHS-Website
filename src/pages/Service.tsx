import React from "react";
import { Link } from "wouter";
import {
  Shield,
  HeartHandshake,
  Award,
  Medal,
  CheckCircle2,
  Clock,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
} from "lucide-react";

export function Service() {
  const TIERS = [
    {
      hours: "25 Hours",
      title: "Bronze Service Award",
      desc: "Recognizes members who exceed baseline requirements through active dedication to chapter projects and peer mentoring.",
      color: "border-amber-700/30 bg-amber-950/5 text-amber-800 dark:text-amber-300",
      badge: "Bronze Distinction",
    },
    {
      hours: "50 Hours",
      title: "Silver Service Award",
      desc: "Honors members who lead significant outreach initiatives, conduct multi-session tutoring, or spearhead school tech events.",
      color: "border-slate-400/40 bg-slate-500/5 text-slate-800 dark:text-slate-200",
      badge: "Silver Distinction",
    },
    {
      hours: "100 Hours",
      title: "Gold Service Award",
      desc: "The highest annual service distinction for extraordinary community impact, leadership in CS equity, and sustained mentorship.",
      color: "border-yellow-500/40 bg-yellow-500/10 text-yellow-800 dark:text-yellow-300",
      badge: "Gold Distinction",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
          <span>Article XII &bull; Community Outreach</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight mb-4">
          Service &amp; Community Impact
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Technical knowledge is most meaningful when shared. GBCSHS members act as ambassadors of computing, enriching Grand Blanc Community Schools through active service.
        </p>
      </section>

      {/* Annual Requirement Breakdown */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <Clock className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Annual Service Commitment (Article XII, Section 5)
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-muted/40 border border-border space-y-2">
              <span className="font-mono text-3xl font-bold text-primary block">
                10 Hours
              </span>
              <h4 className="font-serif font-bold text-foreground text-base">
                Total Annual Obligation
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Each active member is required to complete at least 10 documented hours of approved community or school service per academic year.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-muted/40 border border-border space-y-2">
              <span className="font-mono text-3xl font-bold text-primary block">
                5+ Hours
              </span>
              <h4 className="font-serif font-bold text-foreground text-base">
                Direct Computing Focus
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Per Section 5, at least half (minimum 5 hours) must directly involve computing education, digital literacy, coding mentorship, or technology support.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs sm:text-sm text-foreground/90 leading-relaxed">
            <strong>Group &amp; Individual Projects:</strong> Members participate in society-wide group projects (such as Hour of Code and STEM nights) as well as individual service initiatives that align with their personal interests and skills (Article XII, Section 4).
          </div>
        </div>
      </section>

      {/* Service Recognition Awards Tiers */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-mono text-xs text-primary uppercase tracking-widest font-semibold block mb-1">
            Article XII &bull; Section 6
          </span>
          <h2 className="text-3xl font-serif font-bold text-foreground">
            Service Award Recognition Tiers
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Members who exceed the 10-hour baseline earn special distinction awards for single-year service commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border shadow-xs flex flex-col justify-between space-y-4 ${tier.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Medal className="w-8 h-8" />
                  <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-background/80 border border-border/50 font-semibold">
                    {tier.badge}
                  </span>
                </div>
                <span className="font-mono text-3xl font-bold block mb-1">
                  {tier.hours}
                </span>
                <h3 className="font-serif font-bold text-xl mb-2">
                  {tier.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                  {tier.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-current/15 text-xs font-mono">
                Awarded Annually at Induction
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example Service Initiatives */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <HeartHandshake className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-serif font-bold text-foreground">
              What GBCSHS Service Looks Like
            </h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Per Article XII Section 2, all chapter service projects fulfill genuine community needs, have faculty support, and are educationally defensible.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <h4 className="font-serif font-bold text-foreground text-base">
                Youth &amp; Middle School Coding Outreach
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Hosting interactive coding workshops, Hour of Code demonstrations, and Scratch labs for middle and elementary school students across Grand Blanc Community Schools.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <h4 className="font-serif font-bold text-foreground text-base">
                High School Peer Tutoring &amp; Lab Support
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Providing weekly tutoring assistance in Room 504 for students enrolled in introductory CS and AP Computer Science courses.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <h4 className="font-serif font-bold text-foreground text-base">
                Community Digital Literacy Assistance
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Assisting local community members and seniors with device troubleshooting, online safety practices, and digital software tools.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2">
              <h4 className="font-serif font-bold text-foreground text-base">
                Educational Tech Resource Development
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Building open-source study guides, interactive visualizations, and coding practice problems for high school STEM clubs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
