<template>
  <div>
    <section id="welcome" class="
      relative
      flex
      w-full h-[20rem] md:h-[30rem] xl:h-[45rem]
      transition-all duration-100 ease-in-out
    ">
      <div ref="welcomeCarousel" class="
        flex flex-col
        w-full h-full
        overflow-hidden
      ">
        <img src="/images/home_welcome_carousel/Kampus_Semanggi.webp" alt="" class="min-w-full min-h-full object-cover transition-opacity duration-1000 ease-in-out" />
        <img src="/images/home_welcome_carousel/Kampus_Pluit.webp" alt="" class="min-w-full min-h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out" />
        <img src="/images/home_welcome_carousel/Kampus_BSD.webp" alt="" class="min-w-full min-h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out" />
      </div>
      <div class="
        absolute
        flex justify-center items-center 
        w-full h-full
        bg-bemkmuaj-gold bg-opacity-[65%]
        shadow-[inset_0_0_20rem_rgba(0,0,0,0.5)]
      ">
        <div class="
          container-bemkmuaj
          flex justify-center items-center
          h-[80%]
          p-4 sm:p-8 md:p-16
          rounded-[2.5rem] md:rounded-[5rem]
          bg-bemkmuaj-white bg-opacity-75
          transition-all duration-100 ease-in-out
        ">
          <div class="
            flex justify-center items-center
            max-w-[50%] h-full
            drop-shadow-bemkmuaj-black-shadow
          ">
            <img src="/images/organization_logos/Logo_BEM_KM-UAJ.webp" alt="" class="w-full max-h-full" />
          </div>
          <div class="
            flex flex-col justify-center items-center
            drop-shadow-bemkmuaj-black-shadow
            max-w-[50%] h-full
          ">
            <div class="
              flex justify-center
              w-full max-h-full
            ">
              <img src="/images/board_members/Foto_Pengurus.webp" alt="" class="w-[40%]" />
              <img src="/images/board_members/Foto_Pengurus.webp" alt="" class="w-[40%]" />
            </div>
            <h1 class="
              w-full
              p-[0.5rem_10%_0.5rem_10%]
              rounded-[1rem] sm:rounded-[2rem] 
              bg-gradient-to-br from-bemkmuaj-white via-bemkmuaj-gold via-[25%] to-bemkmuaj-orange
              text-[1rem] sm:text-[1.5rem] xl:text-[2.8rem] text-center text-bemkmuaj-white [text-shadow:0_0_0.5rem_rgba(255,255,255,0.5)] font-Panton-BlackCaps
            ">
              SELAMAT DATANG!
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section id="intro" class="
      flex justify-center
    ">
      <div class="
        container-bemkmuaj
        flex flex-col gap-y-8 lg:gap-y-16
        bg-bemkmuaj-white bg-opacity-75
        shadow-bemkmuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <div class="
          flex flex-col items-end gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-black font-Montserrat-ExtraBold 
            drop-shadow-bemkmuaj-black-shadow
          ">
            Ormawa UXYZ
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tr-none
            bg-bemkmuaj-black bg-opacity-80
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Regular
          ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus voluptates ab blanditiis,
            sunt beatae quo perferendis, hic aspernatur odio cum. Culpa cupiditate labore dolores ex. Commodi expedita necessitatibus nulla.
          </p>
        </div>
        <div class="
          flex flex-col items-start gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-left text-bemkmuaj-black font-Montserrat-ExtraBold 
            drop-shadow-bemkmuaj-black-shadow
          ">
            Visi Ormawa
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tl-none
            bg-bemkmuaj-black bg-opacity-80
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Regular
          ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus voluptates ab blanditiis,
            sunt beatae quo perferendis, hic aspernatur odio cum. Culpa cupiditate labore dolores ex. Commodi expedita necessitatibus nulla.
          </p>
        </div>
        <div class="
          flex flex-col items-end gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-black font-Montserrat-ExtraBold 
            drop-shadow-bemkmuaj-black-shadow
          ">
            Misi Ormawa
          </h2>
          <ol class="
            flex flex-col gap-2
            w-full lg:w-[80%]
            p-6 pl-9 sm:pl-12
            rounded-[2rem] rounded-tr-none
            bg-bemkmuaj-black bg-opacity-80
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Regular
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
      </div>
    </section>
    <section id="organization-structure-chart" class="
      flex justify-center
      bg-gradient-to-b from-black to-neutral-900
      shadow-bemkmuaj-black-shadow
    ">
      <div class="
        container-bemkmuaj
        flex flex-col items-center gap-y-8 lg:gap-y-16
      ">
        <h2 class="
          text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-bemkmuaj-white text-center font-Montserrat-SemiBold
          drop-shadow-[0_0_0.5rem_rgba(255,255,255,0.5)]
        ">
          Bagan Struktur Organisasi<br>
          Ormawa UX
        </h2>
        <div class="w-full">
          <img src="/images/Bagan_BEM_KM-UAJ.webp" alt="" class="w-full" />
        </div>
        <NuxtLink to="/profile" aria-label="Go to the profile page" class="
          flex justify-center items-center
          w-28 sm:w-32 h-14 sm:h-16
          border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
          bg-bemkmuaj-white hover:bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
          fill-bemkmuaj-black hover:fill-bemkmuaj-orange
          hover:shadow-bemkmuaj-orange-shadow-sm
          transition-all duration-200 ease-in-out
        ">
          <Icons name="trending_flat" class="h-[1.25rem] sm:h-[1.5rem]"/>
        </NuxtLink>
      </div>
    </section>
    <section id="program-highlight" class="
      flex justify-center
    ">
      <div class="
        container-bemkmuaj
        flex flex-col xl:flex-row items-center xl:justify-between gap-x-8 gap-y-4
        bg-bemkmuaj-white bg-opacity-75
        shadow-bemkmuaj-black-shadow
      ">
        <div class="
          flex flex-col justify-center items-center xl:items-start xl:gap-8
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-bemkmuaj-black text-center xl:text-left font-Montserrat-ExtraBold
            drop-shadow-bemkmuaj-black-shadow 
          ">
            Program<br v-if="isXLScreen">
            Kerja
          </h2>
          <NuxtLink v-if="isXLScreen" to="/program" aria-label="Go to the program page" class="
            flex justify-center items-center
            w-32 h-16
            border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
            bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
            fill-bemkmuaj-white hover:fill-bemkmuaj-orange
            hover:shadow-bemkmuaj-orange-shadow-sm
            transition-all duration-200 ease-in-out
          ">
            <Icons name="trending_flat" class="h-[1.5rem]"/>
          </NuxtLink>
        </div>
        <div v-if="period" class="
          relative
          w-full xl:w-[60%]
          bg-bemkmuaj-black
        ">
          <Carousel :wrap-around="true" :mouse-drag="false" :autoplay="5000">
            <Slide v-for="program in period.programs" :key="`program-${program.name}`">
              <div class="
                carousel__item
                relative
                flex flex-col
                w-full
              ">
                <img :src="`/images/program_documentations/${program.documentation}`" alt="" class="w-full" />
                <img :src="`/images/program_logos/${program.logo}`" alt="" class="
                  absolute bottom-0
                  w-[4.5rem] h-[4rem]
                  p-2 pr-4
                  rounded-r-[1.5rem] 
                  bg-bemkmuaj-white
                " />
                <NuxtLink :to="`/program/${period.name}/${program.nickname}`" class="
                  flex justify-center items-center
                  w-full h-[4rem]
                  px-20
                  bg-bemkmuaj-black 
                  text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Montserrat-Bold
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
        <NuxtLink v-if="!isXLScreen" to="/program" aria-label="Go to the program page" class="
          flex justify-center items-center
          w-28 sm:w-32 h-14 sm:h-16
          border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
          bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
          fill-bemkmuaj-white hover:fill-bemkmuaj-orange
          hover:shadow-bemkmuaj-orange-shadow-sm
          transition-all duration-200 ease-in-out
        ">
          <Icons name="trending_flat" class="h-[1.25rem] sm:h-[1.5rem]"/>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

