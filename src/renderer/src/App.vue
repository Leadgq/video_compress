<template>
  <div class="w-full h-full flex flex-col">
    <NavBar />
    <el-config-provider :locale="zhCn">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component"></component>
        </Suspense>
      </RouterView>
    </el-config-provider>
    <CopyRight />
  </div>
</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>
