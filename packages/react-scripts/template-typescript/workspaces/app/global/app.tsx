import * as React from 'react'
import {Routes} from '@app/global/routes'
import {BrowserRouter as Router} from 'react-router-dom'
import {SmashingThemeProvider} from '@smashing/theme'
import {RootStoreContext} from '@app/utils/root-store-context'
import {RootStore} from '@app/global/store'
import {hot} from 'react-hot-loader/root'
import Styles from './styles'

const App: React.FC = () => (
  <SmashingThemeProvider theme={{}}>
    <RootStoreContext.Provider value={RootStore.create()}>
      <Styles />
      <Router>
        <Routes />
      </Router>
    </RootStoreContext.Provider>
  </SmashingThemeProvider>
)

export default hot(App)
