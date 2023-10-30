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
    <NuxtLink to="/" aria-label="Go to the home page" class="
      aspect-[1.1/1]
      flex
      h-16 xl:h-24
      rounded-[0_1.5rem_1.5rem_0] xl:rounded-[0_2rem_2rem_0]
      bg-bemkmuaj-white
      transition-all duration-100
      ">
      <img src="/Logo_KM-UAJ.webp" alt="" class="
        h-full">
    </NuxtLink>
    <NuxtLink to="/" aria-label="Badan Eksekutif Mahasiswa Keluarga Mahasiswa-UAJ" class="
      flex flex-col justify-center
      w-max
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
      <div v-for="nav in navs" :key="`nav-${nav.name}`" class="
        selection
        hidden lg:block
      " :class="{
        'relative': nav.subnavs
      }">
        <NuxtLink :to="nav.url" class="
          nuxtlink
          flex justify-center items-center gap-2
          w-[9.5rem]
          p-[0.2rem_0.1rem_0.2rem_0.1rem]
          border-solid border-[0.15rem] border-transparent rounded-[1.5rem]
          bg-bemkmuaj-black
          text-bemkmuaj-white font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        " :class="{
          'rounded-[1.5rem_1.5rem_0_0]': nav.subnavs,
          'rounded-[1.5rem]': !nav.subnavs,
        }">
          {{ nav.name.toUpperCase() }}
          <Icons v-if="nav.subnavs" name="expand_more" class="
            h-[0.5rem]
            transition-transform duration-100 ease-in-out
            fill-bemkmuaj-white overflow-hidden
          "/>
        </NuxtLink>
        <div v-if="nav.subnavs" class="
          absolute
          flex flex-col justify-center items-center
          w-[9.5rem] h-0
          border-solid border-[0.15rem] border-t-0 border-transparent rounded-[0_0_1.5rem_1.5rem]
          transition-all duration-100 ease-in-out
          overflow-hidden
        ">
          <NuxtLink v-for="subnav in nav.subnavs" :key="`subnav-${subnav.name}`" :to="{ path: nav.url, hash: subnav.hash }" @click.prevent="enableSmoothScroll(nav.url)" class="
            flex justify-center items-center
            w-full h-12
            p-[0.2rem 0 0.2rem 0]
            bg-bemkmuaj-black hover:bg-bemkmuaj-dark-gray
            text-[0.8rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-Medium
            transition-all duration-100 ease-in-out
          ">
            {{ subnav.name }}
          </NuxtLink>
        </div>
      </div>
      <button @click.prevent="toggleMNav" class="
        navmbtn
        flex lg:hidden justify-center items-center
        w-10 h-10
        p-[0.2rem]
        border-solid border-[0.15rem] border-bemkmuaj-white rounded-[0.5rem]
        bg-bemkmuaj-black
        fill-bemkmuaj-white
      ">
        <Icons v-if="hideMNav" name="menu" class="w-[85%]" />
        <Icons v-else name="close" class="w-[85%]" />
      </button>
    </nav>

    <!-- Navbar Mobile -->
    <nav class="
      h-screen w-screen
      bg-bemkmuaj-black bg-opacity-95
      transition-all duration-200 ease-in-out
      lg:-translate-x-full
      " :class="{'-translate-x-full' : hideMNav}">
      <div v-for="nav in navs" class="
        mselection
      ">
        <NuxtLink v-if="!nav.subnavs" @click.prevent="closeMNav" :to="nav.url" class="
          nuxtlink
          flex justify-center items-center
          w-full h-16
          border-solid border-b border-bemkmuaj-white
          hover:bg-bemkmuaj-dark-gray
          text-[1.3rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
        ">
          {{ nav.name }}
        </NuxtLink>
        <div v-else @click.prevent="toggleMSubNav(nav)" class="
          nuxtlink
          flex justify-center items-center gap-2
          w-full h-16
          border-solid border-b border-bemkmuaj-white
          hover:bg-bemkmuaj-dark-gray
          text-[1.3rem] text-bemkmuaj-white hover:text-bemkmuaj-orange fill-bemkmuaj-white hover:fill-bemkmuaj-orange font-Poppins-SemiBold
          transition-all duration-100 ease-in-out
          cursor-pointer
        ">
          {{ nav.name }}
          <Icons name="expand_more" class="
            h-[0.65rem]
            transition-transform duration-100 ease-in-out
            overflow-hidden
          " :class="{
            '-rotate-180' : !nav.hideSubNav,
          }"/>
        </div>
        <div v-if="nav.subnavs" class="
          h-0
          border-solid border-bemkmuaj-white
          transition-all duration-100 ease-in-out
          overflow-hidden
        " :class="{ 
          'h-36 border-b' : !nav.hideSubNav
          }">
          <NuxtLink v-for="subnav in nav.subnavs" :key="`subnav-${subnav.name}`" @click.prevent="closeMNav(); enableSmoothScroll(nav.url);" :to="{ path: nav.url, hash: subnav.hash }" class="
            w-full h-12
            flex justify-center items-center
            hover:bg-bemkmuaj-dark-gray
            text-bemkmuaj-white hover:text-bemkmuaj-orange font-Poppins-Medium
            transition-all duration-100 ease-in-out
          ">
            {{ subnav.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  const hideMNav = ref(true);

  const toggleMNav = () => {
    hideMNav.value = !hideMNav.value;
    closeMSubNav();
  }

  const closeMNav = () => {
    hideMNav.value = true;
    closeMSubNav();
  }

  const toggleMSubNav = (nav:any) => {
    nav.hideSubNav = !nav.hideSubNav;
  }

  const closeMSubNav = () => {
    navs.value.forEach((nav) => {
      nav.hideSubNav = true;
    })
  }

  const enableSmoothScroll = (url:string) => {
    if (useRoute().path===url) {
      document.documentElement.classList.add('scroll-smooth');
      setTimeout(() => {
        document.documentElement.classList.remove('scroll-smooth');
      }, 300); 
    }
  }

  const navs = ref([
    {
      name: 'Beranda',
      url: '/',
      hideSubNav: true,
    },
    {
      name: 'Profil',
      url: '/profile',
      subnavs: [
        {
          name: 'Tentang Kami',
          hash: '#top',
        },
        {
          name: 'Struktur Kabinet',
          hash: '#ministry-structure',
        },
        {
          name: 'Komposisi Pengurus',
          hash: '#board-composition',
        },
      ],
      hideSubNav: true,
    },
    {
      name: 'Program Kerja',
      url: '/program',
      hideSubNav: true,
    },
    {
      name: 'Hubungi Kami',
      url: '/contact-us',
      hideSubNav: true,
    },
    {
      name: 'Pemilu',
      url: '/election',
      hideSubNav: true,
      subnavs: [
        {
          name: 'Profil, Visi, & Misi',
          hash: '#top',
        },
        {
          name: 'Program Kerja',
          hash: '#program',
        },
        {
          name: 'Gunakan Hak Suara',
          hash: '#vote',
        },
      ]
    },
  ]);
</script>

<style lang="scss" scoped>

  .selection {
    &:hover {
      .nuxtlink {
        @apply border-bemkmuaj-orange-glow shadow-bemkmuaj-orange-shadow-sm text-bemkmuaj-orange;
        svg {
          @apply -rotate-180 fill-bemkmuaj-orange
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
        @apply bg-bemkmuaj-dark-gray text-bemkmuaj-orange fill-bemkmuaj-orange;
      }
    }
  }

  .navmbtn {
    &:hover {
      @apply border-bemkmuaj-orange-glow shadow-bemkmuaj-orange-shadow-sm;
      svg {
        @apply fill-bemkmuaj-orange;
      }
    }
  }
</style>