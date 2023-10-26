<template>
  <svg v-if="name === 'progress'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path d="m10,20c-1.37,0-2.66-.26-3.88-.79s-2.28-1.24-3.19-2.15-1.63-1.97-2.15-3.19-.79-2.51-.79-3.88.26-2.68.79-3.89,1.24-2.27,2.15-3.18,1.97-1.63,3.19-2.15,2.51-.79,3.88-.79c.28,0,.52.1.71.29.19.19.29.43.29.71s-.1.52-.29.71c-.19.19-.43.29-.71.29-2.22,0-4.1.78-5.66,2.34-1.56,1.56-2.34,3.45-2.34,5.66s.78,4.1,2.34,5.66c1.56,1.56,3.45,2.34,5.66,2.34s4.1-.78,5.66-2.34c1.56-1.56,2.34-3.45,2.34-5.66,0-.28.1-.52.29-.71.19-.19.43-.29.71-.29s.52.1.71.29c.19.19.29.43.29.71,0,1.37-.26,2.66-.79,3.88s-1.24,2.28-2.15,3.19-1.97,1.63-3.18,2.15-2.5.79-3.89.79Z" style="stroke-width: 0px;"/>
  </svg>
  <svg v-else-if="name === 'done'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.3 12.03">
    <path d="m5.7,12.03L0,6.33l1.43-1.43,4.28,4.28L14.88,0l1.43,1.43L5.7,12.03Z" style="stroke-width: 0px;"/>
  </svg>
  <svg v-else-if="name === 'close'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
    <path d="m1.4,14l-1.4-1.4,5.6-5.6L0,1.4,1.4,0l5.6,5.6L12.6,0l1.4,1.4-5.6,5.6,5.6,5.6-1.4,1.4-5.6-5.6L1.4,14Z"/>
  </svg>
  <svg v-else-if="name === 'expand_more'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7.4">
    <path d="m6,7.4L0,1.4,1.4,0l4.6,4.6L10.6,0l1.4,1.4-6,6Z"/>
  </svg>
  <svg v-else-if="name === 'expand_less'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7.4">
    <path d="m1.4,7.4l-1.4-1.4L6,0l6,6-1.4,1.4L6,2.8,1.4,7.4Z" style="stroke-width: 0px;"/>
  </svg>
  <svg v-else-if="name === 'menu'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12">
    <path d="m0,12v-2h18v2H0Zm0-5v-2h18v2H0ZM0,2V0h18v2H0Z"/>
  </svg>
  <svg v-else-if="name === 'trending_flat'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 9">
    <path d="m14.5,9l-1.43-1.4,2.1-2.1H0v-2h15.18l-2.08-2.1,1.43-1.4,4.48,4.5-4.5,4.5Z" style="stroke-width: 0px;"/>
  </svg>
</template>
  
<script setup lang="ts">
  const props = defineProps({
    name: String
  })
</script>

<style scoped>

</style>