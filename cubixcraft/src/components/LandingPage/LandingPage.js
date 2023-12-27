// LandingPage.js
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <section>
        <h2>Candidate Details</h2>
        <p>First Name: Venkata Sravani</p>
        <p>Highest Degree Passout Year: 2024</p>
        <p>Technologies/ Language you have worked with: React</p>
      </section>
      <section>
        <h2>Download Resume</h2>
        <a href="/path/to/resume.pdf" download>
          Download Resume
        </a>
      </section>
      <section>
        <h2>BMI Calculation</h2>
        <a href="/bmi">BMI Calculation Page</a>
      </section>
    </div>
  );
};

export default LandingPage;
