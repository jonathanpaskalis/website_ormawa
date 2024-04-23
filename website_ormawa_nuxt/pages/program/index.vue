<template>
  <div>

    <!-- Start program page titile section -->
    <section id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-ormawaxyzuaj-white
      shadow-ormawaxyzuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-ormawaxyzuaj-orange font-Poppins-SemiBold
        drop-shadow-ormawaxyzuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[opacity-fill-animation_1s_ease-in-out]
      ">
        PROGRAM KERJA
      </h1>
    </section>
    <!-- End program page titile section -->
    
    <!-- Start program page program list section -->
    <section title="program-list" class="
      flex justify-center
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col-reverse gap-y-8 lg:gap-y-16
        bg-ormawaxyzuaj-black bg-opacity-75
        shadow-ormawaxyzuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">

        <!-- Start program list -->
        <div v-if="periods" v-for="period in periods" class="
          flex flex-col gap-4
        ">
          <h2 class="
            bg-gradient-to-b from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
            bg-clip-text
            drop-shadow-ormawaxyzuaj-orange-shadow
            text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] text-center text-transparent font-Panton-BlackCaps
            transition-all duration-100
          ">
            {{ period.name }}
          </h2>
          <div class="
            grid grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8 
          ">
            <NuxtLink v-for="program in period.programs" :key="`program-${program.name}`" :to="`/program/${period.name}/${program.nickname}`" :aria-label="`Go to ${program.name} program page`" class="
              flex justify-center items-center justify-self-center
              w-[7rem] xs:w-[10rem] sm:w-[15rem]
              p-4
              border-solid border-2 sm:border-4 border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[2rem]
              bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
              hover:shadow-ormawaxyzuaj-orange-shadow
              transition-all duration-100 ease-in-out
            ">
              <img :src="`/images/periods/${period.name}/program_logos/${program.logo}`" alt="" class="
                w-full h-full
              " />
            </NuxtLink>
          </div>
        </div>
        <!-- End program list -->

      </div>
    </section>
    <!-- End program page program list section -->

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
const { data : periods } = useFetch<any>('/api/periods'); //Server side fetching

import { getDocs, collection } from "firebase/firestore";

onMounted(async() => {
  const { db } = useFirebase();
  const colSnap = await getDocs(collection(db, 'periods')); //Client side fetching
  const periodsTmp = ref<any>([]);  
  colSnap.forEach(doc => {
    if (doc.data().programs) periodsTmp.value.push(doc.data())
  })
  periods.value = periodsTmp.value;
});
// --End data fetching--

</script>

<style lang="scss" scoped>
  
</style>