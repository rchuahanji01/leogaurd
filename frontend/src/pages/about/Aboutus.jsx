// import React from "react";
// import "./Aboutus.css";
// import AboutImg from "../../assets/aboutus.png"; // replace with real image
// import MissionImg from "../../assets/productCard/faceScrub.jpg"; // sample placeholder
// // import ValuesImg from "../../assets/values.jpg";  // sample placeholder

// const Aboutus = () => {
//   return (
//     <div className="aboutus">
//       {/* Hero Section */}
//       <section className="aboutus-hero">
//         <div className="hero-overlay">
//           <h1>About LeoGuard Pharmaceuticals</h1>
//           <p>Redefining Beauty & Wellness Through Science and Care</p>
//         </div>
//       </section>

//       {/* Our Story */}
//       <section className="aboutus-split">
//         <div className="split-image">
//           <img src={AboutImg} alt="Our Story" />
//         </div>
//         <div className="split-text">
//           <h2>Our Story</h2>
//           <p>
//             LeoGuard Pharmaceuticals was founded with a vision to provide
//             advanced, science-backed solutions in cosmeceuticals,
//             trichology, and nutraceuticals. With expertise spanning across
//             national and multinational companies, our team brings together
//             decades of knowledge in research, marketing, and manufacturing.
//           </p>
//           <p>
//             We are pioneers in glutathione-based supplements, skincare,
//             and haircare solutions, delivering wellness in a healthy,
//             sustainable way.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="aboutus-split reverse">
//         <div className="split-text">
//           <h2>Mission & Vision</h2>
//           <p>
//             <strong>Mission:</strong> To create safe, effective, and innovative
//             health and beauty solutions that empower confidence and
//             well-being.
//           </p>
//           <p>
//             <strong>Vision:</strong> To become a global leader in cosmeceutical
//             excellence, trusted for quality, innovation, and care.
//           </p>
//         </div>
//         <div className="split-image">
//           <img src={MissionImg} alt="Mission Vision" />
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="aboutus-values">
//         <h2>Our Core Values</h2>
//         <div className="values-grid">
//           <div className="value-card">
//             <h3>Science & Innovation</h3>
//             <p>Every product is rooted in research and dermatological science.</p>
//           </div>
//           <div className="value-card">
//             <h3>Quality First</h3>
//             <p>We follow stringent GMP standards for purity and safety.</p>
//           </div>
//           <div className="value-card">
//             <h3>Holistic Wellness</h3>
//             <p>Beauty from the inside out through skincare & nutraceuticals.</p>
//           </div>
//           <div className="value-card">
//             <h3>Ethics & Sustainability</h3>
//             <p>Committed to cruelty-free, eco-conscious practices.</p>
//           </div>
//         </div>
//       </section>

//       {/* Commitment */}
//       <section className="aboutus-commitment">
//         <div className="commitment-text">
//           <h2>Our Commitment</h2>
//           <p>
//             At LeoGuard Pharmaceuticals, your health and wellness are at the
//             core of what we do. We promise products that are safe,
//             dermatologically tested, and clinically proven — blending
//             innovation with care.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
    
//     </div>
//   );
// };

// export default Aboutus;

import React from "react";
import "./Aboutus.css";
import AboutImg from "../../assets/aboutus.png"; // replace with real image
import MissionImg from "../../assets/productCard/faceScrub.jpg"; // sample placeholder

const Aboutus = () => {
  return (
    <div className="aboutus">
      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="hero-overlay">
          <h1>About LeoGuard Pharmaceuticals</h1>
          <p>Redefining Beauty & Wellness Through Science and Care</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="aboutus-split">
        <div className="split-image">
          <img src={AboutImg} alt="Our Story" />
        </div>
        <div className="split-text">
          <h2>Our Story</h2>
          <p>
            LeoGuard Pharmaceuticals was founded with a vision to provide
            advanced, science-backed solutions in cosmeceuticals,
            trichology, and nutraceuticals. With expertise spanning across
            national and multinational companies, our team brings together
            decades of knowledge in research, marketing, and manufacturing.
          </p>
          <p>
            We are pioneers in glutathione-based supplements, skincare,
            and haircare solutions, delivering wellness in a healthy,
            sustainable way.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="aboutus-split reverse">
        <div className="split-text">
          <h2>Mission & Vision</h2>
          <p>
            <strong>Mission:</strong> To create safe, effective, and innovative
            health and beauty solutions that empower confidence and
            well-being.
          </p>
          <p>
            <strong>Vision:</strong> To become a global leader in cosmeceutical
            excellence, trusted for quality, innovation, and care.
          </p>
        </div>
        <div className="split-image">
          <img src={MissionImg} alt="Mission Vision" />
        </div>
      </section>

      {/* Core Values */}
      <section className="aboutus-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Science & Innovation</h3>
            <p>Every product is rooted in research and dermatological science.</p>
          </div>
          <div className="value-card">
            <h3>Quality First</h3>
            <p>We follow stringent GMP standards for purity and safety.</p>
          </div>
          <div className="value-card">
            <h3>Holistic Wellness</h3>
            <p>Beauty from the inside out through skincare & nutraceuticals.</p>
          </div>
          <div className="value-card">
            <h3>Ethics & Sustainability</h3>
            <p>Committed to cruelty-free, eco-conscious practices.</p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="aboutus-commitment">
        <div className="commitment-text">
          <h2>Our Commitment</h2>
          <p>
            At LeoGuard Pharmaceuticals, your health and wellness are at the
            core of what we do. We promise products that are safe,
            dermatologically tested, and clinically proven — blending
            innovation with care.
          </p>
        </div>
      </section>

      {/* Presence Section */}
      <section className="aboutus-presence">
        <h2>Our Presence</h2>

        <div className="presence-cards">
          <div className="presence-card">
            <h3>Nationwide Distribution</h3>
            <p>
              We serve across 20+ states in India, ensuring timely delivery to both urban and rural areas.
            </p>
          </div>
          <div className="presence-card">
            <h3>Certified Manufacturing Units</h3>
            <p>
              ISO and GMP certified facilities meeting international standards with cutting-edge equipment.
            </p>
          </div>
          <div className="presence-card">
            <h3>Trusted by Professionals</h3>
            <p>
              Our products are recommended by dermatologists, trichologists, and wellness experts nationwide.
            </p>
          </div>
          <div className="presence-card">
            <h3>Customer Satisfaction</h3>
            <p>
              Over 50,000 happy customers have experienced the LeoGuard difference in skin & hair wellness.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="aboutus-cta">
        <h2>Let’s Build a Healthier Future Together</h2>
        <p>
          Partner with LeoGuard Pharmaceuticals and experience the perfect
          blend of science, innovation, and care.
        </p>
        <button className="aboutus-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default Aboutus;
