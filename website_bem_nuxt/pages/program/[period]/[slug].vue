<template>
  <div class="h-[60rem]">
    <h1>
      {{ period }} {{ program }}
    </h1>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      if (from.fullPath === '/' || from.fullPath === '/profile') {
        (from.meta.pageTransition as {name:string}).name = 'slide-left';
        (to.meta.pageTransition as {name:string}).name = 'slide-left';
      }
      else if (from.fullPath ==='/program') {
        (from.meta.pageTransition as {name:string}).name = 'fade';
        (to.meta.pageTransition as {name:string}).name = 'fade';
      }
      else {
        (from.meta.pageTransition as {name:string}).name = 'slide-right';
        (to.meta.pageTransition as {name:string}).name = 'slide-right';
      }
    }
  }
})

const {period, slug: program } = useRoute().params;

</script>

<style scoped>

</style>