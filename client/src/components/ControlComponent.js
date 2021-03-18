import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as Rocket } from '../assets/rocket.svg';

const ControlComponent = (props) => {

  const [state, setState] = useState({
    hasError: true,
    errMsg: '',
    padID: ''
  });

  const handleLandingPadID = (event) => {
    const { value } = event.target;
    
    if (value !== '') {
      if (validateID(value))
        setState({ ...state, padID: value, hasError: false, errMsg: '' });
      else
        setState({ ...state, hasError: true, errMsg: 'The Special characters #,$,%,& are not allowed!' });
    } else
      setState({ ...state, hasError: true, errMsg: '' });

  }

  /**
   * Validate current value that has special characters or not.
   * 
   * @param {string} val
   * @return {boolean} 
   */
  const validateID = (val) => {
    const format = /[ #$%& ]/;

    if (!format.test(val))
      return true;

    return false;
  }

  return (
    <Container>
      <Button onClick={props.handleCapsulesSubmit}>Capsules</Button>
      <RocketView><Rocket /></RocketView>
      {state.hasError && <ErrorMsg>{state.errMsg}</ErrorMsg>}
      {props.spaces.error && <ErrorMsg>{props.spaces.error.message}</ErrorMsg>}
      <Input type="text" placeholder="text" onChange={handleLandingPadID}></Input>
      <Button onClick={() => props.handleLandingPadSubmit(state.padID)} disabled={state.hasError}>Landing Pad</Button>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid white;
  padding: 5px 10px;

  display: flex;
  align-items: stretch;
  justify-content: stretch;

  .adt-platform-desktop & {
    height: 80px;

    flex-direction: row;
  }

  .adt-platform-mobile &, .adt-platform-tablet & {
    width: 100px;

    flex-direction: column;
  }
`
const Button = styled.button`
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  flex: 1 1 0%;
`;
const Input = styled.input`
  outline: none;
  text-align: center;

  flex: 1 1 0%;
`
const RocketView = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  flex: 1 1 0%;
`
const ErrorMsg = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: red;
  padding: 10px;
`
export default ControlComponent;
