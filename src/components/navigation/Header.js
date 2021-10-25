import Navbar from "./Navbar";
import styled from "styled-components";
import { Wrapper } from "../UI/Wrapper";
import { FiChevronsDown } from "react-icons/fi";
import SliderLeft from "./SliderLeft";
import { useContext } from "react";
import { DataContext } from "../context/context";

const Header = () => {
  const { ref } = useContext(DataContext);
  return (
    <>
      <StyledHeader>
        <Navbar />
        <CustomWrapper>
          <div className="header_text">
            <div className="header_text-main">
              <p>What we do?</p>
              <h1>
                We grow <br /> <span>great business</span>
              </h1>
            </div>
            <div className="header_text-scroll">
              <p>Scroll to see more</p>
              <span ref={ref}>
                <FiChevronsDown />
              </span>
            </div>
          </div>
        </CustomWrapper>
        <SliderLeft />
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  background: pink;
  display: inline-block;
  width: 100%;
`;

const CustomWrapper = styled(Wrapper)`
  margin-top: 144px;

  .header_text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14.4px !important;
    color: #fff;
    padding: 0px 30px;

    @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
      flex-direction: row;
    }

    &-main {
      display: flex;
      flex-direction: column;
      padding-bottom: 18px;
      p {
        text-transform: uppercase;
        font-weight: 800;
        font-size: 1em;
      }
      h1 {
        font-weight: 900;
        font-size: 2.875em;
        line-height: 50.61px;

        @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
          font-size: 6.875em;
          line-height: 117.61px;
        }
        span {
          color: #f61067;
        }
      }
    }
    &-scroll {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & svg {
        animation: arrow 3s infinite;
        font-size: 2rem;

        @keyframes arrow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      }
      p {
        font-weight: 800;
        color: #fff;
        font-size: 0.875em;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        text-transform: uppercase;
        letter-spacing: 6px;
      }
    }
  }
`;
