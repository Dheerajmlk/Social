import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Platform</h1>
      <p className="about-description">
        Welcome to our community collaboration platform! Here, users can share ideas, collaborate on projects, and connect with like-minded individuals.
      </p>
      <div className="about-features">
        <h2>Why Join Us?</h2>
        <ul>
          <li>🛠️ Share your skills and knowledge.</li>
          <li>💡 Discover and contribute to exciting ideas.</li>
          <li>🤝 Connect with collaborators and teammates.</li>
          <li>🚀 Build and launch projects with community support.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
