import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Awards from "./pages/Awards";

import "./components/FontAwesomeIcon";
import "./App.css";
import "antd/dist/antd.less";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route path="/projects/:id" component={Project} />
            <Route exact path="/awards" component={Awards} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
