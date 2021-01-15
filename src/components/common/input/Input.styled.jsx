import styled, { css } from "styled-components"

const halfInputStyle = css`
  ${({ theme }) => css`
    width: 25.9rem;
    height: 4.4rem;
    font-size: ${theme.fs_md};
  `}
`

const fullInputStyle = css`
  ${({ theme }) => css`
    width: 100%;
    height: 4.4rem;
    font-size: ${theme.fs_md};
  `}
`
const submitStyle = css`
  ${({ theme }) => css`
    width: 100%;
    height: 4.4rem;
    border-radius: 0.4rem;
    color: ${theme.white100};
    background: ${theme.primary};
    transition: all 0.3s ease-in-out;
    font-size: ${theme.fs_md};
    font-weight: ${theme.fw2};
    border: 0;
    margin-bottom: ${theme.m2};

    &:hover {
      background: ${theme.blue500};
    }
  `}
`

const errorStyle = css`
  border: 1px solid red;
  width: 100%;
  height: 4.4rem;
`

const getInputStyle = (props) => {
  if (props.submit) return submitStyle
  if (props.error) return errorStyle
  return props.half ? halfInputStyle : fullInputStyle
}

export default {
  style: styled.input`
    ${({ theme }) => css`
      background: ${theme.white100};
      border-radius: 0.4rem;
      font-size: ${theme.r1};
      font-weight: ${theme.fw2};
      color: ${theme.black900};
      border: 1px solid #ddd;
      padding: 1.4rem 1.7rem 1.4rem 1.6rem;
      font-family: ${theme.fs_reg};
      transition: 0.2s ease-in-out;

      &::placeholder {
        font-family: ${theme.fs_reg};
        font-weight: ${theme.fw1};
        font-size: ${theme.fs_md};
        color: #bbb;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${theme.blue500};
        border: none;
      }

      ${getInputStyle};
    `}
  `,
}
