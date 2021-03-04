// Functional Component
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons : [
      {name:'Keshav', age:21},
      {name:'Gagan', age:19}, 
      {name:'Mani', age:25},
      {name:'Nitigya', age:24}
    ]
  })

  const [otherState, setOtherState] = useState('Some other Value');

  const switchNameHandler = () =>{
    setPersonsState({
      persons : [
        {name:'Gopu', age:20},
        {name:'Gagan', age:19}, 
        {name:'Mani', age:25},
        {name:'Nitigya Jain', age:24}
      ] 
    });
  }

  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <p>It is working Fine!</p>
      <button onClick = {switchNameHandler}>Switch Name</button>
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age} />
      <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age} />
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age} />
      <Person name = {personsState.persons[3].name} age = {personsState.persons[3].age}/>
    </div>
  );

}
export default app;
