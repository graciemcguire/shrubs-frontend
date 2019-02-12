import React, { Component } from 'react';

const plantCard = props => {

  const { plant } = props

  let checkCard = plant => {
    if(props.className.includes("main-box")) {
      return 'Add to Box'
    } else {
      return 'Remove from Box'
    }
  }

  return (
    <div className="plant-card">
      <img
        className="plant-card-images"
        alt = { plant.name }
        src= { plant.image }
      />
      <h4>{ plant.name }</h4>
      <p>${ plant.price }</p>
      <button onClick={() => props.clickHandler( plant )}>{checkCard(plant)}</button>
    </div>
  )
}


export default plantCard;
