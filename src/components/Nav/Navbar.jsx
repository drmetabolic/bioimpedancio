import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  backdrop-filter: blur(5px);
  z-index: 2;
  .logo {
    padding: 1.3rem 0;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo"></div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
