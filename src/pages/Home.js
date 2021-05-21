import "./Home.css";

import pic1 from "../assets/home/imgbin_doraemon-animation-png.png";

function Home() {
  return (
    <div className="home">
      <HomeCard1 parity="0" />
      <HomeCard2 parity="1" />
    </div>
  );
}

function HomeCard1(props) {
  const parity = props.parity;
  return (
    <div className="home-card">
      <p className={parity === "0" ? "home-content0" : "home-content1"}>
        Hello I am
        <br />
        <strong>
          <span className="name">Ng Yong Xiang</span>
        </strong>
        <br />
        Year 2 NUS Computing + Business Administration DDP student
      </p>
      <img
        src={pic1}
        alt="Home page"
        className={parity === "0" ? "picture0" : "picture1"}
      ></img>
    </div>
  );
}

function HomeCard2(props) {
  const parity = props.parity;
  return (
    <div className="home-card">
      <img
        src={pic1}
        alt="Home page"
        className={parity === "0" ? "picture0" : "picture1"}
      ></img>
      <p className={parity === "0" ? "home-content0" : "home-content1"}>
        Coding is fun!
      </p>
    </div>
  );
}

export default Home;
