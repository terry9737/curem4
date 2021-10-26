import { Wrapper } from "../UI/Wrapper";
import styled from "styled-components";
import guy from "../../images/guy.png";
const FooterBanner = () => {
  return (
    <StyledWrapper>
      <div className="banner">
        <q>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </q>
        <div className="guy_image">
          <img src={guy} alt="company guy" />
        </div>
      </div>
      <p className="banner_author">
        <span>Andrew Slomka</span> - Some Company
      </p>
    </StyledWrapper>
  );
};

export default FooterBanner;

const StyledWrapper = styled(Wrapper)`
  position: relative;
  display: none;

  .banner {
    width: 100%;
    position: relative;
    padding: 20px;
    /* padding: 54px; */
    background: #5e239d;
    q {
      font-family: "Noticia Text", serif;
      font-weight: 400;
      font-size: 1rem;
      color: #fff;
      font-style: italic;
      width: 80%;
      display: inline-block;
      line-height: 2;
    }
    .guy_image {
      position: absolute;
      right: -30px;
      top: -60px;

      img {
        height: 300px;
      }
    }
  }
  .banner_author {
    font-weight: 400;
    font-size: 1rem;
    color: #000;
    margin-top: 54px;
    margin-left: 100px;

    span {
      font-weight: 800;
      color: ${(p) => p.theme.colors.general.mainRed};
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    display: block;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    .banner {
      padding: 30px 0px 30px 90px;

      q {
        width: 80%;
        font-size: 1.40625rem;
      }
      .guy_image {
        top: -110px;
        right: -130px;
        img {
          height: 30%;
        }
      }
    }
    .banner_author {
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
    .banner {
      padding: 70px 0px 70px 160px;

      q {
        width: 68%;
      }
      .guy_image {
        top: -110px;
        right: -130px;
        img {
          height: 100%;
        }
      }
    }
    .banner_author {
    }
  }
`;
