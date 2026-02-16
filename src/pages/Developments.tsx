import { FileCheck, TreePine, Droplets, Shield, Cctv, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import devImg from "@/assets/developments-1.jpg";

const features = [
  { icon: FileCheck, title: "Clear Title & Link Documents", desc: "Every plot comes with verified, transparent legal documentation ensuring complete peace of mind." },
  { icon: TreePine, title: "Red Sandalwood Plants", desc: "Premium Red Sandalwood saplings planted on every plot, adding long-term investment value." },
  { icon: Droplets, title: "Drip Irrigation", desc: "Advanced drip irrigation systems ensure optimal water supply for sustainable plantation growth." },
  { icon: Shield, title: "Diamond Mesh Fencing", desc: "Durable diamond mesh fencing around every plot for clear demarcation and protection." },
  { icon: Cctv, title: "CCTV Surveillance", desc: "24/7 CCTV monitoring across the development for round-the-clock security." },
  { icon: ShieldCheck, title: "Advanced Security after 5 Years", desc: "Enhanced security infrastructure deployed post 5-year mark for asset protection." },
];

const Developments = () => (
  <>
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-main text-center">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Developments</h1>
          <p className="opacity-80 max-w-2xl mx-auto">Premium infrastructure and amenities for every plot.</p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-main">
        <AnimatedSection>
          <img src={devImg} alt="Development overview" className="rounded-xl shadow-elevated w-full max-w-4xl mx-auto mb-16 aspect-video object-cover" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow h-full">
                <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mb-4">
                  <f.icon className="h-6 w-6 text-leaf" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Developments;
