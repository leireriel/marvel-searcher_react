import React, { Component, Fragment } from 'react';
import { fetchMarvelSingleCharacter } from '../../services/fetchMarvelCharacters';
import NavDetail from './components/NavDetail';
import PaintDetail from './components/PaintDetail';

class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterToRender: []
    }
    this.getSingleCharacter = this.getSingleCharacter.bind(this);
  }

  componentDidMount() {
    this.getSingleCharacter();
  }

  getSingleCharacter() {
    fetchMarvelSingleCharacter(this.props.id)
      .then(data => {
        this.setState({
          characterToRender: data
        })
      })
      .catch(error => console.log(`Ha sucedido un error: ${error}`));
  }

  render() {
    const { id } = this.props;
    const { characterToRender } = this.state;
    return (
      <Fragment>
        <NavDetail id={id} title={characterToRender.map(character => character.heroName)}/>
        {characterToRender.length === 0 ?
          <p className="common__text--center">Cargando...</p>
          :
          <PaintDetail characterToRender={characterToRender}/>
        }
      </Fragment>
    );
  }
}

export default CharacterDetail;