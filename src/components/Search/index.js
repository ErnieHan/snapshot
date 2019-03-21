import React from "react";
import styled from "styled-components";

const SearchOutline = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  input {
    width: 80%;
    padding: 8px;
    margin: 15px auto;
    border: 1px solid #ccc;
  }
`;

class Search extends React.Component {
  render() {
    return (
      <SearchOutline>
        <input type="text" placeholder="Search" />
      </SearchOutline>
    );
  }
}

export default Search;
