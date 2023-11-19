import { createGlobalStyle } from 'styled-components'

const GlobalTypography = createGlobalStyle`
  //Sizes
  h1, .title1 { font-size: ${(props) => props.theme.fontSize.px28}; }
  h2, .title2 { font-size: ${(props) => props.theme.fontSize.px24}; }
  h3, .title3 { font-size: ${(props) => props.theme.fontSize.px20}; }

  // Weights
  .text-thin { font-weight: 300; }
  .text-light { font-weight: 400; }
  .text-regular { font-weight: 500; }
  .text-bold { font-weight: 600; }
  .text-extra-bold { font-weight: 700; }
  .text-black { font-weight: 800; }

  // Aligns
  .text-center { text-align: center; }
  .text-right { text-align: right; }
  .text-left { text-align: left; }
`

export default GlobalTypography
