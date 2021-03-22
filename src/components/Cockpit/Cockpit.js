import React, {useEffect} from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {

    // This useEffect() will run like componentDidMount, i.e., only first time when component created
    // because we have added an empty array as 2nd Argument 
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      // Http Request
      setTimeout(() => {
        alert('Saved data to cloud');
      }, 1000);
  
    },[]);
  
    // This useEffect() runs when props.persons change
    // useEffect(()=>{
    //   console.log('[Cockpit.js] useEffect for any props.persons change');
    // },[props.persons]);

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    // Adding classes dynamically for paragraph
    /*
    Conditions are :
    1) if number of persons are greater than 2 then no styling on p
    2) if number of persons are less than or equal to 2 then para to be red 
    1) if number of persons are less than or equal to 1 then para to be red and bold
    */
    const classesPara = [];
    if(props.persons.length<=2){
      classesPara.push(classes.red);
    }
    if(props.persons.length<=1){
      classesPara.push(classes.bold);
    }
    
    
    return (
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className = {classesPara.join(' ')}>It is working Fine!</p>
            <button className = {btnClass}
                    onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;