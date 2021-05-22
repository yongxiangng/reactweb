import "./Projects.css"

import PageHeader from "../components/PageHeader";

function Projects() {
  const projects = [
    {
      title: "Source Academy",
      abstract: "Contributed to the developement of source academy.",
      description: "Turned 2D mono-colored curves to 3D multi-colored curves.",
      code: "https://github.com/source-academy/cadet-frontend",
      deployment: "https://source-academy.github.io/playground"
    }
  ]
  return (
    <div className="projects-container">
      <PageHeader name="Projects" />
      <ol className="projects-list">
        {projects.map((project, index ) => (
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
  return (
    <div className="project-card">
      <div className="project-info">
        <div className="project-title">
          <strong>{title} </strong>
        </div>

        <div className="project-abstract">
          <p>{abstract}</p>
        </div>
      </div>
      
      <div className="project-buttons">
        <Button name="View Code" link={code}/>
        <Button name="View Demo" link={deployment}/>
      </div>
    </div>
  )
}

function Button(props) {
  const name = props.name;
  const link = props.link
  return (
    <a href={link} target="_blank" rel="noreferrer" className="project-button-text">
      <div className="project-button">
          {name}
      </div>
    </a>
  )
}

export default Projects;
