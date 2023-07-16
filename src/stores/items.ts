import { defineStore } from 'pinia'
import _ from 'lodash'

type item = string | undefined

interface State {
    items: item[]
}

export const useItemsStore = defineStore('items', {
    state: (): State => ({
        items: ['pbcopy', 'grep', 'man', 'cd'] // unix commands
    }),

    getters: {
        getFirstItem(): item {
            return this.items[0]
        },

        getUppercasedFirstItem(): item {
            return _.toUpper(this.getFirstItem)
        }
    },

    actions: {
        addItem(item: item) {
            this.items.push(item)
        },

        removeItem(item: item) {
            const index = _.findIndex(this.items, (i) => _.isEqual(i, item))

            if (index > -1) this.items.splice(index, 1)
        }
    }
})
