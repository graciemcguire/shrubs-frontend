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
        <h1>My Box</h1>
        { this.mappedPlants() }
        <button className='btn'>Check Out</button>
        <button className='btn'>Save For Later?</button>
      </div>
    )
  }
}
