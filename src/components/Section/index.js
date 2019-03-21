import React from "react";
import styled from "styled-components";
import Blog from "../Blog";

const SectionOutline = styled.div`
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
  padding-right: 25px;
`;

const Right = styled.div`
  width: 30%;
  float: right;
`;

class Section extends React.Component {
  render() {
    return (
      <SectionOutline>
        <Left>
          <Blog />
        </Left>
        <Right>1123</Right>
      </SectionOutline>
    );
  }
}

export default Section;
