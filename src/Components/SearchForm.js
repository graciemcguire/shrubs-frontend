import React, { Component } from 'react';

export default class SearchForm extends Component {
  render (){
    return (
      <form>
        <input
        type="text"
        value={this.props.value}
        onChange={this.props.changeHandler}
        placeholder={"Search Plants"}
        />
      </form>
    )
  }
}
