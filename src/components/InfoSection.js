import React, { Component } from "react";
import ThemeContext from "./Context/ThemeContext";

class InfoSection extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const isDark = theme === "dark";

    return (
      <div className={`py-5 ${isDark ? "bg-dark text-light" : " text-dark"}`}>
        <div className="container">

          <h2 className={isDark ? "text-light" : "text-primary"}>Title</h2>

          <p>
            Line of copy in here to describe this section. Line of copy in here to
            describe this section. Line of copy in here to describe this section.
            Line of copy in here to describe this section.
          </p>

          <div className="row align-items-center my-5">
            <div className="col-md-7">
              <div
                className="w-100 rounded"
                style={{
                  height: "350px",
                  background: isDark ? "#6c757d" : "#e6e6e6",
                }}
              ></div>
            </div>

            <div className="col-md-5 mt-4 mt-md-0">
              <h5 className={isDark ? "text-light" : "text-dark"}>Title</h5>

              <p>
                Leading, implementing and evolving engaging customer experiences
                and UI foundations for every touch-point across various platforms.
              </p>

              <button className="btn btn-outline-primary rounded-pill px-4">
                Button Primary Light
              </button>
            </div>
          </div>

          <div className="row align-items-center my-5 flex-md-row-reverse">
            <div className="col-md-7">
              <div
                className="w-100 rounded"
                style={{
                  height: "350px",
                  backgroundColor: isDark ? "#6c757d" : "#e6e6e6",
                }}
              ></div>
            </div>

            <div className="col-md-5 mt-4 mt-md-0">
              <h5 className={isDark ? "text-light" : "text-dark"}>Title</h5>

              <p>
                Leading, implementing and evolving engaging customer experiences
                and UI foundations for every touch-point across various platforms.
              </p>

              <button className="btn btn-outline-primary rounded-pill px-4">
                Button Primary Light
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default InfoSection;
