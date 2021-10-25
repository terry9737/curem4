import styled from "styled-components";
import { Wrapper } from "../UI/Wrapper";
import phone from "../../images/phone.svg";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
import { useContext } from "react";
import { DataContext } from "../context/context";

const Navbar = () => {
  const { opened, setOpened } = useContext(DataContext);
  return (
    <StyledWrapper>
      <nav>
        <div className="nav_menu">
          <h1>Lopper</h1>
          <div className="nav_container">
            <NavLinks />
            <p>
              <span>
                <img src={phone} alt="phone" />
              </span>
              (01) 666 - 693 - 456
            </p>
            <Hamburger />
          </div>
        </div>
        <div className={`nav_dropdown ${opened && "on"}`}>
          <NavLinks dropdown={true} />
        </div>
      </nav>
    </StyledWrapper>
  );
};

export default Navbar;

const StyledWrapper = styled(Wrapper)`
  padding: 30px 30px;
  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    padding: 30px 20px;
    /* padding-top: 61px; */
  }
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-size: 0.96rem;
    color: #fff;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
      flex-direction: row;
      justify-content: space-between;
    }

    .nav_menu {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .nav_container {
      display: flex;

      p {
        font-size: inherit;
        margin-left: 98px;
        justify-content: center;
        align-items: center;
        display: none;

        @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
          display: flex;
          margin-left: 20px;
        }

        span img {
          max-height: 100%;
          height: 100%;
          margin-right: 18px;

          @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
            display: flex;
            margin-left: 1px;
          }
        }
      }
    }

    .nav_dropdown {
      display: block;
      width: 100%;
      height: 0px;
      overflow: hidden;
      background: #fff;
      transition: all 0.2s linear;

      @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        display: none;
      }

      &.on {
        height: 200px;
      }
      ul {
        display: flex;
        flex-direction: column;
      }
    }

    h1 {
      font-size: 1.6rem;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
