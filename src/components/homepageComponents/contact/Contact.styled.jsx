import styled, { css } from "styled-components"

export default {
  container: styled.section`
    ${({ theme }) => css`
      width: 100%;
      height: auto;
      background: #fafafa;
      padding: ${theme.p5};

      h4 {
        color: ${theme.black900};
        font-family: ${theme.ff_reg};
        font-weight: ${theme.fw2};
        font-size: ${theme.fs_lg};
        text-align: center;
        margin-bottom: ${theme.m4};
      }
    `}
  `,
  form: styled.form`
    width: 53.9rem;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
  `,
  formHeader: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 21px;
    margin: 0;
  `,
  textArea: styled.textarea`
    ${({ theme }) => css`
      width: 100%;
      height: 14.9rem;
      border-radius: ${theme.r3};
      border: 1px solid ${theme.blue100};
      background: ${theme.white400};
      padding: 1.4rem 1.7rem 1.4rem 1.6rem;
      font-family: ${theme.ff_reg};
      font-weight: ${theme.fw1};
      font-size: ${theme.fs_reg};
      color: ${theme.black900};
      resize: none;
      overflow: hidden;

      &::placeholder {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: ${theme.fs_reg};
        color: ${theme.black900};
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${theme.blue500};
        border: none;
      }
    `}
  `,
}
