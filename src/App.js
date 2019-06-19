import React, { Component, Fragment } from 'react';
import { fetchCharacters } from './services/fetchCharacters';
import Search from './components/Search';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
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
  }

  getCharactersFromAPI(event) {
    event.preventDefault();
    fetchCharacters('Sp')
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(`Ha sucedido un error: ${error}`));
  }

  render() {
    return (
      <Fragment>
        <header />
        <main>
          <Switch>

            <Route exact path="/" render={() =>
              <Fragment>
                <Search actionForm={this.getCharactersFromAPI}/>
                <CharacterList />
              </Fragment>
            }/>

            <Route path="/detail/:character" render={paramPicker =>
              <CharacterDetail
                param={parseInt(paramPicker.match.params.character)}
              />
            }/>

          </Switch>
        </main>
        <footer />
      </Fragment>
    );
  }
}

export default App;
