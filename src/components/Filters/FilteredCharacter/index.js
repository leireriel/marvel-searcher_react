import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Search from '../../Search';
import CharacterList from '../../CharacterList';

import { orderCharacters } from '../../../utils/helpers';

class FilteredCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleValue = this.handleValue.bind(this);
    this.handleCLickButton = this.handleCLickButton.bind(this);
    this.handleClickButtonAll = this.handleClickButtonAll.bind(this);
  }

  // TODO uncomment to load default characters after mounted
  // componentDidMount() {
  //   this.props.actionFetch();
  // }

  handleValue(event) {
    const searchValue = event.currentTarget.value.toLowerCase();

    this.setState({ value: searchValue });
  }

  handleCLickButton(e) {
    e.preventDefault();
    this.props.actionFetch();
  }

  handleClickButtonAll() {
    this.props.actionFetch();
  }

  render() {
    const { value, clickedButton } = this.state;
    const { allCharacters } = this.props;
    const charactersFound = allCharacters
      .filter((character) => character.heroName.toLowerCase().includes(value))
      .sort(orderCharacters);
    const charactersFoundAll = allCharacters.sort(orderCharacters);

    return (
      <Fragment>
        <Search
          actionButton={this.handleCLickButton}
          actionValue={this.handleValue}
          actionButtonAll={this.handleClickButtonAll}
        />
        <CharacterList
          value={value}
          clickedButton={clickedButton}
          charactersFound={charactersFound}
        />
        {!value && (
          <p className="common__text--center">
            Escribe algo
            <span role="img" aria-label="friendly face">
              😉
            </span>
          </p>
        )}
        <CharacterList charactersFound={charactersFoundAll} />
      </Fragment>
    );
  }
}

FilteredCharacter.propTypes = {
  actionFetch: PropTypes.func,
  allCharacters: PropTypes.array,
};

export default FilteredCharacter;
