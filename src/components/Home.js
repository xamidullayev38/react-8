import React, { Component } from "react";
import Header from "./Header";
import ThemeContext from "./Context/ThemeContext";

export default class Home extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    return (
      <div
        className={`d-flex align-items-center  ${
          theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
        }`}
      >
        <Header />
      </div>
    );
  }
}
