import React from "react";
import { Link } from "wouter";
import {
  Users,
  UserCheck,
  Mail,
  MapPin,
  Calendar,
  Building,
  Shield,
  FileText,
  Award,
  Sparkles,
} from "lucide-react";

export function Leadership() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
          <span>Article IX &bull; Article X</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground tracking-tight mb-4">
          Leadership &amp; Governance
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Meet the faculty advisor and leadership team guiding the Grand Blanc Computer Science Honor Society.
        </p>
      </section>

      {/* Leadership Spotlight Grid: Advisor, Principal, and Developer */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Faculty Advisor */}
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-7 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold block">
                  Faculty Advisor &bull; Article IV
                </span>
                <h2 className="text-xl font-serif font-bold text-foreground">
                  Mr. Todd Beard
                </h2>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  CS Educator &bull; CSTA+ Member
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Supervises chapter operations, advises student officers, oversees Faculty Council candidate evaluations, and coordinates CSTA curriculum alignment.
              </p>
            </div>
            <div className="pt-3 border-t border-border/70 text-xs font-mono text-muted-foreground flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Room 504, Grand Blanc HS</span>
            </div>
          </div>

          {/* Authorizing Principal */}
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-7 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-foreground">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold block">
                  GBHS Principal &bull; Article III
                </span>
                <h2 className="text-xl font-serif font-bold text-foreground">
                  Mr. Michael Fray
                </h2>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  School Administration
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Authorized chapter creation under Article II §3. Reserves administrative oversight, annually appoints the society advisor, and receives disciplinary appeals.
              </p>
            </div>
            <div className="pt-3 border-t border-border/70 text-xs font-mono text-muted-foreground flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              <span>Grand Blanc High School</span>
            </div>
          </div>

          {/* Website Builder & Developer */}
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-7 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-foreground">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold block">
                  Web Developer &bull; Architecture
                </span>
                <h2 className="text-xl font-serif font-bold text-foreground">
                  John Tewolde
                </h2>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Web Architect &amp; Software Dev
                </p>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Engineered the official GBCSHS standalone platform, establishing the chapter's digital identity and resources portal.
              </p>
            </div>
            <div className="pt-3 border-t border-border/70">
              <a
                href="mailto:jg.tewolde@gmail.com"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>jg.tewolde@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Executive Committee Structure */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <Users className="w-6 h-6 text-primary" />
            <div>
              <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider block">
                Constitutional Governance &bull; Article IX &amp; Article X
              </span>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Student Executive Committee Framework
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Per Article X §2, each society is led by four or more student officers elected annually by active members and installed at a special ceremony. Local chapter bylaws designate specific positions, responsibilities, and election procedures:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-foreground text-base">
                  President
                </h4>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  Elected Officer
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Presides over chapter business meetings, coordinates committee initiatives, and serves as primary student liaison to faculty and administration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-foreground text-base">
                  Vice President
                </h4>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  Elected Officer
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Coordinates service project logistics, assists in chapter operations, and leads committee recruitment and outreach initiatives.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-foreground text-base">
                  Secretary
                </h4>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  Elected Officer
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Maintains official chapter records, meeting minutes, attendance logs, and service hour documentation for CSTA reporting.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-foreground text-base">
                  Treasurer
                </h4>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  Elected Officer
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Manages chapter financial records, tracks member dues (capped at $20/yr under Article II §7), and coordinates event logistics.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground italic">
            Note: Specific individual student officers are elected annually by the active membership each school year in accordance with local bylaws.
          </p>
        </div>
      </section>

      {/* Meeting Location & Information */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-muted/40 border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-primary font-mono text-xs font-semibold">
              <Calendar className="w-4 h-4" />
              <span>Chapter Meetings &bull; Article XI</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground">
              Meetings &amp; Contact: Room 504
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Society meetings occur regularly during the school year in Room 504 at Grand Blanc High School. For questions regarding induction or service hours, consult Advisor Mr. Todd Beard in Room 504.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-card hover:bg-muted border border-border text-foreground font-medium text-sm transition-all"
            >
              <FileText className="w-4 h-4 text-primary" />
              <span>Chapter Charter</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leadership;
