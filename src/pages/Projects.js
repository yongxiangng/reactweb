import "./Projects.css";

import PageHeader from "../components/PageHeader";

import { Link } from "react-router-dom";

const projects = require("../database/projects.json")

function Projects() {
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
  const project = props.project;

  const title = project.title; // try to use object destructuring here
  const abstract = project.abstract;
  const code = project.code;
  const deployment = project.deployment;

  function toUrl(title) {
    return title.toLowerCase().replace(/\s/g, '-')
  }

  return (
    <div className="project-card">
      <div className="project-info">
        <h2 className="project-title">
          <Link to={`/projects/${toUrl(title)}`} className="project-title-text">{title}</Link>
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
  const name = props.name;
  const link = props.link;
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
