import React, { Component } from "react";
import ThemeContext from "./Context/ThemeContext";

class News extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const isDark = theme === "dark";

    return (
      <div className={`${isDark ? "text-light" : "text-dark"} py-5`}
        style={{
            background: isDark ? "#3C3B3A" : "#e6e6e6"
        }}
      >
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">
              <div
                className="w-100 rounded"
                style={{
                  height: "350px",
                }}
              ></div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">

              <h4 className={isDark ? "text-light" : "text-primary"}>
                Title
              </h4>

              <p className={isDark ? "text-light" : "text-dark"}>
                Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. 
              </p>

              <p className={isDark ? "text-light" : "text-dark"}>
                Line of copy in here to describe this section. Line of copy in
                here to describe this section. Line of copy in here to describe
                this section. Line of copy in here to describe this section.
              </p>

              <p className={isDark ? "text-light" : "text-dark"}>
                Line of copy in here to describe this section. Line of copy in
                here to describe this section.
              </p>

              <button className={`btn rounded-pill px-4 ${isDark ? "btn-outline-light" : "btn-outline-primary"}`}>
                Sign up to our newsletter
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default News;
