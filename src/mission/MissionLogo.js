import styled from "styled-components";
import codeimg from "../images/codepen.svg";
import dribimg from "../images/dribble.svg";
import dribble from "../images/dribble.svg";
import codepen from "../images/codepen.svg";
const MissionLogos = () => {
  return (
    <LogosContainer>
      <div className="floating_card">
        <h4>We build great business</h4>
        <div className="floating_card-text">
          <p>
            Nisl condimentum id venenatis a. Nec tincidunt praesent semper
            feugiat nibh sed pulvinar proin gravida. Sollicitudin tempor id eu
            nisl nunc.
          </p>
          <p>
            Adipiscing diam donec adipiscing tristique risus nec feugiat in
            fermentum. Pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum arcu vitae.
          </p>
          <p>
            Massa massa ultricies mi quis hendrerit dolor magna. Egestas dui id
            ornare arcu odio..
          </p>
        </div>
      </div>
      <div className="companies_container">
        <p>Our clients</p>
        <div className="companies">
          <div>
            <img src={codepen} alt="imagex" />
          </div>
          <div>
            <img src={dribble} alt="imagex" />
          </div>
          <div>
            <img src={codepen} alt="imagex" />
          </div>
          <div>
            <img src={dribble} alt="imagex" />
          </div>
          <div>
            <img src={codepen} alt="imagex" />
          </div>
          <div>
            <img src={dribble} alt="imagex" />
          </div>
        </div>
      </div>
    </LogosContainer>
  );
};
export default MissionLogos;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .floating_card {
    background: #150433;
    padding: 30px;

    h4 {
      color: ${(p) => p.theme.colors.general.mainRed};
      font-size: 1.8rem;
      text-align: center;
      margin-bottom: 30px;
    }
    &-text {
      display: flex;
      flex-direction: column;

      p {
        margin-bottom: 20px;
        color: #fff;
        font-size: 1.2rem;
      }
    }
  }
  .companies_container > p {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: #30233d;
    font-size: 0.84rem;
    padding: 20px 0px;
  }
  .companies {
    padding: 20px;
    display: grid;
    place-items: center;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    div {
      max-width: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    .floating_card {
      padding: 50px 30px;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    && {
      flex-direction: row;
    }
    .companies_container {
      width: 100%;

      & > p {
        text-align: left;
        padding-left: 20px;
      }

      .companies {
        gap: 50px;
      }
    }

    .floating_card {
      padding: 50px 30px;
      max-width: 50%;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
    && {
      flex-direction: row;
      height: 500px;
      /* height: 100%; */
    }
    .floating_card {
      max-width: 705px;
      width: 100%;
      position: absolute;
      bottom: -20%;
      padding: 144px 102px 157px 147px;
    }
    .companies_container {
      max-width: 50%;
      margin-right: 0;
      margin-left: auto;

      & > p {
        text-align: left;
        padding-left: 90px;
      }

      .companies {
        gap: 50px;
      }
    }
  }
`;
