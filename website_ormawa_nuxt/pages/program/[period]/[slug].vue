<template>
  <div>
    <section id="title" class="
      flex justify-center items-center gap-4 xs:gap-8 lg:gap-16
      w-full h-24 sm:h-48
      bg-ormawaxyzuaj-white
      shadow-ormawaxyzuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <div v-if="program" class="
        h-full
        py-6 xs:py-4 sm:py-8
        drop-shadow-ormawaxyzuaj-black-shadow 
        animate-[opacity-fill-animation_1s_ease-in-out]
      ">
        <img :src="`/images/program_logos/${program.logo}`" alt="" class="
          h-full
        " />
      </div>
      <h1 v-if="program" class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-ormawaxyzuaj-orange font-Poppins-SemiBold
        drop-shadow-ormawaxyzuaj-black-shadow 
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
        container-ormawaxyzuaj
        flex flex-col items-center gap-y-8 lg:gap-y-16
        bg-ormawaxyzuaj-black bg-opacity-75
        shadow-ormawaxyzuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <div v-if="program" class="
          relative
          w-full sm:w-[85%] lg:w-[75%]
        ">
          <img :src="`/images/program_documentations/${program.documentation}`" class="w-full" />
          <div class="
            absolute inset-0
            shadow-[inset_0_0_2rem_rgba(0,0,0,0.7)]
          ">
          </div>
        </div>
        <div v-if="program" class="
          flex flex-col items-end gap-4
          w-full
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-black-shadow
          ">
            Deskripsi
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-4
            rounded-[1.5rem] rounded-tr-none
            bg-ormawaxyzuaj-white bg-opacity-80
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-black font-Montserrat-Regular
          ">
            {{ program.description }}
          </p>
        </div>
        <div v-if="program" class="
          flex flex-col items-start gap-4
          w-full
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-black-shadow
          ">
            Tujuan
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-4
            rounded-[1.5rem] rounded-tl-none
            bg-ormawaxyzuaj-white bg-opacity-80
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-black font-Montserrat-Regular
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
        <div v-else class="
          h-screen
        ">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Program Kerja | Ormawa XYZ-UAJ'
})

useSeoMeta({
  description: 'Halaman ini menjelaskan program kerja dari Organisasi Mahasiswa XYZ-Unika Atma Jaya. Halaman ini menampilkan informasi tentang program kerja Ormawa XYZ-UAJ yang telah dilaksanakan atau yang akan datang',
})

const { slug } = useRoute().params;

import { doc, onSnapshot } from "firebase/firestore";

const { data : period } = useFetch('/api/period?id=rhgFoCvNiLTSr8M3Tpgy') as any;

const program = ref<any>(null);

watch(period, async () => {
  if (period.value) {
    for (let i=0; i < period.value.programs.length; i++) {
      const el = period.value.programs[i];
      if (el.nickname===slug) {
        program.value = el;
      }
    }
    if (!program.value) isError.value=true;
    useHead({
      title: `${program.value.nickname} | Ormawa XYZ-UAJ`
    })
    useSeoMeta({
      description: `Halaman ini menjelaskan program kerja ${program.value.name} dari Organisasi Mahasiswa XYZ-Unika Atma Jaya. ${program.value.description}`,
    })
  }
})

const isError = ref<boolean>(false);

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', 'rhgFoCvNiLTSr8M3Tpgy');
  onSnapshot(docRef, (snap) => {
    period.value = snap.data();
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