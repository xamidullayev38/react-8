import React, { Component } from 'react';
import ThemeContext from './Context/ThemeContext';

class Footer extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    return (
      <footer
        className={`text-center py-3 mt-5 ${
          theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'
        }`}
      >
        <p className="m-0">This is a line to foot the page.</p>
        <small>© Your name or brand 2020</small>
      </footer>
    );
  }
}

export default Footer;
