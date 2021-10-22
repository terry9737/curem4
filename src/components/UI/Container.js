import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.sm}) {
    max-width: 540px;
    width: 100%;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    max-width: 720px;
    width: 100%;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.lg}) {
    max-width: 960px;
    width: 100%;
  }
  @media screen and (min-width: ${(p) => p.theme.breakpoints.xl}) {
    max-width: 1270px;
    width: 100%;
  }
  ${(p) =>
    p.flex &&
    css`
      display: flex;
      align-items: center;
    `}
`;
