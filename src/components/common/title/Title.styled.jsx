import styled, { css } from "styled-components"

export default {
  style: styled.h2`
    ${({ theme }) => css`
      font-size: ${theme.fs_lg};
      font-weight: ${theme.fw2};
      font-family: ${theme.ff_reg};
      color: ${theme.black900};
    `}
  `,
}
