import React, { Component } from "react";
import ThemeContext from "./Context/ThemeContext";

export default class Hero extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    return (
      <section className="Hero my-5">
        <div className="container">
          <div
            className={`rounded-circle  ${theme === 'light' ? "bg-secondary" : "bg-light"}`}
            style={{
              width: "120px",
              height: "120px",
            }}
          ></div>
          <h1 className={``}>
            Hello My Name is Kevin
          </h1>
        </div>
      </section>
    );
  }
}
