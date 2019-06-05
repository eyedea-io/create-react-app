import * as React from 'react'
import {Route} from 'react-router-dom'
import loadable from '@loadable/component'

const pages = {
  Landing: loadable(() => import('@app/pages/landing')),
}

export const Routes = () => (
  <React.Fragment>
    <Route path="/" component={pages.Landing} />
  </React.Fragment>
)
