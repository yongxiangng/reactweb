import styles from "./Project.module.css";

import PageHeader from "../../components/PageHeader";

const projects = require("../../database/projects.json");

export default function Project(props) {
  const { match } = props;
  const { params } = match;
  const { id } = params;
  let project = {
    title: "404 Error! Page not found :<",
    description: "",
  }

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
      <PageHeader name={project.title} />
      <div className={styles.description}>{project.description}</div>
    </div>
  );
}
