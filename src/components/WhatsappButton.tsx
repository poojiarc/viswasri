// import { FaWhatsapp } from "react-icons/fa";

// const WhatsAppButton = () => {
//   return (
//     <a
//       href="https://wa.me/919053922999"
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat on WhatsApp"
//       className="
//         fixed bottom-6 right-6
//         z-50
//         w-14 h-14
//         rounded-full
//         bg-green-500
//         flex items-center justify-center
//         shadow-2xl
//         hover:scale-110
//         transition-transform duration-300
//       "
//     >
//       <FaWhatsapp className="w-7 h-7 text-white" />
//     </a>
//   );
// };

// export default WhatsAppButton;


import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919053922999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6
        z-[9999]
        w-14 h-14
        rounded-full
        bg-green-500
        flex items-center justify-center
        shadow-2xl
        hover:scale-110
        transition-all duration-300
      "
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;