import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import loadable from '@loadable/component'

const dynamic = {
  Landing: loadable(() => import('@app/pages/landing')),
  Login: loadable(() => import('@app/pages/login'))
}

export const Routes = () => (
  <Switch>
    <Route path="/login" component={dynamic.Login} />
    <Route path="/" component={dynamic.Landing} />
  </Switch>
)
