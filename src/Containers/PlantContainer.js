import React, { Component } from 'react';
import PlantCard from '../Components/PlantCard'

export default class PlantContainer extends Component {
  mappedPlants = () => {
    return this.props.plants.map(plant => (
      <PlantCard key={plant.id} plant={plant}/>
    ))
  }
  render(){
    console.log(this.props.plants.map (plant => plant.name));
    return (



        <div className="plant-container">
          <h1> Plant Container </h1>
          {this.mappedPlants()}
        </div>

    )
  }
}
