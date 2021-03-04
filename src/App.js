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

  switchNameHandler = () =>{
    this.setState({
      persons : [
        {name:'Gopu', age:20},
        {name:'Gagan', age:19}, 
        {name:'Mani', age:25},
        {name:'Nitigya Jain', age:24}
      ] 
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <p>It is working Fine!</p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
        <Person name = {this.state.persons[3].name} age = {this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;



























