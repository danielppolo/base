import React, { Component } from 'react';
import './App.scss';
import Typed from './components/Typed/Typed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typed>
          <p>For those who gave us darkness.</p>
          <p>30/03/2019</p>
        </Typed>
      </div>
    );
  }
}

export default App;
