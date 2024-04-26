<template>
  <div id="body">

    <!-- Start profile page title section -->
    <section id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-ormawaxyzuaj-white
      shadow-ormawaxyzuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 v-if="period" class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-transparent font-Poppins-SemiBold
        [background-size:_400%]
        bg-gradient-to-r from-ormawaxyzuaj-orange via-ormawaxyzuaj-gold via-[25%] to-ormawaxyzuaj-white to-[50%]
        bg-clip-text
        drop-shadow-ormawaxyzuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[slide-fill-animation_1s_ease-in-out] 
      ">
        KABINET {{ period.ministry.toUpperCase() }} #1
      </h1>
      <span v-if="period" class="
        text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-ormawaxyzuaj-black 
        transition-all duration-100 ease-in-out
      ">
        PERIODE {{ period.name }}
      </span>
    </section>
    <!-- End profile page title section -->

    <!-- Start profile page intro section -->
    <section id="intro" class="
      flex justify-center
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col gap-y-8
        bg-ormawaxyzuaj-black bg-opacity-75
        shadow-ormawaxyzuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">

        <!-- Start ministry vision -->
        <div v-if="period" class="
          flex flex-col items-start gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-white-shadow
          ">
            Visi Kabinet
          </h2>
          <p class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tl-none
            bg-gradient-to-br from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Medium
          ">
            {{ period.vision }}
          </p>
        </div>
        <!-- End ministry vision -->

        <!-- Start ministry mission -->
        <div v-if="period" class="
          flex flex-col items-end gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-white-shadow
          ">
            Misi Kabinet
          </h2>
          <ol class="
            flex flex-col gap-2
            w-full lg:w-[80%]
            p-6 pl-9 sm:pl-12
            rounded-[2rem] rounded-tr-none
            bg-gradient-to-bl from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Medium
            list-[lower-alpha]
          ">
            <li v-for="(mission, index) in period.missions" :key="`mission-${index}`">
              {{ mission }}
            </li>
        </ol>
        </div>
        <!-- End ministry mission -->

      </div>
    </section>
    <!-- End profile page intro section -->
    
    <!-- Start profile page ministry structure section -->
    <section id="ministry-structure" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex justify-center
      bg-ormawaxyzuaj-black
      shadow-ormawaxyzuaj-black-shadow
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col justify-center items-center gap-8
        transition-all duration-100 ease-in-out
      ">

        <!-- Start ministry departments -->
        <div v-if="period" v-for="(department, departmentIndex) in period.departments" :key="`department-${department.name}`" class="
          flex flex-col items-center gap-4
        ">
          <h2 class="
            bg-gradient-to-b 
            bg-clip-text
            drop-shadow-ormawaxyzuaj-orange-shadow
            text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] text-center text-transparent font-Panton-BlackCaps
            transition-all duration-100
          " :class="{
            'from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold' : department.name==='Ketua dan Wakil Ketua',
            'from-ormawaxyzuaj-orange to-ormawaxyzuaj-white' : department.name!=='Ketua dan Wakil Ketua'
          }">
            {{ (department.name!=='Ketua dan Wakil Ketua'?'Departemen ':'')+department.name }}
          </h2>
          <div class="
            
            transition-all duration-[400ms] ease-linear
          " :class="{
            'grid grid-cols-2 justify-center gap-8' : department.name==='Ketua dan Wakil Ketua',
          }">
            <MembersPanel v-if="department.name==='Ketua dan Wakil Ketua'" v-for="member in department.members" :key="`member-${member.nickname}`" :name="period.name" :department="department" :member="member" />
            <MembersPanel v-else :name="period.name" :department="department" :member="department.members[0]" />
          </div>
          <div v-if="department.name!=='Ketua dan Wakil Ketua'" class="
            staffsJS
            grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8
            h-0
            overflow-hidden
            transition-all duration-[400ms] ease-linear
          " :class="{
            'py-4' : department.name !=='Ketua dan Wakil Ketua' && showingMores[departmentIndex],
          }">
            <MembersPanel v-for="member in department.members.slice(1)" :key="`member-${member.nickname}`" :name="period.name" :department="department" :member="member" />
          </div>
          <button v-if="department.name!=='Ketua dan Wakil Ketua'" @click.prevent="toggleShowingMore(departmentIndex)" class="
            flex justify-center items-center
            w-[12rem] xs:w-[15rem] sm:w-[18rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
            border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
            bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
            hover:shadow-ormawaxyzuaj-orange-shadow-sm
            text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange
            transition-all duration-100 ease-in-out
          ">
            <span v-if="showingMores[departmentIndex]" class="font-Panton-BlackCaps">Tampilkan Lebih Sedikit</span>
            <span v-else class="font-Panton-BlackCaps">Tampilkan Lebih Banyak</span>
          </button>
        </div>
        <!-- End ministry departments -->

      </div>
    </section>
    <!-- End profile page ministry structure section -->

    <!-- Start profile page board composition section -->
    <section id="board-composition" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex justify-center
      w-full
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col justify-center items-center gap-4
        bg-ormawaxyzuaj-black bg-opacity-75
      ">
        <h2 class="
          text-[1.5rem] sm:text-[2rem] text-center text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
          drop-shadow-ormawaxyzuaj-white-shadow
        ">
          Komposisi Pengurus
        </h2>

        <!-- Start board composition graph -->
        <div v-if="boardComposition" v-for="faculty in boardComposition.faculties" :key="`faculty-${faculty.name}`" class="
          grid grid-cols-[5rem_1fr] sm:grid-cols-[6rem_1fr] lg:grid-cols-[9rem_1fr] justify-start items-center gap-4
          w-full
        ">
          <h3 class="
            text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white font-Montserrat-Regular
          ">
            {{ faculty.name }}
          </h3>
          <div :style="`width: calc(${faculty.members}/${boardComposition.maxMembers}*100%)`" class="
            flex items-center
            h-6 sm:h-8
            transition-all duration-500 ease-in-out
          " :class="{
            'bg-uaj-feb' : faculty.name==='FEB',
            'bg-uaj-fiabikom' : faculty.name==='FIABIKOM',
            'bg-uaj-fpb' : faculty.name==='FPB',
            'bg-uaj-ft' : faculty.name==='FT',
            'bg-uaj-fh' : faculty.name==='FH',
            'bg-uaj-fkik' : faculty.name==='FKIK',
            'bg-uaj-fp' : faculty.name==='FP',
            'bg-uaj-ftb' : faculty.name==='FTB',
          }">
            <span class="
              pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white font-Montserrat-SemiBold
              drop-shadow-ormawaxyzuaj-black-shadow
            ">
              {{ faculty.members }}
            </span>
          </div>
        </div>
        <div v-else class="
          h-[7rem] xs:h-[9rem] sm:h-[17rem] lg:h-[19rem] 2xl:h-[24rem]
        ">
        </div>
        <!-- End board composition graph -->

      </div>
    </section>
    <!-- End profile page board composition section -->

  </div>
</template>

<script setup lang="ts">

// --Start adding head information--
useHead({
  title: 'Profil | Ormawa XYZ-UAJ',
})

useSeoMeta({
  description: 'Halaman ini menjelaskan tentang profil dari Organisasi Mahasiswa XYZ-Unika Atma Jaya. Halaman ini menampilkan informasi tentang visi, misi, pengurus aktif, dan komposisi pengurus Kabinet Asix Ormawa XYZ-UAJ',
})
// --End adding head information--

// --Start board composition logic--
const countComposition = () => {
  const boardComposition = {
    faculties: [
      {
        name: 'FEB',
        members: 0,
        widthClass: '',
      },
      {
        name: 'FIABIKOM',
        members: 0,
        widthClass: '',
      },
      {
        name: 'FPB',
        members: 0,
        widthClass: '',
      },
      {
        name: 'FT',
        members: 0,
        widthClass: '',
      },
      {
        name: 'FH',
        members: 0,
        widthClass: '',
      },
      {
        name: 'FKIK',
        members: 0,
        widthClass: '',
      },
      {
        name: 'FP',
        members: 0,
        widthClass: '',
      },
      {
        name: 'FTB',
        members: 0,
        widthClass: '',
      },
    ],
    maxMembers: 0,
  }

    period.value?.departments.forEach((department:any) => {
      department.members.forEach((member:any) => {
        if (member.faculty === 'FEB') boardComposition.faculties[0].members++;
        if (member.faculty === 'FIABIKOM') boardComposition.faculties[1].members++;
        if (member.faculty === 'FPB') boardComposition.faculties[2].members++;
        if (member.faculty === 'FT') boardComposition.faculties[3].members++;
        if (member.faculty === 'FH') boardComposition.faculties[4].members++;
        if (member.faculty === 'FKIK') boardComposition.faculties[5].members++;
        if (member.faculty === 'FP') boardComposition.faculties[6].members++;
        if (member.faculty === 'FTB') boardComposition.faculties[7].members++;
      });
    })

  boardComposition.faculties.forEach((faculty) => {
    if (faculty.members > boardComposition.maxMembers) boardComposition.maxMembers = faculty.members
  })

  return boardComposition;
}

const boardComposition = ref<{
  faculties: { name: string; members: number; widthClass: string }[];
  maxMembers: number;
} | null>(null);
// --End board composition logic--

// --Start board members display logic--
const currentWidth = ref(0);
const showingMores = ref<boolean[]>([]);
const showingMoreFirstTime = ref(true);

const toggleShowingMore = (index:number) => { // Function for toggling board members display
  showingMores.value[index]=!showingMores.value[index];
  checkShowingMore(index);
}

const checkShowingMore = (index:number) => { // Function for checking board members display height
  const showingMore = showingMores.value[index];

  const divValue = is3XLScreen.value ? 5 : is2XLScreen.value ? 4 : isSmallScreen.value ? 3 : 2;
  const mulValue = Math.ceil((period.value.departments[index].members.length-1)/divValue);
  const heightValue = isSmallScreen.value ? 17 : 12;
  const staffs = document.querySelectorAll<HTMLElement>('.staffsJS')[index-1] as HTMLElement;

  if (showingMore) staffs.style.height = `${heightValue*mulValue + 2*(mulValue-1) + 1}rem`;
  else {
    if (staffs) {
      staffs.style.height = '';
      const scrollDuration = 400;
      if (!showingMoreFirstTime.value) enableSmoothScroll(-16*(heightValue*mulValue + 2*(mulValue-1) + 1), scrollDuration);
      showingMoreFirstTime.value=false;
    }
  }
}

const enableSmoothScroll = (offsetY:number, duration:number) => { // Function for smooth animation when board members display toggled
  const startingY = window.scrollY;
  const targetY = startingY + offsetY;
  const diff = targetY - startingY;
  let start:number;

  function step(timestamp:number) {
    if (!start) {
      start = timestamp;
    }

    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
// --End board members display logic--

// --Start data fetching--
const { data: period } = useFetch<any>('/api/period?id=2022-2023'); // Server side fetching

watchEffect(() => { // Board composition data watcher
  if (period.value) {
    boardComposition.value = countComposition();
    period.value.departments.forEach(() => {
      showingMores.value.push(false);
    })
  }
})

import { doc, onSnapshot } from "firebase/firestore";

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', '2022-2023'); // Client side fetching
  onSnapshot(docRef, (snap) => {
    period.value = snap.data();
  });
});
// --End data fetching--

// --Start screen size variable(s) and function--
const isSmallScreen = ref(false);
const is2XLScreen = ref(false);
const is3XLScreen = ref(false);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth >= 640;
  is2XLScreen.value = window.innerWidth >= 1536;
  is3XLScreen.value = window.innerWidth >= 1920;
}
// --End screen size variable(s) and function--

onMounted(() => {

  // --Start screen size detection--
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  const isMobile = regex.test(navigator.userAgent);

  if (isMobile) {
    isSmallScreen.value = document.body.clientWidth >= 640;
    is2XLScreen.value = document.body.clientWidth >= 1536;
    is3XLScreen.value = document.body.clientWidth >= 1920;
    currentWidth.value =  document.body.clientWidth;
  }
  else {
    isSmallScreen.value = window.innerWidth >= 640;
    is2XLScreen.value = window.innerWidth >= 1536;
    is3XLScreen.value = window.innerWidth >= 1920;
    currentWidth.value =  window.innerWidth;
  }

  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    if (newWidth!==currentWidth.value) {
      currentWidth.value=newWidth;
      updateScreenSize();
      period.value.departments.forEach((el:any, index:number) => {
        if (index!==0) checkShowingMore(index);
      })
    }
  });
  // --End screen size detection--

})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    const newWidth = window.innerWidth;
    if (newWidth!==currentWidth.value) {
      currentWidth.value=newWidth;
      updateScreenSize();
      period.value.departments.forEach((el:any, index:number) => {
        if (index!==0) checkShowingMore(index);
      })
    }
  });
})



</script>

<style lang="scss" scoped>

</style>