import styled from "styled-components";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../context/context";
import logo from "../../images/logo.png";

const StyledLogoArea = styled.div`
  display: flex;
  align-items: center;
`;
const StyledImage = styled.img`
  /* height: 100%;
  max-height: 1em; */
  cursor: pointer;
`;
const StyledText = styled.h1`
  display: flex;
  align-items: center;
  a {
    color: ${(p) => p.theme.colors.navbar.fixedTop};
    font-weight: bold;
    font-size: 1.5rem;
    padding-left: 0.5em;
    transition: color 0.2s linear;

    &:hover {
      color: ${(p) => p.theme.colors.navbar.topTextHover};
    }
  }
`;
const LogoArea = () => {
  const { variants, controls } = useContext(DataContext);
  return (
    <StyledLogoArea>
      <StyledImage
        as={motion.img}
        variants={variants}
        initial="hidden"
        animate={controls}
        onMouseEnter={() => controls.start("rotateStart")}
        onMouseLeave={() => controls.start("rotateNone")}
        src={logo}
        alt="logo"
      />
      <StyledText>
        <a href="/">CureM4</a>
      </StyledText>
    </StyledLogoArea>
  );
};

export default LogoArea;
