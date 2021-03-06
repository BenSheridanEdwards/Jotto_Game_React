import React, { Component } from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    return (
      <div className='container' data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[ 
          {guessedWord: 'train', letterMatchCount: 3 }
        ]} /> 
      </div>
    );
  };
}

export default App;
