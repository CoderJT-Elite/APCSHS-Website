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

      {/* Advisor & Creator Spotlight Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Faculty Advisor */}
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold block">
                Chapter Advisor &bull; Article IV
              </span>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Mr. Todd Beard
              </h2>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">
                Computer Science Educator &bull; Room 504
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mr. Beard advises the society, oversees candidate evaluation with the faculty council, guides officer elections, and coordinates curriculum alignment with CSTA standards.
            </p>
            <div className="pt-2 text-xs font-mono text-muted-foreground flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Grand Blanc High School &bull; Room 504</span>
            </div>
          </div>

          {/* Website Builder & Developer */}
          <div className="bg-card border border-card-border rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-foreground">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold block">
                Technology &bull; Website Builder
              </span>
              <h2 className="text-2xl font-serif font-bold text-foreground">
                John Tewolde
              </h2>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">
                Web Architect &amp; Software Developer
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designed and built the official Grand Blanc Computer Science Honor Society web platform, establishing the digital presence and resource portal for chapter members.
            </p>
            <div className="pt-2">
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
            <h2 className="text-2xl font-serif font-bold text-foreground">
              Executive Committee Structure (Article X)
            </h2>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Per Articles IX and X of the society constitution, the Executive Committee consists of the Society Advisor and elected student officers. Officers are elected annually by the active membership and installed at a special ceremony.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-foreground text-base">
                  President
                </h4>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  Executive
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Presides over chapter business meetings, coordinates committee initiatives, and serves as primary student liaison to school administration.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-foreground text-base">
                  Vice President
                </h4>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  Executive
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Oversees service project logistics, assists the president in chapter operations, and leads committee outreach efforts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-foreground text-base">
                  Secretary
                </h4>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  Records
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Maintains official meeting minutes, records attendance and service hour logs, and coordinates society communications.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5">
              <div className="flex items-center justify-between">
                <h4 className="font-serif font-bold text-foreground text-base">
                  Treasurer
                </h4>
                <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  Finance
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Manages chapter funds, maintains financial records in accordance with school policy, and coordinates society events.
              </p>
            </div>
          </div>
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
              Meetings in Room 504
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Society meetings are held regularly throughout the academic year at Grand Blanc High School. Check chapter announcements for upcoming session dates and agendas.
            </p>
          </div>
          <div className="flex-shrink-0">
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
