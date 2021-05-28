import styles from "./Projects.module.css";

import { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";

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
    <div className={styles.container}>
      <PageHeader name="Projects" />
      <ol>
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
    <div className={styles.card}>
      <div className={styles.info}>
        <h2 className={styles.title}>
          <Link to={`/projects/${toUrl(title)}`} className={styles.titleText}>
            {title}
          </Link>
        </h2>
        <div className={styles.abstract}>
          <p>{abstract}</p>
        </div>
      </div>
      <div className={styles.buttons}>
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
      className={styles.buttonText}
    >
      <div className={styles.button}>{name}</div>
    </a>
  );
}

export default Projects;
