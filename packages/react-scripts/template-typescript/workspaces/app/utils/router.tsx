import * as React from 'react'
import {observer} from 'mobx-react-lite'
import {useStore} from './use-store'
import {RouteComponentProps, Redirect, Match} from '@reach/router'
import {LoadableComponent} from '@loadable/component'

export type RenderProps = {
  path: string
  component: React.FC<any> | LoadableComponent<any>
  [key: string]: any
}

/**
 * Render component at given path.
 * @example
 * <Render component={LoginForm} path="/account/login" />
 */
export const Render = observer<RenderProps>(({path, component: Component, ...props}) => {
  return (
    <Match
      path={path}
      children={route => (route.match ? <Component location={route.location} {...props} {...route.match} /> : null)}
    />
  )
})

/**
 * Render component at given path if user is logged in - otherwise redirect to login page
 * @example
 * <PrivateRoute component={AccountSettings} path="/account/settings" />
 */
export const PrivateRoute = observer<RouteComponentProps & {component: any; [key: string]: any}>(
  ({component: Component, ...rest}) => {
    const store = useStore()

    return store.isLoggedIn ? (
      <Component {...rest} />
    ) : (
      <Redirect noThrow state={{from: rest.location}} to="/account/login" />
    )
  }
)

/**
 * Render component at given path if user is not logged in - otherwise redirect to main page
 * @example
 * <GuestRoute component={AccountSettings} path="/account/settings" />
 */
export const GuestRoute = observer<RouteComponentProps & {component: any; [key: string]: any}>(
  ({component: Component, ...rest}) => {
    const store = useStore()

    return store.isLoggedIn ? <Redirect noThrow to="/" state={{}} /> : <Component {...rest} />
  }
)
