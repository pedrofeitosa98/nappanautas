import type { AppProps } from 'next/app'
import { Source_Sans_3 } from 'next/font/google'
import { StrictMode } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

import GlobalAnimations from '../styles/animations'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import GlobalTypography from '../styles/typography'

const font = Source_Sans_3({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        pauseOnHover={true}
        theme={'light'}
      />
      <ThemeProvider theme={theme}>
        <main className={font.className}>
          <Component {...pageProps} />
        </main>
        <GlobalStyle />
        <GlobalTypography />
        <GlobalAnimations />
      </ThemeProvider>
    </StrictMode>
  )
}
