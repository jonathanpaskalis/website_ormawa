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
        rel: 'icon', type: 'image/webp', href:'/images/organization_logos/Logo_Ormawa_XYZ-UAJ.webp'
      }
    ],
    htmlAttrs: {
      lang: 'id',
    },
    // meta: [
    //   {
    //     "http-equiv": 'content-security-policy'
    //   },
    //   {
    //     content: "script-src 'none'"
    //   },
    // ],
    // script: [
    //   {
    //     nonce:'random123',
    //     src: 'https://trusted.example.com/trusted_script.js',
    //   }
    // ]
  })
  
  onMounted(async () => {
    const { analytics } = useFirebase();
  })
    
</script>

<style lang="scss">
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    @apply transition-all duration-200 ease-in-out;
  }

  .fade-enter-active,
  .fade-leave-active {
    @apply opacity-0 blur-lg;
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
