import React, { Component } from 'react';
import './Form.scss';

export default class Form extends Component {
  state = {
      title: '',
      description: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitIdea = (event) => {
    event.preventDefault();
    let newIdea = { id: Date.now(), ...this.state };
    this.props.addIdea(newIdea);
    this.clearInputFields();
  }

  clearInputFields = () => {
    this.setState({ title: '', description: '' });
  }

  render = () => {
    return (
      <form>
        <input 
          className="idea-name"
          type="text" 
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={event => this.handleChange(event)}
          />
        <input 
          className="idea-text"
          type="text"
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChange={event => this.handleChange(event)}
          />
        <button onClick={this.submitIdea}>Submit</button>
      </form>
    )
  }
}