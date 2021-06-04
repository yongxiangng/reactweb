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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{width:'1200px'}}>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo"></img>
            </Link>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{float: 'right'}}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            <Menu.Item key="4">nav 4</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Router>
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
      </Router>
      <Footer />
    </Layout>
  );
}

export default App;
