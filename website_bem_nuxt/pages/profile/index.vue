<template>
  <div id="body">
    <section id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-bemkmuaj-white
      shadow-bemkmuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 v-if="period" class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-transparent font-Poppins-SemiBold
        [background-size:_400%]
        bg-gradient-to-r from-bemkmuaj-orange via-bemkmuaj-gold via-[25%] to-bemkmuaj-white to-[50%]
        bg-clip-text
        drop-shadow-bemkmuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[slide-fill-animation_1s_ease-in-out] 
      ">
        KABINET {{ period.ministry.toUpperCase() }} #1
      </h1>
      <span v-if="period" class="
        text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-bemkmuaj-black 
        transition-all duration-100 ease-in-out
      ">
        PERIODE {{ period.name }}
      </span>
    </section>
    <section id="intro" class="
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
          flex flex-col items-start gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-white font-Montserrat-ExtraBold 
            drop-shadow-bemkmuaj-white-shadow
          ">
            Visi
          </h2>
          <p v-if="period" class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tl-none
            bg-gradient-to-br from-bemkmuaj-orange to-bemkmuaj-gold
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Medium
          ">
            {{ period.vision }}
          </p>
        </div>
        <div class="
          flex flex-col items-end gap-4
          transition-all duration-500 ease-in-out
        ">
          <h2 class="
            text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-white font-Montserrat-ExtraBold 
            drop-shadow-bemkmuaj-white-shadow
          ">
            Misi
          </h2>
          <ol v-if="period" class="
            flex flex-col gap-2
            w-full lg:w-[80%]
            p-6 pl-9 sm:pl-12
            rounded-[2rem] rounded-tr-none
            bg-gradient-to-bl from-bemkmuaj-orange to-bemkmuaj-gold
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Medium
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
      bg-bemkmuaj-black
      shadow-bemkmuaj-black-shadow
    ">
      <div class="
        container-bemkmuaj
        flex flex-col justify-center items-center gap-16
        transition-all duration-100 ease-in-out
      ">
        <div v-if="period" v-for="department in period.departments" :key="`department-${department.name}`" class="
          flex flex-col gap-4
        ">
          <h2 class="
            bg-gradient-to-b 
            bg-clip-text
            drop-shadow-bemkmuaj-orange-shadow
            text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] text-center text-transparent font-Panton-BlackCaps
            transition-all duration-100
          " :class="{
            'from-bemkmuaj-orange to-bemkmuaj-gold' : department.name==='Ketua dan Wakil Ketua',
            'from-bemkmuaj-orange to-bemkmuaj-white' : department.name!=='Ketua dan Wakil Ketua'
          }">
            {{ (department.name!=='Ketua dan Wakil Ketua'?'Departemen ':'')+department.name }}
          </h2>
          <div class="
            grid grid-cols-1 sm:grid-cols-2 gap-8
          " :class="{
            'justify-center' : department.name==='Ketua dan Wakil Ketua',
            '2xl:grid-cols-3 3xl:grid-cols-4' : department.name !=='Ketua dan Wakil Ketua'
          }">
            <div v-for="member in department.members" :key="`member-${member.nickname}`" class="
              board-member-profile
              flex flex-col justify-self-center
              w-[15rem] h-[23rem]
              border-solid border-4 rounded-[2rem]
            " :class="{
              'border-bemkmuaj-gold hover:shadow-bemkmuaj-gold-shadow' : member.position==='Ketua'||member.position==='Wakil Ketua',
              'col-start-1 sm:col-end-3 2xl:col-end-4 3xl:col-end-5 border-bemkmuaj-orange hover:shadow-bemkmuaj-orange-shadow': member.position==='Koordinator',
              'border-transparent' : member.position==='Staf'
            }">
              <div class="
                relative
                flex justify-center
                w-full h-[17.5rem]
                bg-gradient-to-b from-neutral-800 to-bemkmuaj-white
                shadow-[inset_0_0_2rem_rgba(0,0,0,0.5)]
                rounded-t-[1.6rem]
              ">
                <img :src="`/images/board_members/${member.photo}`" alt="" class="
                  absolute bottom-0
                  w-[90%]
                  transition-all duration-200 ease-in-out
                " />
              </div>
              <div class="
                flex flex-col justify-center items-center
                w-full h-[5.5rem]
                rounded-b-[1.6rem]
              " :class="{
                'bg-gradient-to-b from-bemkmuaj-orange from-[50%] to-bemkmuaj-gold' : member.position==='Ketua',
                'bg-gradient-to-b from-bemkmuaj-orange from-[70%] to-bemkmuaj-gold' : member.position==='Wakil Ketua',
                'bg-bemkmuaj-orange' : member.position==='Koordinator'||member.position==='Staf'
              }">
                <h3 class="
                  drop-shadow-bemkmuaj-black-shadow
                  text-center text-bemkmuaj-white font-Panton-BlackCaps
                  transition-all duration-200 ease-in-out
                " :class="{
                  'text-[1.7rem]' : department.name==='Ketua dan Wakil Ketua',
                  'text-[1rem]' : department.name==='Kesekretariatan'||department.name==='Hubungan Masyarakat',
                  'text-[1.1rem]' : department.name==='Keuangan'||department.name==='Internal',
                  'text-[0.75rem]' : department.name==='Pengembangan Mutu Organisasi'
                }">
                  {{ member.position+(department.name!=='Ketua dan Wakil Ketua'?' Departemen '+department.name:'') }}
                </h3>
                <span class="
                  drop-shadow-bemkmuaj-black-shadow
                  text-[1.3rem] text-center text-bemkmuaj-white font-Montserrat-Medium
                  transition-all duration-200 ease-in-out
                ">
                  {{ member.nickname }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="board-composition" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex justify-center
      w-full
    ">
      <div class="
        container-bemkmuaj
        flex flex-col justify-center items-center gap-4 lg:gap-8
        bg-bemkmuaj-black bg-opacity-75
      ">
        <h2 class="
          text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-center text-bemkmuaj-white font-Montserrat-ExtraBold 
          drop-shadow-bemkmuaj-white-shadow
        ">
          Komposisi Pengurus
        </h2>
        <div v-if="boardComposition" v-for="faculty in boardComposition.faculties" :key="`faculty-${faculty.name}`" class="
          grid grid-cols-[5rem_1fr] sm:grid-cols-[6rem_1fr] lg:grid-cols-[9rem_1fr] justify-start items-center gap-4
          w-full
        ">
          <h3 class="
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-Regular
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
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
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
  title: 'Profile | BEM KM-UAJ',
})

useSeoMeta({
  description: 'Halaman ini menjelaskan tentang profil dari Organisasi Kemahasiswaan BEM KM-UAJ. Halaman ini menampilkan informasi tentang visi, misi, pengurus aktif, dan komposisi pengurus Kabinet Asix BEM KM-UAJ',
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
  const docRef = doc(db, 'periods', '3ncRdPx5QVn3nTq1iM4I');
  onSnapshot(docRef, (snap) => {
    period.value = snap.data();
    boardComposition.value = countComposition();
  });

  window.addEventListener('resize', () => {
    updateScreenSize();
    period.value.departments.forEach((el:any, index:number) => {
      if (index!==0) checkShowingMore(index);
    })
  });
});

const showingMores = ref<boolean[]>([]);

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
    enableSmoothScroll(-16*(23*mulValue + 2*(mulValue-1) + 1), scrollDuration);
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
  updateScreenSize();
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
          @apply text-bemkmuaj-black;
        }
      }      
    }
  }
</style>