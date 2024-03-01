<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@renderer/store'
const { config } = storeToRefs(useConfigStore())

const newSize = ref('')
const newFrame = ref('')
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
        <el-button type="primary">增加</el-button>
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
        <el-button type="primary">增加</el-button>
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
