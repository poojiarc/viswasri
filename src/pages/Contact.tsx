import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/919053922999?text=${msg}`, "_blank");
  };

  return (
    <>
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container-main text-center">
          <AnimatedSection>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
            <p className="opacity-80">We'd love to hear from you. Get in touch today.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          {/* Form */}
          <AnimatedSection>
            <div className="bg-card rounded-xl p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-full justify-center"
                >
                  <Send className="h-4 w-4" /> Send via WhatsApp
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Info */}
          <div className="space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-display font-semibold text-lg mb-4">Contact Information</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-leaf shrink-0 mt-0.5" />
                    <a href="tel:+919053922999" className="hover:text-accent transition-colors">+91 9053922999</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-leaf shrink-0 mt-0.5" />
                    <a href="mailto:viswasriprojectss@gmail.com" className="hover:text-accent transition-colors">viswasriprojectss@gmail.com</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-leaf shrink-0 mt-0.5" />
                    <span>18-113, Tulasinagar 3rd Lane, Siddiq Nagar, Kanuru – 520007</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-display font-semibold text-lg mb-4">Business Hours</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-leaf" /> Monday – Friday: 9 AM – 9 PM</li>
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-leaf" /> Saturday: 9 AM – 9 PM</li>
                  <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-leaf" /> Sunday: 9 AM – 9 PM</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-card rounded-xl p-6 shadow-card">
                <h3 className="font-display font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61588056032151&sfnsn=wa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    <Facebook className="h-5 w-5 text-leaf" /> Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/viswsriprojects/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    <Instagram className="h-5 w-5 text-accent" /> Instagram
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
