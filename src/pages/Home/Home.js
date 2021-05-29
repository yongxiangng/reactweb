import styles from "./Home.module.css";

import pic1 from "../../assets/home/imgbin_doraemon-animation-png.png";
import pic2 from "../../assets/home/toppng.com-computer-science-png-women-symbol-in-science-813x708.png";

function Home() {
  return (
    <div className={styles.container}>
      <HomeCard1 />
      <HomeCard2 />
    </div>
  );
}

// chose to hard code to prevent use of innerHTML, anyways my Home Page doesn't change often

function HomeCard1() {
  return (
    <div className="my-8 lg:my-52 flex flex-col lg:flex lg:flex-row lg:justify-around">
      <div className="flex flex-col justify-center">
        <p className="my-8">
          Hello I am
          <br />
          <strong>
            <span className={styles.name}>Ng Yong Xiang</span>
          </strong>
          <br />
          Year 2 NUS Computing + Business Administration DDP student
        </p>
      </div>
      <div className="flex flex-row justify-center lg:w-2/5">
        <img src={pic1} alt="Home page" className="lg:w-1/2 p-10"></img>
      </div>
    </div>
  );
}

function HomeCard2() {
  return (
    <div className="my-8 lg:my-52 flex flex-col-reverse lg:flex lg:flex-row lg:justify-around">
      <div className="flex flex-row justify-center lg:w-2/5">
        <img src={pic2} alt="Home page" className="lg:w-1/2 p-10 lg:p-0"></img>
      </div>
      <div className="flex flex-col justify-center">
        <p className="my-8">
          The purpose of the website is for me to consolidate all my projects
          and deploy them. I really don't know what else to write here.
        </p>
      </div>
    </div>
  );
}

export default Home;
