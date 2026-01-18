import React from "react";
import "./About.css";
import assets from "../../assets/assets";

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Our Company</h2>
        <p>
        Founded in 2001, Hikvision focuses on integrated security and scenario-based digitalization. Propelled by the AI-powered Internet of Things (AIoT), the Company remains committed to serving various industries with its machine perception and artificial intelligence technologies. Guided by the core values of 'Professionalism, Reliability, and Integrity', Hikvision explores innovative ways to better perceive and understand the world. It empowers visionary decision-makers and practitioners to work together to enhance safety and advance sustainable development around the world. The Company's business grows through technologies that are deeply rooted in innovation and an increasingly diverse range of AIoT products and solutions. With an open ecosystem, Hikvision is empowering the industry and advancing with its partners. The Company currently provides products and services to over 180 countries and regions. In 2024, Hikvision's revenue was RMB 92.50 billion (USD 12.87 billion)
        </p>
      </div>

      <div className="about-image">
        <img src={assets.core} alt="About Company" />
      </div>
    </section>
  );
};

export default About;