import React, { Component } from 'react';
import style from './Container.css';
import Form from '../Form/Form';

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  // callBackendAPI() {
  //   const response = fetch(path);
  //   const body = response.json;
  //
  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //
  //   return body;
  // }

  handleChange(e) {
    this.setState({
      color: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // let path = '/color/' + this.state.color;
    fetch(`localhost:3001/color/${this.state.color}`, {mode: 'cors'})
      .then(req => console.log(req))
    //   .then()
  }

  render() {
    return (
      <div
        className={style.container}>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          color={this.state.color}/>
      </div>
    )
  }
}
