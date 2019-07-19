import React, { Component } from 'react';
import style from './Container.css';
import Form from '../Form/Form';

class Container extends Component {
  state = {
    color: '',
  }

  handleSubmit = shade => {
    const { color } = shade
    const url = 'http://localhost:3001/color/' + color
    fetch(url, {mode: 'cors'})
      .then(result => result.json())
      .then(result => {
        this.setState({
          color: result,
        })
      })
  }

  render() {
    let bgColor = {
      backgroundColor: this.state.color
    }

    return (
      <div
        style={bgColor}>
        <Form
          handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default Container;
