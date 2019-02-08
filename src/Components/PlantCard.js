import React, { Component } from 'react';

export default class PlantCard extends Component {


  render(){
    const { plant } = this.props

    return (
      // <h1>{this.props.plant}</h1>
      <div className="plant-card">
        <img className="plant-card-images" alt = { plant.name } src= { plant.image }/>
        <h4>{ plant.name }</h4>
        <p>{ plant.price }</p>
      </div>
    )
  }
}
