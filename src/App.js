import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Awards from "./pages/Awards";

import "./components/FontAwesomeIcon";
import "./App.css";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/awards" component={Awards} />

      <Footer />
    </div>
  );
}

export default App;
