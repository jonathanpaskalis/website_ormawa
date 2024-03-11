<template>
  <div id="body">
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
    <section id="intro" class="
      flex justify-center
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col gap-y-8 lg:gap-y-16
        bg-ormawaxyzuaj-black bg-opacity-75
        shadow-ormawaxyzuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <div class="
          flex flex-col items-start gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-white-shadow
          ">
            Visi Kabinet
          </h2>
          <p v-if="period" class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tl-none
            bg-gradient-to-br from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Medium
          ">
            {{ period.vision }}
          </p>
        </div>
        <div class="
          flex flex-col items-end gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
            drop-shadow-ormawaxyzuaj-white-shadow
          ">
            Misi Kabinet
          </h2>
          <ol v-if="period" class="
            flex flex-col gap-2
            w-full lg:w-[80%]
            p-6 pl-9 sm:pl-12
            rounded-[2rem] rounded-tr-none
            bg-gradient-to-bl from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
            shadow-ormawaxyzuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Medium
            list-[lower-alpha]
          ">
            <li v-for="(mission, index) in period.missions" :key="`mission-${index}`">
              {{ mission }}
            </li>
        </ol>
        </div>
      </div>
    </section>
    <section id="ministry-structure" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex justify-center
      bg-ormawaxyzuaj-black
      shadow-ormawaxyzuaj-black-shadow
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col justify-center items-center gap-16
        transition-all duration-100 ease-in-out
      ">
        <div v-if="period" v-for="(department, departmentIndex) in period.departments" :key="`department-${department.name}`" class="
          flex flex-col items-center gap-4
        ">
          <h2 class="
            bg-gradient-to-b 
            bg-clip-text
            drop-shadow-ormawaxyzuaj-orange-shadow
            text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] text-center text-transparent font-Panton-BlackCaps
            transition-all duration-100
          " :class="{
            'from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold' : department.name==='Ketua dan Wakil Ketua',
            'from-ormawaxyzuaj-orange to-ormawaxyzuaj-white' : department.name!=='Ketua dan Wakil Ketua'
          }">
            {{ (department.name!=='Ketua dan Wakil Ketua'?'Departemen ':'')+department.name }}
          </h2>
          <div class="
            grid grid-cols-1 sm:grid-cols-2 gap-8
            transition-all duration-[400ms] ease-linear
          " :class="{
            'justify-center' : department.name==='Ketua dan Wakil Ketua',
            '2xl:grid-cols-3 3xl:grid-cols-4' : department.name !=='Ketua dan Wakil Ketua',
          }">
            <MembersPanel v-if="department.name==='Ketua dan Wakil Ketua'" v-for="member in department.members" :key="`member-${member.nickname}`" :department="department" :member="member" />
            <MembersPanel v-else :department="department" :member="department.members[0]" />
          </div>
          <div v-if="department.name!=='Ketua dan Wakil Ketua'" class="
            staffsJS
            grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8
            h-0
            overflow-hidden
            transition-all duration-[400ms] ease-linear
          " :class="{
            'py-4' : department.name !=='Ketua dan Wakil Ketua' && showingMores[departmentIndex],
          }">
            <MembersPanel v-for="member in department.members.slice(1)" :key="`member-${member.nickname}`" :department="department" :member="member" />
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
      </div>
    </section>
    <section id="board-composition" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex justify-center
      w-full
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col justify-center items-center gap-4 lg:gap-8
        bg-ormawaxyzuaj-black bg-opacity-75
      ">
        <h2 class="
          text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-center text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
          drop-shadow-ormawaxyzuaj-white-shadow
        ">
          Komposisi Pengurus
        </h2>
        <div v-if="boardComposition" v-for="faculty in boardComposition.faculties" :key="`faculty-${faculty.name}`" class="
          grid grid-cols-[5rem_1fr] sm:grid-cols-[6rem_1fr] lg:grid-cols-[9rem_1fr] justify-start items-center gap-4
          w-full
        ">
          <h3 class="
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-ormawaxyzuaj-white font-Montserrat-Regular
          ">
            {{ faculty.name }}
          </h3>
          <div :style="`width: calc(${faculty.members}/${boardComposition.maxMembers}*100%)`" class="
            flex items-center
            h-6 sm:h-8 lg:h-12
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
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-ormawaxyzuaj-white font-Montserrat-SemiBold
              drop-shadow-ormawaxyzuaj-black-shadow
            ">
              {{ faculty.members }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Profile | Ormawa ABC-UXYZ',
})

useSeoMeta({
  description: 'Halaman ini menjelaskan tentang profil dari Organisasi Mahasiswa XYZ-UAJ. Halaman ini menampilkan informasi tentang visi, misi, pengurus aktif, dan komposisi pengurus Kabinet Asix Ormawa XYZ-UAJ',
})

definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in',
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      if (from.fullPath === '/') {
        (from.meta.pageTransition as {name:string}).name = 'slide-left';
        (to.meta.pageTransition as {name:string}).name = 'slide-left';
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
  const docRef = doc(db, 'periods', 'rhgFoCvNiLTSr8M3Tpgy');
  onSnapshot(docRef, (snap) => {
    period.value = snap.data();
    boardComposition.value = countComposition();
    nextTick(() => {
      period.value.departments.forEach(() => {
        showingMores.value.push(false);
      })
    })
  });
});

const currentWidth = ref(0);
const showingMores = ref<boolean[]>([]);
const showingMoreFirstTime = ref(true);

const toggleShowingMore = (index:number) => {
  showingMores.value[index]=!showingMores.value[index];
  checkShowingMore(index);
}

const checkShowingMore = (index:number) => {
  const showingMore = showingMores.value[index];

  const divValue = is3XLScreen.value ? 4 : is2XLScreen.value ? 3 : isSmallScreen.value ? 2 : 1;
  const mulValue = Math.ceil((period.value.departments[index].members.length-1)/divValue);
  const staffs = document.querySelectorAll<HTMLElement>('.staffsJS')[index-1] as HTMLElement;

  if (showingMore) staffs.style.height = `${23*mulValue + 2*(mulValue-1) + 1}rem`;
  else {
    staffs.style.height = '';
    const scrollDuration = 400;
    if (!showingMoreFirstTime.value) enableSmoothScroll(-16*(23*mulValue + 2*(mulValue-1) + 1), scrollDuration);
    showingMoreFirstTime.value=false;
  }
}

const enableSmoothScroll = (offsetY:number, duration:number) => {
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

const isSmallScreen = ref(false);
const is2XLScreen = ref(false);
const is3XLScreen = ref(false);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth >= 640;
  is2XLScreen.value = window.innerWidth >= 1536;
  is3XLScreen.value = window.innerWidth >= 1920;
}

onMounted(() => {
  currentWidth.value =  window.innerWidth;

  updateScreenSize();
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
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    updateScreenSize();
    period.value.departments.forEach((el:any, index:number) => {
      if (index!==0) checkShowingMore(index);
    })
  });
})

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

</script>

<style lang="scss" scoped>
  .board-member-profile {
    &:hover {
      div {
        img {
          @apply w-[95%];
        }
        h3, span {
          @apply text-ormawaxyzuaj-black;
        }
      }      
    }
  }
</style>