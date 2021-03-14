import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {

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