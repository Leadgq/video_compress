<script setup>
import { ref } from 'vue'
import { CloseOne } from '@icon-park/vue-next/es'
import { isAbleArray } from 'tree-esm-lib'
const videos = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
</script>

<template>
  <main class="flex-1 overflow-y-auto">
    <template v-if="isAbleArray(videos)">
      <section v-for="(video, index) in videos" :key="index" class="videoContainer">
        {{ video }}
        <div class="icon">
          <close-one theme="outline" size="12" />
        </div>
      </section>
    </template>
  </main>
</template>

<style lang="scss" scoped>
.videoContainer {
  @apply px-3 py-2 
  bg-white mb-2 mx-3 rounded-md 
  text-slate-600 text-xs flex justify-between
   items-center;
  .icon {
    @apply text-slate-500  
     cursor-pointer opacity-70 
     hover:opacity-90 
     hover:scale-125
     duration-300 
    hover:text-red-500;
  }
}
</style>
