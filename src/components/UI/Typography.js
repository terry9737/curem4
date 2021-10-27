import styled from "styled-components";

export const ChapterTitle = styled.p`
  font-size: 0.84rem;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.general.mainRed};
  font-weight: 800;
  margin-bottom: 18px;
  text-align: center;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    text-align: left;
  }
`;
