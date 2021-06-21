import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import FruitInfo from "./components/FruitInfo/FruitInfo";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Navigation />
        <div className="navigationClass">
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/fruitInfo">
            <FruitInfo />
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default App;
