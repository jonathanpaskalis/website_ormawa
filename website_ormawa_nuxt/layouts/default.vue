<template>
  <div id="top" class="
    sm:pt-16 xl:pt-24
    transition-all duration-100 ease-in-out
  ">
    <Navbar />
    <main>
      <!-- Start page background -->
      <div class="
        fixed top-16 xl:top-24 left-0 right-0 bottom-0
        [background-size:_400%]
        [background-image:_linear-gradient(45deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,1)_0%,_rgba(212,156,67,1)_12.5%,_rgba(241,90,34,1)_50%,_rgba(212,156,67,1)_87.5%,_rgba(255,255,255,1)_100%)]
        animate-[bg-flow-animation_120s_ease-in-out_infinite] 
        z-[-1]
      ">
      </div>
      <!-- End page background -->

      <slot />

      <!-- Start to top button -->
      <NuxtLink ref="toTopBtn" :to="{ hash: '#top' }" aria-label="Go to the top of the page" @click.prevent="enableSmoothScroll" class="
        fixed bottom-[4.5rem] right-8
        flex justify-center items-center
        w-14 h-14
        border-solid border-[0.15rem] border-ormawaxyzuaj-white hover:border-ormawaxyzuaj-orange-glow rounded-[0.5rem]
        bg-ormawaxyzuaj-black bg-opacity-[85%] hover:bg-opacity-100
        fill-ormawaxyzuaj-white hover:fill-ormawaxyzuaj-orange 
        transition-all duration-100 ease-in-out
      " :class="{
        'opacity-0' : hideToTopBtn,
        'pointer-events-none' : hideToTopBtn 
      }">
        <Icons name="expand_less" class="h-[1rem]" />
      </NuxtLink>
      <!-- End to top button -->

    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">

// --Start to top button UI logic--
const hideToTopBtn = ref(true);

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 750) hideToTopBtn.value = false;
    if (window.scrollY < 750) hideToTopBtn.value = true;
  })
})
// --Start to top button UI logic--

const enableSmoothScroll = () => { // Function for enabling smooth scrool when using to top button
  console.log(useRoute())
  document.documentElement.classList.add('scroll-smooth');
  setTimeout(() => {
    document.documentElement.classList.remove('scroll-smooth');
  }, 300);
}
</script>


<style lang="scss" scoped>
  
</style>