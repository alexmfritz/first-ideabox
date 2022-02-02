import React, { Component } from 'react';
import Form from './components/Form/Form';
import Ideas from './components/Ideas/Ideas';
import "./App.scss";

export default class App extends Component {
  state = {
    ideas: [
      { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
      { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
      { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' }
    ]
  };

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea]});
  }

  deleteIdea = (id) => {
    let filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas: filteredIdeas });
  }

  displayIdeas = () => {
    return !this.state.ideas.length ? 
    <h2>No Ideas in your Box yet - add some now!</h2> :
    <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
  }

  render = () => {
    return (
      <main className="app">
        <h1 className="title">Idea Box</h1>
        <Form addIdea={this.addIdea} />
        {this.displayIdeas()}
      </main>
    )
  }
}