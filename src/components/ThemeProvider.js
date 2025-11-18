import React, { Component } from "react";
import ThemeContext from "./Context/ThemeContext";
export default class ThemeProvider extends Component {
  constructor(props) {
    super();

    this.state = {
      theme: "light",
    };
  }
  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
  };
  render() {
    const val = {
      theme: this.state.theme,
      toggleTheme: this.toggleTheme,
    };
    return (
      <ThemeContext.Provider value={val}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
