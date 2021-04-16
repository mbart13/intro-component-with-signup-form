import React from 'react'

import Footer from 'components/Footer/Footer'
import SignUpPage from 'components/SignUp/SignUp'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles/GlobalStyles'
import styled from 'styled-components'
import { theme } from './styles/Theme'
import bgMobile from './assets/images/bg-intro-mobile.png'
import bgDesktop from './assets/images/bg-intro-desktop.png'

const Wrapper = styled.div`
  background: url(${bgMobile});
  min-height: 100vh;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.red};
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.large}) {
    background: url(${bgDesktop});
    background-color: ${({ theme }) => theme.colors.red};
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyles />
        <SignUpPage />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
