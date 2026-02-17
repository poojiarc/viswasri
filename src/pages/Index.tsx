import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Droplets, Shield, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import hero1 from "@/assets/Hero1.jpeg";
import hero2 from "@/assets/Hero2.jpeg";
import hero3 from "@/assets/Hero3.jpeg";

import service25 from "@/assets/serv3.jpeg";
import service50 from "@/assets/Serv2.jpeg";
import service1acre from "@/assets/Serv1.jpeg";

import devImg from "@/assets/dev1.jpeg";

const heroImages = [hero1, hero2, hero3];

const services = [
  { title: "25 Cents Units", img: service25, slug: "25-cents" },
  { title: "50 Cents Units", img: service50, slug: "50-cents" },
  { title: "1 Acre Units", img: service1acre, slug: "1-acre" },
];

const devFeatures = [
  { icon: CheckCircle2, text: "Clear Title & Link Documents" },
  { icon: TreePine, text: "Red Sandalwood Plants" },
  { icon: Droplets, text: "Drip Irrigation" },
  { icon: Shield, text: "Diamond Mesh Fencing" },
  { icon: Shield, text: "CCTV Surveillance" },
  { icon: Shield, text: "Advanced Security after 5 years" },
];

const whyChoose = [
  { icon: TrendingUp, text: "Affordable Investment" },
  { icon: TreePine, text: "Land + Red Sandalwood Benefit" },
  { icon: Shield, text: "Secure Venture" },
  { icon: TrendingUp, text: "Long-term Wealth Creation" },
  { icon: Users, text: "Ideal for Middle-class Families" },
];

const Index = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide}
            src={heroImages[slide]}
            alt="Viswasri Projects farmland"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="relative z-10 h-full flex items-center">
          <div className="container-main px-4 md:px-8 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4 leading-tight"
            >
              Welcome to Viswasri Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-3 font-medium"
            >
              Building Land. Growing Wealth. Securing Futures.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-primary-foreground/75 mb-8 max-w-xl leading-relaxed"
            >
              We specialize in offering premium plotted developments integrated with Red Sandalwood plantations — a powerful combination of real estate security and long-term natural asset growth.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === slide ? "bg-accent" : "bg-primary-foreground/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-3">Our Services</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Choose from flexible plot sizes tailored to your investment goals.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 0.15}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow bg-card"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-xl font-display font-semibold">{s.title}</h3>
                    <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Developments Preview */}
      <section className="section-padding bg-cream">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Our Developments</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <img src={devImg} alt="Developments" className="rounded-xl shadow-elevated w-full" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                {devFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-card">
                    <f.icon className="h-6 w-6 text-leaf shrink-0" />
                    <span className="font-medium">{f.text}</span>
                  </div>
                ))}
                <Link
                  to="/developments"
                  className="inline-flex items-center gap-2 text-accent font-semibold mt-4 hover:underline"
                >
                  View All Developments <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Why Choose Viswasri Projects
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-card hover:shadow-elevated transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-leaf/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-leaf" />
                  </div>
                  <p className="font-medium text-sm">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
