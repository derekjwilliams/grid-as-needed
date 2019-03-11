import React, { Component } from 'react'
import './App.css'
import Grids from './components/Grids'
export const GridContext = React.createContext();

class App extends Component {
  state = {
    grids: [],
    kind: "GRTS",
    dimensions: {width: 960, height: 600},
    attributes: {size: '10'}
  }
  render() {
    const { grids, kind, dimensions, attributes } = this.state;
    return (
      <GridContext.Provider value = {{ grids, kind, dimensions, attributes}}>
      <div className="App">
        <Grids></Grids>
      </div>
      </GridContext.Provider>
    );
  }
}

export default App;
