import React, { Component, Fragment } from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import Search from './components/Search';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: '',
      results: []
    }
    this.getCharactersFromAPI = this.getCharactersFromAPI.bind(this);
    this.promiseCharacter = this.promiseCharacter.bind(this);
  }

  promiseCharacter(character) {
    return (
      {
        id: character.id,
        heroName: character.names.hero_name,
        realName: character.names.real_name,
        group: character.group,
        measures: character.measures,
        text: character.abstract,
        comics: character.comics,
        father: character.father,
        image: character.avatar,
        dob: character.dob
      }
    );
  }

  getCharactersFromAPI(event) {
    event.preventDefault();
    //fetchCharacters('Spider')
    const promiseCharacter = this.promiseCharacter;
    fetchCharacters()
    .then(data => {
      let promises = [];
      data.characters.map(character => {
        return (
          promises.push(promiseCharacter(character))
        );
      })
      Promise.all(promises)
      .then(responses => {
        this.setState({
          results: responses
        })
      })
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));

    /*.then(data => {
      let promises = [];
      data.characters.map(character => {
        return (
          promises.push(this.promiseCharacter(character))
        )
      })
      Promise.all(promises)
        .then(responses => {
          this.setState({
            results: responses
          })
        })
        console.log(promises)
      })
      .catch(error => console.log(`Ha sucedido un error: ${error}`));
      */
  }

  render() {
    return (
      <Fragment>
        <header />
        <main className="main__marvel">
          <Switch>

            <Route exact path="/" render={() =>
              <Fragment>
                <Search actionForm={this.getCharactersFromAPI}/>
                <CharacterList />
              </Fragment>
            }/>

            <Route path="/character/:character" render={paramPicker =>
              <CharacterDetail
                param={parseInt(paramPicker.match.params.character)}
              />
            }/>

          </Switch>
        </main>
        <footer className="footer__marvel">
          <Contact />
        </footer>
      </Fragment>
    );
  }
}

export default App;
