<template>
  <div>
    <section id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-bemkmuaj-white
      shadow-bemkmuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-bemkmuaj-orange font-Poppins-SemiBold
        drop-shadow-bemkmuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[opacity-fill-animation_1s_ease-in-out]
      ">
        PROGRAM KERJA
      </h1>
    </section>
    <section v-if="period" title="program-list" class="
      flex justify-center
    ">
      <div class="
        container-bemkmuaj
        flex flex-col gap-y-8 lg:gap-y-16
        bg-bemkmuaj-black bg-opacity-75
        shadow-bemkmuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <div class="
          flex flex-col gap-4
        ">
          <h2 class="
            bg-gradient-to-b from-bemkmuaj-orange to-bemkmuaj-gold
            bg-clip-text
            drop-shadow-bemkmuaj-orange-shadow
            text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] text-center text-transparent font-Panton-BlackCaps
            transition-all duration-100
          ">
            {{ period.name }}
          </h2>
          <div class="
            grid grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8 
          ">
            <NuxtLink :to="`/program/${period.name}/${program.name}`" v-for="program in period.programs" :key="`program-${program.name}`" class="
              flex justify-center items-center justify-self-center
              w-[7rem] xs:w-[10rem] sm:w-[15rem]
              p-4
              border-solid border-2 sm:border-4 border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
              bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
              hover:shadow-bemkmuaj-orange-shadow
              transition-all duration-200 ease-in-out
            ">
              <img :src="program.logo" alt="" class="
                w-full h-full
              ">
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Program | BEM KM-UAJ'
})

definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      if (from.fullPath === '/' || from.fullPath === '/profile') {
        (from.meta.pageTransition as {name:string}).name = 'slide-left';
        (to.meta.pageTransition as {name:string}).name = 'slide-left';
      }
      else if (from.fullPath.slice(0,8) ==='/program') {
        (from.meta.pageTransition as {name:string}).name = 'fade';
        (to.meta.pageTransition as {name:string}).name = 'fade';
      }
      else {
        (from.meta.pageTransition as {name:string}).name = 'slide-right';
        (to.meta.pageTransition as {name:string}).name = 'slide-right';
      }
    }
  }
})

import { doc, onSnapshot } from "firebase/firestore";

const period = ref<any>(null);

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', '3ncRdPx5QVn3nTq1iM4I');
  onSnapshot(docRef, (snap) => {
      period.value = snap.data();
  });
});

</script>

<style lang="scss" scoped>
  
</style>