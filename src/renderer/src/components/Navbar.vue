<template>
  <main class="flex justify-between px-2 py-3 text-xs text-slate-600 bg-gray-50 shadow-md drag">
    <section>视频压缩</section>
    <section class="flex gap-2">
      <RouterLink :to="{ name: 'home' }" class="no-drag">转码</RouterLink>
      <RouterLink :to="{ name: 'setting' }" class="no-drag">配置</RouterLink>
    </section>
  </main>
</template>

<script setup></script>
