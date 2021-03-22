import React, {PureComponent} from 'react';
import Person from './Person/Person';

// If you are checking every props in shouldComponentUpdate
// that they are changed or not, then instead of writing shouldComponentUpdate, just
// extends PureComponent instead of Component
class Persons extends PureComponent{

  // Component Lifecycle - Updation
  
  // // Step 1
  // No need of this here as we are not managing state in this component
  // static getDerivedStateFromProps(props,state){
  //   console.log('[Persons.js] getDerivedStateFromProps')
  //   return state;
  // }

  // componentWillReceiveProps(this.props){ (NOT Supported Now)

  // }

  // // Step 2
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(nextProps.persons !== this.props.persons){
  //     return true;
  //   } else{
  //     return false;
  //   }
  // }

  // Step 5 
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    // return null;
    return {message : 'Snapshot'};
  }

  // componentWillUpdate(){ (Not Used Now)

  // }

  // Step 6
  // Here we can take the snapshot
  // as the argument return 
  // from getSnapshotBeforeUpdate
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  // For cleaning Up work
  // It will run Right before the component is Removed
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }


  // Step 3
  render(){
    console.log('[Persons.js] rendering...');    
    return this.props.persons.map((person, index) => {
      return (
        // Step 4 rendering child components
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />);
    });
  }
}
export default Persons;

