import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Building2, Phone, Mail, MapPin, Clock, Heart, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-main section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & about */}
        <div>
          <img src={logo} alt="Viswasri Projects" className="h-14 w-auto mb-4 rounded bg-card p-1" />
          <p className="text-sm opacity-80 leading-relaxed">
            Building Land. Growing Wealth. Securing Futures. Premium plotted developments with Red Sandalwood plantations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home", icon: Home },
              { to: "/about", label: "About Us", icon: Info },
              { to: "/services", label: "Services", icon: Briefcase },
              { to: "/developments", label: "Developments", icon: Building2 },
              { to: "/contact", label: "Contact", icon: Phone },
            ].map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                  <Icon className="h-4 w-4" /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-display font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 opacity-80">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="tel:+919053922999">+91 9053922999</a>
            </li>
            <li className="flex items-start gap-2 opacity-80">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:viswasriprojectss@gmail.com">viswasriprojectss@gmail.com</a>
            </li>
            <li className="flex items-start gap-2 opacity-80">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              18-113, Tulasinagar 3rd Lane, Siddiq Nagar, Kanuru – 520007
            </li>
          </ul>
        </div>

        {/* Business Hours & Social */}
        <div>
          <h4 className="text-lg font-display font-semibold mb-4">Business Hours</h4>
          <ul className="space-y-2 text-sm opacity-80 mb-6">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon – Fri: 9 AM – 9 PM</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Saturday: 9 AM – 9 PM</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> Sunday: 9 AM – 9 PM</li>
          </ul>
          <h4 className="text-lg font-display font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=61588056032151&sfnsn=wa" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/viswsriprojects/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container-main px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm opacity-70">
        <p>&copy; {new Date().getFullYear()} Viswasri Projects and Agro Farms. All rights reserved.</p>
        <div className="flex justify-center items-center gap-1">
          Made with <Heart className="inline h-4 w-4 text-destructive mx-1" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gold hover:underline"
          >
            <img
              src="https://www.staffarc.in/images/Staffarc-logo.png"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain"
            />
            StaffArc
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
