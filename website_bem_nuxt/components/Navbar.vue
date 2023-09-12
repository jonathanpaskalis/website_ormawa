<template>
  <header class="
    fixed top-0 left-0 right-0
    grid grid-cols-[4.4rem_1fr_min-content] xl:grid-cols-[6.6rem_1fr_min-content]
    h-16 xl:h-24
    pr-4
    border-solid border-b-[0.15rem] border-bemkmuaj-white
  bg-bemkmuaj-black shadow-bemkmuaj-black-shadow
    transition-all duration-100 ease-in-out
    z-10
    ">
    <NuxtLink to="/" class="
      aspect-[1.1/1]
      flex
      h-16 xl:h-24
      rounded-[0_1.5rem_1.5rem_0] xl:rounded-[0_2rem_2rem_0]
      bg-bemkmuaj-white
      transition-all duration-100
      ">
      <img src="~/assets/img/Logo_KM-UAJ.webp" alt="" class="
        h-full">
    </NuxtLink>
    <NuxtLink to="/" class="
      flex flex-col justify-center
      p-4 xl:pl-8
      overflow-hidden">
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
        block xl:hidden
        text-[1.3rem] text-bemkmuaj-white font-Panton-BlackCaps
      ">
        BEM KM-UAJ
      </p>
    </NuxtLink>
    <nav class="
      flex items-center gap-[0.1rem]
      w-full h-full
    ">
      <div class="
        selection
        relative
        hidden lg:block
      ">
        <NuxtLink to="/" class="
          nuxtlink
          flex justify-center items-center
          w-[9.5rem]
          p-[0.2rem_0.1rem_0.2rem_0.1rem]
          border-solid border-[0.15rem] border-transparent rounded-[1.5rem]
          bg-bemkmuaj-black
          text-bemkmuaj-white font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          BERANDA
        </NuxtLink>
      </div>
      <div class="
        selection
        relative
        hidden lg:block
      ">
        <NuxtLink to="/profile" class="
          nuxtlink
          flex justify-center items-center
          w-[9.5rem]
          p-[0.2rem_0.1rem_0.2rem_0.1rem]
          border-solid border-[0.15rem] border-transparent rounded-[1.5rem_1.5rem_0_0]
          bg-bemkmuaj-black
          text-bemkmuaj-white font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          PROFIL
          <span class="
            material-symbols-outlined
            transition-transform duration-100 ease-in-out
            overflow-hidden
            ">
            expand_more
          </span>
        </NuxtLink>
        <div class="
          absolute
          flex flex-col justify-center items-center
          w-[9.5rem] h-0
          border-solid border-[0.15rem] border-t-0 border-transparent rounded-[0_0_1.5rem_1.5rem]
          transition-all duration-100 ease-in-out
          overflow-hidden
        ">
          <NuxtLink to="/profile" class="
            flex justify-center items-center
            w-full h-12
            p-[0.2rem 0 0.2rem 0]
            bg-bemkmuaj-black hover:bg-bemkmuaj-dark-gray
            text-[0.8rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-Medium
            transition-all duration-100 ease-in-out
          ">
            Tentang Kami
          </NuxtLink>
          <NuxtLink :to="{ path:'/profile', hash: '#ministry-structure' }" class="
            flex justify-center items-center
            w-full h-12
            p-[0.2rem 0 0.2rem 0]
            bg-bemkmuaj-black hover:bg-bemkmuaj-dark-gray
            text-[0.8rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-Medium
            transition-all duration-100 ease-in-out
          ">
            Struktur Kabinet
          </NuxtLink>
          <NuxtLink :to="{ path:'/profile', hash: '#board-composition' }" class="
            flex justify-center items-center
            w-full h-12
            p-[0.2rem 0 0.2rem 0]
            bg-bemkmuaj-black hover:bg-bemkmuaj-dark-gray
            text-[0.8rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-Medium
            transition-all duration-100 ease-in-out
          ">
            Komposisi Pengurus
          </NuxtLink>
        </div>
      </div>
      <div class="
        selection
        relative
        hidden lg:block
      ">
        <NuxtLink to="/program" class="
          nuxtlink
          flex justify-center items-center
          w-[9.5rem]
          p-[0.2rem_0.1rem_0.2rem_0.1rem]
          border-solid border-[0.15rem] border-transparent rounded-[1.5rem]
          bg-bemkmuaj-black
          text-bemkmuaj-white font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          PROGRAM KERJA
        </NuxtLink>
      </div>
      <div class="
        selection
        relative
        hidden lg:block
      ">
        <NuxtLink to="/contact-us" class="
          nuxtlink
          flex justify-center items-center
          w-[9.5rem]
          p-[0.2rem_0.1rem_0.2rem_0.1rem]
          border-solid border-[0.15rem] border-transparent rounded-[1.5rem]
          bg-bemkmuaj-black
          text-bemkmuaj-white font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          HUBUNGI KAMI
        </NuxtLink>
      </div>
      <div class="
        selection
        relative
        hidden lg:block
      ">
        <NuxtLink to="/election" class="
          nuxtlink
          flex justify-center items-center
          w-[9.5rem]
          p-[0.2rem_0.1rem_0.2rem_0.1rem]
          border-solid border-[0.15rem] border-transparent rounded-[1.5rem]
          bg-bemkmuaj-black
          text-bemkmuaj-white font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          PEMILU
        </NuxtLink>
      </div>
      <button @click.prevent="toggleMNav" class="
        navmbtn
        flex lg:hidden justify-center items-center
        w-10 h-10
        p-[0.2rem]
        border-solid border-[0.15rem] border-bemkmuaj-white rounded-[0.5rem]
        bg-bemkmuaj-black
      ">
        <span v-if="hideMNav" class="
          material-symbols-outlined
          text-[4rem] text-white
          scale-150 
        ">
          menu
        </span>
        <span v-else class="
          material-symbols-outlined
          text-[4rem] text-white
          scale-150 
        ">
          close
        </span>
      </button>
    </nav>

    <!-- Navbar Mobile -->
    <nav class="
      h-screen w-screen
      bg-bemkmuaj-black bg-opacity-95
      transition-all duration-200 ease-in-out
      lg:-translate-x-full
      " :class="{'-translate-x-full' : hideMNav}">
      <div class="
        mselection
        relative
      ">
        <NuxtLink @click.prevent="closeMNav" to="/" class="
          nuxtlink
          flex justify-center items-center
          w-full h-16
          border-solid border-b border-bemkmuaj-white
          hover:bg-bemkmuaj-dark-gray
          text-[1.3rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          BERANDA
        </NuxtLink>
      </div>
      <div class="
        mselection
        relative
      ">
        <NuxtLink @click.prevent="toggleProfileMNav"  class="
          nuxtlink
          flex justify-center items-center gap-x-2
          w-full h-16
          border-solid border-b border-bemkmuaj-white
          hover:bg-bemkmuaj-dark-gray
          text-[1.3rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
          cursor-pointer
        ">
          PROFIL
          <span class="
            material-symbols-outlined
            scale-[130%]
            transition-transform duration-100 ease-in-out
            " :class="{ '-rotate-180' : !hideProfileMNav }">
            expand_more
          </span>
        </NuxtLink>
        <div class="
          h-0
          border-solid border-bemkmuaj-white
          transition-all duration-100 ease-in-out
          overflow-hidden
        " :class="{ 
          'h-36 border-b' : !hideProfileMNav
          }">
          <NuxtLink @click.prevent="closeMNav" to="/profile" class="
            w-full h-12
            flex justify-center items-center
            hover:bg-bemkmuaj-dark-gray
            text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-Medium
            transition-all duration-100 ease-in-out
          ">
            Tentang Kami
          </NuxtLink>
          <NuxtLink @click.prevent="closeMNav" :to="{ path:'/profile', hash: '#ministry-structure' }" class="
            w-full h-12
            flex justify-center items-center
            hover:bg-bemkmuaj-dark-gray
            text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-Medium
            transition-all duration-100 ease-in-out
          ">
            Struktur Kabinet
          </NuxtLink>
          <NuxtLink @click.prevent="closeMNav" :to="{ path:'/profile', hash: '#board-composition' }" class="
            w-full h-12
            flex justify-center items-center
            hover:bg-bemkmuaj-dark-gray
            text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-Medium
            transition-all duration-100 ease-in-out
          ">
            Komposisi Pengurus
          </NuxtLink>
        </div>
      </div>
      <div class="
        mselection
        relative
      ">
        <NuxtLink @click.prevent="closeMNav" to="/program" class="
          nuxtlink
          flex justify-center items-center
          w-full h-16
          border-solid border-b border-bemkmuaj-white
          hover:bg-bemkmuaj-dark-gray
          text-[1.3rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          PROGRAM KERJA
        </NuxtLink>
      </div>
      <div class="
        mselection
        relative
      ">
        <NuxtLink @click.prevent="closeMNav" to="/contact-us" class="
          nuxtlink
          flex justify-center items-center
          w-full h-16
          border-solid border-b border-bemkmuaj-white
          hover:bg-bemkmuaj-dark-gray
          text-[1.3rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          HUBUNGI KAMI
        </NuxtLink>
      </div>
      <div class="
        mselection
        relative
      ">
        <NuxtLink @click.prevent="closeMNav" to="/election" class="
          nuxtlink
          flex justify-center items-center
          w-full h-16
          border-solid border-b border-bemkmuaj-white
          hover:bg-bemkmuaj-dark-gray
          text-[1.3rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          PEMILU
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
  const hideMNav = ref(true);
  const hideProfileMNav = ref(true);

  const toggleMNav = () => {
    hideMNav.value = !hideMNav.value;
    closeProfileMNav();
  }

  const closeMNav = () => {
    hideMNav.value = true;
  }

  const toggleProfileMNav = () => {
    hideProfileMNav.value = !hideProfileMNav.value;
  }

  const closeProfileMNav = () => {
    hideProfileMNav.value = true;
  }
</script>

<style lang="scss" scoped>

  .selection {
    &:hover {
      .nuxtlink {
        @apply border-bemkmuaj-orange-glow shadow-bemkmuaj-orange-shadow-sm text-bemkmuaj-orange;
        span {
          @apply -rotate-180
        }
      }
      div {
        @apply h-[7.5rem] border-bemkmuaj-orange-glow shadow-bemkmuaj-orange-shadow-sm;
      }
    }
  }

  .mselection {
    &:hover {
      .nuxtlink {
        @apply bg-bemkmuaj-dark-gray text-bemkmuaj-orange
      }
    }
  }

  .navmbtn {
    &:hover {
      @apply border-bemkmuaj-orange-glow shadow-bemkmuaj-orange-shadow-sm;
      span {
        @apply text-bemkmuaj-orange;
      }
    }
  }
</style>