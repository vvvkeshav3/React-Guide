import React, {useEffect} from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {

    // This useEffect() will run like componentDidMount, i.e., only first time when component created
    // because we have added an empty array as 2nd Argument 
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      const timer = setTimeout(() => {
        alert('Saved data to cloud');
      }, 1000);
      
      // As we Have used empty array as Second Argument, 
      // so this function in the return statement 
      // will run when this component is unmounted
      return ()=>{
        clearTimeout(timer);
        console.log('[Cockpit.js] Cleanup work in useEffect');
      };

    },[]);

    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      //This is the additional functionality here in functional component 
      // As we didn't use here the empty array 
      // So this function in the return statement will run
      // for every update cycle(not in the creation cycle) 
      return ()=>{
        console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
      };
    })
  
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
    if(props.personsLength<=2){
      classesPara.push(classes.red);
    }
    if(props.personsLength<=1){
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