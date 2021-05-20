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
        <a href="#" className="logo">
          <img src={logo} alt="Logo"></img>
        </a>
        <div className="nav-bar">
          {buttons.map((button) => (
            <div className="button">
              <a className="button-text" href={button.href}>
                {button.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
