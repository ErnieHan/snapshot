import React from "react";
import styled from "styled-components";
import Search from "../Search";

const MainOutline = styled.div`
  margin: 50px auto;
  position: relative;
`;

const ImageDiv = styled.div`
  max-width: 65%;
  @media screen and (max-width: 1200px) {
    max-width: 100%;
  }
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
  @media screen and (max-width: 1200px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: rgba(255, 255, 255, 0.5);
    h1 {
      font-size: 18px;
    }
  }
`;

const ReadMore = styled.div`
  text-align: right;
  font-family: "Montserrat";
  span {
    font-size: 18px;
    padding-bottom: 8px;
    border-bottom: 2px solid black;
    cursor: pointer;
    font-weight: 700;
  }
  i {
    margin-left: 5px;
  }
  @media screen and (max-width: 1200px) {
    span {
      padding-bottom: 2px;
      font-size: 12px;
    }
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
