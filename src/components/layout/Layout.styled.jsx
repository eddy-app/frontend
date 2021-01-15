import styled from "styled-components"

export default {
  dashboard: styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr, 4fr;
  `,
  page: styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr, 2fr, 1fr;
  `,
}
