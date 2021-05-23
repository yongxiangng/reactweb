import "./Projects.css";

import { useState, useEffect } from "react";

import PageHeader from "../components/PageHeader";

import { Link } from "react-router-dom";

function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function getProjects() {
      const response = await fetch('http://localhost:8000/api/projects/');
      const data = await response.json();
      setProjects(data)
    }
    getProjects();
  }, [])

  return (
    <div className="projects-container">
      <PageHeader name="Projects" />
      <ol className="projects-list">
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
    <div className="project-card">
      <div className="project-info">
        <h2 className="project-title">
          <Link to={`/projects/${toUrl(title)}`} className="project-title-text">
            {title}
          </Link>
        </h2>
        <div className="project-abstract">
          <p>{abstract}</p>
        </div>
      </div>
      <div className="project-buttons">
        <Button name="View Code" link={code} />
        <Button name="View Demo" link={deployment} />
      </div>
    </div>
  );
}

function Button(props) {
  const { name, link } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="project-button-text"
    >
      <div className="project-button">{name}</div>
    </a>
  );
}

export default Projects;
