import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 32px;
`;

class Loading extends React.Component {
  render() {
    return <Div id="loading">Loading</Div>;
  }
}

export default Loading;
