import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonsHandler}
            changed = {this.nameChangeHandler} />
        </div>
      );  
    }

  
    return (
      <div className={classes.App}>
        <Cockpit
          title = {this.props.appTitle}  
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
