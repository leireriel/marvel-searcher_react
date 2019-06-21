import React, { Component, Fragment } from 'react';
import Search from '../../Search';
import CharacterList from '../../CharacterList';
import PropTypes from 'prop-types';

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
      return true;
    } else {
      return false;
    }
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
    this.props.actionFetch();
    this.setState({
      clickedAllButton: true,
      clickedButton: false
    });
  }

  render() {
    const { value, clickedButton, clickedAllButton } = this.state;
    const { allCharacters } = this.props;
    const charactersFound =
      allCharacters
      .filter(character => character.heroName.toLowerCase().includes(value))
      .sort((a, b) => (a.heroName > b.heroName) ? 1 : ((b.heroName > a.heroName)) ? -1 : 0)
    ;
    const charactersFoundAll =
      allCharacters
        .sort((a, b) => (a.heroName > b.heroName) ? 1 : ((b.heroName > a.heroName)) ? -1 : 0)
    ;
    return(
      <Fragment>
        <Search 
          actionButton={this.handleCLickButton} 
          actionValue={this.handleValue}
          actionButtonAll={this.handleClickButtonAll}
        />
        {clickedButton && value !== '' ?
          <CharacterList 
            value={value}
            clickedButton={clickedButton}
            charactersFound={charactersFound}
          />
          :
          clickedButton && value === '' ?
          <p className="common__text--center">
            Escribe algo
            <span role="img" aria-label="friendly face">😉</span>
          </p>
          :
          clickedAllButton ?
          <CharacterList 
            charactersFound={charactersFoundAll}
          />
          :
          null
        }
      </Fragment>
    );
  }
}

FilteredCharacter.propTypes = {
  actionFetch: PropTypes.func,
  allCharacters: PropTypes.array,
};

export default FilteredCharacter;