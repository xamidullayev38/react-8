import React, { Component } from "react";
import Header from "./Header";
import ThemeContext from "./Context/ThemeContext";
import Hero from "./Hero";

export default class Home extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    return (
      <div
        className={`${
          theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
        }`}
      >
        <Header />
        <Hero />
      </div>
    );
  }
}
