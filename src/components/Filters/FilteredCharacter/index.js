import React, { Component, Fragment } from 'react';
import Search from '../../Search';
import CharacterList from '../../CharacterList';
import './FilteredCharacter.scss';

class FilteredCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      clickedButton: false,
      clickedAllButton: false
    };
    this.handleValue = this.handleValue.bind(this);
    this.handleCLickButton = this.handleCLickButton.bind(this);
    this.handleClickButtonAll = this.handleClickButtonAll.bind(this);
  }
  
  shouldComponentUpdate() {
    if (this.state.clickedButton) {
      console.log('true')
      return true;
    } else {
      console.log('false')
      return false;
    }
    //Problema de asincronía
  }

  handleValue(event) {
    const searchValue = event.currentTarget.value.toLowerCase();
    this.setState({
      value: searchValue,
      clickedButton: false,
      clickedAllButton: false
    });
  }
  
  handleCLickButton(event) {
    event.preventDefault();
    this.props.actionFetch();
    this.setState({
      clickedButton: true,
      clickedAllButton: false
    });
  }

  handleClickButtonAll() {
    this.setState({
      clickedAllButton: true,
      clickedButton: false
    });
  }

  render() {
    const { value, clickedButton, clickedAllButton } = this.state;
    const { allCharacters } = this.props;
    return(
      <Fragment>
        <Search 
          actionButton={this.handleCLickButton} 
          actionValue={this.handleValue}
          actionButtonAll={this.handleClickButtonAll}
        />
        {clickedButton & value !== '' ?
          <CharacterList 
            value={value}
            clickedButton={clickedButton}
            charactersFound={
              allCharacters
                .filter(character => character.heroName.toLowerCase().includes(value))
                .sort((a, b) => (a.heroName > b.heroName) ? 1 : ((b.heroName > a.heroName)) ? -1 : 0)
            }
          />
          :
          clickedButton & value === '' ?
          <p className="error__text">
            Escribe algo
            <span role="img" aria-label="friendly face">😉</span>
          </p>
          :
          clickedAllButton ?
          <CharacterList 
            charactersFound={
              allCharacters
                .sort((a, b) => (a.heroName > b.heroName) ? 1 : ((b.heroName > a.heroName)) ? -1 : 0)
            }
          />
          :
          null
        }
      </Fragment>
    );
  }
}

export default FilteredCharacter;