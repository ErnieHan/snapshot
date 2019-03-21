import React from "react";
import styled from "styled-components";
import Article from "../components/Article";

const Outline = styled.div`
  margin-top: 35px;
  width: 100%;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;
const Left = styled.div`
  width: 70%;
  float: left;
`;
const Right = styled.div`
  width: 30%;
  float: right;
`;

class About extends React.Component {
  render() {
    return (
      <Outline>
        <Left>
          <Article />
        </Left>
        <Right>About</Right>
      </Outline>
    );
  }
}

export default About;
