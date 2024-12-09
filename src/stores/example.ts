import { defineStore } from 'pinia'

type ExampleState = {
  count: number
}

export const useExampleStore = defineStore('example', {
  state: (): ExampleState => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
  },
})
