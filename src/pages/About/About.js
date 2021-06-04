import { PageHeader } from "antd";
import styles from "./About.module.css";

function About() {
  return (
    <>
      <PageHeader className="site-page-header" title="About Me" />
      <div className={styles.container}>
        <p className={styles.contentText}>
          {`Graduated from NUS High in 2019, I started 
          to pursue my degree at NUS in 2020 as a Computer Science 
          and Business Administration Double Degree student to further 
          my interest in Computer Science and Finance.`}
          <br />
          <br />

          {`I have been working on a few projects. Do check them out 
          under the projects tab!`}
          <br />
          <br />

          {`Thanks for reading this :3`}
        </p>
      </div>
    </>
  );
}

export default About;
