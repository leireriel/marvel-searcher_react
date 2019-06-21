# Welcome to the Marvel characters searcher!!

## What is this APP for...
:)

## Attribution
You must attribute Marvel as the source of data whenever you display any results from the Marvel Comics API. Please use the following text on every application screen or web page which displays the API result:
"Data provided by Marvel. © 2014 Marvel"

API https://developer.marvel.com/

Marvel Comics API is a RESTful service

See how on https://developer.marvel.com/documentation/getting_started
- Get a key

Necesitas key, timestamp (ts) y hash para peticiones https://developer.marvel.com/documentation/authorization


catch error?`

--
API timeout
Mock json
images of characters from https://www.marvel.com/explore
nunca lo había hecho

## Structure
```
|_src
  |_App

  |_services
    |_fetchCharacters

  |_components
    |_Search
    |_CharacterList
    |_CharacterDetail
    |_Contact
  
  |_styles
    |_core
      |_variables
      |_mixins
```

Global state controlled from App.js
or state in new component fetch, that contains both search and characterlist

## Dependencies and technologies
Petitions
*Postman help

Developement(?)
*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
*Métodos de vida: component did mount, etc
*React Router
*PropTypes
*? to fetch local json

Maquetación
*SASS
*Use of BEM for class naming
*Responsive with Mobile first
*Flexbox
*Transitions
*Scroll horizontal para imagenes con librería? En vista ppal

---
mapeo en fetch
funciones arrow en componentes
sort
button con mixing
TO DO:
renderizar lista solo cuando doy al botón
o que el value solo se guarde cuando doy al botón
esto es nuevo para mi

boton para ver todos los caracterres, y el normal que devuelva vacio si no hay nada en input

---

## Dificultades


favicon got in http://www.iconarchive.com/show/ultrabuuf-icons-by-mattahan/Comics-Spiderwoman-icon.html