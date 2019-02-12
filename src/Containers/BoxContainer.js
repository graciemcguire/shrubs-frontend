import React, { Component } from 'react';
import PlantCard from '../Components/PlantCard'

export default class BoxContainer extends Component {

  mappedPlants = () => {
    if (this.props.plants){
      return this.props.plants.map(plant => (
        <PlantCard key={plant.id}
          plant={plant}
          clickHandler={this.props.clickHandler}
          className="sub-box"
          />
    ))}
  }

  render(){
    // console.log('rn', this.props.plants);
    return (
      <div className="box-container">
        <h1>Subscription Box</h1>
        { this.mappedPlants() }

      </div>
    )
  }
}
