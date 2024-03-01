<template>
  <div class="w-full h-full flex flex-col">
    <NavBar />
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component"></component>
      </Suspense>
    </RouterView>
    <CopyRight />
  </div>
</template>
