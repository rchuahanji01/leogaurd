
// import React from "react";
// import { useNavigate } from "react-router-dom"; // if using react-router
// import "./AboutSection.css";
// import AboutImg from "../../assets/aboutimg.png";

// const AboutSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="about-section">
//       <div className="about-container">
//         <div className="about-image">
//           <img src={AboutImg} alt="LeoGuard Skincare" />
//         </div>

//         <div className="about-text">
//           <h2>Welcome to LeoGuard Pharmaceuticals</h2>
//           <p>
//             Discover the future of advanced skincare and haircare with LeoGuard.
//             Backed by a team of dermatologists, scientists, and skincare
//             specialists, we deliver clinically effective solutions designed to
//             meet your unique needs.
//           </p>
//           <p>
//             Our wide portfolio includes dermatologist-tested face serums,
//             nourishing creams, protective sunscreens, rejuvenating shampoos, and
//             much more—crafted with a focus on quality and results.
//           </p>
//           <p>
//             At LeoGuard Pharmaceuticals, your skin and hair health are our top
//             priority. With a perfect blend of science, innovation, and care, we
//             bring you personalized solutions you can trust.
//           </p>

//           <button
//             className="read-more-btn"
//             onClick={() => navigate("/about")}
//           >
//             Read More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutSection.css";
import AboutImg from "../../assets/aboutimg.png";

const AboutSection = () => {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image slide-left" ref={imageRef}>
          <img src={AboutImg} alt="LeoGuard Skincare" />
        </div>

        <div className="about-text slide-right" ref={textRef}>
          <h2>Welcome to LeoGuard Pharmaceuticals</h2>
          <p>
            Discover the future of advanced skincare and haircare with LeoGuard.
            Backed by a team of dermatologists, scientists, and skincare
            specialists, we deliver clinically effective solutions designed to
            meet your unique needs.
          </p>
          <p>
            Our wide portfolio includes dermatologist-tested face serums,
            nourishing creams, protective sunscreens, rejuvenating shampoos, and
            much more—crafted with a focus on quality and results.
          </p>
          <p>
            At LeoGuard Pharmaceuticals, your skin and hair health are our top
            priority. With a perfect blend of science, innovation, and care, we
            bring you personalized solutions you can trust.
          </p>

          <button
            className="read-more-btn"
            onClick={() => navigate("/about")}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
