import styles from "./Home.module.css";

import pic1 from "../../assets/home/imgbin_doraemon-animation-png.png";
import pic2 from "../../assets/home/toppng.com-computer-science-png-women-symbol-in-science-813x708.png";

function Home() {
  return (
    <div className={styles.container}>
      <HomeCard1 parity="0" />
      <HomeCard2 parity="1" />
    </div>
  );
}

// chose to hard code to prevent use of innerHTML, anyways my Home Page doesn't change often

function HomeCard1(props) {
  const { parity } = props;
  return (
    <div className={styles.card}>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          Hello I am
          <br />
          <strong>
            <span className={styles.name}>Ng Yong Xiang</span>
          </strong>
          <br />
          Year 2 NUS Computing + Business Administration DDP student
        </p>
      </div>
      <div
        className={
          parity === "0" ? styles.pictureContainer0 : styles.pictureContainer1
        }
      >
        <img src={pic1} alt="Home page" className={styles.picture}></img>
      </div>
    </div>
  );
}

function HomeCard2(props) {
  const { parity } = props;
  return (
    <div className={styles.card}>
      <div
        className={
          parity === "0" ? styles.pictureContainer0 : styles.pictureContainer1
        }
      >
        <img src={pic2} alt="Home page" className={styles.picture}></img>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.content}>
          The purpose of the website is for me to consolidate all my projects
          and deploy them. I really don't know what else to write here.
        </p>
      </div>
    </div>
  );
}

export default Home;
