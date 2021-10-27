import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import { data } from "./missionData";
const EmblaTest = () => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <StyledEmbla ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={data[0].img} alt="" />
        </div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </StyledEmbla>
  );
};

export default EmblaTest;

const StyledEmbla = styled.div`
  overflow: hidden;
  background: red;
  position: absolute;
  bottom: 0%;
  .embla__container {
    display: flex;
  }
  .embla__slide {
    position: relative;
    flex: 0 0 100%;
  }
`;
