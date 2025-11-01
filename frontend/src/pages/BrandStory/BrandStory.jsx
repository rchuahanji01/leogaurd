

// import React from "react";
// import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// import "./BrandStory.css";
// import Model from "../../assets/into/model.png";
// import Color from "../../assets/into/color.png";
// import Ingdrieng from "../../assets/into/ingdrient.png";
// import Solution from "../../assets/into/solution.png";

// const BrandStory = () => {
//   return (
//     <ParallaxProvider>
//       <section className="brand-story">
//         {/* Left Column (moves slower) */}
//         <Parallax speed={30}>
//           <div className="brand-left">
//             <h5 className="brand-subtitle">Brand Story</h5>
//             <p className="brand-small">Leogard brand story</p>

//             <h2 className="brand-title">Leogard</h2>

//             <h3 className="brand-tagline">Today’s Beauty is in the Skin.</h3>

//             <p className="brand-text">
//               Embark on a journey to reveal your skin’s purest glow with{" "}
//               <b>Leogard</b> — the dermatology-inspired skincare line formulated
//               with safe, naturally derived ingredients. Each product is developed
//               to provide what your skin truly deserves: balance, protection, and
//               nourishment.
//             </p>

//             <p className="brand-text">
//               Leogard delivers a complete skincare solution — a one-stop range
//               designed to care, protect, and rejuvenate all skin types with
//               clinically proven formulations.
//             </p>

//             <p className="brand-text">
//               Designed for convenience and results, each Leogard product aligns
//               perfectly with your unique skin needs — the science of care made
//               simple.
//             </p>
//           </div>
//         </Parallax>

//         {/* Right Column (moves faster) */}
//         <Parallax speed={-150}>
//           <div className="brand-right">
//             <div className="main-image">
//               <img src={Model} alt="Skincare Model" />
//             </div>

//             <div className="brand-features">
//               <div className="feature-tile">
//                 <img src={Color} alt="color" />
//               </div>
//               <div className="feature-tile">
//                 <img src={Ingdrieng} alt="ingredient" />
//               </div>
//               <div className="feature-tile">
//                 <img src={Solution} alt="one-stop" />
//               </div>
//             </div>
//           </div>
//         </Parallax>
//       </section>
//     </ParallaxProvider>
//   );
// };

// export default BrandStory;

import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "./BrandStory.css";
import Model from "../../assets/into/model.png";
import Color from "../../assets/into/color.png";
import Ingdrieng from "../../assets/into/ingdrient.png";
import Solution from "../../assets/into/solution.png";

const BrandStory = () => {
  const isMobile = window.innerWidth <= 768; // Detect mobile

  return (
    <ParallaxProvider>
      <section className="brand-story">
        {/* ✅ Desktop view (with parallax) */}
        {!isMobile ? (
          <>
            <Parallax speed={30}>
              <div className="brand-left">
                <h5 className="brand-subtitle">Brand Story</h5>
                <p className="brand-small">Leogard brand story</p>

                <h2 className="brand-title">Leogard</h2>
                <h3 className="brand-tagline">Today’s Beauty is in the Skin.</h3>

                <p className="brand-text">
                  Embark on a journey to reveal your skin’s purest glow with{" "}
                  <b>Leogard</b> — the dermatology-inspired skincare line formulated
                  with safe, naturally derived ingredients. Each product is developed
                  to provide what your skin truly deserves: balance, protection, and
                  nourishment.
                </p>

                <p className="brand-text">
                  Leogard delivers a complete skincare solution — a one-stop range
                  designed to care, protect, and rejuvenate all skin types with
                  clinically proven formulations.
                </p>

                <p className="brand-text">
                  Designed for convenience and results, each Leogard product aligns
                  perfectly with your unique skin needs — the science of care made
                  simple.
                </p>
              </div>
            </Parallax>

            <Parallax speed={-150}>
              <div className="brand-right">
                <div className="main-image">
                  <img src={Model} alt="Skincare Model" />
                </div>

                <div className="brand-features">
                  <div className="feature-tile">
                    <img src={Color} alt="color" />
                  </div>
                  <div className="feature-tile">
                    <img src={Ingdrieng} alt="ingredient" />
                  </div>
                  <div className="feature-tile">
                    <img src={Solution} alt="one-stop" />
                  </div>
                </div>
              </div>
            </Parallax>
          </>
        ) : (
          /* ✅ Mobile View (No Parallax, stacked layout) */
          <div className="brand-mobile">
            <div className="main-image">
              <img src={Model} alt="Skincare Model" />
            </div>

            <div className="brand-left">
              <h5 className="brand-subtitle">Brand Story</h5>
              <h2 className="brand-title">Leogard</h2>
              <h3 className="brand-tagline">Today’s Beauty is in the Skin.</h3>

              <p className="brand-text">
                Embark on a journey to reveal your skin’s purest glow with{" "}
                <b>Leogard</b> — the dermatology-inspired skincare line formulated
                with safe, naturally derived ingredients.
              </p>
            </div>

            <div className="brand-features">
              <div className="feature-tile">
                <img src={Color} alt="color" />
              </div>
              <div className="feature-tile">
                <img src={Ingdrieng} alt="ingredient" />
              </div>
              <div className="feature-tile">
                <img src={Solution} alt="one-stop" />
              </div>
            </div>
          </div>
        )}
      </section>
    </ParallaxProvider>
  );
};

export default BrandStory;

