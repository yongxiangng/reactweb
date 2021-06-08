import { Row, Col } from "antd";
import styles from "./Home.module.css";
import pic1 from "../../assets/home/imgbin_doraemon-animation-png.png";
import pic2 from "../../assets/home/toppng.com-computer-science-png-women-symbol-in-science-813x708.png";

function Home() {
  return (
    <>
      <div className="hidden sm:block">
        <div className={styles.container}>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            align="middle"
            wrap="true"
            style={{ height: "80vh", margin: "20px" }}
          >
            <Col className="gutter-row" span={12}>
              <p className="my-8 mx-4">
                Hello I am
                <br />
                <strong>
                  <span className={styles.name}>Ng Yong Xiang</span>
                </strong>
                <br />
                Year 2 NUS Computing + Business Administration DDP student
              </p>
            </Col>
            <Col className="gutter-row" span={12} align="middle">
              <img
                src={pic1}
                alt="Home page"
                className="max-w-xs lg:max-w-none lg:w-1/2 p-10 lg:p-0"
              ></img>
            </Col>
          </Row>

          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            align="middle"
            wrap="true"
            style={{ height: "80vh", margin: "20px" }}
          >
            <Col className="gutter-row" span={12} align="middle">
              <img
                src={pic2}
                alt="Home page"
                className="max-w-xs lg:max-w-none lg:w-1/2 p-10 lg:p-0"
              ></img>
            </Col>
            <Col className="gutter-row" span={12}>
              <p className="my-8 mx-4">
                The purpose of the website is for me to consolidate all my
                projects and deploy them. I really don't know what else to write
                here.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="block sm:hidden">
        <Col className="gutter-row" span={24} style={{ height: "35vh" }}>
          <p className="my-28">
            Hello I am
            <br />
            <strong>
              <span className={styles.name}>Ng Yong Xiang</span>
            </strong>
            <br />
            Year 2 NUS Computing + Business Administration DDP student
          </p>
        </Col>

        <Col className="gutter-row" span={24} align="middle" style={{ height: "35vh" }}>
          <img
            src={pic1}
            alt="Home page"
            // className="max-w-xs lg:max-w-none lg:w-1/2 p-10 lg:p-0"
            className="w-1/2"
          ></img>
        </Col>

        <Col className="gutter-row" style={{ height: "35vh" }}>
          <p className="my-28">
            The purpose of the website is for me to consolidate all my projects
            and deploy them. I really don't know what else to write here.
          </p>
        </Col>

        <Col className="gutter-row" span={24} align="middle" style={{ height: "35vh" }}>
          <img
            src={pic2}
            alt="Home page"
            className="max-w-xs lg:max-w-none lg:w-1/2 p-10 lg:p-0"
          ></img>
        </Col>
      </div>
    </>
  );
}

export default Home;
