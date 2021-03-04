import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name:'Keshav', age:21},
      {name:'Gagan', age:19}, 
      {name:'Mani', age:25},
      {name:'Nitigya', age:24}
    ],
    otherState : 'Some other value'
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <p>It is working Fine!</p>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
        <Person name = {this.state.persons[3].name} age = {this.state.persons[3].age}/>
      </div>
    );
  }
  
}

export default App;



























