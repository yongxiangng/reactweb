import "./Projects.less";

import { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";

import { Button } from "antd";
import { Link } from "react-router-dom";

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
      <ol className="flex flex-col items-center">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </ol>
    </div>
  );
}

function ProjectCard(props) {
  const { project } = props;
  const { title, abstract, code, deployment } = project;

  function toUrl(title) {
    return title.toLowerCase().replace(/\s/g, "-");
  }

  return (
    <Card isRow={true}>
      <div className="flex flex-col justify-center lg:w-1/2 w-full">
        <h2 className={"title"}>
          <Link to={`/projects/${toUrl(title)}`} className={"titleText"}>
            {title}
          </Link>
        </h2>
        <div className={"abstract"}>
          <p>{abstract}</p>
        </div>
      </div>
      <div className={"buttons"}>
        <Button type="primary" href={code} style={{ color: "black", margin: "5px", font: "Poppins" }} >
          View Code
        </Button>
        <Button type="primary" href={deployment} style={{ color: "black", margin: "5px" }} >
          View Demo
        </Button>
      </div>
    </Card>
  );
}

export default Projects;
