import React, { Component } from 'react';
import './App.css';
import PlantContainer from './Containers/PlantContainer'
import BoxContainer from './Containers/BoxContainer'

class App extends Component {
  state = {
    plants: []
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/api/v1/plants')
    .then(r => r.json())
    .then(plants => this.setState({
      plants: plants
    }))
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <PlantContainer plants={this.state.plants}/>
        <BoxContainer plants={this.state.plants}/>
      </div>
    );
  }
}

export default App;
