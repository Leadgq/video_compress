<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@renderer/store'
import { ElMessage } from 'element-plus'
const store = useConfigStore()
const { config } = storeToRefs(store)
const { addSize, addFrame } = store

const newSize = ref('')
const newFrame = ref('')

async function addFrameAction() {
  try {
    if (!newFrame.value) {
      ElMessage.error('请输入分辨率')
      return
    }
    await addFrame(newFrame.value)
    ElMessage.success('添加分辨率成功')
    newFrame.value = ''
  } catch (e) {
    ElMessage.error(e)
  }
}

async function addSizeAction() {
  try {
    if (!newSize.value) {
      ElMessage.error('请输入帧数')
      return
    }
    await addSize(newSize.value)
    ElMessage.success('添加帧数成功')
    newSize.value = ''
  } catch (e) {
    ElMessage.error(e)
  }
}
</script>

<template>
  <div class="flex-1 px-3">
    <section class="sectionContainer">
      <h2>分辨率</h2>
      <div class="mt-2">
        <el-select>
          <el-option
            v-for="(item, index) in config.frames"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="mt-2 flex gap-2">
        <el-input v-model="newFrame" placeholder="请输入1920x1080的数据格式" clearable />
        <el-button type="primary" @click="addFrameAction">增加</el-button>
      </div>
    </section>
    <section class="sectionContainer">
      <h2>帧数</h2>
      <div class="mt-2">
        <el-select>
          <el-option
            v-for="(item, index) in config.sizes"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </div>
      <div class="mt-2 flex gap-2">
        <el-input
          v-model="newSize"
          placeholder="请输入类似24的数值"
          type="number"
          min="1"
          clearable
        />
        <el-button type="primary" @click="addSizeAction">增加</el-button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.sectionContainer {
  @apply bg-white mt-3 p-3  rounded-md shadow-md;
  h2 {
    @apply text-slate-500 opacity-80 text-sm;
  }
}
</style>
