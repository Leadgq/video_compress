import { defineStore } from 'pinia'
import { ElMessageBox, ElMessage } from 'element-plus'

export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      config: {
        sizes: [60, 30],
        size: 60,
        frames: ['1920X1080', '1024X720'],
        frame: '1920X1080'
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
          reject('当前帧数已存在')
        }
      })
    },
    addFrame(frame) {
      return new Promise((resolve, reject) => {
        if (!this.config.frames.includes(frame)) {
          this.config.frames.push(frame)
          resolve()
        } else {
          reject('当前分辨率已存在')
        }
      })
    },
    async deleteSize(index) {
      await ElMessageBox.confirm('确认删除?', '提示')
      this.config.sizes.splice(index, 1)
      ElMessage.success('删除成功')
    },
    async deleteFrame(index) {
      await ElMessageBox.confirm('确认删除?', '提示')
      this.config.frames.splice(index, 1)
      ElMessage.success('删除成功')
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
