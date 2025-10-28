import React from "react";
import "./BrandClosing.css";
import modelimg from '../../assets/into/modelimage.png'
import logo from "../../assets/logo1.png"; // your logo image

const BrandClosing = () => {
  return (
    <section className="brand-closing parallax">
      <div className="closing-image">
        <img
          src={modelimg}
          alt="Leogard product"
        />
      </div>

     
    </section>
  );
};

export default BrandClosing;
