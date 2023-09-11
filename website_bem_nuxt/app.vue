<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
    link: [
      {
        rel: 'icon', type: 'image/webp', href:'/Logo_BEM_KM-UAJ.webp'
      }
    ]
  })
</script>

<style lang="scss">
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    @apply transition-all duration-200 ease-in-out;
  }

  .slide-right-enter-from,
  .slide-left-leave-to {
    @apply -translate-x-full opacity-0 blur-lg;
  }

  .slide-left-enter-from,
  .slide-right-leave-to {
    @apply translate-x-full blur-lg;
  }
</style>
