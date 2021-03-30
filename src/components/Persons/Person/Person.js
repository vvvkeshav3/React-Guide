import React, {Component} from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';

class Person extends Component {

  //New Approach
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    // this.inputElement.focus();

    this.inputElementRef.current.focus();

  }

  render(){
    console.log('[Person.js] rendering...');    
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>,
        <input 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
          //Older Approach
          // ref = { (inputEl) => {this.inputElement = inputEl}} 
          ref = {this.inputElementRef}
        />

      </Aux>
    );
  }
};

Person.propTypes = {
  click : PropTypes.func,
  age : PropTypes.number,
  name : PropTypes.string,
  changed : PropTypes.func
}

export default withClass(Person,classes.Person);