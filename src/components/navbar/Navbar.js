import styled, { css } from "styled-components";
import NavbarTop from "./NavbarTop";
import NavbarMenu from "./NavbarMenu";
import { DataContext } from "../context/context";
import { useContext } from "react";
const Navbar = () => {
  const { active } = useContext(DataContext);
  return (
    <Nav active={active}>
      <NavbarTop />
      <NavbarMenu />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background: white;
  height: 100%;
  max-height: 110px;
  overflow: hidden;
  transition: all 0.3s linear;

  ${(p) =>
    p.active &&
    css`
      max-height: 450px;
      height: 100%;
    `}
`;
