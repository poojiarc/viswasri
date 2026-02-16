import { Target, Eye, Landmark, TreePine, FileCheck, MapPin, Sprout, Users, TrendingUp, Shield, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const commitments = [
  { icon: FileCheck, text: "Clear Documentation" },
  { icon: MapPin, text: "Strategic Locations" },
  { icon: Sprout, text: "Sustainable Plantations" },
  { icon: Heart, text: "Customer-first Service" },
  { icon: TrendingUp, text: "Long-term Value Creation" },
];

const sandalwoodBenefits = [
  { icon: Sprout, title: "Dual Investment Advantage", desc: "Land appreciation plus plantation income." },
  { icon: TrendingUp, title: "Long-Term Wealth Creation", desc: "Red Sandalwood grows in value over decades." },
  { icon: Shield, title: "Safe Tangible Asset", desc: "Real estate backed by a living, growing resource." },
  { icon: Users, title: "Future Security", desc: "Build a legacy for your family and generations to come." },
];

const About = () => (
  <>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-main text-center max-w-3xl mx-auto">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">About Viswasri Projects</h1>
          <p className="text-lg opacity-80">Smart Land Investment. Secure Future. Growing Wealth.</p>
        </AnimatedSection>
      </div>
    </section>

    {/* Who We Are */}
    <section className="section-padding bg-background">
      <div className="container-main max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl font-display font-bold mb-6 text-center">Who We Are</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <div className="flex items-start gap-3">
              <Landmark className="h-5 w-5 text-leaf mt-1 shrink-0" />
              <p>At Viswasri Projects, we transform middle-class families into financially strong and asset-rich households through premium land investments combined with high-value Red Sandalwood plantations.</p>
            </div>
            <div className="flex items-start gap-3">
              <TreePine className="h-5 w-5 text-leaf mt-1 shrink-0" />
              <p>We integrate strategic land development with sustainable agricultural plantation value, offering transparent documentation and truly affordable investment opportunities.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-cream">
      <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <AnimatedSection>
          <div className="bg-card rounded-xl p-8 shadow-card h-full">
            <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-leaf" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To make every middle-class family rich through smart land investments backed by sustainable plantation growth.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="bg-card rounded-xl p-8 shadow-card h-full">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To transform middle-class families into financially strong and asset-rich households through smart, secure, and sustainable land investments.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Commitment */}
    <section className="section-padding bg-background">
      <div className="container-main max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Our Commitment</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {commitments.map((c, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center p-5 rounded-xl bg-card shadow-card">
                <c.icon className="h-7 w-7 text-leaf mb-3" />
                <p className="font-medium text-sm">{c.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Red Sandalwood */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main max-w-5xl">
        <AnimatedSection>
          <h2 className="text-3xl font-display font-bold mb-10 text-center">Why Choose Plots with Red Sandalwood</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sandalwoodBenefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex gap-4 p-6 rounded-xl bg-primary-foreground/5">
                <b.icon className="h-8 w-8 text-gold shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">{b.title}</h4>
                  <p className="text-sm opacity-75">{b.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
