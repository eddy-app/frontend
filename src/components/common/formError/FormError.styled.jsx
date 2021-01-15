import styled, { css } from "styled-components"

export default {
  message: styled.p`
    ${({ theme }) => css`
      color: red;
      font-size: 1.3rem;
      font-weight: ${theme.fw2};
      margin-top: 0.7rem;
    `}
  `,
}
