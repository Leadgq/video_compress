<template>
  <main class="flex justify-between px-2 py-3 text-xs text-slate-600 bg-gray-50 shadow-md">
    <section>视频压缩</section>
    <section class="flex gap-2">
      <RouterLink :to="{ name: 'home' }">转码</RouterLink>
      <RouterLink :to="{ name: 'setting' }">配置</RouterLink>
    </section>
  </main>
</template>

<script setup></script>
