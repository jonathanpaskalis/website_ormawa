<template>
  <header class="
    sticky sm:fixed -top-12 xs:-top-16 sm:top-0 left-0 right-0
    flex flex-col
    h-28 xs:h-32 sm:h-16 xl:h-24
    border-solid border-b-[0.15rem] border-bemkmuaj-white
    bg-bemkmuaj-black shadow-bemkmuaj-black-shadow
    transition-all duration-100 ease-in-out
    z-10
  ">
    <div class="
      grid  grid-cols-[16rem_3.3rem_1fr] xs:grid-cols-[22rem_4.4rem_1fr] 
      w-full h-12 xs:h-16 xl:h-24
      xs:pr-4
      transition-all duration-100 ease-in-out
    " :class="{
      'xl:grid-cols-[30rem_6.6rem_1fr]' : isAtTopPage,
      'sm:grid-cols-[0_4.4rem_0] xl:grid-cols-[0_6.6rem_0]' : !isAtTopPage,
    }">
      <div class="
        w-[16rem] xs:w-[22rem] h-12 xs:h-16 xl:h-24
        overflow-hidden
        transition-all duration-100 ease-in-out
      " :class="{
        'xl:w-[30rem]' : isAtTopPage,
        'sm:w-0' : !isAtTopPage,
      }">
        <div class="
          flex gap-4
          w-[16rem] xs:w-[22rem] xl:w-[30rem] h-12 xs:h-16 xl:h-24
          px-2 xs:pr-0
          bg-bemkmuaj-white
          transition-all duration-100 ease-in-out
        ">
          <div class="
            pt-2 xs:pt-3 xl:pt-4 pb-3 xs:pb-4 xl:pb-6
          ">
            <img src="/images/required_logos/Logo_UAJ.webp" alt="" class="
              h-full
            ">
          </div>
          <div class="py-2 xs:py-3 xl:py-5">
            <img src="/images/required_logos/Universitas_Terakreditasi_Unggul.webp" alt="" class="
              h-full
            ">
          </div>
          <div class="py-3 xl:py-5">
            <img src="/images/required_logos/QS_WUR.webp" alt="" class="
              h-full
            ">
          </div>
        </div>
      </div>
      <div class="
        w-[3.3rem] xs:w-[4.4rem] lg:w-[6.6rem]
      ">
        <div class="
          flex
          w-[3.3rem] xs:w-[4.4rem] xl:w-[6.6rem] h-12 xs:h-16 xl:h-24
          rounded-br-[1.5rem] sm:rounded-r-[1.5rem] xl:rounded-r-[2rem]
          bg-bemkmuaj-white
          transition-all duration-100 ease-in-out 
        ">
          <img src="/images/organization_logos/Logo_KM-UAJ.webp" alt="" class="
            h-full">
        </div>
      </div>
      <div class="
        flex items-center
        w-max
        sm:p-4
        transition-all duration-200 ease-in-out
      ">
        <p class="
          hidden xl:block
          w-max
          bg-gradient-to-l from-bemkmuaj-white from-50% via-bemkmuaj-gold via-75% to-bemkmuaj-orange
          bg-200% bg-right bg-clip-text
          text-[1.3rem] text-transparent font-Panton-BlackCaps
          hover:bg-left
          transition-all duration-200 ease-in-out
          ">
          Badan Eksekutif Mahasiswa<br>
          Keluarga Mahasiswa-UAJ
        </p>
        <p class="
          hidden sm:block xl:hidden
          h-min
          text-[1.3rem] text-bemkmuaj-white font-Panton-BlackCaps
          text-clip
          overflow-hidden
        ">
          BEM KM-UAJ
        </p>
      </div>
    </div>
    <div class="
      grid items-center
      w-full
      h-16 sm:h-0
      pr-4
      overflow-hidden
      transition-all duration-100 ease-in-out
    " :class="{
      'grid-cols-[4.4rem_1fr]' : is3remFromTopPage && !isXSScreen || is4remFromTopPage,
      'grid-cols-[0_1fr]' : !(is3remFromTopPage && !isXSScreen || is4remFromTopPage),
    }">
      <div class="
        transition-all duration-100 ease-in-out
        overflow-hidden
      " :class="{
        'w-[4.4rem]' : is3remFromTopPage && !isXSScreen || is4remFromTopPage,
        'w-0' : !(is3remFromTopPage && !isXSScreen || is4remFromTopPage),
      }">
        <div class="
          flex
          w-[4.4rem] h-16 xl:h-24
          rounded-[0_1.5rem_1.5rem_0] xl:rounded-[0_2rem_2rem_0]
          bg-bemkmuaj-white
          transition-all duration-100
        ">
          <img src="/images/organization_logos/Logo_KM-UAJ.webp" alt="" class="
            h-full">
        </div>
      </div>
      <div class="
        flex flex-col justify-center
        w-max
        p-4
        overflow-hidden
      " :class="{
        'pl-2' : !(is3remFromTopPage && !isXSScreen || is4remFromTopPage),
      }">
        <p class="
          text-[1.3rem] text-bemkmuaj-white font-Panton-BlackCaps
        ">
          BEM KM-UAJ
        </p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

  const isAtTopPage = ref(true);
  const is3remFromTopPage = ref(false);
  const is4remFromTopPage = ref(false);
  const isXSScreen = ref(false);

  onMounted(() => {
    isAtTopPage.value = window.scrollY < 1;
    is3remFromTopPage.value = window.scrollY >= 48;
    is4remFromTopPage.value = window.scrollY >= 64;
    isXSScreen.value = window.innerWidth >= 425;
    window.addEventListener('scroll', () => {
      isAtTopPage.value = window.scrollY < 1;
      is3remFromTopPage.value = window.scrollY >= 48;
      is4remFromTopPage.value = window.scrollY >= 64;
      isXSScreen.value = window.innerWidth >= 425;
    })
  })
</script>

<style lang="scss" scoped>

</style>