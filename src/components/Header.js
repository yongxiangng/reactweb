import "./Header.css";

import logo from "../assets/logo.svg";

export default function Header() {
  const buttons = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
    {
      name: "Projects",
      href: "#",
    },
    {
      name: "Awards",
      href: "#",
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
    <a href="#" className="logo">
      <img src={logo} alt="Logo"></img>
    </a>
  );
}

function NavigationBar(props) {
  const { buttons } = props;
  return (
    <div className="nav-bar">
      {buttons.map((button) => (
        <Button button={button} key={button.name} />
      ))}
    </div>
  );
}

function Button(props) {
  const { button } = props;
  return (
    <div className="button">
      <a className="button-text" href={button.href}>
        {button.name}
      </a>
    </div>
  );
}
