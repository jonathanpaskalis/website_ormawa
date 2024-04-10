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