useHead({
  title: 'Ormawa UXYZ'
})

useSeoMeta({
  description: 'Halaman ini menjelaskan garis besar dari Organisasi Kemahasiswaan Universitas XYZ. Halaman ini menampilkan informasi tentang visi, misi, bagan organisasi, hingga program kerja Ormawa UXYZ',
})

definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in',
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      (from.meta.pageTransition as { name: string }).name = 'slide-right';
      (to.meta.pageTransition as { name: string }).name = 'slide-right';
    }
  }
})

const welcomeCarousel = ref<HTMLDivElement | null>(null);

import { doc, onSnapshot } from "firebase/firestore";

const period = ref<any>(null);

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', 'rhgFoCvNiLTSr8M3Tpgy');
  onSnapshot(docRef, (snap) => {
      period.value = snap.data();
  });
});

onMounted(() => {
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

  isXLScreen.value = window.innerWidth >= 1280;
  window.addEventListener('resize', updateScreenSize)
})

defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  }
})

const isXLScreen = ref(false);

const updateScreenSize = () => {
  isXLScreen.value = window.innerWidth >= 1280;
}

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
})

</script>

<style lang="scss">
  .carousel__next,
  .carousel__prev {
    @apply scale-[150%] lg:scale-[200%];
    @apply border-solid border-[0.1rem] border-bemkmuaj-white hover:border-bemkmuaj-orange-glow rounded-[0.25rem];
    @apply bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100;
    @apply hover:shadow-bemkmuaj-orange;
    @apply text-bemkmuaj-white hover:text-bemkmuaj-orange;
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
      @apply bg-bemkmuaj-white hover:bg-bemkmuaj-light-gray;
    }
  }

  .carousel__pagination-button {
    &::after{
      @apply bg-bemkmuaj-white hover:bg-bemkmuaj-light-gray;
    }
  }

  .carousel__pagination-button--active {
    &::after{
      @apply bg-bemkmuaj-orange hover:bg-bemkmuaj-orange-glow;
    }
  }
</style>
