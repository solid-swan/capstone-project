import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about>">About</Link>
            </li>
            <li>
              <Link to="/fruitapp">Fruit App</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
