import {useContext, createContext} from 'react'
import {Instance} from 'mobx-state-tree'
import {RootStore} from '@app/store'

const store = RootStore.create()
type RootContext = Instance<typeof RootStore>

export const RootStoreContext = createContext<RootContext>(store)
export const useStore = () => useContext(RootStoreContext)
