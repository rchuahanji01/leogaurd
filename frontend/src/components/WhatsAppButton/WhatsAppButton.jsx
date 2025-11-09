// import React from "react";
// import "./WhatsAppButton.css";

// const WhatsAppButton = () => {
//   const phoneNumber = "918369262375"; // your number without +
//   const message = "Hello LeoGard Pharma! I’d like to know more about your products.";
//   const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <a
//       href={link}
//       className="whatsapp-float"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <i className="fa-brands fa-whatsapp"></i>
//     </a>
//   );
// };

// export default WhatsAppButton;

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "919223803963"; // your number
  const message = "Hello LeoGard Pharma! I’d like to know more about your products.";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;

