import styled, { css } from "styled-components"

const defaultStyle = css`
  ${({ theme }) => css`
    width: 150px;
    background: ${theme.primary};
    color: ${theme.white100} !important;
    border: 0;
    height: 48px;
    text-decoration: none;
    padding: ${theme.p_d_btn};
    transition: all 0.2s ease-in-out;

    &:hover {
      text-decoration: none;
      color: ${theme.white100};
      background: ${theme.blue500};
      font-weight: ${theme.fw2};
    }
  `}
`
const contactStyle = css`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.primary};
    color: ${theme.white100};
    border: 0;
    padding: ${theme.p_d_btn};

    &:hover {
      text-decoration: none;
      background: ${theme.blue500};
      font-weight: ${theme.fw2};
    }
  `}
`

const inverted = css`
  ${({ theme }) => css`
    height: 40px;
    background: none;
    border: 1px solid ${theme.black900};
    color: ${theme.black900};
    font-size: ${theme.fs_reg};
    text-decoration: none;
    padding: ${theme.p_i_btn};
    transition: all 0.2s ease-in-out;
    font-weight: ${theme.fw1};
    margin: 0;

    &:hover {
      background: ${theme.primary};
      color: ${theme.white100} !important;
      text-decoration: none;
      border: 1px solid ${theme.primary};
    }
  `}
`

const pricingStylesDefault = css`
  ${({ theme }) => css`
    width: 14.5rem;
    height: 3.8rem !important;
    color: ${theme.white100};
    background: ${theme.primary};
    font-size: ${theme.fs_sm};
    font-weight: ${theme.fw2};
    letter-spacing: 0.14px;
    padding: ${theme.p_p_btn};
    border: none;

    &:hover {
      color: ${theme.white100};
      text-decoration: none;
    }
  `}
`

const pricingStylesReversed = css`
  ${({ theme }) => css`
    width: 14.5rem;
    height: 3.8rem;
    color: ${theme.primary};
    background: ${theme.white100};
    font-size: ${theme.fs_sm};
    font-weight: ${theme.fw2};
    letter-spacing: 0.14px;
    padding: ${theme.p_p_btn};
    border: none;

    &:hover {
      /* opacity 0.8;*/
      color: ${theme.primary};
      text-decoration: none;
    }
  `}
`

const getButtonStyle = (props) => {
  if (props.pricing) {
    return pricingStylesDefault
  }

  if (props.pricingr) {
    return pricingStylesReversed
  }

  if (props.contact) {
    return contactStyle
  }

  return props.inverted ? inverted : defaultStyle
}

export default {
  container: styled.button`
    ${({ theme }) => css`
      max-width: 53.9rem;
      width: auto;
      border-radius: ${theme.r1};
      letter-spacing: 0.26px;
      font-family: ${theme.ff_reg};
      font-weight: ${theme.fw2};
      font-size: ${theme.fs_reg};
      cursor: pointer;
      display: flex;
      justify-content: center;
      outline: none;
      ${getButtonStyle};
    `}
  `,
  spinner: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}
