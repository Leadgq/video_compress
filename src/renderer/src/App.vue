<template>
  <div class="w-full h-full flex flex-col">
    <NavBar />
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" class="flex-1"></component>
      </Suspense>
    </RouterView>
    <CopyRight />
  </div>
</template>
