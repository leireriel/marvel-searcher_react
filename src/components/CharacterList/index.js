import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.scss';

const CharacterList = ({ value, clickedButton, charactersFound }) => {
  const paintCharacters =
    <ol className="character__list">
      {charactersFound
        .map(character => {
          return (
            <li key={character.id} className="character__card">
              <Link to={`/character/${character.id}`} className="card__link">
                <ol className="card__wrapper">
                  <img src={character.image} alt={character.heroName} className="card__image"/>
                  <div className="card__text--wrapper">
                    <h2 className="card__title">{character.heroName}</h2>
                    <p className="card__description">{character.text}</p>
                  </div>
                </ol>
              </Link>
            </li>
          );
        })
      }
    </ol>
  return(
    charactersFound.length === 0 && value !== '' && clickedButton ?
    <p className="common__text--center">¡Prueba con otro!</p>
    :
    paintCharacters
  );
};

export default CharacterList;