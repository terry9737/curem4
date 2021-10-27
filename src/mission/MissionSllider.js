import styled from "styled-components";
import { Wrapper } from "../components/UI/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./missionData";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

const MissionSlider = () => {
  return (
    <>
      <StyleMain>
        <StyledSwiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((slide) => {
            return (
              <SwiperSlide className="swiper_slide" key={slide.id}>
                {/* <img src={slide.img} alt="person" /> */}
                <div>12</div>
              </SwiperSlide>
            );
          })}
        </StyledSwiper>
      </StyleMain>
    </>
  );
};

export default MissionSlider;

const StyledSwiper = styled(Swiper)`
  background: #fcfcfc;
  /* position: relative; */
  /* z-index: 600; */
  .swiper-container {
    overflow: visible !important;
  }
  .swiper-button-next {
    color: red;
    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
      margin-right: 159px;
    }
  }
  .swiper-button-prev {
    color: green;
    @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
      margin-left: 149px;
    }
  }

  .swiper_slide {
    margin: 0 auto;
    background: green;
    position: relative;
    min-height: 500px;

    div {
      width: 50px;
      background: red;
      height: 300px;
      position: absolute;
      top: -200px;
      z-index: 500;
    }

    img {
      max-height: 200px;
      position: absolute;
      left: 32%;
      top: -10%;
    }
  }
`;

// const StyledWrapper = styled(Wrapper)`
//   padding: 0px 30px;
// `;

const StyleMain = styled.div`
  /* background: #fcfcfc; */
  background: blue;
  position: relative;
`;
