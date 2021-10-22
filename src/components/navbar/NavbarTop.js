import styled from "styled-components";

const StyledNavbarTop = styled.div`
  height: 40px;
  background: ${(p) => p.theme.colors.navbar.fixedTop};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.p`
  color: ${(p) => p.theme.colors.navbar.topText};
  font-size: 1.2rem;
  padding: 0.5em;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    & {
      padding: 1em;
    }
  }
`;

const NavbarTop = () => {
  return (
    <StyledNavbarTop>
      <StyledText>
        Due to the COVID 19 epidemic, orders may be processed with a slight
        delay
      </StyledText>
    </StyledNavbarTop>
  );
};

export default NavbarTop;
