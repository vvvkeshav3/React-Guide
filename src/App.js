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
    showPersons : false,
    otherState : 'Some other value'
  }

  // switchNameHandler = (newName) =>{
  //   this.setState({
  //     persons : [
  //       {name: newName, age: 21},
  //       {name:'Gagan', age:19}, 
  //       {name:'Mani', age:25},
  //       {name:'Nitigya', age:24}
  //     ] 
  //   });
  // }

  // nameChangeHandler = (event) =>{

  //   this.setState({
  //     persons : [
  //       {name: 'Keshav', age: 21},
  //       {name: event.target.value, age:19}, 
  //       {name:'Mani', age:25},
  //       {name:'Nitigya', age:24}
  //     ]
  //   })

  // }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <p>It is working Fine!</p>
        <button onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons ? 
            <div>
              <Person name = {this.state.persons[0].name} 
                      age = {this.state.persons[0].age} />
              <Person name = {this.state.persons[1].name} 
                      age = {this.state.persons[1].age} />
              <Person name = {this.state.persons[2].name} 
                      age = {this.state.persons[2].age} />
              <Person name = {this.state.persons[3].name} 
                      age = {this.state.persons[3].age}/>
            </div> : null
        }
      </div>
    );
  }
}

export default App;