import React, { Component, Fragment } from 'react';
import Search from '../Search';
import CharacterList from '../CharacterList';
import { fetchCharacters } from '../../services/fetchCharacters';

class FetchCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: []
    }
    this.getCharactersFromAPI = this.getCharactersFromAPI.bind(this);
    this.promiseCharacter = this.promiseCharacter.bind(this);
  }

  promiseCharacter(character) {
    return (
      {
        id: character.id,
        heroName: character.names.hero_name,
        realName: character.names.real_name,
        group: character.group,
        measures: character.measures,
        text: character.abstract,
        comics: character.comics,
        father: character.father,
        image: character.avatar,
        dob: character.dob
      }
    );
  }

  getCharactersFromAPI(event) {
    event.preventDefault();
    const promiseCharacter = this.promiseCharacter;
    //fetchCharacters('Spider')
    fetchCharacters()
    .then(data => {
      let promises = [];
      data.characters.map(character => {
        return (
          promises.push(promiseCharacter(character))
        );
      })
      Promise.all(promises)
      .then(responses => {
        this.setState({
          allCharacters: responses
        })
      })
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));
  }

  render() {
    return(
      <Fragment>
        <Search actionForm={this.getCharactersFromAPI}/>
        <CharacterList />
      </Fragment>
    );
  }
}

export default FetchCharacters;