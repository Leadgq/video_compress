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
  actions: {
    addSize(size) {
      return new Promise((resolve, reject) => {
        if (!this.config.sizes.includes(size)) {
          this.config.sizes.push(size)
          resolve()
        } else {
          reject('Size already exists')
        }
      })
    },
    addFrame(frame) {
      return new Promise((resolve, reject) => {
        if (!this.config.frames.includes(frame)) {
          this.config.frames.push(frame)
          resolve()
        } else {
          reject('Frame already exists')
        }
      })
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'config',
        storage: localStorage,
        paths: ['config']
      }
    ]
  }
})
