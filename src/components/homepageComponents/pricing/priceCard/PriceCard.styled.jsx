import styled, { css } from "styled-components"

const pricingCardDefault = css`
  ${({ theme }) => css`
    widht: 100%;
    height: 34.1rem;
    background: #f5f5f5;
    color: ${theme.black700};
    border-radius: ${theme.r1};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 0 2px gold;
      transform: scale(1.02);
    }
  `}
`

const pricingCardOn = css`
  ${({ theme }) => css`
    widht: 100%;
    height: 34.1rem;
    background: ${theme.primary};
    color: ${theme.white100};
    border-radius: ${theme.r1};
  `}
`

const getCardStyle = (props) => {
  return props.highlight ? pricingCardOn : pricingCardDefault
}

export default {
  container: styled.div`
    ${({ theme }) => css`
      border: none;
      background: none;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      text-align: left;
      z-index: 99;
      outline: none;
      border-radius: ${theme.r1};

      &:focus {
        outline: none;
      }
    `}
  `,
  card: styled.div`
    display: grid;
    grid-template-rows: 1fr, 2fr, 1fr;
    grid-gap: 1rem;
    padding: 4rem 1.8rem 1.8rem 1.8rem;
    z-index: 100;
    ${getCardStyle};
  `,
  cardHeader: styled.div`
    ${(theme) => css`
      width: 100%;
      height: 8.1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${theme.m1};
    `}
  `,
  product: styled.h4`
    ${({ theme }) => css`
      font-size: 1.48rem;
      font-weight: ${theme.fw2};
      font-family: ${theme.ff_reg};
      margin: ${theme.m2};
    `}
  `,
  price: styled.p`
    ${({ theme }) => css`
      font-size: 3.2rem;
      font-weight: ${theme.fw2};
      font-family: ${theme.ff_reg};
    `}
  `,
  features: styled.div`
    ${({ theme }) => css`
      width: 100%;
      height: 11.4rem;
      display: flex;
      flex-direction: column;
      margin: 0;
      margin-top: 2.2rem;

      p {
        font-size: ${theme.fs_sm};
        font-weight: ${theme.fw1};
        margin: 0;
        margin-bottom: 1.3rem;
      }
    `}
  `,
  label: styled.p`
    ${({ theme }) => css`
      font-weight: ${theme.fw3};
      font-size: ${theme.fs_sm};
    `}
  `,
}
