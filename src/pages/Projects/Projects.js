import "./Projects.less";

import { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";

import { Button } from "antd";
import { Space, Card } from "antd";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const response = await fetch("http://localhost:8000/api/projects/");
      const data = await response.json();
      setProjects(data);
    }
    getProjects();
  }, []);

  return (
    <div className="container">
      <PageHeader name="Projects" />
      <Space direction="vertical" align="center">
        {projects.map((project) => (
          <Card title={project.title} style={{ width: 900 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{project.abstract}</p>
              <div className={"buttons"} style={{ width: "25%" }}>
                <Button
                  type="primary"
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black", margin: "5px" }}
                >
                  View Code
                </Button>
                <Button
                  type="primary"
                  href={project.deployment}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "black", margin: "5px" }}
                >
                  View Demo
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </Space>
    </div>
  );
}

export default Projects;
