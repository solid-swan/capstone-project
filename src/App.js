import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import FruitInfo from "./components/FruitApp/FruitInfo/FruitInfo";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Navigation />
        <Home />
        <About />
        <FruitInfo />
      </Switch>
    </div>
  );
}

export default App;
