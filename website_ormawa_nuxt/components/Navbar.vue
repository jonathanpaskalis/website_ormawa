<template>
  <header class="
    sticky sm:fixed -top-12 xs:-top-16 sm:top-0 left-0 right-0
    flex flex-col
    h-28 xs:h-32 sm:h-16 xl:h-24
    border-solid border-b-[0.15rem] border-ormawaxyzuaj-white
    bg-ormawaxyzuaj-black shadow-ormawaxyzuaj-black-shadow
    transition-all duration-100 ease-in-out
    z-10
  ">
    <div class="
      grid  grid-cols-[16rem_3.3rem_0_0] xs:grid-cols-[22rem_4.4rem_1fr_min-content] 
      w-full h-12 xs:h-16 xl:h-24
      xs:pr-4
      transition-all duration-100 ease-in-out
    " :class="{
      'xl:grid-cols-[30rem_6.6rem_1fr_min-content]' : isAtTopPage,
      'sm:grid-cols-[0_4.4rem_1fr_min-content] xl:grid-cols-[0_6.6rem_1fr_min-content]' : !isAtTopPage,
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
          bg-ormawaxyzuaj-white
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
        <NuxtLink to="/" aria-label="Go to the home page" class="
          flex
          w-[3.3rem] xs:w-[4.4rem] xl:w-[6.6rem] h-12 xs:h-16 xl:h-24
          rounded-br-[1.5rem] sm:rounded-r-[1.5rem] xl:rounded-r-[2rem]
          bg-ormawaxyzuaj-white
          transition-all duration-100 ease-in-out 
        ">
          <img src="/images/organization_logos/Logo_Ormawa_XYZ-UAJ_Simple.webp" alt="" class="
            h-full">
        </NuxtLink>
      </div>
      <NuxtLink to="/" aria-label="Organisasi Mahasiswa XYZ-UAJ" class="
        flex items-center
        w-max
        sm:p-4
        transition-all duration-200 ease-in-out
      ">
        <p class="
          hidden xl:block
          w-max
          bg-gradient-to-l from-ormawaxyzuaj-white from-50% via-ormawaxyzuaj-gold via-75% to-ormawaxyzuaj-orange
          bg-200% bg-right bg-clip-text
          text-[1.3rem] text-transparent font-Panton-BlackCaps
          hover:bg-left
          transition-all duration-200 ease-in-out
          ">
          Organisasi Mahasiswa ABC<br>
          Universitas XYZ
        </p>
        <p class="
          hidden sm:block xl:hidden
          h-min
          text-[1.3rem] text-ormawaxyzuaj-white font-Panton-BlackCaps
          text-clip
          overflow-hidden
        ">
          Ormawa ABC-UXYZ
        </p>
      </NuxtLink>
      <nav class="
        flex items-center gap-[0.1rem]
        w-full h-full
      ">
        <div v-for="(nav, index) in navs" :key="`nav-${nav.name}`" @mouseenter="setSubNav('show', index, nav.subNavs)" @mouseleave="setSubNav('hide', index, nav.subNavs)" class="
          selectionJS
          selection
          hidden 3xl:block
        " :class="{
          'relative': nav.subNavs
        }">
          <NuxtLink :to="nav.url" class="
            nuxtlink
            flex justify-center items-center gap-2
            w-[9.5rem]
            p-[0.2rem_0.1rem_0.2rem_0.1rem]
            border-solid border-[0.15rem] border-transparent rounded-[1.5rem]
            bg-ormawaxyzuaj-black
            text-ormawaxyzuaj-white font-Poppins-SemiBold
            transition-all duration-100 ease-in-out
          " :class="{
            'rounded-[1.5rem_1.5rem_0_0]': nav.subNavs,
            'rounded-[1.5rem]': !nav.subNavs,
          }">
            {{ nav.name.toUpperCase() }}
            <Icons v-if="nav.subNavs" name="expand_more" class="
              h-[0.5rem]
              transition-transform duration-100 ease-in-out
              fill-ormawaxyzuaj-white overflow-hidden
            "/>
          </NuxtLink>
          <div v-if="nav.subNavs" class="
            absolute
            flex flex-col justify-center items-center
            w-[9.5rem] h-0
            border-solid border-[0.15rem] border-t-0 border-transparent rounded-[0_0_1.5rem_1.5rem]
            transition-all duration-100 ease-in-out
            overflow-hidden
          ">
            <NuxtLink v-for="subNav in nav.subNavs" :key="`subNav-${subNav.name}`" :to="{ path: nav.url, hash: subNav.hash }" @click.prevent="enableSmoothScroll(nav.url)" class="
              flex justify-center items-center
              w-full h-12
              p-[0.2rem 0 0.2rem 0]
              bg-ormawaxyzuaj-black hover:bg-ormawaxyzuaj-dark-gray
              text-[0.8rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange font-Poppins-Medium
              transition-all duration-100 ease-in-out
            ">
              {{ subNav.name }}
            </NuxtLink>
          </div>
        </div>
        <button @click.prevent="toggleMNav" aria-label="Mobile Navbar Button" class="
          navmbtn
          hidden sm:flex 3xl:hidden justify-center items-center
          w-10 xl:w-14 h-10 xl:h-14
          p-[0.2rem]
          border-solid border-[0.15rem] border-ormawaxyzuaj-white rounded-[0.5rem]
          bg-ormawaxyzuaj-black
          fill-ormawaxyzuaj-white
        ">
          <Icons v-if="hideMNav" name="menu" class="w-[85%]" />
          <Icons v-else name="close" class="w-[85%]" />
        </button>
      </nav>

      <!-- Navbar Mobile -->
      <nav class="
        h-screen w-screen
        mt-16 sm:mt-0
        bg-ormawaxyzuaj-black bg-opacity-95
        transition-all duration-200 ease-in-out
        3xl:-translate-x-full
        " :class="{'-translate-x-full' : hideMNav}">
        <div v-for="nav in navs" class="
          mselection
        ">
          <NuxtLink v-if="!nav.subNavs" @click.prevent="closeMNav" :to="nav.url" class="
            nuxtlink
            flex justify-center items-center
            w-full h-16
            border-solid border-b border-ormawaxyzuaj-white
            hover:bg-ormawaxyzuaj-dark-gray
            text-[1.3rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange font-Poppins-SemiBold
            transition-all duration-100 ease-in-out
          ">
            {{ nav.name }}
          </NuxtLink>
          <div v-else @click.prevent="toggleMSubNav(nav)" class="
            nuxtlink
            flex justify-center items-center gap-2
            w-full h-16
            border-solid border-b border-ormawaxyzuaj-white
            hover:bg-ormawaxyzuaj-dark-gray
            text-[1.3rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange fill-ormawaxyzuaj-white hover:fill-ormawaxyzuaj-orange font-Poppins-SemiBold
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
          <div v-if="nav.subNavs" class="
            h-0
            border-solid border-ormawaxyzuaj-white
            transition-all duration-100 ease-in-out
            overflow-hidden
          " :class="{ 
            'border-b' : !nav.hideSubNav,
            'h-[3rem]' : !nav.hideSubNav && nav.subNavs.length===1,
            'h-[6rem]' : !nav.hideSubNav && nav.subNavs.length===2,
            'h-[9rem]' : !nav.hideSubNav && nav.subNavs.length===3,
            'h-[12rem]' : !nav.hideSubNav && nav.subNavs.length===4,
            'h-[15rem]' : !nav.hideSubNav && nav.subNavs.length===5,
            'h-[18rem]' : !nav.hideSubNav && nav.subNavs.length===6,
            'h-[21rem]' : !nav.hideSubNav && nav.subNavs.length===7,
            'h-[24rem]' : !nav.hideSubNav && nav.subNavs.length===8,
            'h-[27rem]' : !nav.hideSubNav && nav.subNavs.length===9,
            'h-[30rem]' : !nav.hideSubNav && nav.subNavs.length===10,
            }">
            <NuxtLink v-for="subNav in nav.subNavs" :key="`subNav-${subNav.name}`" @click.prevent="closeMNav(); enableSmoothScroll(nav.url);" :to="{ path: nav.url, hash: subNav.hash }" class="
              w-full h-12
              flex justify-center items-center
              hover:bg-ormawaxyzuaj-dark-gray
              text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange font-Poppins-Medium
              transition-all duration-100 ease-in-out
            ">
              {{ subNav.name }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
    <div class="
      grid items-center
      w-full
      h-16 sm:h-0
      pr-4
      overflow-hidden
      transition-all duration-100 ease-in-out
    " :class="{
      'grid-cols-[4.4rem_1fr_min-content]' : is3remFromTopPage && !isXSScreen || is4remFromTopPage,
      'grid-cols-[0_1fr_min-content]' : !(is3remFromTopPage && !isXSScreen || is4remFromTopPage),
    }">
      <div class="
        transition-all duration-100 ease-in-out
        overflow-hidden
      " :class="{
        'w-[4.4rem]' : is3remFromTopPage && !isXSScreen || is4remFromTopPage,
        'w-0' : !(is3remFromTopPage && !isXSScreen || is4remFromTopPage),
      }">
        <NuxtLink to="/" aria-label="Go to the home page" class="
          flex
          w-[4.4rem] h-16 xl:h-24
          rounded-[0_1.5rem_1.5rem_0] xl:rounded-[0_2rem_2rem_0]
          bg-ormawaxyzuaj-white
          transition-all duration-100
        ">
          <img src="/images/organization_logos/Logo_Ormawa_XYZ-UAJ_Simple.webp" alt="" class="
            h-full">
        </NuxtLink>
      </div>
      <NuxtLink to="/" aria-label="Organisasi Mahasiswa XYZ-UAJ" class="
        flex flex-col justify-center
        w-max
        p-4
        overflow-hidden
      " :class="{
        'pl-2' : !(is3remFromTopPage && !isXSScreen || is4remFromTopPage),
      }">
        <p class="
          text-[1.3rem] text-ormawaxyzuaj-white font-Panton-BlackCaps
        ">
          Ormawa XYZ-UAJ
        </p>
      </NuxtLink>
      <button @click.prevent="toggleMNav" aria-label="Mobile Navbar Button" class="
        navmbtn
        flex sm:hidden justify-center items-center
        w-10 xl:w-14 h-10 xl:h-14
        p-[0.2rem]
        border-solid border-[0.15rem] border-ormawaxyzuaj-white rounded-[0.5rem]
        bg-ormawaxyzuaj-black
        fill-ormawaxyzuaj-white
      ">
        <Icons v-if="hideMNav" name="menu" class="w-[85%]" />
        <Icons v-else name="close" class="w-[85%]" />
      </button>
    </div>
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

  const setSubNav = (value:string, index:number, subNavData:any) => {
    if(subNavData) {
      const subNav = document.querySelectorAll<HTMLElement>('.selectionJS')[index].children[1] as HTMLElement;
      if(value==='show') {
        subNav.classList.remove('border-transparent');
        subNav.style.height = `${2.5*subNavData.length}rem`;
        subNav.classList.add('border-ormawaxyzuaj-orange-glow');
        subNav.classList.add('shadow-ormawaxyzuaj-orange-shadow-sm');
      }
      else if (value==='hide') {
        subNav.style.height = '';
        subNav.classList.remove('border-ormawaxyzuaj-orange-glow');
        subNav.classList.remove('shadow-ormawaxyzuaj-orange-shadow-sm');
        subNav.classList.add('border-transparent');
      }
    } 
  }

  const enableSmoothScroll = (url:string) => {
    if (useRoute().path===url) {
      document.documentElement.classList.add('scroll-smooth');
      setTimeout(() => {
        document.documentElement.classList.remove('scroll-smooth');
      }, 300); 
    }
  }

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

  const navs = ref([
    {
      name: 'Beranda',
      url: '/',
      hideSubNav: true,
    },
    {
      name: 'Profil',
      url: '/profile',
      subNavs: [
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
      subNavs: [
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
        @apply border-ormawaxyzuaj-orange-glow shadow-ormawaxyzuaj-orange-shadow-sm text-ormawaxyzuaj-orange;
        svg {
          @apply -rotate-180 fill-ormawaxyzuaj-orange
        }
      }
    }
  }

  .mselection {
    &:hover {
      .nuxtlink {
        @apply bg-ormawaxyzuaj-dark-gray text-ormawaxyzuaj-orange fill-ormawaxyzuaj-orange;
      }
    }
  }

  .navmbtn {
    &:hover {
      @apply border-ormawaxyzuaj-orange-glow shadow-ormawaxyzuaj-orange-shadow-sm;
      svg {
        @apply fill-ormawaxyzuaj-orange;
      }
    }
  }
</style>