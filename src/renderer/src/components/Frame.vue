<script setup>
import { ref } from 'vue'

const frames = ref(['1920x1080', '1024x720'])
const frame = ref('1920x1080')

const sizes = ref([60, 30])
const size = ref(60)
</script>

<template>
  <main class="p-3 flex items-center gap-2 bg-white shadow-md">
    <el-select v-model="frame">
      <el-option v-for="(item, index) in frames" :key="index" :label="item" :value="item" />
    </el-select>
    <el-select v-model="size">
      <el-option v-for="(item, index) in sizes" :key="index" :label="item" :value="item" />
    </el-select>
  </main>
</template>
