import React, { Component } from "react";
import Header from "./Header";
import ThemeContext from "./Context/ThemeContext";
import Hero from "./Hero";
import InfoSection from "./InfoSection";
import News from "./News";
import NewsList from "./NewsList";
import Hello from "./Hello";
import Footer from "./Footer";

export default class Home extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    return (
      <div
        className={`${
          theme === "light" ? "" : "bg-dark text-light"
        }`}
      >
        <Header />
        <Hero />
        <InfoSection />
        <News />
        <NewsList />
        <Hello />
        <Footer />
      </div>
    );
  }
}
