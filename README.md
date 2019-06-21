# Welcome to this MARVEL CHARACTERS SEARCHER!!

![Screenshot of app](./src/images/project_screenshot.PNG)

## 🤖 What is this APP for...
This is a SPA created with **React JS** to search characters from [Marvel API](https://developer.marvel.com/). You can also see the detail of the character selected.

## 👀 Before starting
Because the API was down during the days I did this project, I decided to mock a json with some characters, which is now located in this repository (src/services). Sorry if the data isn't real! 🙈

## 🏗 Getting Started
Install [Node.js](https://nodejs.org/), and then:
1. `$ git clone https://github.com/leireriel/marvel-searcher-react.git` to clone the repository
2. `$ npm install` to install dependencies 
3. `$ npm start` to run the project in your browser 

## 🖇 Structure
```
|_src
  |_App

  |_services
    |_fetchCharacters
    |_mockCharacters.json

  |_components
    |_Search
    |_FetchCharacters
    |_Filters
      |_FilteredCharacter
    |_CharacterList
    |_CharacterDetail
      |_NavDetail
      |_PaintDetail
    |_Contact
  
  |_styles
    |_core
      |_variables
      |_mixins

  |_images
```

## 💪 Challenges
This project has been created during three days in which I have learned many things.
I was used to using a global state, but this week I learned that in some cases it may be better to control the **states in each component**.

In this project there are **two routes**:
1. One as the home route (that contains the list of characters)
2. And the detail route (created with the id of the character when the user clicks on it).
Since both routes contain components that make a different fetch, it was not neccesary to store the array of characters in the global state (as I was used to).

## 🗂 Dependencies
* [react](https://www.npmjs.com/package/react) - Framework of the project ⚛ 
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - For routing :)
* [react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link) - To create anchor tag in react router
* [prop-types](https://www.npmjs.com/package/prop-types) - A way to dynamically verify the props of our components
* [node-sass](https://www.npmjs.com/package/node-sass) - For the use of SCSS in the project

## 👩🏼‍💻 Technologies
1. API
* [Postman](https://www.getpostman.com/) to make petitions to API

2. Programming (JS / React)
* Use of some **React component lifecycle** methods
* Use of **React Router** to simulate pages
* Use of **PropTypes**
*? to fetch local json primer vex
hacer mejor organizacion componentes

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

TO IMPROVE (asynchrony???):

1. The button to see all characters only works after pressing the other button.
2. Avoid render every time the user is typing. It has to happen just when user press button.
shouldComponentUpdate should work, but it's making a delay. I think it's something about asynchrony.

---
## 💡 To Do

## 👨‍🏫 Attribution
1. Images of characters are from [Marvel website](https://www.marvel.com/explore).
2. Favicon got in [IconArchive](http://www.iconarchive.com/show/ultrabuuf-icons-by-mattahan/Comics-Spiderwoman-icon.html).
