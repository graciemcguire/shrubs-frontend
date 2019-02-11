import React, { Component } from 'react';
import './App.css';
import PlantContainer from './Containers/PlantContainer'
import BoxContainer from './Containers/BoxContainer'

class App extends Component {
  state = {
    plants: [],
    favPlants: []
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/api/v1/plants')
    .then(r => r.json())
    .then(plants => this.setState({
      plants: plants
    }))
  }

  addToBox = plantObj => {
    console.log(plantObj)
    let setFavPlants = [ ...this.state.favPlants, plantObj ]
    if(!this.state.favPlants.includes(plantObj) && this.state.favPlants.length < 4){
    this.setState({
      favPlants: setFavPlants
    })
  }
}
  removeFromBox = plantObj => {
    let updateFav = this.state.favPlants.filter( plant =>
      plant.id !== plantObj.id)
      this.setState({
        favPlants: updateFav
      })
  }

  render() {
    console.log('favs', this.state.favPlants);
    return (
      <div className="App">
        <PlantContainer
          plants={this.state.plants}
          clickHandler = {this.addToBox}/>
        <BoxContainer
          plants={this.state.favPlants}
          clickHandler={this.removeFromBox}/>
      </div>
    );
  }
}

export default App;
