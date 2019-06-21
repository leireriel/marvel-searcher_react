import React, { Component, Fragment } from 'react';
import CharacterDetail from './components/CharacterDetail';
import Contact from './components/Contact';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import FetchCharacters from './components/FetchCharacters';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header />
        <main className="main__marvel">
          <Switch>

            <Route exact path="/" render={() =>
              <Fragment>
                <FetchCharacters />
              </Fragment>
            }/>

            <Route path="/character/:character" render={idPicker =>
              <CharacterDetail
                id={parseInt(idPicker.match.params.character)}
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
