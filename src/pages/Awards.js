import "./Awards.css";

import PageHeader from "../components/PageHeader";

const awards = require("../database/awards.json");

function Awards() {
  return (
    <div className="awards-container">
      <PageHeader name="Awards" />
      <ol className="awards-list">
        {awards.map((award, index) => (
          <AwardCard award={award} key={index} />
        ))}
      </ol>
    </div>
  );
}

function AwardCard(props) {
  const { award } = props;
  const { title, date, description } = award;

  return (
    <div className="award-card">
      <div className="award-card-header">
        <h2>{title}</h2>
        <h2>{date}</h2>
      </div>
      <div className="award-card-description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Awards;
