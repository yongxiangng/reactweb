import styles from "./Header.module.css";

import logo from "../../assets/logo.svg";

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
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo />
        <NavigationBar buttons={buttons} />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="Logo"></img>
    </Link>
  );
}

function NavigationBar(props) {
  const { buttons } = props;
  return (
    <ol className={styles.navigationBar}>
      {buttons.map((button) => (
        <Button button={button} key={button.name} />
      ))}
    </ol>
  );
}

function Button(props) {
  const { button } = props;
  return (
    <li className={styles.button}>
      <Link to={button.link} className={styles.buttonText}>
        {button.name}
      </Link>
    </li>
  );
}
