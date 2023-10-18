<template>
  <div>
    <section id="home-welcome" class="
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
        <img src="~/assets/img/home_welcome_carousel/Kampus_Semanggi.webp" alt="" class="min-w-full min-h-full object-cover transition-opacity duration-1000 ease-in-out">
        <img src="~/assets/img/home_welcome_carousel/Kampus_Pluit.webp" alt="" class="min-w-full min-h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out">
        <img src="~/assets/img/home_welcome_carousel/Kampus_BSD.webp" alt="" class="min-w-full min-h-full object-cover opacity-0 transition-opacity duration-1000 ease-in-out">
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
            <img src="~/assets/img/Logo_BEM_KM-UAJ.webp" alt="" class="w-full max-h-full">
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
              <img src="/board_members/Ketua_Angel.png" alt="" class="w-[40%]">
              <img src="/board_members/Wakil_Ketua_Felix.png" alt="" class="w-[40%]">
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
    <section id="home-intro" class="
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
            BEM KM-UAJ
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tr-none
            bg-bemkmuaj-black bg-opacity-80
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Regular
          ">
            Badan Eksekutif Mahasiswa Keluarga Mahasiswa Universitas Katolik Indonesia Atma Jaya
            atau secara singkat BEM KM-UAJ merupakan lembaga eksekutif KM-UAJ
            yang melaksanakan aspirasi mahasiswa Unika Atma Jaya sesuai dengan visi dan misi KM-UAJ.
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
            Visi KM-UAJ
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tl-none
            bg-bemkmuaj-black bg-opacity-80
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Regular
          ">
            Terwujudnya mahasiswa Unika Atma Jaya yang sesuai dengan Nilai Inti Unika Atma Jaya
            yang dapat aktif berkolaborasi, dengan mengembangkan kemampuan untuk berpikir kritis dan
            peduli dengan sesama, agar dapat berguna untuk kehidupan bangsa dan masyarakat
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
            Misi KM-UAJ
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tr-none
            bg-bemkmuaj-black bg-opacity-80
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Regular
          ">
            a. Menampung dan menindaklanjuti aspirasi mahasiswa Unika Atma Jaya.<br><br>
            b. Menanamkan Nilai Inti Unika Atma Jaya, yaitu Kristiani, Unggul, Profesional,
            dan Peduli (KUPP) kepada mahasiswa Unika Atma Jaya.<br><br>
            c. Mengadakan hubungan dan kerja sama dengan lembaga-lembaga di dalam
            maupun di luar Unika Atma Jaya dengan mengingat asas, dasar, dan visi KM–UAJ.<br><br>
            d. Mengupayakan kegiatan kemahasiswaan Unika Atma Jaya baik secara internal
            ataupun eksternal yang dapat meningkatkan kompetensi mahasiswa Unika
            Atma Jaya untuk berpikir kritis secara akademik maupun non-akademik.<br><br>
            e. Mengadakan kegiatan kemahasiswaan Unika Atma Jaya dalam bentuk
            pengabdian masyarakat di Indonesia.
          </p>
        </div>
      </div>
    </section>
    <section id="home-organization-structure-chart" class="
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
          BEM KM-UAJ
        </h2>
        <div class="">
          <img src="~/assets/img/Bagan_BEM_KM-UAJ.webp" alt="" class="w-full">
        </div>
        <NuxtLink to="/profile" class="
          flex justify-center items-center
          w-28 sm:w-32 h-14 sm:h-16
          border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
          bg-bemkmuaj-white hover:bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
          text-bemkmuaj-black hover:text-bemkmuaj-orange
          hover:shadow-bemkmuaj-orange-shadow-sm
          transition-all duration-200 ease-in-out
        ">
          <span class="
            material-symbols-outlined
            scale-[250%] sm:scale-[300%]
          ">
            trending_flat
          </span>
        </NuxtLink>
      </div>
    </section>
    <section v-if="period" id="home-program-highlight" class="
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
          <NuxtLink v-if="isXLScreen" to="/program" class="
            flex justify-center items-center
            w-32 h-16
            border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
            bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
            text-bemkmuaj-white hover:text-bemkmuaj-orange
            hover:shadow-bemkmuaj-orange-shadow-sm
            transition-all duration-200 ease-in-out
          ">
            <span class="
              material-symbols-outlined
              scale-[300%]
            ">
              trending_flat
            </span>
          </NuxtLink>
        </div>
        <div class="
          relative
          w-full xl:w-[60%]
        ">
          <Carousel :wrap-around="true" :mouse-drag="false">
            <Slide v-for="program in period.programs" :key="`program-${program.name}`">
              <div class="
                carousel__item
                relative
                flex flex-col
              ">
                <img :src="program.documentation" alt="">
                <img :src="program.logo" alt="" class="
                  absolute bottom-0
                  w-[4.5rem] h-[4rem]
                  p-2 pr-4
                  rounded-r-[1.5rem] 
                  bg-bemkmuaj-white
                ">
                <NuxtLink to="/program" class="
                  flex justify-start items-center
                  h-[4rem]
                  pl-20
                  bg-bemkmuaj-black 
                  text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-bemkmuaj-white hover:text-bemkmuaj-orange font-Montserrat-Bold
                  transition-all duration-100 ease-in-out
                ">
                  Fesival Mural
                </NuxtLink>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <div class="
            absolute top-0 bottom-0 left-0 right-0
            shadow-[inset_0_0_2rem_rgba(0,0,0,0.5)]
            pointer-events-none
          ">
          </div>
        </div>
        <NuxtLink v-if="!isXLScreen" to="/program" class="
          flex justify-center items-center
          w-28 sm:w-32 h-14 sm:h-16
          border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
          bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
          text-bemkmuaj-white hover:text-bemkmuaj-orange
          hover:shadow-bemkmuaj-orange-shadow-sm
          transition-all duration-200 ease-in-out
        ">
          <span class="
            material-symbols-outlined
            scale-[250%] sm:scale-[300%]
          ">
            trending_flat
          </span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'

useHead({
  title: 'BEM KM-UAJ'
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

const period = ref<any>(null);

import { doc, onSnapshot } from "firebase/firestore";

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', '3ncRdPx5QVn3nTq1iM4I');
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
</style>
