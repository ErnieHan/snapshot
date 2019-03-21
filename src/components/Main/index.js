import React from "react";
import styled from "styled-components";

const MainOutline = styled.div`
  margin: 50px auto;
  position: relative;
`;

const ImageDiv = styled.div`
  max-width: 65%;
`;

const TextDiv = styled.div`
  position: absolute;
  top: 85px;
  right: 0;
  width: 50%;
  height: 350px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 32px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 15%;
      height: 3px;
      background: #ffc733;
      top: -5%;
      left: 0%;
    }
  }
`;

const ReadMore = styled.div`
  font-size: 18px;
  text-align: right;
  font-family: "Montserrat";
  span {
    padding-bottom: 8px;
    border-bottom: 2px solid black;
    cursor: pointer;
    font-weight: 700;
  }
  i {
    margin-left: 5px;
  }
`;

class Main extends React.Component {
  render() {
    return (
      <MainOutline>
        <ImageDiv>
          <img src={require("../../assets/02.jpg")} />
        </ImageDiv>
        <TextDiv>
          <h1>
            The most common issue
            <br />
            Server side rendering is dealing
            <br />
            asynchronously.
            <ReadMore>
              <span>
                Read More
                <i className="fas fa-long-arrow-alt-right" />
              </span>
            </ReadMore>
          </h1>
        </TextDiv>
      </MainOutline>
    );
  }
}

export default Main;
