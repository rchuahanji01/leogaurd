import React from "react";
import "./WelcomeSection.css";
import productsBanner from "../../assets/home/image.png"; // <-- use your product lineup image

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="content">
        <h1>WELCOME TO LEOGARD PHARMACEUTICALS</h1>
        <div className="underline"></div>
        <p>
          We are a leading Indian dermatological, cosmetological, trichological,
          and nutraceutical company. Our mission is to enhance beauty and
          wellness through scientifically advanced formulations. 
      
        </p>
      </div>

      <div className="product-lineup">
        <img src={productsBanner} alt="Leogard Product Range" />
      </div>
    </section>
  );
};

export default WelcomeSection;
