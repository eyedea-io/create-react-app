import * as React from 'react'
import {Router, RouteComponentProps} from '@reach/router'
import loadable from '@loadable/component'
import {GuestRoute, PrivateRoute} from '@app/utils/router'

const dynamic = {
  Landing: loadable<RouteComponentProps>(() => import('@app/pages/landing')),
  Login: loadable<RouteComponentProps>(() => import('@app/pages/login'))
}

export const Routes = () => (
  <Router>
    <GuestRoute component={dynamic.Login} path="/account/login" />
    <GuestRoute component={dynamic.Landing} path="/" />
    <PrivateRoute component={() => <div>Top secret!</div>} path="/private" />
  </Router>
)
