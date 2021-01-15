import styled, { css } from "styled-components"

const sliderOff = css`
  background: none;
  box-shadow: none;
  outline: none;
`

const sliderOn = css`
  ${({ theme }) => css`
    background: ${theme.white100};
    border-radius: ${theme.r1};
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08);
    outline: none;
  `}
`

const getSliderStyle = (props) => (props.sliderOn ? sliderOn : sliderOff)

export default {
  background: styled.section`
    ${({ theme }) => css`
      width: 100%;
      height: 67rem;
      background: ${theme.blue200};
      opacity: 0.9;
      padding-top: ${theme.p5};
      padding-bottom: ${theme.p5};
      margin: 0;
      z-index: 50;
    `}
  `,
  container: styled.div`
    ${({ theme }) => css`
      width: 84rem;
      height: 57rem;
      border-radius: ${theme.r2};
      background: ${theme.white100};
      margin: 0 auto;
      padding: ${theme.p4};
      display: grid;
      grid-template-rows: 2fr 4fr;
      grid-gap: 4rem;
      box-shadow: 0 -10px 20px 0 rgba(0, 110, 163, 0.2);
    `}
  `,
  header: styled.div`
    width: 100%;
    height: 10.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  content: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
  `,
  selectBg: styled.div`
    ${({ theme }) => css`
      width: 17.8rem;
      height: 3.6rem;
      border-radius: ${theme.r1};
      background: #f5f5f5;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0.5rem;
    `}
  `,
  slider: styled.button`
    ${({ theme }) => css`
      width: 84px;
      height: 26px;
      font-size: ${theme.fs_x_sm};
      font-family: ${theme.ff_reg};
      font-weight: ${theme.fw2};
      border: none;
      color: ${theme.black700};
      padding: 0.8rem auto;
      outline: none;
      transition: all 0.2s ease-in;
      &:focus {
        outline: none;
      }
      ${getSliderStyle};
    `}
  `,
}
