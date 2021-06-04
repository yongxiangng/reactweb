import styles from "./Project.module.css";

import { useState, useEffect } from "react";

import { PageHeader } from "antd";

export default function Project(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      const response = await fetch("http://localhost:8000/api/projects/");
      const data = await response.json();
      setProjects(data);
    }
    getProjects();
  }, []);

  const { match } = props;
  const { params } = match;
  const { id } = params;
  let project = {
    title: "",
    description: "",
  };

  function toID(name) {
    return name.toLowerCase().replace(/\s/g, "-");
  }

  for (let i = 0; i < projects.length; i++) {
    if (toID(projects[i].title) === id) {
      project = projects[i];
      break;
    }
  }

  return (
    <div className={styles.container}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title={project.title}
      />
      <p>{project.description}</p>
    </div>
  );
}
