import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      config: {
        sizes: [60, 30],
        size: 60,
        frames: ['1920x1080', '1024x720'],
        frame: '1920x1080'
      }
    }
  },
  actions: {},
  persist: {
    enabled: true,
    strategies: []
  }
})
