import React, { Component } from "react";
import ThemeContext from "./Context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

export default class Header extends Component {
  static contextType = ThemeContext;

  navLinks = [
    { name: "Section two", id: 1 },
    { name: "Section three", id: 2 },
    { name: "Section four", id: 3 },
  ];

  icons = [
    { icon: faTwitter, id: 4 },
    { icon: faInstagram, id: 5 },
    { icon: faFigma, id: 6 },
  ];

  render() {
    const { theme, toggleTheme } = this.context;

    return (
      <header
        className={`navbar navbar-expand shadow fixed  ${
          theme === "light"
            ? "navbar-light bg-light text-dark"
            : "navbar-dark bg-dark text-light"
        }`}
      >
        <div className="container ">
          <div className="d-flex w-100 align-items-center justify-content-between">
            <a href="/" className="navbar-brand">
              Kevin Bennet
            </a>
            <ul className="nav d-flex align-items-center gap-3">
              {this.navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href="/"
                    className={`nav-link ${
                      theme === "light" ? "text-primary" : "text-light"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-flex gap-3">
              {this.icons.map((item) => (
                <a key={item.id} href="/">
                  <FontAwesomeIcon icon={item.icon} className={theme === "light" ? "text-primary" : "text-light"} />
                </a>
              ))}
            </div>
            <div className="d-flex align-items-center gap-2">
              <label className="form-check-label me-5">Dark mode:</label>

              <div className="form-check form-switch m-0 p-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
