import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.header`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #e0e0e0;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const InlineDiv = styled.div`
  max-width: 1230px;
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 32px;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`;

const Nav = styled.nav`
  font-size: 18px;
  li {
    margin-left: 25px;
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Socail = styled.a`
  width: 25px;
  height: 25px;
  filter: grayscale(1);
  opacity: 0.5;
  margin-left: 10px;
`;

const MenuMobile = styled.div`
  font-size: 32px;
  display: none;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <InlineDiv>
          <Logo>Universal Arsenal</Logo>
          <Nav>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/work">
                <li>Work</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Socail href="#">
                <img
                  src={require("../../assets/145802.svg")}
                  alt="facebook"
                  title="facebook"
                />
              </Socail>
              <Socail href="#">
                <img
                  src={require("../../assets/145805.svg")}
                  alt="instagram"
                  title="instagram"
                />
              </Socail>
              <Socail href="#" style={{ opacity: "0.85" }}>
                <img
                  src={require("../../assets/145812.svg")}
                  alt="twitter"
                  title="twitter"
                />
              </Socail>
            </ul>
          </Nav>
          <MenuMobile>
            <i class="fas fa-bars" />
          </MenuMobile>
        </InlineDiv>
      </HeaderDiv>
    );
  }
}

export default Header;
