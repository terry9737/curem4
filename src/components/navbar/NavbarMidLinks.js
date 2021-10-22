import styled, { css } from "styled-components";
const StyledUl = styled.ul`
  display: flex;

  li {
    a {
      padding-left: 1.8em;
      font-size: 1.2rem;
      color: ${(p) => p.theme.colors.navbar.fixedTop};
      transition: color 0.2s linear;

      &:hover {
        color: ${(p) => p.theme.colors.navbar.topTextHover};
      }
    }
  }
  ${(p) =>
    p.column &&
    css`
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        padding: 1rem 0em;

        a {
          padding: 0px;
        }
      }
    `}
`;

const MidList = ({ column }) => {
  return (
    <StyledUl column={column}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Shop</a>
      </li>
      <li>
        <a href="/">Products</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contacts</a>
      </li>
    </StyledUl>
  );
};

export default MidList;
