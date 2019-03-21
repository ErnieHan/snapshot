import React from "react";
import styled from "styled-components";

const BlogOutline = styled.div`
  font-family: "Montserrat";
  margin-bottom: 35px;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;
const Left = styled.div`
  width: 40%;
  float: left;
`;
const Right = styled.div`
  width: 60%;
  float: right;
  padding-left: 15px;
  h2 {
    margin-bottom: 5px;
    font-weight: 700;
  }
  a {
    margin-right: 10px;
    cursor: pointer;
    background: #f4f4f4;
    padding: 2px 15px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
  }
  p {
    color: #ccc;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 1.8;
  }
`;

const ReadMore = styled.div`
  font-size: 14px;
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

class Blog extends React.Component {
  render() {
    return (
      <BlogOutline>
        <Left>
          <img src={require(`../../assets/${this.props.image}.jpg`)} />
        </Left>
        <Right>
          <h2>Submitted and indexed</h2>
          <a>#Travel</a>
          <a>#Japan</a>
          <a>#May</a>
          <a>#Coffee</a>
          <p>
            As a young person, I used to accompany my parents to banks and other
            business places such as malls. During these times, I envied the way
            people here operated their business and the manner.
          </p>
          <ReadMore>
            <span>
              Read More
              <i className="fas fa-long-arrow-alt-right" />
            </span>
          </ReadMore>
        </Right>
      </BlogOutline>
    );
  }
}

export default Blog;
