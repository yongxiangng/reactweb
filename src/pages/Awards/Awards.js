import styles from "./Awards.module.css";

import { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";

function Awards() {
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    async function getAwards() {
      const response = await fetch("http://localhost:8000/api/awards/");
      const data = await response.json();
      setAwards(data);
    }
    getAwards();
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader name="Awards" />
      <ol>
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
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>{title}</h2>
        <h2>{date}</h2>
      </div>
      <div className={styles.cardDescription}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Awards;
