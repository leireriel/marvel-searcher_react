/*API MARVEL
const ts = 'salt';
const key = 'e7e74822fd1be04b0041a481dfb22e30';
const hash = 'ceba5a59dc7760abe5b48432f07e77b8';
const ENDPOINT = character => `http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${character}&ts=${ts}&apikey=${key}&hash=${hash}`;

const fetchMarvelCharacters = character => fetch(ENDPOINT(character)).then(res => res.json())

const fetchMarvelCharacters = character => {
  return (
    fetch(ENDPOINT(character))
      .then(res => res.json())
      .then(data => data.xx.map(character => mapToCharacter(character)))
  );
};*/

const loadJson = () => {
  const mockedFetch = new Promise(resolve => {
    const data = require('./mockCharacters.json');
    resolve(data);
  });
  return mockedFetch;
};

const mapToCharacter = character => {
  return (
    {
      id: character.id,
      heroName: character.names.hero_name,
      text: character.abstract,
      image: character.avatar
    }
  );
};

const mapToSingleCharacter = character => {
  return (
    {
      id: character.id,
      heroName: character.names.hero_name,
      image: character.avatar,
      realName: character.names.real_name,
      group: character.group,
      measures: character.measures,
      comics: character.comics,
      father: character.father,
      dob: character.dob
    }
  );
};

const fetchMarvelCharacters = () => {
  return loadJson()
    .then(data => data.characters.map(character => mapToCharacter(character)));
};

const fetchMarvelSingleCharacter = id => {
  return loadJson()
    .then(data => data.characters.filter(character => character.id === id)
    .map(character => mapToSingleCharacter(character)));
};

export {fetchMarvelCharacters, fetchMarvelSingleCharacter};