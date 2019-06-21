import React from 'react';
import './CharacterList.scss';

const CharacterList = ({ charactersFound }) => {
  return(
    <ol className="character__list">
      {charactersFound
        .map(character => {
          return (
            <li key={character.id} className="character__card">
              <ol className="card__wrapper">
                <img src={character.image} alt={character.heroName} className="card__image"/>
                <div className="card__text--wrapper">
                  <h2 className="card__title">{character.heroName}</h2>
                  <p className="card__description">{character.text}</p>
                </div>
              </ol>
            </li>
          )
        })
      }
    </ol>
  );
};

export default CharacterList;