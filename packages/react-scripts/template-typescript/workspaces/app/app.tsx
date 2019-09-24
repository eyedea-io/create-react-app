import * as React from 'react'
import {Routes} from '@app/routes'
import {SmashingThemeProvider} from '@smashing/theme'
import {hot} from 'react-hot-loader/root'
import GlobalStyles from './styles'
import {theme} from '@app/themes/theme'
import {RootStoreContext, store} from '@app/store'

const App: React.FC = () => (
  <SmashingThemeProvider theme={theme}>
    <RootStoreContext.Provider value={store}>
      <GlobalStyles />
      <Routes />
    </RootStoreContext.Provider>
  </SmashingThemeProvider>
)

export default hot(App)
