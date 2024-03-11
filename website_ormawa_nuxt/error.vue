<template>
  <div>
    <section class="
      flex flex-col justify-center items-center
      w-screen h-screen
      [background-size:_400%]
      [background-image:_linear-gradient(45deg,_rgba(255,255,255,1)_0%,_rgba(255,255,255,1)_0%,_rgba(212,156,67,1)_12.5%,_rgba(241,90,34,1)_50%,_rgba(212,156,67,1)_87.5%,_rgba(255,255,255,1)_100%)]
      animate-[bg-flow-animation_120s_ease-in-out_infinite] 
    ">
      <div class="
        container-ormawaxyzuaj
        h-full
        bg-ormawaxyzuaj-black bg-opacity-[75%]
      ">
      </div>
      <div class="
        flex flex-col items-center gap-y-8
        p-4 lg:p-8
        w-full
        bg-ormawaxyzuaj-black
        shadow-ormawaxyzuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <div class="
          flex flex-col items-center
        ">
          <h2 v-if="error" class="
            text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-ormawaxyzuaj-orange font-Poppins-SemiBold
            drop-shadow-ormawaxyzuaj-black-shadow 
            transition-all duration-100 ease-in-out
            animate-[opacity-fill-animation_1s_ease-in-out]
          ">
            {{ error.statusCode }}
          </h2>
          <span v-if="error" class="
            text-ormawaxyzuaj-white
          ">
            {{ error.message }}
          </span>
        </div>
        <span class="
          text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-ormawaxyzuaj-white font-Montserrat-Bold
        ">
          Kembali ke Beranda
        </span>
        <button @click="handleError" class="
          flex justify-center items-center
          w-28 sm:w-32 h-14 sm:h-16
          border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[2rem]
          bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
          fill-ormawaxyzuaj-black hover:fill-ormawaxyzuaj-orange
          hover:shadow-ormawaxyzuaj-orange-shadow-sm
          transition-all duration-200 ease-in-out
        ">
          <Icons name="trending_flat" class="h-[1.25rem] sm:h-[1.5rem]"/>
        </button>
      </div>
      <div class="
        container-ormawaxyzuaj
        h-full
        bg-ormawaxyzuaj-black bg-opacity-[75%]
      ">
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

  const props = defineProps({
    error: Object
  })

  const handleError = () => {
    clearError();
    navigateTo('/', {
      external: true,
    });
  }
</script>

<style lang="scss" scoped>

</style>