import {types, IAnyType, SnapshotOrInstance, Instance} from 'mobx-state-tree'
import dayjs, {Dayjs} from 'dayjs'

export const date = types.custom<string | number, Dayjs>({
  name: 'CustomDate',
  fromSnapshot(value: string | number): Dayjs {
    return dayjs(value.toString())
  },
  toSnapshot(value: Dayjs): string {
    return value.toISOString()
  },
  isTargetType(value: string | number | Dayjs): boolean {
    return dayjs.isDayjs(value)
  },
  getValidationMessage(value: string): string {
    return !isNaN(Date.parse(value)) ? '' : `${value} doesn't look like a date`
  }
})

export function array<T extends IAnyType>(model: T, name: string) {
  const base = types
    .model(name, {
      items: types.array(model)
    })
    .views(self => ({
      /**
       * Check if items array is empty
       */
      empty() {
        return self.items.length === 0
      },
      /**
       * Check if current items contains element with given id
       */
      has(id?: number | string) {
        return self.items.some(item => item.id === id)
      },
      /**
       * Get first element of array
       */
      first(): Instance<T> | null {
        return self.items.length ? self.items[0] : null
      }
    }))
    .actions(self => ({
      /**
       * Remove all items
       */
      clear() {
        self.items.replace([])
      },
      /**
       * Replace current items with given items
       */
      replace(items: SnapshotOrInstance<T>[]) {
        self.items.replace(items)
      }
    }))
    .actions(self => ({
      /**
       * Load data from given request and inject it into items
       */
      load: async <Args,>(request: (args: Args) => Promise<SnapshotOrInstance<T>[]>, args: Args) => {
        return request(args).then(self.replace)
      }
    }))
  return types.optional(base, {items: []})
}
