import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";

const TechStack = () => {
  const tools1 = [
    "Python", "SQL", "Power BI", "Tableau", "Excel", "Data Cleaning"
  ];
  const tools2 = [
    "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "Streamlit"
  ];
  const certifications = [
    "Deloitte Data Analytics Job Simulation (2025)",
    "Google Cloud Data Analyst Certificate (2025)",
    "Office Master Power BI Certificate (2025)",
    "Lead author, “Stress Level Classification” AIS2C2 2025",
    "Selected participant, McKinsey Forward Program 2025"
  ];

  return (
    <div className="techstack-section" style={{ padding: '80px 0' }}>
      <h2 className="techstack-title">My Tech Stack</h2>
      <div className="techstack-marquee-wrapper" style={{ marginBottom: '80px' }}>
        <Marquee speed={50} autoFill>
          {tools1.map((tool, index) => (
            <div key={index} className="techstack-item">
              <span>{tool}</span>
            </div>
          ))}
        </Marquee>
        <Marquee speed={40} direction="right" autoFill>
          {tools2.map((tool, index) => (
            <div key={index} className="techstack-item">
              <span>{tool}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <h2 className="techstack-title">Awards & Certifications</h2>
      <div className="techstack-marquee-wrapper">
        <Marquee speed={45} autoFill>
          {certifications.map((cert, index) => (
            <div key={index} className="techstack-item">
              <span>{cert}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
