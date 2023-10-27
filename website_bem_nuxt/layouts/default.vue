<template>
  <div id="top" class="
    pt-16 xl:pt-24
    transition-all duration-100 ease-in-out
  ">
    <Navbar />
    <main class="
      bg-gradient-to-tr from-bemkmuaj-white via-bemkmuaj-gold via-[25%] to-bemkmuaj-orange
    ">
      <slot />
      <NuxtLink ref="toTopBtn" :to="{ hash: '#top' }" class="
        fixed bottom-[4.5rem] right-8
        flex justify-center items-center
        w-14 h-14
        border-solid border-[0.15rem] border-bemkmuaj-white hover:border-bemkmuaj-orange-glow rounded-[0.5rem]
        bg-bemkmuaj-black bg-opacity-[85%] hover:bg-opacity-100
        fill-bemkmuaj-white hover:fill-bemkmuaj-orange 
        transition-all duration-100 ease-in-out
      " :class="{
        'opacity-0' : hideToTopBtn,
        'pointer-events-none' : hideToTopBtn 
      }">
        <Icons name="expand_less" class="h-[1rem]" />
      </NuxtLink>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">

const hideToTopBtn = ref(true);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if(window.scrollY >= 750) hideToTopBtn.value = false;
    if (window.scrollY < 750) hideToTopBtn.value = true;
  })
})
</script>


<style lang="scss" scoped>
  
</style>