import styled, { css } from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default {
  container: styled.nav`
    ${({ theme }) => css`
      /* position: sticky;
      top: 0; */
      width: 100%;
      background: ${theme.white100};
      font-size: ${theme.fs_reg};
      margin: ${theme.m0};
      margin-bottom: ${theme.m8};
      padding: 0;
      padding-top: ${theme.p2};
      padding-bottom: ${theme.p2};
      z-index: 100;
      margin-top: ${theme.m2} !important;
      margin-bottom: ${theme.m8} !important;
      height: 3.2rem;
    `}
  `,
  content: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  logo: styled.a`
    ${({ theme }) => css`
      font-size: ${theme.fs_logo};
      font-family: "Montserrat", sans-serif;
      font-weight: ${theme.fw5};
      color: ${theme.black900};
      text-decoration: none;
    `}
  `,
  navLinks: styled.ul`
    width: 46.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 !important;
  `,
  navLink: styled.li`
    text-decoration: none;
  `,
  smoothAnchor: styled(AnchorLink)`
    ${({ theme }) => css`
      color: ${theme.black900};
      text-decoration: none;
      transition: all 0.2s ease-in-out;
      font-family: "Montserrat", sans-serif !important;
      font-weight: ${theme.fw1};
      margin-left: 2.8rem;
      &:hover {
        text-decoration: none;
        font-family: "Montserrat", sans-serif !important;
        color: ${theme.blue500};
      }
    `}
  `,
  navButton: styled.button`
    ${({ theme }) => css`
      text-decoration: none;
      color: ${theme.black900};
      font-family: "Montserrat", sans-serif !important;
      font-weight: ${theme.fw1};
      background: none;
      margin-left: 2.8rem;
      border: 1px solid ${theme.black900};
      border-radius: ${theme.r0};
      padding: ${theme.p_btn};
      cursor: pointer;
      transition: all 0.2s ease-in;
      outline: none;

      &:hover {
        background: ${theme.primary};
        border: 1px solid ${theme.primary};
        color: ${theme.white100};
      }
    `}
  `,
}
