import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styled, { css } from "styled-components";
const StyledSocial = styled.ul`
  display: flex;

  li a > * {
    font-size: 1.6rem;
    color: ${(p) => p.theme.colors.navbar.fixedTop};
    margin-right: 1.5em;
    transition: color 0.2s linear;

    &:hover {
      color: ${(p) => p.theme.colors.navbar.topTextHover};
    }
  }

  ${(p) =>
    p.column &&
    css`
      justify-content: center;

      li {
        padding: 1em 0em;
        a > * {
          margin-right: 1em;
        }
      }
    `}
`;
const Social = ({ column }) => {
  return (
    <StyledSocial column={column}>
      <li>
        <a href="/">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a href="/">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="/">
          <FaInstagram />
        </a>
      </li>
    </StyledSocial>
  );
};

export default Social;
