import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../context/context";
const SliderLeft = () => {
  const { variants, control } = useContext(DataContext);
  return (
    <StyledSliderLeft
      className="header_slider"
      variants={variants}
      initial="initial"
      animate={control}
    >
      <div>
        <p>Velit laoreet id donec ultrices. Ut lectus arcu bibendum varius.</p>
        <span>
          <FiArrowRight className="first_arrow" />
          <FiArrowRight className="second_arrow" />
        </span>
      </div>
    </StyledSliderLeft>
  );
};

export default SliderLeft;

const StyledSliderLeft = styled(motion.div)`
  margin-top: 70px;
  margin-bottom: 126px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  width: 90%;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 0.9rem;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    max-width: 550px;
    padding: 25px 20px 25px 5px;
    width: 100%;
    font-size: 1rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: inherit;

    p {
      max-width: 80%;
      width: 100%;
      color: #fff;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 999px;
      border: 1px solid #fff;
      cursor: pointer;
      overflow: hidden;
      font-size: inherit;

      @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        font-size: 1em;
      }

      .first_arrow {
        transform: translateX(-200%);
        color: #f61067;
        transition: all 0.2s linear;
        font-size: inherit;
      }
      .second_arrow {
        transform: translateX(-7.5px);
        color: #fff;
        transition: all 0.2s linear;
        font-size: inherit;
      }

      &:hover .first_arrow {
        transform: translateX(7.5px);
      }
      &:hover .second_arrow {
        transform: translateX(200%);
      }
    }
  }
`;
