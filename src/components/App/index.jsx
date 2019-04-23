import React, { Component } from 'react';
import './index.css';

import Adventure from '../Adventure';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Adventure
          message="Hello World"
          name="Morty"
          dimension="C-137"
        />
      </div>
    );
  }
}

export default App;
