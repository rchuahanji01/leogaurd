import React from "react";
import "./CompanyIntro.css";
import IMG1 from '../../assets/into/img1.png'
import IMG2 from '../../assets/into/img2.png'
import IMG3 from '../../assets/into/img3.png'
const CompanyIntro = () => {
  return (
    <section className="company-intro">
      <div className="intro-header">
        {/* <h4>Company Introduction</h4>
        <p className="subtext">Leogard Pharmaceuticals Corporate Vision</p> */}
      </div>

      <div className="intro-quote">
        
         <h2>
           “Providing the freshest <span>today’s skin</span>”
         </h2>
        {/* <p>
          Leogard promotes and provides you with the most effective experience
          of dermatological and cosmeceutical care.
        </p>  */}
      </div>

      <div className="intro-grid">
        <div className="intro-card">
          <img
            src={IMG1}
            alt="Safe Products"
          />
          <div className="intro-text">
            <h3>Developing Safe Products</h3>
            <p>
              We use scientifically tested ingredients to provide healthy
              nourishment and safety to your skin.
            </p>
          </div>
        </div>

        <div className="intro-card">
          <img
            src={IMG2}
            alt="Skin Specific Solutions"
          />
          <div className="intro-text">
            <h3>Provide Skin-Specific Solutions</h3>
            <p>
              We categorize skin concerns by specialized ranges and deliver
              effective skincare designed for your needs.
            </p>
          </div>
        </div>

        <div className="intro-card">
          <img
            src={IMG3}
            alt="Global Market"
          />
          <div className="intro-text">
            <h3>Compete in the Global Market</h3>
            <p>
              A proud Indian skincare brand making its mark globally with
              innovation and dermatology-backed care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
