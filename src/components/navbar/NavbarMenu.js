import styled, { css } from "styled-components";
import { Container } from "../UI/Container";
import Hamburger from "./HamburgerButton";
import LogoArea from "./NavbarLogoArea";
import MidList from "./NavbarMidLinks";
import Social from "./NavbarSocial";
import { useContext } from "react";
import { DataContext } from "../context/context";
import { motion, AnimateSharedLayout } from "framer-motion";
const StyledMenu = styled(motion.div)``;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: inherit;
`;

const StyledTopLinks = styled.div`
  display: none;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledHelp = styled.p`
  color: #5b6c8f;
  font-size: 1.2rem;
  padding: 0 2.5rem;

  ${(p) =>
    p.column &&
    css`
      text-align: center;
      width: 100%;
      padding-bottom: 0.5em;
    `}
`;

const NavbarMenu = () => {
  const { active, setActive } = useContext(DataContext);
  return (
    <Container>
      <StyledMenu>
        <MenuWrapper>
          <LogoArea />
          <Hamburger />
          <StyledTopLinks>
            <MidList />
            <StyledHelp>Need help? 989-879-0847</StyledHelp>
            <Social />
          </StyledTopLinks>
        </MenuWrapper>
        <Exp>
          <MidList column={true} />
          <StyledHelp column={true}>Need help? 989-879-0847</StyledHelp>
          <Social column={true} />
        </Exp>
      </StyledMenu>
    </Container>
  );
};

export default NavbarMenu;
const Exp = styled(StyledTopLinks)`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 2s linear;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    display: none;
  }
  flex-direction: column;
`;
