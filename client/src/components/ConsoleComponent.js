import React from 'react';
import styled from 'styled-components';

const ConsoleComponent = (props) => {
  return <Container>Dashboard {props.capsules}</Container>;
};
const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  word-break: break-all;
  border: 1px solid white;
  padding: 5px 10px;

  .adt-platform-desktop & {
    margin-bottom: 20px;
  }
`;
export default ConsoleComponent;
