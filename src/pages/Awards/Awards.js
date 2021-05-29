import styles from "./Awards.module.css";

import { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";

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
      <ol className="flex flex-col items-center">
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
    <Card isRow={false}>
      <div className={styles.cardHeader}>
        <h1>
          <strong>{title}</strong>
        </h1>
        <h2>
          <strong>{date}</strong>
        </h2>
      </div>
      <div className={styles.cardDescription}>
        <p>{description}</p>
      </div>
    </Card>
  );
}

export default Awards;
