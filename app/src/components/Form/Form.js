import React, { Component } from 'react';
import style from './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      color: '',
    }

    this.state = this.initialState;
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  render() {
    const { color } = this.state;

    return(
      <form
        onSubmit={this.submitForm}>
        <label>
          Color
        </label>

        <input
          type='text'
          name='color'
          value={color}
          onChange={this.handleChange} />

        <input
          type='button'
          value='Change color'
          onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;
