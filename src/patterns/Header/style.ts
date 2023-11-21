import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 180px;
  position: relative;
  margin-top: 50px;

  .logo-container {
    position: relative;
    margin: 0 auto;
    width: 114px;
    height: 210px;
  }

  & img {
    position: absolute;
    z-index: 2;
  }
`
