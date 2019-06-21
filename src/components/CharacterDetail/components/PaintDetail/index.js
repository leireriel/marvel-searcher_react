import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './PaintDetail.scss';

const PaintDetail = ({ characterToRender }) => {
  const dateUTC = characterToRender.map(character => character.dob);
  const date = new Date(dateUTC);
  const dateConverted = date.toString();
  return (
    <Fragment>
      {characterToRender
        .map(character => {
          return (
            <section key={character.id} className="detail__list">
              <article className="detail__image--wrapper">
                <img src={character.image} alt={character.heroName} className="detail__image"/>
              </article>
              <article className="detail__text--wrapper">
                <ol className="detail__common--list">
                  <li className="detail__common--text">
                    <ol className="detail__name detail__common--list">
                      {character.realName.length > 1 ?
                      'Nombres humanos: '
                      :
                      'Nombre humano: '
                      }
                      {character.realName.map((name, index) => <li key={index}>{name}</li>)}
                    </ol>
                  </li>
                  <li>
                    <h2 className="detail__group detail__common--text">
                      {character.group.has_group === true ?
                      `Grupo: ${character.group.name_group}`
                      :
                      null                   
                      }
                    </h2>
                  </li>
                  <li>
                    <h3 className="detail__father detail__common--text">
                      {character.father !== null ? `Padre: ${character.father}` : 'Padre no relevante'}
                    </h3>
                  </li>
                  <li>
                    <h4 className="detail__dob detail__common--text">
                      ¿Cuándo nació?: {dateConverted}
                    </h4>
                  </li>
                  <li className="detail__common--text">
                    <ol className="detail__measures detail__common--list">
                      <li className="detail__height">
                        Altura: {character.measures.height}
                        {character.measures.height_unit === "centimeters" ? 'cm' : character.measures.height_unit}
                      </li>
                    </ol>
                  </li>
                  <li className="detail__common--text">
                    <ol className="detail__comics detail__common--list">
                      {character.comics.length > 1 ?
                      `Sale en estos ${character.comics.length} comics: `
                      :
                      'Sale en este comic: '
                      }
                      {character.comics.map((comic, index) => <li key={index}>{comic.name} nº {comic.number}, {comic.month} {comic.year}</li>)}
                    </ol>
                  </li>
                </ol>
              </article>
            </section>
          );
        })
      }
    </Fragment>
  );
}

PaintDetail.propTypes = {
  characterToRender: PropTypes.array,
};

export default PaintDetail;