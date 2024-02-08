<template>
  <div>
    <section id="title" class="
      flex justify-center items-center gap-4 xs:gap-8 lg:gap-16
      w-full h-24 sm:h-48
      bg-bemkmuaj-white
      shadow-bemkmuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <div v-if="period" class="
        h-full
        py-6 xs:py-4 sm:py-8
        drop-shadow-bemkmuaj-black-shadow 
        animate-[opacity-fill-animation_1s_ease-in-out]
      ">
        <img :src="program.logo" alt="" class="
          h-full
        ">
      </div>
      <h1 v-if="period" class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-bemkmuaj-orange font-Poppins-SemiBold
        drop-shadow-bemkmuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[opacity-fill-animation_1s_ease-in-out]
      ">
        {{ program.nickname }}
      </h1>
    </section>
    <section id="information" class="
      flex justify-center
    ">
      <div class="
        container-bemkmuaj
        flex flex-col items-center gap-y-8 lg:gap-y-16
        bg-bemkmuaj-black bg-opacity-75
        shadow-bemkmuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <div class="
          relative
          w-full sm:w-[85%] lg:w-[75%]
        ">
          <img v-if="period" :src="program.documentation" class="
            w-full
          "/>
          <div class="
            absolute inset-0
            shadow-[inset_0_0_2rem_rgba(0,0,0,0.7)]
          ">
          </div>
        </div>
        <div class="
          flex flex-col items-end gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-white font-Montserrat-ExtraBold 
            drop-shadow-bemkmuaj-black-shadow
          ">
            Deskripsi
          </h2>
          <p v-if="period" class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tr-none
            bg-bemkmuaj-white bg-opacity-80
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-black font-Montserrat-Regular
          ">
            {{ program.description }}
          </p>
        </div>
        <div class="
          flex flex-col items-start gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-white font-Montserrat-ExtraBold 
            drop-shadow-bemkmuaj-black-shadow
          ">
            Tujuan
          </h2>
          <p v-if="period" class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tr-none
            bg-bemkmuaj-white bg-opacity-80
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-black font-Montserrat-Regular
          ">
          <ul class="
            pl-6
            list-disc
          ">
            <li v-for="(objective, index) in program.objectives" :key="`objective-${index}`">
              {{ objective }}
            </li>
          </ul>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      if (from.fullPath === '/' || from.fullPath === '/profile') {
        (from.meta.pageTransition as {name:string}).name = 'slide-left';
        (to.meta.pageTransition as {name:string}).name = 'slide-left';
      }
      else if (from.fullPath ==='/program') {
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

const { slug } = useRoute().params;

import { doc, onSnapshot } from "firebase/firestore";

const period = ref<any>(null);
const program = ref<any>(null);

const isError = ref<boolean>(false);

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', '3ncRdPx5QVn3nTq1iM4I');
  onSnapshot(docRef, (snap) => {
    period.value = snap.data();
    period.value.programs.forEach((el:any)=> {
      if (el.nickname===slug) {
        program.value = el;
      }
    })
    if (!program.value) isError.value=true;
  });
});

watch(isError, ()=> {
  if (!program.value) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found',
        message: `Page Not Found:${useRoute().fullPath}`,
        fatal: true,
      })
    }
})

</script>

<style scoped>

</style>