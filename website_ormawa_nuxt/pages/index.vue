<template>
  <div>

    <!-- Start home page welcome section -->
    <section id="welcome" class="
      relative
      flex
      w-full h-[20rem] md:h-[30rem] xl:h-[45rem]
      transition-all duration-100 ease-in-out
    ">

      <!-- Start welcome carousel -->
      <div ref="welcomeCarousel" class="
        flex flex-col
        w-full h-full
        overflow-hidden
      ">
        <img src="/images/home_welcome_carousel/Kampus_Semanggi.webp" alt="" class="min-w-full min-h-full object-cover transition-opacity duration-1000 ease-in-out" />
        <img src="/images/home_welcome_carousel/Kampus_Pluit.webp" alt="" class="min-w-full min-h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out" />
        <img src="/images/home_welcome_carousel/Kampus_BSD.webp" alt="" class="min-w-full min-h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out" />
      </div>
      <!-- End welcome carousel -->

      <!-- Start welcome carousel cover -->
      <div class="
        absolute
        flex justify-center items-center 
        w-full h-full
        bg-ormawaxyzuaj-gold bg-opacity-[65%]
        shadow-[inset_0_0_20rem_rgba(0,0,0,0.5)]
      ">
        <div class="
          container-ormawaxyzuaj
          flex justify-center items-center
          h-[80%]
          p-4 sm:p-8 md:p-16
          rounded-[2.5rem] md:rounded-[5rem]
          bg-ormawaxyzuaj-white bg-opacity-75
          transition-all duration-100 ease-in-out
        ">
          <div class="
            flex justify-center items-center
            max-w-[50%] h-full
            drop-shadow-ormawaxyzuaj-black-shadow
          ">
            <img src="/images/organization_logos/Logo_Ormawa_XYZ-UAJ.webp" alt="" class="w-full max-h-full" />
          </div>
          <div class="
            flex flex-col justify-center items-center
            drop-shadow-ormawaxyzuaj-black-shadow
            max-w-[50%] h-full
          ">
            <div v-if="period" class="
              flex justify-center
              w-full max-h-full
            ">
              <img :src="`/images/periods/${period.name}/board_members/Foto_Ketua.webp`" alt="" class="w-[40%]" />
              <img :src="`/images/periods/${period.name}/board_members/Foto_Wakil_Ketua.webp`" alt="" class="w-[40%]" />
            </div>
            <h1 class="
              w-full
              p-[0.5rem_10%_0.5rem_10%]
              rounded-[1rem] sm:rounded-[2rem] 
              bg-gradient-to-br from-ormawaxyzuaj-white via-ormawaxyzuaj-gold via-[25%] to-ormawaxyzuaj-orange
              text-[1rem] sm:text-[1.5rem] xl:text-[2.8rem] text-center text-ormawaxyzuaj-white [text-shadow:0_0_0.5rem_rgba(255,255,255,0.5)] font-Panton-BlackCaps
            ">
              SELAMAT DATANG!
            </h1>
          </div>
        </div>
      </div>
      <!-- End welcome carousel cover -->

    </section>
    <!-- End home page welcome section -->

    <!-- Start home page intro section -->
    <section id="intro" class="
      flex justify-center
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col gap-y-8
        bg-ormawaxyzuaj-white bg-opacity-75
        shadow-ormawaxyzuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
      
        <!-- Start Ormawa XYZ-UAJ description -->
        <div class="
          flex flex-col items-end gap-2
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-black font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-black-shadow
          ">
            Ormawa XYZ-UAJ
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-4
            rounded-[1.5rem] rounded-tr-none
            bg-ormawaxyzuaj-black bg-opacity-80
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Regular
          ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus voluptates ab blanditiis,
            sunt beatae quo perferendis, hic aspernatur odio cum. Culpa cupiditate labore dolores ex. Commodi expedita necessitatibus nulla.
          </p>
        </div>
        <!-- End Ormawa XYZ-UAJ description -->

        <!-- Start Ormawa XYZ-UAJ vision -->
        <div class="
          flex flex-col items-start gap-2
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] text-left text-ormawaxyzuaj-black font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-black-shadow
          ">
            Visi Ormawa
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-4
            rounded-[1.5rem] rounded-tl-none
            bg-ormawaxyzuaj-black bg-opacity-80
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Regular
          ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus voluptates ab blanditiis,
            sunt beatae quo perferendis, hic aspernatur odio cum. Culpa cupiditate labore dolores ex. Commodi expedita necessitatibus nulla.
          </p>
        </div>
        <!-- End Ormawa XYZ-UAJ vision -->

        <!-- Start Ormawa XYZ-UAJ mission -->
        <div class="
          flex flex-col items-end gap-2
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-black font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-black-shadow
          ">
            Misi Ormawa
          </h2>
          <ol class="
            flex flex-col gap-2
            w-full lg:w-[80%]
            p-4 pl-7 sm:pl-10
            rounded-[1.5rem] rounded-tr-none
            bg-ormawaxyzuaj-black bg-opacity-80
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Regular
            list-[lower-alpha]
          ">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempora. Modi suscipit sed cumque maiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempora. Modi suscipit sed cumque maiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempora. Modi suscipit sed cumque maiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempora. Modi suscipit sed cumque maiores.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, tempora. Modi suscipit sed cumque maiores.
            </li>
          </ol>
        </div>
        <!-- End Ormawa XYZ-UAJ mission -->

      </div>
    </section>
    <!-- End home page intro section -->

    <!-- Start home page organization structure chart section -->
    <section id="organization-structure-chart" class="
      flex justify-center
      bg-gradient-to-b from-black to-neutral-900
      shadow-ormawaxyzuaj-black-shadow
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col items-center gap-y-8
      ">

        <!-- Start organization structure chart -->
        <h2 class="
          text-[1.5rem] sm:text-[2rem] text-ormawaxyzuaj-white text-center font-Montserrat-SemiBold
          drop-shadow-[0_0_0.5rem_rgba(255,255,255,0.5)]
        ">
          Bagan Struktur Organisasi<br>
          Ormawa XYZ-UAJ
        </h2>
        <div class="w-full">
          <img src="/images/Bagan_Ormawa_XYZ-UAJ.webp" alt="" class="w-full" />
        </div>
        <NuxtLink to="/profile#ministry-structure" aria-label="Go to the profile page" class="
          flex justify-center items-center
          w-28 h-14
          border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[2rem]
          bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
          fill-ormawaxyzuaj-black hover:fill-ormawaxyzuaj-orange
          hover:shadow-ormawaxyzuaj-orange-shadow-sm
          transition-all duration-200 ease-in-out
        ">
          <Icons name="trending_flat" class="h-[1.2rem]"/>
        </NuxtLink>
        <!-- End organization structure chart -->

      </div>
    </section>
    <!-- End home page organization structure chart section -->

    <!-- Start home page program highlight section -->
    <section id="program-highlight" class="
      flex justify-center
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col xl:flex-row items-center xl:justify-between gap-x-8 gap-y-4
        bg-ormawaxyzuaj-white bg-opacity-75
        shadow-ormawaxyzuaj-black-shadow
      ">
        <div class="
          flex flex-col justify-center items-center xl:items-start xl:gap-4
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] text-ormawaxyzuaj-black text-center xl:text-left font-Montserrat-ExtraBold
            drop-shadow-ormawaxyzuaj-black-shadow 
          ">
            Program<br v-if="isXLScreen">
            Kerja
          </h2>
          <NuxtLink v-if="isXLScreen" to="/program" aria-label="Go to the program page" class="
            flex justify-center items-center
            w-28 h-14
            border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[2rem]
            bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
            fill-ormawaxyzuaj-white hover:fill-ormawaxyzuaj-orange
            hover:shadow-ormawaxyzuaj-orange-shadow-sm
            transition-all duration-200 ease-in-out
          ">
            <Icons name="trending_flat" class="h-[1.2rem]"/>
          </NuxtLink>
        </div>

        <!-- Start program carousel -->
        <div v-if="period" class="
          relative
          w-full xl:w-[60%]
          bg-ormawaxyzuaj-black
        ">
          <Carousel :wrap-around="true" :mouse-drag="false" :autoplay="5000">
            <Slide v-for="program in period.programs" :key="`program-${program.name}`">
              <div class="
                carousel__item
                relative
                flex flex-col
                w-full
              ">
                <img :src="`/images/periods/${period.name}/program_documentations/${program.documentation}`" alt="" class="w-full" />
                <img :src="`/images/periods/${period.name}/program_logos/${program.logo}`" alt="" class="
                  absolute bottom-0
                  w-[4.5rem] h-[4rem]
                  p-2 pr-4
                  rounded-r-[1.5rem] 
                  bg-ormawaxyzuaj-white
                " />
                <NuxtLink :to="`/program/${period.name}/${program.nickname}`" class="
                  flex justify-center items-center
                  w-full h-[4rem]
                  px-20
                  bg-ormawaxyzuaj-black 
                  text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange font-Montserrat-Bold
                  transition-all duration-100 ease-in-out
                ">
                  {{ program.nickname }}
                </NuxtLink>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
              <Pagination />
            </template>
          </Carousel>
          <div class="
            absolute top-0 bottom-0 left-0 right-0
            shadow-[inset_0_0_2rem_rgba(0,0,0,0.5)]
            pointer-events-none
          ">
          </div>
        </div>
        <!-- End program carousel -->

        <NuxtLink v-if="!isXLScreen" to="/program" aria-label="Go to the program page" class="
          flex justify-center items-center
          w-28 h-14
          border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[2rem]
          bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
          fill-ormawaxyzuaj-white hover:fill-ormawaxyzuaj-orange
          hover:shadow-ormawaxyzuaj-orange-shadow-sm
          transition-all duration-200 ease-in-out
        ">
          <Icons name="trending_flat" class="h-[1.2rem]"/>
        </NuxtLink>
      </div>
    </section>
    <!-- End home page program highlight section -->

  </div>
