import { useState, useEffect } from "react";

import { Space, Card, PageHeader } from "antd";

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
    <>
      <PageHeader className="site-page-header" title="Awards" />
      <Space direction="vertical" align="center">
        {awards.map((award, key) => (
          <Card
            title={award.title}
            style={{ maxWidth: 1200, width: "90vw" }}
            key={key}
          >
            <p>{award.description}</p>
          </Card>
        ))}
      </Space>
    </>
  );
}

export default Awards;
