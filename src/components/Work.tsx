import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    const scrollDistance = 3000; // 6 boxes * 600px width - viewing padding

    const timeoutId = setTimeout(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -scrollDistance,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "AI Financial Intelligence",
              category: "Machine Learning",
              tools: "Python, Full-Stack",
              description: "A full-stack financial analytics platform that applies machine learning to decode market behaviour, predict stock trends, and surface actionable intelligence.",
              link: "https://github.com/siddharthhkumar/AI-Financial-Intelligence-System"
            },
            {
              name: "Stress Level Classification",
              category: "Research Paper",
              tools: "Python, Sklearn, ML",
              description: "Research study presented at AIS2C2 2025 exploring student stress prediction using psychological and lifestyle indicators with supervised learning models.",
              link: "https://s-iddharth-portfolio.vercel.app/docs/260.pdf"
            },
            {
              name: "Football Performance Analysis",
              category: "Data Analysis",
              tools: "SQL, Power BI",
              description: "Interactive Power BI dashboard analysing FIFA match data including goals, possession, player performance, and key team statistics.",
              link: "https://github.com/siddharthhkumar"
            },
            {
              name: "HR Attrition Analysis",
              category: "Data Analysis",
              tools: "SQL, Python, Power BI",
              description: "Cleaned and analysed corporate HR data to pinpoint leading drivers of employee attrition, delivering KPIs to management.",
              link: "https://github.com/siddharthhkumar"
            },
            {
              name: "Tennis Match Dashboard",
              category: "Data Visualization",
              tools: "Power BI",
              description: "Interactive Power BI dashboard analysing player performance metrics including aces, first-serve percentage, match score, and net points.",
              link: "https://github.com/siddharthhkumar"
            },
            {
              name: "Attendance System",
              category: "Computer Vision",
              tools: "Python, OpenCV, Streamlit",
              description: "Built a robust facial recognition pipeline for automated check-ins and attendance logging utilizing deep learning and OpenCV.",
              link: "https://github.com/siddharthhkumar/Attendance_System"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                
                <h4 style={{marginTop: '30px', fontWeight: 500, color: '#fff'}}>Summary</h4>
                <p style={{marginBottom: '30px', color: '#adacac', lineHeight: '1.6'}}>{project.description}</p>
                
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{
                      marginTop: '20px',
                      display: 'inline-block',
                      color: 'var(--accentColor)',
                      borderBottom: '1px solid var(--accentColor)',
                      textDecoration: 'none',
                      width: 'max-content'
                    }}
                    data-cursor="disable"
                  >
                    View Project ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
