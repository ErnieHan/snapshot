import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 1200px;
  background: #3b4a56;
  border: 5px solid #ffc733;
  border-radius: 6px;
`;

class Article extends React.Component {
  render() {
    return (
      <Div>
        <img src={require("../../assets/01.jpg")} />
      </Div>
    );
  }
}

export default Article;
