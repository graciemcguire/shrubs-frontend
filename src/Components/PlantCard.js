import React, { Component } from 'react';

const plantCard = props => {

  const { plant } = props

  return (
    <div className="plant-card">
      <img
        className="plant-card-images"
        alt = { plant.name }
        src= { plant.image }
        onClick={ () => props.clickHandler( plant ) }/>
      <h4>{ plant.name }</h4>
      <p>{ plant.price }</p>
    </div>
  )
}


export default plantCard;
