import styled, { css } from "styled-components";
const NavLinks = ({ dropdown }) => {
  const NavData = [
    { title: "Home", id: 1, url: "/" },
    { title: "Services", id: 2, url: "/" },
    { title: "Work", id: 3, url: "/" },
    { title: "About", id: 4, url: "/" },
  ];

  return (
    <StyledNavLinks dropdown={dropdown}>
      {NavData.map((data) => {
        return (
          <li key={data.id}>
            <a href={data.url} className="underline">
              {data.title}
            </a>
          </li>
        );
      })}
    </StyledNavLinks>
  );
};

export default NavLinks;

const StyledNavLinks = styled.ul`
  display: ${(p) => (p.dropdown ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  font-size: ${(p) => (p.dropdown ? "1.3rem" : "1rem")};
  color: ${(p) => (p.dropdown ? "#ccc" : "#fff")};
  ${(p) =>
    p.dropdown &&
    css`
      height: 100%;
    `}

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    display: flex;
  }

  li {
    color: inherit;
    margin-left: ${(p) => (p.dropdown ? "0px" : "54px")};
    ${(p) =>
      p.dropdown &&
      css`
        margin: 10px 0px;
        display: relative;
      `}
    font-size: inherit;
    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
      margin-left: 20px;
    }

    &:hover a::after {
      color: red;
    }
  }
  li:first-child {
    margin-left: 0px;
  }
  a {
    color: inherit;
    position: relative;
    padding-bottom: 5px;

    &:hover {
      background: url("https://ewebdesign.com/wp-content/themes/ewebdesign/assets/img/wave.svg");
      background-repeat: repeat-x;
      background-size: 20px 15px;
      animation: move 15s linear infinite;
      -webkit-animation: move 30s linear infinite;
      animation-play-state: running;
      text-decoration: none;
      background-color: transparent;
      -webkit-text-decoration-skip: objects;

      @keyframes move {
        from {
          background-position: 2px 19px;
        }
        to {
          background-position: 500px 19px;
        }
      }
    }
  }
`;
