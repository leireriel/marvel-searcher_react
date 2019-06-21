import React, { Fragment } from 'react';

const PaintDetail = ({ characterToRender }) => {
  return (
    <Fragment>
      {characterToRender
        .map(character => {
          return (
            <ol key={character.id} className="detail__list">
              <li className="detail__image--wrapper">
                <img src={character.image} alt={character.heroName}/>
              </li>
              <li className="detail__text--wrapper">
                <ol className="detail__name">
                  {character.realName.length > 1 ?
                  'Nombres humanos: '
                  :
                  'Nombre humano: '
                  }
                  {character.realName.map((name, index) => <li key={index}>{name}</li>)}
                </ol>
                <h2 className="detail__group">
                  {character.group.has_group === true ?
                  `Grupo: ${character.group.name_group}`
                  :
                  null                   
                  }
                </h2>
                <h3 className="detail__father">
                  {character.father !== null ? `Padre: ${character.father}` : 'Padre no relevante'}
                </h3>
                <h4 className="detail__dob">
                  {character.dob}
                </h4>
                <ol className="detail__measures">
                  <li className="detail__height">
                    {character.measures.height}
                    {character.measures.height_unit === "centimeters" ? 'cm' : character.measures.height_unit}
                  </li>
                </ol>
                <ol className="detail__comics">
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