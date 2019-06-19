import React, { Component, Fragment } from 'react';
import './Search.scss';

class Search extends Component {
  render() {
    const { actionForm } = this.props;
    return(
      <Fragment>
        <form action="" method="get" id="formCharacter">
          <label htmlFor="search">
            Enter name of a Marvel character
          </label>
          <input type="text" id="search" placeholder="Character Name"/>
        </form>
        <button type="submit" form="formCharacter" onClick={actionForm}>
            <i className="fas fa-search"></i>
        </button>
      </Fragment>
    );
  }
}

export default Search;