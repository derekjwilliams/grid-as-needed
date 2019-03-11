import React, { Component } from 'react'
import './App.css'
import Grids from './components/grids'
import store from './GridStore'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grids store={store}></Grids>
      </div>
    );
  }
}

export default App;
