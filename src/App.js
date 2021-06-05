import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Awards from "./pages/Awards";

import "./components/FontAwesomeIcon";
import "./App.less";
import "antd/dist/antd.less";

import logo from "./assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const { Header, Content, Footer } = Layout;

function App() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const contacts = [
    {
      icon: ["fab", "github"],
      url: "github.com/yongxiangng",
      isWebPage: true,
    },
    {
      icon: ["fab", "linkedin"],
      url: "linkedin.com/in/ngyongxiang",
      isWebPage: true,
    },
    {
      icon: ["fas", "envelope"],
      url: "e0388929@u.nus.edu",
      isWebPage: false,
    },
  ];

  return (
    <Router>
      <Layout className="layout">
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "1200px" }}>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo"></img>
              </Link>
            </div>
            <div className="hidden lg:flex flex-row justify-end gap-x-10">
              <p>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-white">
                  About
                </Link>
              </p>
              <p>
                <Link to="/projects" className="text-white">
                  Projects
                </Link>
              </p>
              <p>
                <Link to="/awards" className="text-white">
                  Awards
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:hidden">
            <Button
              type="primary"
              onClick={showDrawer}
              style={{ color: "black" }}
            >
              Menu
            </Button>
            <Drawer
              title="Menu"
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/about">About</Link>
              </p>
              <p>
                <Link to="/projects">Projects</Link>
              </p>
              <p>
                <Link to="/awards">Awards</Link>
              </p>
            </Drawer>
          </div>
        </Header>

        <div style={{ height: "64px", background: "#fdfdfd" }} />
        <Content>
          <div className="App">
            <div className="app-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/:id" component={Project} />
                <Route exact path="/awards" component={Awards} />
              </Switch>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "1200px" }}>
            <Contacts contacts={contacts} />
          </div>
        </Footer>
      </Layout>
    </Router>
  );
}

function Contacts(props) {
  const { contacts } = props;
  return (
    <div className="contacts">
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.url} />
      ))}
    </div>
  );
}

function Contact(props) {
  const { contact } = props;
  return (
    <div className="contact">
      <FontAwesomeIcon icon={contact.icon} className="fa" />
      <a
        className="contact-url"
        href={contact.isWebPage ? "https://" + contact.url : null}
        target="_blank"
        rel="noopener noreferrer"
      >
        {contact.url}
      </a>
    </div>
  );
}

export default App;
