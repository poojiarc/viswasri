// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, Home, Info, Briefcase, Building2, Phone } from "lucide-react";
// import logo from "@/assets/logo.jpeg";

// const navItems = [
//   { to: "/", label: "Home", icon: Home },
//   { to: "/about", label: "About Us", icon: Info },
//   { to: "/services", label: "Services", icon: Briefcase },
//   { to: "/developments", label: "Developments", icon: Building2 },
//   { to: "/contact", label: "Contact", icon: Phone },
// ];

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
//       <div className="container-main flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="Viswasri Projects logo" className="h-12 md:h-14 w-auto" />
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden md:flex items-center gap-1">
//           {navItems.map(({ to, label, icon: Icon }) => {
//             const active = location.pathname === to;
//             return (
//               <Link
//                 key={to}
//                 to={to}
//                 className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   active
//                     ? "bg-primary text-primary-foreground"
//                     : "text-foreground hover:bg-secondary"
//                 }`}
//               >
//                 <Icon className="h-4 w-4" />
//                 {label}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Mobile toggle */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden p-2 rounded-lg hover:bg-secondary"
//           aria-label="Toggle menu"
//         >
//           {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile nav */}
//       {open && (
//         <nav className="md:hidden bg-card border-t border-border px-4 pb-4">
//           {navItems.map(({ to, label, icon: Icon }) => {
//             const active = location.pathname === to;
//             return (
//               <Link
//                 key={to}
//                 to={to}
//                 onClick={() => setOpen(false)}
//                 className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
//                   active
//                     ? "bg-primary text-primary-foreground"
//                     : "text-foreground hover:bg-secondary"
//                 }`}
//               >
//                 <Icon className="h-4 w-4" />
//                 {label}
//               </Link>
//             );
//           })}
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Briefcase, Building2, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "Developments", path: "/developments", icon: Building2 },
  { name: "Contact", path: "/contact", icon: Phone },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* ✅ LOGO — SAME STRUCTURE AS REFERENCE */}
          
              <Link to="/" className="flex items-center h-full">
  <div className="w-40 md:w-52 lg:w-56 flex items-center">
    <img
      src={logo}
      alt="Viswasri Projects"
      className="w-full h-auto object-contain"
    />
  </div>
</Link>

            

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-secondary"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-card"
          >
            <nav className="container-main py-4 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary"
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
