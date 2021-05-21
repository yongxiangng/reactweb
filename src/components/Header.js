import "./Header.css";

import logo from "../assets/logo.svg";

import { Link } from "react-router-dom";

export default function Header() {
  const buttons = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Awards",
      link: "/awards",
    },
  ];

  return (
    <div className="header-container">
      <div className="header">
        <Logo />
        <NavigationBar buttons={buttons} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Logo"></img>
    </Link>
  );
}

function NavigationBar(props) {
  const { buttons } = props;
  return (
    <ol className="nav-bar">
      {buttons.map((button) => (
        <Button button={button} key={button.name} />
      ))}
    </ol>
  );
}

function Button(props) {
  const { button } = props;
  return (
    <li className="button">
      <Link to={button.link} className="button-text">
        {button.name}
      </Link>
    </li>
  );
}
