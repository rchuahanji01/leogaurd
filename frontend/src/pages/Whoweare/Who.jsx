import React from "react";
import "./Who.css";

const Who = () => {
  const cards = [
    {
      title: "INNOVATION",
      text: "We foster a culture of creativity and openness to new ideas, driving advancement in skills, technology, and processes.",
    },
    {
      title: "CUSTOMER DELIGHT",
      text: "We aim for excellence in our products and services, exceeding customer expectations and building long-term relationships.",
    },
    {
      title: "QUALITY",
      text: "We uphold the highest quality standards, delivering excellence beyond expectations every time.",
    },
  ];

  return (
    <div className="who-section">
      <h1 className="who-title">WHO WE ARE</h1>
      <p className="who-subtitle">
        We are a leading Indian cosmeceutical, trichological, and nutraceutical
        company, recognized as pioneers in glutathione-based supplements.
      </p>

      <div className="who-cards">
        {cards.map((card, index) => (
          <div className="who-card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
            <a href="#learn-more" className="learn-more">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Who;
