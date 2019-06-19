import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  render() {
    const { actionForm } = this.props;
    return(
      <div className="search__character--wrapper">
        <form action="" method="get" id="formCharacter">
          <label htmlFor="search" className="search__label--character">
            Enter name of a Marvel character
          </label>
          <input type="text" id="search" placeholder="Character Name" className="search__input--character"/>
        </form>
        <button type="submit" form="formCharacter" className="search__button--character" onClick={actionForm}>
            <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default Search;