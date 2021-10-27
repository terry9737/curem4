import styled, { css } from "styled-components";
import { ChapterTitle } from "../components/UI/Typography";
import { Wrapper } from "../components/UI/Wrapper";
import { useState } from "react";
const MissionCards = () => {
  const data = [
    {
      number: "01",
      title: "Research",
      body: "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
      id: 0,
    },
    {
      number: "02",
      title: "Marketing",
      body: "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
      id: 1,
    },
    {
      number: "03",
      title: "Results",
      body: "Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. ",
      id: 2,
    },
  ];
  const [selected, setSelected] = useState(false);

  return (
    <StyledMain>
      <StyledWrapper>
        <ChapterTitle>What we do</ChapterTitle>
        <h5>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle.
        </h5>
        <div className="grid_cards">
          {data.map((item) => {
            if (item.id === selected) {
              return (
                <GridCard
                  selected
                  key={item.id}
                  onClick={() => setSelected(item.id)}
                >
                  <p className="card_number">{item.number}</p>
                  <p className="card_title">{item.title}</p>
                  <p className="card_body">{item.body}</p>
                </GridCard>
              );
            }
            return (
              <GridCard key={item.id} onClick={() => setSelected(item.id)}>
                <p className="card_number">{item.number}</p>
                <p className="card_title">{item.title}</p>
                <p className="card_body">{item.body}</p>
              </GridCard>
            );
          })}
        </div>
      </StyledWrapper>
    </StyledMain>
  );
};

export default MissionCards;

const StyledMain = styled.div`
  background: ${(p) => p.theme.colors.general.midPur};
  min-height: 200px;
  width: 100%;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    && {
      /* position: absolute;
      top: 93%; */
    }
  }
`;

const StyledWrapper = styled(Wrapper)`
  padding: 50px 30px 50px 30px;
  position: relative;
  /* z-index: -20; */
  h5 {
    color: #fff;
    font-weight: 500;
    font-size: 1.8rem;
    margin-bottom: 2em;
  }

  .grid_cards {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    place-items: center;
    row-gap: 2em;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    .grid_cards {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      place-items: start;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    && {
      padding: 252px 30px 306px 30px;
    }
    h5 {
      max-width: 68%;
      width: 100%;
    }
  }
`;

const GridCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 362px;
  width: 100%;
  color: #fff;
  padding: 72px 36px 74px 36px;
  border: 1px solid #fff;
  cursor: pointer;

  ${(p) =>
    p.selected &&
    css`
      background: ${(p) => p.theme.colors.general.mainRed};
    `}

  .card_number {
    font-size: 1.2rem;
  }
  .card_title {
    font-size: 1.8rem;
  }
  .card_body {
    font-size: 1.079rem;
  }
`;
