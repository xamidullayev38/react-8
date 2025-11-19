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
            className={`rounded-circle  ${
              theme === "light" ? "bg-light" : "bg-secondary"
            }`}
            style={{
              width: "120px",
              height: "120px",
            }}
          ></div>
          {/* Title */}
          <h1
            className={theme === 'light' ? "text-primary fw-bold" : "text-light fw-bold" }
            style={{ fontSize: "50px"}}
          >
            Hello.
            <br />
            My name is Kevin.
          </h1>

          {/* Horizontal line */}
          <div
            className={`my-4 ${theme === 'light' ? "bg-primary" : "bg-light" }`}
            style={{
              width: "130px",
              height: "2px",
            }}
          ></div>

          {/* Paragraphs */}
          <p className="text-secondary">
            I'm a Digital Product and UI Designer – creating digital experiences
            that are intuitive for real people and making complex processes easy
            to use.
          </p>

          <p className="text-secondary">
            Right now, I'm Design Lead at{" "}
            <a href="#" className={theme==="light" ? "text-primary" : "text-light text"}>
              Holiday Extras
            </a>
            , covering all our digital platforms across a whole load of brands –
            leading a great team across{" "}
            <a href="#" className={theme==="light" ? "text-primary" : "text-light text"}>
              design
            </a>
            , UI engineering, accessibility and customer experience...
          </p>

          <p className="text-secondary">
            I've got some{" "}
            <a href="#" className={theme==="light" ? "text-primary" : "text-light text"}>
              work on Dribbble
            </a>
            , previous work at
            <a href="#" className={theme==="light" ? "text-primary" : "text-light text"}>
              {" "}
              Saga
            </a>{" "}
            and you can find me on twitter and sometimes on{" "}
            <a href="#" className={theme==="light" ? "text-primary" : "text-light text"}>
              Medium
            </a>
            .
          </p>

          <div className={` rounded d-inline-flex align-items-center px-3 py-3 
            ${theme==="light" ? "bg-light" : "bg-secondary"}`} >
            <input type="checkbox" className="me-2 " />
            Available for work and general design goodness –
            <a href="#" className={theme==="light" ? "text-primary" : "text-light"}>
              say hello
            </a>
          </div>
          <div
            className={`w-100 my-5 ${theme === 'light' ? "bg-primary" : "bg-light" }`}
            style={{
              height: "2px"
            }}
          ></div>
        </div>
      </section>
    );
  }
}
