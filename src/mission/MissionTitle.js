import { Wrapper } from "../components/UI/Wrapper";
import { ChapterTitle } from "../components/UI/Typography";
import styled from "styled-components";

const MissionTitle = () => {
  return (
    <StyledWrapper>
      <ChapterTitle>What we do</ChapterTitle>
      <h2>What we do more than you can imangine, belive us.</h2>
    </StyledWrapper>
  );
};

export default MissionTitle;

const StyledWrapper = styled(Wrapper)`
  padding: 0px 30px;
  margin-bottom: 118px;

  h2 {
    font-weight: 500;
    font-size: 2.8125rem;
    text-align: center;
    line-height: 1.3;
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    h2 {
      font-weight: 500;
      text-align: left;
      width: 100%;
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    h2 {
      font-weight: 500;
      text-align: left;
      width: 90%;
    }
  }

  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    h2 {
      font-weight: 500;
      text-align: left;
      width: 70%;
    }
  }
`;
