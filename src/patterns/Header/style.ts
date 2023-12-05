import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 180px;
  position: relative;
  margin-top: 50px;

  .logo-container {
    position: relative;
    margin: 0 auto;
    width: 210px;
    height: 114px;
    z-index: 2;
  }

  & img {
    position: absolute;
    z-index: 2;
  }

  @media (max-width: 1366px) {
    height: auto;
    margin-top: 25px;
  }
`
