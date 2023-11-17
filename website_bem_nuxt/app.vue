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
        rel: 'icon', type: 'image/webp', href:'/images/organization_logos/Logo_BEM_KM-UAJ.webp'
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
  
  onMounted(() => {
    const { analytics } = useFirebase();
    alert('Anda sedang mengunjungi Website Resmi BEM KM-UAJ V0.10.2-R. Website ini sedang dalam tahap open beta dan BUKAN merupakan versi full. Apabila Anda menemukan kendala atau bug atau memiliki saran, silakan menghubungi Instagram @bem_kmuaj atau menggunakan form pada halaman /contact-us. Selamat explorasi!');
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
