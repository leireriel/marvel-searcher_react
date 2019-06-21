import React, { Component, Fragment } from 'react';
import Search from '../../Search';
import CharacterList from '../../CharacterList';

class FilteredCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.filterCharacter = this.filterCharacter.bind(this);
  }

  filterCharacter(event) {
    const searchValue = event.currentTarget.value.toLowerCase();
    this.setState({
      value: searchValue
    })
  }

  render() {
    const { value } = this.state;
    const { actionFetch, allCharacters } = this.props;
    return(
      <Fragment>
        <Search actionFetch={actionFetch} actionFilter={this.filterCharacter}/>
        <CharacterList 
          charactersFound={
            allCharacters
              .filter(character => character.heroName.toLowerCase().includes(value))
              .sort((a, b) => (a.heroName > b.heroName) ? 1 : ((b.heroName > a.heroName)) ? -1 : 0)
          }
        />
      </Fragment>
    );
  }
}

export default FilteredCharacter;