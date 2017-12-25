import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import HeadingNav from './heading-nav';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
