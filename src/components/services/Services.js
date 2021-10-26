import { Wrapper } from "../UI/Wrapper";
import styled from "styled-components";
import reactIcon from "../../images/icon-react.svg";
import FooterBanner from "./FooterBanner";
const Services = () => {
  const data = [
    {
      title: "Webdesign",
      icon: reactIcon,
      text: "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
      id: 0,
    },
    {
      title: "Webdev",
      icon: reactIcon,
      text: "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
      id: 1,
    },
    {
      title: "Marketing",
      icon: reactIcon,
      text: "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
      id: 2,
    },
    {
      title: "Marketing",
      icon: reactIcon,
      text: "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
      id: 3,
    },
    {
      title: "Webdesign",
      icon: reactIcon,
      text: "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
      id: 4,
    },
    {
      title: "Marketing",
      icon: reactIcon,
      text: "Tincidunt lobortis feugiat vivamus at augue eget. Risus feugiat in ante metus dictum. Amet aliquam id diam maecenas.",
      id: 5,
    },
  ];
  return (
    <CustomWrapper>
      <p>What we can do?</p>
      <div className="services_grid">
        <h2>Our services</h2>
        <div className="services_grid-grid">
          {data.map((item) => {
            return (
              <StyledCard>
                <div className="card_wrapper">
                  <img src={item.icon} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </StyledCard>
            );
          })}
        </div>
        <FooterBanner />
      </div>
    </CustomWrapper>
  );
};

export default Services;
const CustomWrapper = styled(Wrapper)`
  margin-top: 50px;
  padding: 0px 30px;

  p {
    font-size: 0.84rem;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.general.mainRed};
    font-weight: 800;
    margin-bottom: 18px;
  }

  h2 {
    font-weight: 500;
    font-size: 2.8125rem;
    margin-bottom: 52px;
    text-align: center;
  }

  .services_grid {
    &-grid {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      row-gap: 2rem;
      justify-items: center;
      place-content: center;

      @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;
      }
      @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        justify-items: start;
        gap: 4.625rem;
        margin-bottom: 118px;
      }
    }
  }
`;

const StyledCard = styled.div`
  width: 320px;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 118px; */
  align-self: center;
  /* backgreEound: pink; */

  .card_wrapper {
    height: 54px;
    width: 54px;
    border: 1px solid ${(p) => p.theme.colors.general.mainRed};
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 18px;
  }

  h3 {
    margin-bottom: 12px;
  }

  p {
    color: ${(p) => p.theme.colors.general.mainGray};
    font-size: 1.02rem;
    font-weight: 400;
    text-transform: none;
    text-align: center;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    p,
    h3 {
      text-align: left;
    }

    & {
      align-items: flex-start;
    }
  }
`;
