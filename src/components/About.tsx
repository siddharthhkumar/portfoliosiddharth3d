import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          "I measure what people miss. I research what matters. I build communities where real help happens. That's my work."
          <br /><br />
          I am Siddharth Kumar, a Business Analyst learning how to ask better questions. Most organizations do not realize what they are missing because they have never measured it. The most meaningful things happen when you combine honest data, genuine research, and real human connection.
          <br /><br />
          <b>As a Business Analyst:</b> At Top Talent Bridge LLP and Gaint Logistics, I built dashboards and pipelines that help people see what they could not see before. I use SQL, Python, and Power BI to answer the one question that matters: What are we blind to?
          <br /><br />
          <b>As a Researcher:</b> I noticed students around me were struggling and nobody was measuring it. So I built an ML model, tested it rigorously, and presented it at AIS2C2 International Conference 2025.
          <br /><br />
          <b>As a Community Builder:</b> I founded Mirage, grew GDG and MLSA, and helped build ICompus. The 500+ people who showed up built the communities. I just created the space.
        </p>
      </div>
    </div>
  );
};

export default About;
