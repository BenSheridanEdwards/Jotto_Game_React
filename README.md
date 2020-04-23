# Jotto

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [Application Showcase](#app-showcase) | [Installation Instructions](#installation)

## <a name="description">Description</a>

Jotto (or Giotto) is a logic-oriented word game played with two players, a writing implement, and a piece of paper with the alphabet on it. Each player writes a secret word and attempts to guess the other player's word.

*Tech Stack: JavaScript, React, Redux, Node, CSS, HTML, Jest, Enzyme, Axios, Webpack, Babel*

## <a name="user-stories">User Stories</a>

```
As a player of Jotto,
I expect to see a text input box, where I can make my guesses.
```
```
As a player of Jotto,
when I make a guess, 
I expect to see my guesses populate a table, with a count of the number of letters that word has in common with the secret word.
```
```
As a player of Jotto,
when I guess the secret word correctly, 
I expect to see a message telling me i've won.
```

## <a name="mockups">Mockups</a>

Initial Game Setup:

![Mockup Initial State](https://github.com/BenSheridanEdwards/Jotto_Game_React/blob/master/media/Mockups/Jotto-Mockup1.png)

As the player begins to make guesses, a table of their guesses grows that indicate the number of correct matching letters for each word:

![Mockup Guesses Table](https://github.com/BenSheridanEdwards/Jotto_Game_React/blob/master/media/Mockups/Jotto-Mockup2.png)

When a player guesses the secret word correctly, they'll be shown a message telling them they've won the game.

![Mockup Win Scenario](https://github.com/BenSheridanEdwards/Jotto_Game_React/blob/master/media/Mockups/Jotto-Mockup3.png)

<a name="app-showcase"><br /></a>

## Application Showcase

![Application Screenrecording]()

## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.

```
$ git clone git@github.com:BenSheridanEdwards/Jotto_Game_React.git
$ cd Jotto_Game_React
```

From inside the React project, you can run `npm start` in the terminal to launch the app in the browser.

```
$ npm start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.<br />

### Credit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
