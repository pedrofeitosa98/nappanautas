import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;

    outline: 0;
    border: 0;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
  }

  body, #root {
    position: relative;
    min-height: 100vh;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${(props) => props.theme.colors.background};
  }

  html {
    scroll-behavior: smooth;
    font-size: 100%;
    color: ${(props) => props.theme.colors.main1};
  }

  body, input, button, ::placeholder {
    font-family: inherit;
  }

  a {
    display: inline-block;
    background: none;
    
    border: 0;
    
    cursor: pointer;
    
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
  ul {
    padding: 0;
    text-align: left;
    
    list-style: none;
  }

  // Toastify
  .Toastify__toast-container {
    z-index: 999999;
  }

  .Toastify__toast {
    font-weight: 600;
    font-size: .875rem;
  }

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  /* * {
    scrollbar-width: auto;
    scrollbar-color: ${(props) => props.theme.colors.primary} ${(props) =>
      props.theme.colors.background};
  } */

  /* Chrome, Edge, and Safari */
  /* *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
    border-radius: 20px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme.colors.background};
  } */
`
export default GlobalStyle
