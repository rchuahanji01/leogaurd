import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Dr. Ananya Mehta",
    role: "Dermatologist",
    feedback:
      "LeoGuard products have set a new benchmark in skincare and haircare. Their scientific approach and quality standards are truly commendable.",
  },
  {
    name: "Rahul Sharma",
    role: "Customer",
    feedback:
      "I have been using LeoGuard’s face serum and sunscreen, and the results are amazing! Finally, a brand I can trust for my skin health.",
  },
  {
    name: "Priya Singh",
    role: "Nutritionist",
    feedback:
      "The nutraceutical range is top-notch. I confidently recommend LeoGuard supplements to my clients for safe and effective results.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h1 className="testimonial-title">What People Say</h1>
      <p className="testimonial-subtitle">
        Trusted by experts and loved by customers across India
      </p>

      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-feedback">“{t.feedback}”</p>
            <h3 className="testimonial-name">{t.name}</h3>
            <span className="testimonial-role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
