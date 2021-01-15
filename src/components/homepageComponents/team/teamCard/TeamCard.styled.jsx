import styled, { css } from "styled-components"

export default {
  container: styled.div`
    ${({ theme }) => css`
      width: 100%;
      height: 32.6rem;
      border-radius: ${theme.r1};
      background: #f5f5f5;
      color: ${theme.black900};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: ${theme.p4};
    `}
  `,
  thumbnail: styled.img`
    width: 100px;
    height: 100px;
  `,
  info: styled.div`
    height: 50px;
    text-align: center;
  `,
  h4: styled.h4`
    ${({ theme }) => css`
      font-size: 1.8rem;
      font-weight: ${theme.fw2};
      font-family: ${theme.ff_reg};
      margin-bottom: ${theme.m1};
    `}
  `,
  cardText: styled.p`
    ${({ theme }) => css`
      font-size: ${theme.fs_md};
      font-weight: ${theme.fw1};
      font-family: ${theme.ff_reg};
    `}
  `,
  links: styled.div`
    width: 5.4rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  `,
  complete: styled.div`
    width: 9rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
  `,
  link: styled.a`
    ${({ theme }) => css`
      text-decoration: none;
      outline: none;
      cursor: pointer;
      color: ${theme.black900};
      transition: all 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    `}
  `,
}
