import React, {Component} from 'react';
// import classes from './Person.css';

class Person extends Component {
  render(){
    console.log('[Person.js] rendering...');    
    return [
        <p onClick={this.props.click} key="i1">
          I'm {this.props.name} and I am {this.props.age} years old
        </p>,
        <p key="i2">{this.props.children}</p>,
        <input key = "i3" type="text" onChange={this.props.changed} value={this.props.name} />
    ];
  }
};

export default Person;