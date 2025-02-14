import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.scss";

const AcademySolutions = () => {
  const sections = [
    { name: "Digital Business", color: "#6cc24a" },
    { name: "Data & AI", color: "#2fc4b2" },
    { name: "Cloud & DevOps", color: "#32a9e0" },
    { name: "Software Development", color: "#2e78d6" },
    { name: "Cybersecurity", color: "#2452a6" },
    { name: "Digital Operations", color: "#1e3a75" }
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="circle-container position-relative">
        <div className="center-circle">Academy Solutions</div>
        {sections.map((section, index) => (
          <div
            key={index}
            className={`section section-${index}`}
            style={{ backgroundColor: section.color }}
          >
            {section.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademySolutions;

