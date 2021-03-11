import React from 'react';
import styled from 'styled-components';
// import './Person.css';

// All styled Components should be defined outside other components
const StyledDiv = styled.div`
    width : 60%;
    border : 1px solid rgb(116, 113, 113);
    box-shadow: 5px 5px 3px rgb(90, 87, 87);
    margin: 16px auto;
    padding : 16px;
    
    @media (min-width: 700px) {
          width: 450px;
    }
  `;
  
const person = (props) => {
  
  return (
    <StyledDiv className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
