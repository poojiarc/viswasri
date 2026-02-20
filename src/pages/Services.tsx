// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import AnimatedSection from "@/components/AnimatedSection";
// import service25 from "@/assets/serv3.jpeg";
// import service50 from "@/assets/Serv2.jpeg";
// import service1acre from "@/assets/Serv1.jpeg";

// const services = [
//   {
//     title: "25 Cents Units",
//     slug: "25-cents",
//     img: service25,
//     desc: "Perfect entry-level investment for families looking to start their land-ownership journey with Red Sandalwood plantation benefits.",
//   },
//   {
//     title: "50 Cents Units",
//     slug: "50-cents",
//     img: service50,
//     desc: "A balanced investment with generous plot size, ideal for those seeking significant returns from both land appreciation and plantation growth.",
//   },
//   {
//     title: "1 Acre Units",
//     slug: "1-acre",
//     img: service1acre,
//     desc: "Our premium offering for investors seeking maximum returns. One acre of prime land with a full Red Sandalwood plantation setup.",
//   },
// ];

// const Services = () => (
//   <>
//     <section className="bg-primary text-primary-foreground section-padding">
//       <div className="container-main text-center">
//         <AnimatedSection>
//           <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Services</h1>
//           <p className="opacity-80 max-w-2xl mx-auto">Choose from flexible plot sizes tailored to your investment goals.</p>
//         </AnimatedSection>
//       </div>
//     </section>

//     <section className="section-padding bg-background">
//       <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-8">
//         {services.map((s, i) => (
//           <AnimatedSection key={s.slug} delay={i * 0.15}>
//             <Link
//               to={`/services/${s.slug}`}
//               className="group block rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow bg-card"
//             >
//               <div className="aspect-[4/3] overflow-hidden">
//                 <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
//                 <span className="flex items-center gap-1 text-accent font-semibold text-sm group-hover:underline">
//                   Learn More <ArrowRight className="h-4 w-4" />
//                 </span>
//               </div>
//             </Link>
//           </AnimatedSection>
//         ))}
//       </div>
//     </section>
//   </>
// );

// export default Services;


import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

import service25 from "@/assets/serv3.jpeg";
import service50 from "@/assets/Serv2.jpeg";
import service1acre from "@/assets/Serv1.jpeg";

/* ✅ NEW IMAGES */
import our1 from "@/assets/Our 1.jpeg";
import our2 from "@/assets/Our2.jpeg";

const services = [
  {
    title: "25 Cents Units",
    slug: "25-cents",
    img: service25,
    desc: "Perfect entry-level investment for families looking to start their land-ownership journey with Red Sandalwood plantation benefits.",
  },
  {
    title: "50 Cents Units",
    slug: "50-cents",
    img: service50,
    desc: "A balanced investment with generous plot size, ideal for those seeking significant returns from both land appreciation and plantation growth.",
  },
  {
    title: "1 Acre Units",
    slug: "1-acre",
    img: service1acre,
    desc: "Our premium offering for investors seeking maximum returns. One acre of prime land with a full Red Sandalwood plantation setup.",
  },
];

const Services = () => (
  <>
    {/* ================= HERO ================= */}
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="container-main text-center">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our Services
          </h1>
          <p className="opacity-80 max-w-2xl mx-auto">
            Choose from flexible plot sizes tailored to your investment goals.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* ================= SERVICES CARDS ================= */}
    <section className="section-padding bg-background">
      <div className="container-main grid grid-cols-1 md:grid-cols-3 gap-8">
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

              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">
                  {s.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {s.desc}
                </p>

                <span className="flex items-center gap-1 text-accent font-semibold text-sm group-hover:underline">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* ================= NEW SECTION — OUR 1st VENTURES ================= */}
    <section className="section-padding bg-cream">
      <div className="container-main">
        {/* Heading */}
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
            <span className="text-accent">Our 1<span className="align-baseline text-inherit">st</span> Venture Plants</span>
          </h2>
        </AnimatedSection>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[our1, our2].map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="rounded-xl overflow-hidden shadow-elevated">
                <img
                  src={img}
                  alt={`Our Venture ${i + 1}`}
                  className="
                    w-full
                    h-[280px] md:h-[380px]
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-500
                  "
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;