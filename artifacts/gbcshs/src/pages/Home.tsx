import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Shield, Users, BookOpen, Code, Award, Target, Terminal } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}hero-bg.png`}
            alt="Late night coding session" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-sm shadow-[0_0_15px_rgba(0,255,255,0.15)]">
              Computer Science Teachers Association (CSTA) Affiliate
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-sans">
              Grand Blanc Computer Science Honor Society
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Honoring academic excellence, promoting equity, and empowering student ambassadors in computing.
            </motion.p>
            <motion.div variants={fadeIn}>
              <a href="#values" className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                Discover Our Mission
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The foundation of everything we build, study, and represent at Grand Blanc High School.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Equity",
                icon: <Users className="w-8 h-8 text-primary" />,
                desc: "We believe every student has the potential to enroll, grow, and excel in computing. We actively break down barriers and foster an inclusive environment."
              },
              {
                title: "Service",
                icon: <Shield className="w-8 h-8 text-secondary" />,
                desc: "Empowering our members to become ambassadors of computer science, providing meaningful service to our school and the wider local community."
              },
              {
                title: "Excellence",
                icon: <Award className="w-8 h-8 text-primary" />,
                desc: "A steadfast commitment to promoting and honoring outstanding scholarship in rigorous computer science coursework."
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }
                }}
                className="bg-card border border-card-border p-8 rounded-xl hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="bg-background w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-border group-hover:border-primary/30 transition-colors shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Abstract Divider */}
      <section className="py-20 relative overflow-hidden flex justify-center items-center">
        <div className="w-full max-w-4xl relative opacity-50 px-6">
           <img src={`${import.meta.env.BASE_URL}abstract-tech.png`} alt="Tech Abstract" className="w-full h-auto object-cover rounded-3xl border border-border/50 shadow-2xl" />
           <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        </div>
      </section>

      {/* Membership */}
      <section id="membership" className="py-32 bg-card relative border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Earning Your Place</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Eligibility</h4>
                    <p className="text-muted-foreground">Open to students in grades 9-12 who have demonstrated exceptional commitment to computing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Academic Standard</h4>
                    <p className="text-muted-foreground">Requires completion of at least one semester of rigorous CS coursework with a minimum 80% GPA (B / 3.0) in those courses.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">The Honor Code</h4>
                    <p className="text-muted-foreground">All members must conform to the CSHS honor code: original work only, no copying, absolute academic integrity.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl text-sm text-primary leading-relaxed shadow-[inset_0_0_20px_rgba(0,255,255,0.05)]">
                Selection is based holistically on CS achievement, leadership potential, and commitment to service. No student shall be denied membership due to discrimination of any kind. Once selected, members are inducted at a special ceremony.
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-background border border-border p-8 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Terminal className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-bold mb-6 font-mono border-b border-border pb-4 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-primary" /> Accepted Courses
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "CS Discoveries",
                  "Exploring Computer Science",
                  "AP Computer Science Principles",
                  "AP Computer Science A",
                  "IB Computer Science"
                ].map((course, i) => (
                  <li key={i} className="flex items-center gap-4 text-muted-foreground group">
                    <div className="w-8 h-8 rounded bg-card flex items-center justify-center border border-border group-hover:border-secondary/50 transition-colors">
                      <Code className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="group-hover:text-foreground transition-colors">{course}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="py-32 bg-background relative border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About the Courses</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                All listed courses are rigorous computer science offerings aligned with CSTA K-12 Standards. These courses challenge students to think computationally, write original code, and develop problem-solving skills that extend far beyond the classroom.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Completion of at least one semester of any qualifying course qualifies a student for GBCSHS membership consideration.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="space-y-4"
            >
              {[
                { name: "CS Discoveries", desc: "Foundational problem-solving and creative computing" },
                { name: "Exploring Computer Science", desc: "Broad introduction to CS principles and practices" },
                { name: "AP Computer Science Principles", desc: "Concepts of computing and its impact on society" },
                { name: "AP Computer Science A", desc: "Object-oriented programming in Java" },
                { name: "IB Computer Science", desc: "International Baccalaureate-level CS study" },
              ].map((course, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 rounded bg-background flex items-center justify-center border border-border flex-shrink-0 mt-0.5">
                    <span className="text-primary font-mono text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{course.name}</h4>
                    <p className="text-sm text-muted-foreground">{course.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service & Community */}
      <section id="service" className="py-32 relative">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Beyond the Screen</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Code is powerful, but its true value is in how we apply it. GBCSHS members are expected to be leaders and educators in our community.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="p-8 rounded-xl border border-border bg-card hover:bg-card/80 transition-colors group">
                <h4 className="text-xl font-bold mb-4 font-mono text-primary flex items-center justify-between">
                  <span>01. Service</span>
                  <Target className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We provide meaningful service to the local community, using our technical skills to help others, teach younger students, and advocate for tech literacy.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-border bg-card hover:bg-card/80 transition-colors group">
                <h4 className="text-xl font-bold mb-4 font-mono text-secondary flex items-center justify-between">
                  <span>02. Community</span>
                  <Users className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  We meet at least 4 times per year to collaborate, plan initiatives, and celebrate inductions at our special membership ceremonies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold font-mono text-primary mb-4">&lt;GBCSHS /&gt;</h3>
              <p className="text-muted-foreground max-w-sm">
                Grand Blanc Computer Science Honor Society. Inspiring the next generation of computing professionals through equity, service, and excellence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-mono">Location</h4>
              <address className="text-muted-foreground not-italic space-y-2 text-sm">
                <p className="text-foreground">Grand Blanc High School</p>
                <p>Room 504</p>
                <p>12500 Holly Rd</p>
                <p>Grand Blanc, MI 48439</p>
              </address>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-mono">Leadership</h4>
              <div className="text-muted-foreground space-y-2 text-sm">
                <p><span className="text-foreground">Website Builder:</span> John Tewolde</p>
                <p>
                  <a href="mailto:jg.tewolde@gmail.com" className="hover:text-primary transition-colors">
                    jg.tewolde@gmail.com
                  </a>
                </p>
                <p className="pt-1"><span className="text-foreground">Advisor:</span> Mr. Todd Beard</p>
                <p className="text-primary mt-2">A CSTA Affiliate Society</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 font-mono">Documents</h4>
              <div className="text-sm">
                <a
                  href={`${import.meta.env.BASE_URL}constitution.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <BookOpen className="w-4 h-4 group-hover:text-primary transition-colors" />
                  GBCSHS Constitution
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>&copy; {new Date().getFullYear()} Grand Blanc Computer Science Honor Society.</p>
              <p className="font-mono text-xs text-muted-foreground">Created by John Tewolde</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="font-mono text-xs text-primary">System Status: Online</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
