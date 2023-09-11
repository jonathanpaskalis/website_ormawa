<template>
  <div>
    <section class="w-full h-[64rem]">
      <span class="text-[5rem] text-bemkmuaj-white">
        4
      </span>
    </section>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in'
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      (from.meta.pageTransition as {name:string}).name = 'slide-left';
      (to.meta.pageTransition as {name:string}).name = 'slide-left';
    }
  }
})

</script>

<style lang="scss" scoped>
  
</style>