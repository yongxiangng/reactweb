import "./Projects.less";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";
import { Space, Card, PageHeader } from "antd";

function Projects() {
  function toUrl(title) {
    return title.toLowerCase().replace(/\s/g, "-");
  }

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
    <>
      <PageHeader className="site-page-header" title="Projects" />
      <Space direction="vertical" align="center">
        {projects.map((project, key) => (
          <Card
            title={
              <Link
                to={`/projects/${toUrl(project.title)}`}
                className={"titleText"}
              >
                {project.title}
              </Link>
            }
            style={{ maxWidth: 1200, width: "90vw" }}
            key={key}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>{project.abstract}</p>
              <div className={"buttons"} style={{ width: "20%" }}>
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
    </>
  );
}

export default Projects;
