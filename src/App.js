import Header from "./components/Header";
import Footer from "./components/Footer";

import logo from "./assets/logo.svg";

import "./components/FontAwesomeIcon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer />
    </div>
  );
}

export default App;
