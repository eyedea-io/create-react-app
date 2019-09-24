import * as React from 'react'
import {Reset, Normalize} from '@smashing/css'
import {createGlobalStyle} from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${_ => _.theme.colors.background.blueTint};
  }
  a {
    text-decoration: none;
  }
  #root {
    min-height: 100vh;
  }
`

const Styles = () => (
  <React.Fragment>
    <Reset />
    <Normalize />
    <GlobalStyles />
  </React.Fragment>
)

export default Styles
