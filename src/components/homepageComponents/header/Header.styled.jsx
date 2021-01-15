import styled, { css } from "styled-components"

export default {
  container: styled.section`
    width: 100%;
    height: 42rem;
    z-index: 1;
  `,
  hero: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  content: styled.div`
    ${({ theme }) => css`
      width: 50rem;
      height: 30rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      color: ${theme.black700};
      font-size: 2.2rem;
      font-family: ${theme.ff_reg};
      text-align: left;
    `}
  `,
  title: styled.h2`
    ${({ theme }) => css`
      margin-top: 0;
      margin-bottom: 0;
      font-size: ${theme.fs_lg};
      font-family: ${theme.ff_alt};
      font-weight: ${theme.fw2};
    `}
  `,
  brand: styled.span`
    ${({ theme }) => css`
      font-family: ${theme.ff_reg};
      font-size: 3rem;
      font-weight: ${theme.fw5};
      color: #6dbdff;
    `}
  `,
  description: styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 1.6;
  `,
  image: styled.div`
    ${({ theme }) => css`
      height: 100%;
      position: absolute;
      top: 220px;
      right: 240px;
      z-index: 1;
      transform: scale(1.2);
      margin-right: ${theme.m2};
    `}
  `,
}
