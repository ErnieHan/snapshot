import React from "react";
import styled from "styled-components";

const Outline = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;
  border: 1px solid #ccc;
  h2 {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 25%;
      height: 3px;
      background: #ffc733;
    }
  }
`;

class RecentPosts extends React.Component {
  render() {
    return (
      <Outline>
        <h2>Recent Posts</h2>
        <p>Submitted and indexed</p>
      </Outline>
    );
  }
}

export default RecentPosts;
