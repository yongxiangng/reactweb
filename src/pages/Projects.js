import PageHeader from "../components/PageHeader";

function Projects() {
  return (
    <div className="about-container">
      <div className="about-header">
        <PageHeader name="About Me" />
      </div>
      <div className="about-content">
        <p className="about-content-text">
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

export default Projects;
