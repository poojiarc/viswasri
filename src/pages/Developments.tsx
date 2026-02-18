// import { FileCheck, TreePine, Droplets, Shield, Cctv, ShieldCheck } from "lucide-react";
// import AnimatedSection from "@/components/AnimatedSection";
// import devImg from "@/assets/dev1.jpeg";


// const features = [
//   { icon: FileCheck, title: "Clear Title & Link Documents", desc: "Every plot comes with verified, transparent legal documentation ensuring complete peace of mind." },
//   { icon: TreePine, title: "Red Sandalwood Plants", desc: "Premium Red Sandalwood saplings planted on every plot, adding long-term investment value." },
//   { icon: Droplets, title: "Drip Irrigation", desc: "Advanced drip irrigation systems ensure optimal water supply for sustainable plantation growth." },
//   { icon: Shield, title: "Diamond Mesh Fencing", desc: "Durable diamond mesh fencing around every plot for clear demarcation and protection." },
//   { icon: Cctv, title: "CCTV Surveillance", desc: "24/7 CCTV monitoring across the development for round-the-clock security." },
//   { icon: ShieldCheck, title: "Advanced Security after 5 Years", desc: "Enhanced security infrastructure deployed post 5-year mark for asset protection." },
// ];

// const Developments = () => (
//   <>
//     <section className="bg-primary text-primary-foreground section-padding">
//       <div className="container-main text-center">
//         <AnimatedSection>
//           <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Developments</h1>
//           <p className="opacity-80 max-w-2xl mx-auto">Premium infrastructure and amenities for every plot.</p>
//         </AnimatedSection>
//       </div>
//     </section>

//     <section className="section-padding bg-background">
//       <div className="container-main">
//         <AnimatedSection>
//           <img src={devImg} alt="Development overview" className="rounded-xl shadow-elevated w-full max-w-4xl mx-auto mb-16 aspect-video object-cover" />
//         </AnimatedSection>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {features.map((f, i) => (
//             <AnimatedSection key={i} delay={i * 0.1}>
//               <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow h-full">
//                 <div className="w-12 h-12 rounded-full bg-leaf/10 flex items-center justify-center mb-4">
//                   <f.icon className="h-6 w-6 text-leaf" />
//                 </div>
//                 <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
//                 <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>
//   </>
// );

// export default Developments;


import {
  FileCheck,
  TreePine,
  Droplets,
  Shield,
  Cctv,
  ShieldCheck,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import devImg from "@/assets/dev1.jpeg";

/* Background Images */
import clearDocImg from "@/assets/Cler documents.png";
import sandalImg from "@/assets/sandal.jpg";
import dripImg from "@/assets/drip.webp";
import meshImg from "@/assets/mesh.webp";
import cctvImg from "@/assets/cctv.jpg";
import securityImg from "@/assets/security.jpg";

/* Features Data */
const features = [
  {
     icon: FileCheck,
    title: "Clear Title & Link Documents",
    desc: "Every plot comes with verified, transparent legal documentation ensuring complete peace of mind.",
    bg: clearDocImg,
  },
  {
    icon: TreePine,
    title: "Red Sandalwood Plants",
    desc: "Premium Red Sandalwood saplings planted on every plot, adding long-term investment value.",
    bg: sandalImg,
  },
  {
    icon: Droplets,
    title: "Drip Irrigation",
    desc: "Advanced drip irrigation systems ensure optimal water supply for sustainable plantation growth.",
    bg: dripImg,
  },
  {
    icon: Shield,
    title: "Diamond Mesh Fencing",
    desc: "Durable diamond mesh fencing around every plot for clear demarcation and protection.",
    bg: meshImg,
  },
  {
    icon: Cctv,
    title: "CCTV Surveillance",
    desc: "24/7 CCTV monitoring across the development for round-the-clock security.",
    bg: cctvImg,
  },
  {
    icon: ShieldCheck,
    title: "Advanced Security after 5 Years",
    desc: "Enhanced security infrastructure deployed post 5-year mark for asset protection.",
    bg: securityImg,
  },
];

const Developments = () => (
  <>
    {/* HERO SECTION */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-main text-center">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our Developments
          </h1>
          <p className="opacity-80 max-w-2xl mx-auto">
            Premium infrastructure and amenities for every plot.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* IMAGE + FEATURES */}
    <section className="section-padding bg-background">
      <div className="container-main">

        {/* Development Image */}
        <AnimatedSection>
          <img
            src={devImg}
            alt="Development overview"
            className="rounded-xl shadow-elevated w-full max-w-4xl mx-auto mb-16 aspect-video object-cover"
          />
        </AnimatedSection>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
  {features.map((f, i) => (
    <AnimatedSection key={i} delay={i * 0.1}>
      <div
        className="relative rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow h-full min-h-[240px]"
        style={{
          backgroundImage: `url(${f.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* DARK GRADIENT OVERLAY (makes text visible) */}
        <div className="absolute inset-0 bg-black/55" />

        {/* CONTENT */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
          
          {/* ICON */}
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
            <f.icon className="h-6 w-6 text-white" />
          </div>

          {/* TITLE */}
          <h3 className="font-display font-semibold text-lg mb-2">
            {f.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-white/90 leading-relaxed">
            {f.desc}
          </p>

        </div>
      </div>
    </AnimatedSection>
  ))}
</div>
      </div>
    </section>
  </>
);

export default Developments;
