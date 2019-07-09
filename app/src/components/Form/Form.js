import React, { Component } from 'react';
import style from './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <form>
        <input
          name='color'
          type='text'
          onChange={this.props.handleChange} />
        <button
          onClick={this.props.handleSubmit}
          >Change background</button>
      </form>
    )
  }
}
