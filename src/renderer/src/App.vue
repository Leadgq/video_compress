<template>
  <div class="w-full h-full">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component"></component>
      </Suspense>
    </RouterView>
  </div>
</template>
