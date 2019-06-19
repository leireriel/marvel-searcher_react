const ts = 'e';
const key = 'e7e74822fd1be04b0041a481dfb22e30';
const hash = '22e2659de36802161a9425847f94522a';
const ENDPOINT = character => `http://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${character}&ts=${ts}&apikey=${key}&hash=${hash}`;

const fetchCharacters = character => fetch(ENDPOINT(character)).then(res => res.json())

export {fetchCharacters};