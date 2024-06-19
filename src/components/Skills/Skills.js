import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import { ThemeContext } from "../../contexts/ThemeContext";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";

function Skills() {
  const { theme } = useContext(ThemeContext);
  const programsAndPlatforms = [
    "Talkwalker",
    "Tableau",
    "Microsoft Office (Excel, Word, and PowerPoint)",
    "SPSS",
    "SEMrush",
    "Brandwatch",
    "Crimson Hexagon",
    "MOAT",
    "Alexa",
    "Similar Web",
    "Google Keywords",
    "Google Analytics and Trend",
    "Jira",
    "Web Scraper",
    "Priori",
    "Google Tag Manager",
    "SAS Software",
    "Python",
    "R studio",
  ];
  const skills = [
    "Social media Analytics",
    "Digital Marketing",
    "Documentation",
    "Pattern and Trend Identification",
    "Analytical Thinking",
    "Business Reporting",
    "Decision Making",
    "Storytelling with Data",
    "Product analysis",
    "Insight generation",
    "Consulting",
  ];
  const others = [
    "Strong Communication Skills",
    "Attention to Detail",
    "Strategic Planning",
    "Time management",
    "Leadership Skills",
  ];
  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className="skills" style={{ backgroundColor: theme.secondary }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>
      <div className="skillsContainer">
        <div className="section">
          <h2>Programs & Platforms</h2>
          <div className="button-row">
            {programsAndPlatforms.map((program, index) => (
              <button key={index}>{program}</button>
            ))}
          </div>
          <hr style={{margin:'10px'}}/>
          <h2>Skills</h2>
          <div className="button-row">
            {skills.map((skill, index) => (
              <button key={index}>{skill}</button>
            ))}
          </div>
          <hr />
          <h2>Others</h2>
          <div className="button-row">
            {others.map((other, index) => (
              <button key={index}>{other}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
