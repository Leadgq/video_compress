<script setup>
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@renderer/store'
const { config } = storeToRefs(useConfigStore())
</script>

<template>
  <main class="p-3 flex items-center gap-2 bg-white shadow-md">
    <el-select v-model="config.frame">
      <el-option v-for="(item, index) in config.frames" :key="index" :label="item" :value="item" />
    </el-select>
    <el-select v-model="config.size">
      <el-option v-for="(item, index) in config.sizes" :key="index" :label="item" :value="item" />
    </el-select>
  </main>
</template>
