import React from "react";
import styled from "styled-components";
import Blog from "../Blog";
import Search from "../Search";
import RecentPosts from "../RecentPosts";

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
          <Blog image="01" />
          <Blog image="03" />
          <Blog image="05" />
        </Left>
        <Right>
          <Search />
          <RecentPosts />
        </Right>
      </SectionOutline>
    );
  }
}

export default Section;
