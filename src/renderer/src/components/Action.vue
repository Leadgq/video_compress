<template>
  <main class="flex justify-center">
    <section class="flex gap-2">
      <div class="button">
        <plus theme="outline" size="28" />
      </div>
      <div class="button">
        <update-rotation theme="outline" size="28" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { Plus, UpdateRotation } from '@icon-park/vue-next/es'
</script>

<style lang="scss" scoped>
.button {
  @apply w-20 h-20 bg-white rounded-lg flex  justify-center items-center cursor-pointer text-slate-600;
}
</style>
