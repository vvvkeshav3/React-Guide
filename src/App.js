import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dasda3', name: 'Keshav', age: 21 },
      { id: 'huifh21', name: 'Gagan', age: 19 },
      { id: 'nbdfjve', name: 'Mani', age: 25 },
      { id: 'poifj3', name: 'Nitigya', age: 24 },
    ],
    showPersons: false,
    otherState: 'Some other value',
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons,
    });
  };

  render() {

    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonsHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

  // Adding classes dynamically for paragraph
    /*
    Conditions are :
    1) if number of persons are greater than 2 then no styling on p
    2) if number of persons are less than or equal to 2 then para to be red 
    1) if number of persons are less than or equal to 1 then para to be red and bold
    */
    const classesPara = ['testing'];
    if(this.state.persons.length<=2){
      classesPara.push('red');
    }
    if(this.state.persons.length<=1){
      classesPara.push('bold');
    }
    return (
      <div className="App">
        <h1>Welcome to React App</h1>
        <p className = {classesPara.join(' ')}>It is working Fine!</p>
        <button className = "button"
                onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
