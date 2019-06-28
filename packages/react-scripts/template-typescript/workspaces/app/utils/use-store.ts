import {useContext} from "react"
import {RootStoreContext} from "./root-store-context"

export const useStore = () => useContext(RootStoreContext)
