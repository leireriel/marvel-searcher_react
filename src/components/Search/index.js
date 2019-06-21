import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({ actionButton, actionValue, actionButtonAll }) => {
  return(
    <div className="search__character--wrapper">
      <div className="search__single--wrapper">
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
      <div className="search__all--wrapper">
        <button className="search__button--allcharacters" onClick={actionButtonAll}>Ver todos los personajes</button>
      </div>
    </div>
  );
}

Search.propTypes = {
  actionButton: PropTypes.func,
  actionValue: PropTypes.func,
  actionButtonAll: PropTypes.func,
};

export default Search;