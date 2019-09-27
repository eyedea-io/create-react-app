import {types, Instance} from 'mobx-state-tree'
import * as models from '@app/models'
import * as customTypes from '@app/utils/custom-types'
import {createContext} from 'react'

export const RootStore = types
  .model('RootStore', {
    profile: types.maybe(models.Profile),
    token: types.maybe(types.string),
    users: customTypes.collection(models.Profile, 'Users'),
    loremIpsum:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
  })
  .views(self => ({
    get isLoggedIn(): boolean {
      return Boolean(self.profile && self.token)
    }
  }))

export const store = RootStore.create()
export const RootStoreContext = createContext<Instance<typeof RootStore>>(store)
export interface RootStore extends Instance<typeof RootStore> {}
