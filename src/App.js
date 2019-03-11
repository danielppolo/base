import React, { Component } from 'react';
import './App.scss';
import Typed from './components/Typed/Typed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typed>
          <p>For those who gave us darkness.</p>
          <p>19.406783, -99.178750</p>
          <p>05/04/2019</p>
          <p>B A S E</p>
          <p></p>
        </Typed>
      </div>
    );
  }
}

export default App;
