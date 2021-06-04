import styles from "./Awards.module.css";

import { useState, useEffect } from "react";

import { Space, Card } from "antd";

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
      <Space direction="vertical" align="center">
        {awards.map((award) => (
          <Card title={award.title} style={{ width: 900 }}>
            <p>{award.description}</p>
          </Card>
        ))}
      </Space>
    </div>
  );
}

export default Awards;
