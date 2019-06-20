//const ts = 'salt';
//const key = 'e7e74822fd1be04b0041a481dfb22e30';
//const hash = 'ceba5a59dc7760abe5b48432f07e77b8';
//const ENDPOINT = character => `http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${character}&ts=${ts}&apikey=${key}&hash=${hash}`;

//const fetchCharacters = character => fetch(ENDPOINT(character)).then(res => res.json())


const ENDPOINT = 'http://www.mocky.io/v2/5d0b81a22f00006b00e3f154';

const fetchCharacters = () => fetch(ENDPOINT).then(res => res.json())

export {fetchCharacters};