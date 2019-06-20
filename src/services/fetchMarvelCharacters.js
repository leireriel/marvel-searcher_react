//const ts = 'salt';
//const key = 'e7e74822fd1be04b0041a481dfb22e30';
//const hash = 'ceba5a59dc7760abe5b48432f07e77b8';
//const ENDPOINT = character => `http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${character}&ts=${ts}&apikey=${key}&hash=${hash}`;

//const fetchMarvelCharacters = character => fetch(ENDPOINT(character)).then(res => res.json())


const ENDPOINT = 'http://www.mocky.io/v2/5d0b910f2f00007300e3f1c9';

const fetchMarvelCharacters = () => {
  return (
    fetch(ENDPOINT)
      .then(res => res.json())
      .then(data => data.characters.map(mapToCharacter))
  );
}

const mapToCharacter = character => {
  return (
    {
      id: character.id,
      heroName: character.names.hero_name,
      text: character.abstract,
      image: character.avatar
      //realName: character.names.real_name,
      //group: character.group,
      //measures: character.measures,
      //comics: character.comics,
      //father: character.father,
      //dob: character.dob
    }
  );
}

export {fetchMarvelCharacters};