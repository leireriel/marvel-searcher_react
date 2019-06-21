import React, { Component, Fragment } from 'react';
import { fetchMarvelCharacters } from '../../services/fetchMarvelCharacters';
import FilteredCharacter from '../Filters/FilteredCharacter';

class FetchCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: []
    };
    this.getCharacters = this.getCharacters.bind(this);
  }

  getCharacters() {
    //fetchMarvelCharacters('Spider')
    fetchMarvelCharacters()
      .then(data => {
        this.setState({
          allCharacters: data
        })
      })
      .catch(error => console.log(`Ha sucedido un error: ${error}`));
  }

  render() {
    const { allCharacters } = this.state;
    return(
      <Fragment>
        <FilteredCharacter 
          actionFetch={this.getCharacters}
          allCharacters={allCharacters}
        />
      </Fragment>
    );
  }
}

export default FetchCharacters;