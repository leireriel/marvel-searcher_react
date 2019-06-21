import React from 'react';
import './Search.scss';

const Search = ({ actionButton, actionValue }) => {
  return(
    <div className="search__character--wrapper">
      <form action="" method="get" id="formCharacter">
        <label htmlFor="search" className="search__label--character">
          Enter name of a Marvel character
        </label>
        <input type="text" id="search" placeholder="Ex: Thor" className="search__input--character" onChange={actionValue}/>
      </form>
      <button type="submit" form="formCharacter" className="search__button--character" onClick={actionButton}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default Search;