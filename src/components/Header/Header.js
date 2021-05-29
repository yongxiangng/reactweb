import styles from "./Header.module.css";

import logo from "../../assets/logo.svg";

import { useState } from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className="flex flex-row max-w-screen-xl w-full justify-between lg:items-center items-start">
        <Logo />
        <NavigationBar />
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

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <>
      <header className="lg:px-16 px-6 flex flex-wrap items-start lg:py-0 py-2">
        <div className="lg:hidden flex items-start">
          {isOpen ? (
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <Link
                  to="/"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-200"
                >
                  Awards
                </Link>
              </li>
            </ul>
          ) : (
            <></>
          )}
          <button
            className="mobile-menu-button pl-6 pt-7"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <Link
                  to="/"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-200"
                >
                  Awards
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
