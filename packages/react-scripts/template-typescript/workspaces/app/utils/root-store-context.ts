import {createContext} from 'react'
import {Instance} from 'mobx-state-tree'
import {RootStore} from '@app/global/store'

const store = RootStore.create()
type RootContext = Instance<typeof RootStore>

export const RootStoreContext = createContext<RootContext>(store)
