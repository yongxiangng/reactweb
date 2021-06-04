// import Header from "./components/Header";
// import Footer from "./components/Footer";

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
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {
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
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ float: "right" }}
            >
              <Menu.Item key="1">
                <Link to="/" />
                Home
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about" />
                About
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/projects" />
                Projects
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/awards" />
                Awards
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <div className="App">
          <Content>
            <div className="app-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/:id" component={Project} />
                <Route exact path="/awards" component={Awards} />
              </Switch>
            </div>
          </Content>
        </div>
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
