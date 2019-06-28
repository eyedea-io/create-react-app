import * as React from 'react'
import {Reset, Normalize} from '@smashing/css'
import {createGlobalStyle} from 'styled-components/macro'

const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
  }
`

export default () => (
  <>
    <Reset />
    <Normalize />
    <GlobalStyles />
  </>
)
