import React, { Fragment } from 'react';
import './PaintDetail.scss';

const PaintDetail = ({ characterToRender }) => {
  return (
    <Fragment>
      {characterToRender
        .map(character => {
          return (
            <ol key={character.id} className="detail__list">
              <li className="detail__image--wrapper">
                <img src={character.image} alt={character.heroName} className="detail__image"/>
              </li>
              <li className="detail__text--wrapper">
                <ol className="detail__name detail__common--text detail__common--list">
                  {character.realName.length > 1 ?
                  'Nombres humanos: '
                  :
                  'Nombre humano: '
                  }
                  {character.realName.map((name, index) => <li key={index}>{name}</li>)}
                </ol>
                <h2 className="detail__group detail__common--text">
                  {character.group.has_group === true ?
                  `Grupo: ${character.group.name_group}`
                  :
                  null                   
                  }
                </h2>
                <h3 className="detail__father detail__common--text">
                  {character.father !== null ? `Padre: ${character.father}` : 'Padre no relevante'}
                </h3>
                <h4 className="detail__dob detail__common--text">
                  Nació el: {character.dob}
                </h4>
                <ol className="detail__measures detail__common--text detail__common--list">
                  <li className="detail__height">
                    Altura: {character.measures.height}
                    {character.measures.height_unit === "centimeters" ? 'cm' : character.measures.height_unit}
                  </li>
                </ol>
                <ol className="detail__comics detail__common--text detail__common--list">
                  {character.comics.length > 1 ?
                  'Sale en todos estos comics: '
                  :
                  'Sale en este comic: '
                  }
                  {character.comics.map((comic, index) => <li key={index}>{comic.name} nº {comic.number}, {comic.month} {comic.year}</li>)}
                </ol>
              </li>
            </ol>
          );
        })
      }
    </Fragment>
  );
}

export default PaintDetail;