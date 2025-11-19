import React, { Component } from 'react';
import ThemeContext from './Context/ThemeContext';

class Hello extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    return (
      <div
        className={`container my-5 p-5 rounded-4 shadow text-center ${
          theme === 'light' ? 'bg-light' : 'bg-secondary'
        }`}
      >
        <h3 className={theme === 'light' ? 'text-dark' : 'text-white'}>
          Come say hello 👋 we'd really love to talk about your project!
        </h3>

        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <button className="btn btn-primary px-4">Email us</button>
          <button className="btn btn-outline-light px-4">
            @ us on Twitter
          </button>
        </div>
      </div>
    );
  }
}

export default Hello;
