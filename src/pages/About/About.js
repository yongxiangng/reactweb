import PageHeader from "../../components/PageHeader";

import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div>
        <PageHeader name="About Me" />
      </div>
      <div className={styles.content}>
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
    </div>
  );
}

export default About;
