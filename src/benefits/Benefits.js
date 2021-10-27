import styled from "styled-components";
import { Wrapper } from "../components/UI/Wrapper";
import { ChapterTitle } from "../components/UI/Typography";
import buildingOne from "../images/building-one.png";
import buildingTwo from "../images/building-two.png";
const Benefits = () => {
  return (
    <StyledWrapper>
      <ChapterTitle>Benefits</ChapterTitle>
      <div className="benefits_container">
        <div className="benefits_text">
          <h2>Shaping the future</h2>
          <h3>
            Eget nunc scelerisque viverra mauris in aliquam. Dignissim sodales
            ut eu sem integer vitae. Libero nunc consequat interdum varius.
          </h3>
          <div className="benefits_text-para">
            <p>
              Magna sit amet purus gravida. Sit amet porttitor eget dolor morbi
              non.
            </p>
            <p>Lectus vestibulum mattis ullamcorper velit sed ullamcorper.</p>
            <p>
              Diam phasellus vestibulum lorem sed risus ultricies tristique
              nulla. Dui faucibus in ornare quam viverra.
            </p>
            <p>Posuere ac ut consequat semper viverra.</p>
          </div>
          <div className="benefits_text-button">
            <button>learn more</button>
          </div>
        </div>
        <div className="benefits_img">
          <div className="benefits_img-wrapper">
            <img src={buildingOne} alt="building one" className="image_one" />
            <img src={buildingTwo} alt="building two" className="image_two" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Benefits;

const StyledWrapper = styled(Wrapper)`
  padding: 0px 30px;
  margin-bottom: 189px;

  .benefits_container {
    margin-top: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .benefits_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-weight: 500;
      font-size: 2.8125rem;
      margin-bottom: 17px;
      text-align: center;
      line-height: 1.3;
    }

    h3 {
      font-weight: 800;
      font-size: 1.125rem;
      margin-bottom: 71px;
    }

    p {
      margin-bottom: 30px;
      text-align: left;
      font-size: 1.125rem;
    }

    &-para {
      margin-bottom: 48px;
    }
    &-button {
      margin: 0 auto;
      button {
        text-transform: uppercase;
        border-radius: 999px;
        background: ${(p) => p.theme.colors.general.mainRed};
        border: none;
        cursor: pointer;
        color: #fff;
        font-size: 0.84375rem;
        font-weight: 500;
        padding: 1.1em 3.85em;
      }
    }
  }

  .benefits_img {
    display: none;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    .benefits_container {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    .benefits_img {
      display: block;
      max-width: 200px;
      width: 100%;
      margin: 20% 0;

      .image_one {
        max-width: 100%;
        width: 100%;
        margin-bottom: 20px;
      }

      .image_two {
        position: static;
        max-width: 362px;
        width: 100%;
        margin: 0 auto;
      }
    }
    .benefits_text {
      max-width: 380px;
      width: 100%;
      p {
        margin-bottom: 30px;
      }
      h2 {
        width: 100%;
        text-align: left;
        margin-bottom: 1em;
      }
      h3 {
        width: 100%;
        text-align: left;
        margin-bottom: 2em;
      }

      &-para {
        width: 100%;
        margin-bottom: 1em;
      }

      &-button {
        margin-left: 0px;
        margin-right: auto;
      }
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    .benefits_img {
      max-width: 258px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 0px;

      .image_one {
        max-width: 460px;
        width: 100%;
      }

      .image_two {
        position: static;
        max-width: 362px;
        width: 100%;
        bottom: -150px;
        left: -100px;
      }
    }
    .benefits_text {
      max-width: 500px;
      width: 100%;
      align-items: flex-start;

      &-para {
        max-width: 460px;
        margin-bottom: 2.7em;
      }
      /* &-button {
        button {
          margin-bottom: 6em;
        }
      } */

      h3 {
        max-width: 460px;
      }
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    .benefits_img {
      max-width: 558px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin: 0px;

      &-wrapper {
        position: relative;
      }

      .image_one {
        max-width: 460px;
        width: 100%;
      }

      .image_two {
        position: absolute;
        max-width: 362px;
        width: 100%;
        bottom: -150px;
        left: -100px;
      }
    }
    .benefits_text {
      width: auto;
      align-items: flex-start;

      &-para {
        max-width: 460px;
        margin-bottom: 3.3em;

        p {
          margin-bottom: 3em;
        }
      }

      h2 {
        margin-bottom: 1em;
      }

      h3 {
        margin-bottom: 4.43em;
        max-width: 460px;
      }
    }
  }
`;
