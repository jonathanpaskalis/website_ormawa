<template>
  <div>
    
    <!-- Start program slug page title section -->
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
        <img :src="`/images/periods/${period.name}/program_logos/${program.logo}`" alt="" class="
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
    <!-- End program slug page title section -->

    <!-- Start program slug page information section -->
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

        <!-- Start program documentation -->
        <div v-if="program" class="
          relative
          w-full sm:w-[85%] lg:w-[75%]
        ">
          <img :src="`/images/periods/${period.name}/program_documentations/${program.documentation}`" alt="" class="w-full" />
          <div class="
            absolute inset-0
            shadow-[inset_0_0_2rem_rgba(0,0,0,0.7)]
          ">
          </div>
        </div>
        <!-- End program documentation -->

        <!-- Start program description -->
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
        <!-- End program description -->

        <!-- Start program objective -->
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
        <!-- End program objective -->

      </div>
    </section>
    <!-- End program slug page information section -->

  </div>
</template>

<script setup lang="ts">

// --Start adding head information--
useHead({
  title: 'Program Kerja | Ormawa XYZ-UAJ'
})

useSeoMeta({
  description: 'Halaman ini menjelaskan program kerja dari Organisasi Mahasiswa XYZ-Unika Atma Jaya. Halaman ini menampilkan informasi tentang program kerja Ormawa XYZ-UAJ yang telah dilaksanakan atau yang akan datang',
})
// --End adding head information--

// --Start data fetching--
const periodName = useRoute().path.split('/')[2];
const { slug: programName } = useRoute().params;
const { data : program } = useFetch<any>(`/api/program?id=${periodName}&programName=${programName}`); // Server side fetching
const { data : period } = useFetch<any>(`/api/period?id=${periodName}`); // Server side fetching

const throw404Error = () => {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    message: `Page Not Found:${useRoute().fullPath}`,
    fatal: true,
  })
} 

watchEffect(() => {
  if (program.value) {
    useHead({
      title: `${program.value.nickname} | Ormawa XYZ-UAJ`,
    })
    useSeoMeta({
      description: `Halaman ini menjelaskan program kerja ${program.value.name} dari Organisasi Mahasiswa XYZ-Unika Atma Jaya. ${program.value.description}`,
    })
  }
  else if (program.value === undefined || period.value === undefined) {
    throw404Error();
  }
})

import { doc, onSnapshot } from "firebase/firestore";

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', periodName); // Client side fetching
  onSnapshot(docRef, (snap) => {
    if (snap.exists()) {
      period.value = snap.data();
      const programs = period.value.programs;
      const programTmp = ref<any>(null);
      for (let i=0; i < programs.length; i++) {
        if (programName===programs[i].name) programTmp.value = programs[i];
      }
      if (!programTmp) throw404Error();
      program.value = programTmp.value;
    }
    else {
      throw404Error();
    }
  });
});
// --End data fetching--

</script>

<style scoped>

</style>