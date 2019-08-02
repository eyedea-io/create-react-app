import * as React from 'react'
import {Routes} from '@app/routes'
import {BrowserRouter as Router} from 'react-router-dom'
import {SmashingThemeProvider} from '@smashing/theme'
import {RootStoreContext} from '@app/utils/use-store'
import {RootStore} from '@app/store'
import {hot} from 'react-hot-loader/root'
import GlobalStyles from './styles'

const App: React.FC = () => (
  <SmashingThemeProvider theme={{}}>
    <RootStoreContext.Provider value={RootStore.create()}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </RootStoreContext.Provider>
  </SmashingThemeProvider>
)

export default hot(App)