</template>

<script setup lang="ts">

// --Start adding head information--
useHead({
  title: 'Ormawa XYZ-UAJ'
})

useSeoMeta({
  description: 'Halaman ini menjelaskan garis besar dari Organisasi Mahasiswa XYZ-Universitas Katolik Indonesia Atma Jaya. Halaman ini menampilkan informasi tentang visi, misi, bagan organisasi, hingga program kerja Ormawa XYZ-UAJ',
})
// --End adding head information--

// --Start data fetching--
const { data : period } = useFetch<any>('/api/period?id=2022-2023'); // Server side fetching

import { doc, onSnapshot } from "firebase/firestore";

onMounted( async () => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', '2022-2023'); // Client side fetching
  onSnapshot(docRef, (snap) => {
    period.value = snap.data();
  });
});
// --End data fetching--

const welcomeCarousel = ref<HTMLDivElement | null>(null); // Welcome carousel reference

// --Start screen size variable(s) and function--
const isXLScreen = ref(false);

const updateScreenSize = () => { // 
  isXLScreen.value = window.innerWidth >= 1280;
}
// --End screen size variable(s) function--

onMounted(() => {
  
  // --Start screen size detection--
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobile = regex.test(navigator.userAgent);
  
  if (isMobile) {
    isXLScreen.value = document.body.clientWidth >= 1280;
  }
  else {
    isXLScreen.value = window.innerWidth >= 1280;
  }

  window.addEventListener('resize', updateScreenSize);
  // --End screen size detection--

  // --Start welcome carousel logic--
  let currentI = 0;

  const welcomeCarouselImages = welcomeCarousel.value!.querySelectorAll('img')

  setInterval(() => {
    welcomeCarouselImages[currentI].classList.add('opacity-0');
    setTimeout(() => {
      welcomeCarouselImages[currentI].classList.remove('min-h-full');
      welcomeCarouselImages[currentI].classList.add('h-0');

      currentI = currentI + 1 >= welcomeCarouselImages.length ? 0 : currentI + 1;

      welcomeCarouselImages[currentI].classList.remove('opacity-0');
      welcomeCarouselImages[currentI].classList.remove('h-0');
      welcomeCarouselImages[currentI].classList.add('min-h-full');
    }, 1000)
  }, 30000)
  // --End welcome carousel logic--
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
})

</script>

<style lang="scss">

  // --Start program carousel style--
  .carousel__next,
  .carousel__prev {
    @apply scale-[150%] lg:scale-[200%];
    @apply border-solid border-[0.1rem] border-ormawaxyzuaj-white hover:border-ormawaxyzuaj-orange-glow rounded-[0.25rem];
    @apply bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100;
    @apply hover:shadow-ormawaxyzuaj-orange;
    @apply text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange;
    @apply transition-all duration-100 ease-in-out;
    @apply opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto
  }

  .carousel__prev{
    @apply left-4;
  }

  .carousel__next{
    @apply right-4;
  }

  .carousel__pagination-button {
    &::after{
      @apply bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-light-gray;
    }
  }

  .carousel__pagination-button {
    &::after{
      @apply bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-light-gray;
    }
  }

  .carousel__pagination-button--active {
    &::after{
      @apply bg-ormawaxyzuaj-orange hover:bg-ormawaxyzuaj-orange-glow;
    }
  }
  // --End program carousel style--

</style>
