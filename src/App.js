import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <p>It is working Fine!</p>
        <Person name = 'Keshav' age = '21'>My Hobby : Playing Chess</Person>
        <Person name = 'Gagan' age = '19' />
        <Person name = 'Mani' age = '25' />
        <Person name = 'Nitigya' age = '24' />
      </div>
    );
  }
  
}

export default App;



























