import React, { Component } from 'react';
import './App.css';
import PlantContainer from './Containers/PlantContainer'
import BoxContainer from './Containers/BoxContainer'
import SearchForm from './Components/SearchForm'

class App extends Component {
  state = {
    plants: [],
    favPlants: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch('http://localhost:4000/api/v1/plants')
    .then(r => r.json())
    .then(plants => this.setState({
      plants: plants
    }))
    fetch('http://localhost:4000/api/v1/users/1')
    .then(r => r.json())
    .then(user => this.setState({favPlants: user.plants||[]}))
  }

  addToBox = plantObj => {
    // console.log(this.state.favPlants);
    if(this.state.favPlants.filter(plant => plant.id === plantObj.id).length === 0){
     fetch('http://localhost:4000/api/v1/users/1',{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          plant_id: plantObj.id
        })
      })
      .then(r => r.json())
      .then(plants => this.setState({
        favPlants: plants
      }))
    }
  }

  removeHandler = plantObj => {
    let updateFav = this.state.favPlants.filter(plant =>
      plant.id !== plantObj.id)
      fetch('http://localhost:4000/api/v1/users/1',{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          plant_id: plantObj.id
        })
      })
      .then(r => r.json())
      .then(updateFav => (this.setState({
        favPlants: updateFav
      })))

  }

  changeHandler = e => {
    this.setState({
        searchTerm: e.target.value
      })
    this.filterArray()
  }

  filterArray = () => {
    return this.state.plants.filter(plant =>
      plant.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
/* recieving undefined in favPlants array at start i.e. filtering on an empty array, so need to have seed data for start  */
  render() {
    // console.log('favs', this.state.favPlants);
    return (
      <div>
        <header>
          <h1>Shrubs not Scrubs</h1>
        </header>
        <SearchForm changeHandler={this.changeHandler}/>
        <div className="App">
          <PlantContainer
            plants={this.filterArray()}
            clickHandler = {this.addToBox}/>
          <BoxContainer
            plants={this.state.favPlants}
            clickHandler={this.removeHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
