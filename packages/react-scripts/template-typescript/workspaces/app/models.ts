import {types, Instance} from 'mobx-state-tree'
import * as customTypes from '@app/utils/custom-types'

export const Profile = types
  .model('Profile', {
    id: types.identifierNumber,
    username: types.string,
    fullName: types.maybe(types.string),
    joinedAt: types.maybe(customTypes.date)
  })

export interface Profile extends Instance<typeof Profile> {}
