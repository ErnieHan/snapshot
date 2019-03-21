import React from "react";
import styled from "styled-components";

const SearchOutline = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 25px;
  padding: 15px 20px;
`;

class Search extends React.Component {
  render() {
    return <SearchOutline type="text" placeholder="Search" />;
  }
}

export default Search;
