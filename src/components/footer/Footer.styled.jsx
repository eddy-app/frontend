import styled, { css } from "styled-components"

export default {
  container: styled.footer`
    ${({ theme }) => css`
      width: 100%;
      height: 115px;
      text-align: center;
      font-size: ${theme.fs_md};
      padding: ${theme.p5};
      color: ${theme.black900};
      font-family: ${theme.ff_reg};
    `}
  `,
}
