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

    const style = {
      backgroundColor : 'green',
      color: 'white',
      font : 'inherit',
      border: '1px solid blue',
      padding : '8px',
      cursor : 'pointer',

      // We can't add hover in inline styles
      // because if we add class/id to get hover effect from css file
      // then same properties will not be hover because inline styles will 
      // override them
    }
    // Dynamically Adding Classes For Button
    const classesButton = ['notUsed'];

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
      
      // Changing Styles Dynamically
      // Using Inline Styles We can easily change styles dynamically
      style.backgroundColor = 'red';
      classesButton[0] = 'used';
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
        <button className={classesButton.join('')}
                style = {style}
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
