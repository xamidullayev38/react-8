import React, { Component } from "react";
import ThemeContext from "./Context/ThemeContext";

class NewsList extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const isDark = theme === "dark";

    return (
      <div className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"} py-5`}>
        <div className="container">

          <h3 className={isDark ? "text-light" : "text-primary"}>Title</h3>

          <p className="mb-5">
            Line of copy in here to decribe this section. Line of copy in here to 
            decribe this section. Line of copy in here to decribe this section. 
            Line of copy in here to decribe this section.
          </p>

          {[1, 2, 3].map((item) => (
            <div className="row align-items-start mb-5" key={item}>

              <div className="col-md-4">
                <div
                  className="w-100 rounded"
                  style={{
                    height: "200px",
                    backgroundColor: isDark ? "#6c757d" : "#e1e1e1",
                  }}
                ></div>
              </div>

              <div className="col-md-8">
                <h5 className="mt-3 mt-md-0">Title</h5>
                <small className="text-muted d-block mb-2">
                  Subhead in here
                </small>

                <p>
                  Leading, implementing and evolving engaging customer experiences
                  and UI foundations for every touch-point across various platforms.
                  Leading, implementing and evolving engaging customer experiences
                  and UI foundations for every touch-point across various platforms.
                  Leading, implementing and evolving engaging customer experiences
                  and UI foundations for every touch-point across various platforms.
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default NewsList;
