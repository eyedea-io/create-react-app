import {useContext} from 'react'
import {RootStoreContext} from '@app/store'

export const useStore = () => useContext(RootStoreContext)
