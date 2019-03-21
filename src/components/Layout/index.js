import React from "react";
import styled from "styled-components";
import Header from "../Header";

const LayoutDiv = styled.div`
  max-width: 1230px;
  padding: 0 15px;
  padding-top: 65px;
  margin: 0 auto;
`;

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <LayoutDiv>{this.props.children}</LayoutDiv>
      </div>
    );
  }
}

export default Layout;
