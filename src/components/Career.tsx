import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Top Talent Bridge LLP</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Analysed candidate data and funnel metrics using Excel and basic SQL to understand conversion rates for roles in US and Canada. Built small dashboards that showed pipeline health so consultants could guide clients towards better-fit roles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Analyst</h4>
                <h5>Gautam Buddha University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a Python pipeline that cleaned USS-21 survey responses and lifestyle variables, then trained stress-level classification models. Compared Logistic Regression, Random Forest, and SVM for an international conference paper.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>Gaint Logistics</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Queried shipment and route data in SQL to flag delays, repeat issues, and high-cost lanes for the operations team. Created Excel and Power BI views summarising daily on-time rate, delay minutes, and volume by route on a single page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
