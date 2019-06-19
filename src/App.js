import React, { Component } from 'react';
import { fetchCharacters } from './services/fetchCharacters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: '',
      results: []
    }
  }

  getCharactersFromAPI() {
    fetchCharacters('thor');
  }

  render() {
    return (
      <p>hola2</p>
    );
  }
}

export default App;
