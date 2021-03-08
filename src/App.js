import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {id: 'dasda3', name:'Keshav', age:21},
      {id: 'huifh21', name:'Gagan', age:19}, 
      {id: 'nbdfjve', name:'Mani', age:25},
      {id: 'poifj3', name:'Nitigya', age:24}
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
    this.setState({showPersons : !doesShow});
  }

  deletePersonsHandler = (personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({
      persons : persons
    });

  }

  render() {

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person 
                      name = {person.name}
                      age = {person.age} 
                      click = {() => this.deletePersonsHandler(index)}
                      key = {person.id}
                      />
          }) }
        </div>
      ); 
    }

    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <p>It is working Fine!</p>
        <button onClick = {this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;