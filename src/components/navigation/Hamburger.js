import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../context/context";
const Hamburger = () => {
  const { opened, setOpened } = useContext(DataContext);
  return (
    <StyledHamburger
      opened={opened}
      className={`${opened && "on"}`}
      onClick={() => setOpened(!opened)}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
};
const StyledHamburger = styled.div`
  width: 30px;
  height: 25px;
  position: relative;
  background: ${(p) => p.opened && "#fff"};
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    display: none;
  }

  &.on span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 1px;
    left: 4px;
  }

  &.on span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  &.on span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 22px;
    left: 4px;
  }

  & span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 12px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }

    &:nth-child(3) {
      top: 23px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;
    }
  }
`;
export default Hamburger;
