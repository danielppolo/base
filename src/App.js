import React, { Component } from 'react';
import './App.scss';
import Typed from './components/Typed/Typed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typed>
          <p>For those who gave us darkness.</p>
          <p>30_03_19</p>
          <p>Save the date</p>
        </Typed>
      </div>
    );
  }
}

export default App;
