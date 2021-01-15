import styled, { css } from "styled-components"

export default {
  container: styled.section`
    ${({ theme }) => css`
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: ${theme.p5};
    `}
  `,
  header: styled.h2`
    ${({ theme }) => css`
      font-size: 3.4rem;
      color: ${theme.black900};
      font-family: ${theme.ff_reg};
      font-weight: ${theme.fw2};
      text-align: left;
      margin-bottom: ${theme.m4};
    `}
  `,
  cards: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2.8rem;
  `,
}
