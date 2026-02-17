import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import service25 from "@/assets/serv3.jpeg";
import service50 from "@/assets/Serv2.jpeg";
import service1acre from "@/assets/Serv1.jpeg";

import hero1 from "@/assets/Hero1.jpeg";
import hero2 from "@/assets/Hero2.jpeg";
import hero3 from "@/assets/Hero3.jpeg";

const data: Record<string, { title: string; desc: string; images: string[] }> = {
  "25-cents": {
    title: "25 Cents Units",
    desc: "Our 25 cents units are the perfect entry-level investment for families looking to begin their land-ownership journey. Each plot comes with integrated Red Sandalwood plantation, drip irrigation, diamond mesh fencing, and complete documentation. Ideal for first-time investors seeking a secure and affordable venture with long-term returns.",
    images: [service25, hero1],
  },
  "50-cents": {
    title: "50 Cents Units",
    desc: "The 50 cents units offer a balanced investment with generous plot size. These plots are perfect for those seeking significant returns from both land appreciation and plantation growth. Every unit includes Red Sandalwood saplings, advanced drip irrigation systems, CCTV surveillance, and clear title documentation.",
    images: [service50, hero2],
  },
  "1-acre": {
    title: "1 Acre Units",
    desc: "Our premium 1 acre units are designed for investors seeking maximum returns. Each acre of prime land comes with a full Red Sandalwood plantation setup, complete fencing, irrigation infrastructure, security systems, and comprehensive legal documentation. This is the ultimate investment for building generational wealth.",
    images: [service1acre, hero3],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = data[slug || ""];

  if (!service) {
    return (
      <div className="section-padding text-center container-main">
        <h1 className="text-2xl font-display font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-accent hover:underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-main">
          <AnimatedSection>
            <Link to="/services" className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 mb-4 text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
            <h1 className="text-3xl md:text-5xl font-display font-bold">{service.title}</h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main max-w-5xl">
          <AnimatedSection>
            <p className="text-muted-foreground leading-relaxed text-lg mb-10">{service.desc}</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <img src={img} alt={`${service.title} view ${i + 1}`} className="rounded-xl shadow-card w-full aspect-[4/3] object-cover" />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-10 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
