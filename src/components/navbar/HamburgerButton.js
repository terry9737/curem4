import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "../context/context";
const Hamburger = () => {
  const { active, setActive } = useContext(DataContext);
  return (
    <StyledHamburger
      onClick={() => setActive(!active)}
      className={`${active && "on"}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
};

export default Hamburger;

const StyledHamburger = styled.div`
  display: block;
  position: relative;
  width: 31px;
  height: 20px;
  cursor: pointer;

  /* pasted */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  span {
    display: block;
    position: absolute;
    height: 2.2px;
    width: 100%;
    background: #000;
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
    }
    &:nth-child(2),
    &:nth-child(3) {
      top: 10px;
    }
    &:nth-child(4) {
      top: 20px;
    }
  }
  &.on span:nth-child(1) {
    top: 10px;
    width: 0%;
    left: 50%;
  }
  &.on span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &.on span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &.on span:nth-child(4) {
    top: 10px;
    width: 0%;
    left: 50%;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    display: none;
  }
`;
