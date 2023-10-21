<template>
  <div ref="electionPage">
    <section v-if="period" id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-bemkmuaj-black
      shadow-bemkmuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-transparent font-Poppins-SemiBold
        [background-size:_400%]
        bg-gradient-to-r from-bemkmuaj-orange via-bemkmuaj-gold via-[25%] to-bemkmuaj-black to-[50%]
        bg-clip-text
        drop-shadow-bemkmuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[slide-fill-animation_1s_ease-in-out] 
      ">
        PEMILIHAN UMUM
      </h1>
      <span class="
        text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-bemkmuaj-white
        transition-all duration-100 ease-in-out
      ">
        PERIODE {{ period.name }}
      </span>
    </section>
    <section v-if="period" id="intro" class="
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
          grid grid-cols-2
          w-full
        ">
          <div v-for="candidate in period.candidates" class="
            paslon
            flex flex-col items-center gap-y-8 lg:gap-y-16
            border-bemkmuaj-white
            [background-size:_200%]
            from-bemkmuaj-white to-transparent to-[50%]
            transition-all duration-100 ease-in-out
          " :class="{
            'border-r rounded-tl-[1.5rem] rounded-bl-[1.5rem] bg-left hover:bg-right bg-gradient-to-l' : candidate.number === '1',
            'border-l rounded-tr-[1.5rem] rounded-br-[1.5rem] bg-right hover:bg-left bg-gradient-to-r' : candidate.number === '2',
          }">
            <span class="
              paslon-number
              w-full
              px-4
              bg-bemkmuaj-black bg-opacity-0
              text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-bemkmuaj-white text-center font-Panton-BlackCaps
            " :class="{
              'rounded-tl-[1rem]' : candidate.number === '1',
              'rounded-tr-[1rem]' : candidate.number === '2',
            }">
              PASLON {{ candidate.number }}
            </span>
            <div class="
              flex justify-center items-end
              h-24 xs:h-32 sm:h-48 2xl:h-72
              transition-all duration-100 ease-in-out
            " :class="{
              'flex-row-reverse' : candidate.number==='2'
            }">
              <img src="../../assets/img/election/person.png" alt="" class="
                cawaket
                w-[30%] h-min
                transition-all duration-100 ease-in-out
              ">
              <img src="../../assets/img/election/person.png" alt="" class="
                caket
                w-[50%] h-min
                transition-all duration-100 ease-in-out
              ">
            </div>
            <div class="
              paslon-name
              flex flex-col items-center
              w-full
              px-4
              bg-bemkmuaj-orange bg-opacity-0
              transition-all duration-100 ease-in-out
            " :class="{
              'rounded-bl-[1rem]' : candidate.number === '1',
              'rounded-br-[1rem]' : candidate.number === '2',
            }">
              <span v-for="member in candidate.members" class="
                text-center text-bemkmuaj-white font-Montserrat-Medium
              " :class="{
                'text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem]' : member.position==='Calon Ketua',
                'text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem]' : member.position==='Calon Wakil Ketua',
              }">
                {{ member.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="period" id="vision-mission" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex flex-col items-center
      shadow-bemkmuaj-black-shadow
    ">
      <div class="
        w-full
        pt-4 lg:pt-8
        bg-bemkmuaj-black
      ">
        <h2 class="
          bg-gradient-to-b from-bemkmuaj-orange to-bemkmuaj-gold
          bg-clip-text
          drop-shadow-bemkmuaj-orange-shadow
          text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] text-center text-transparent font-Panton-BlackCaps
          transition-all duration-100
        ">
          VISI
        </h2>
      </div>
      <div class="
        flex justify-center
        w-full
        bg-gradient-to-b from-bemkmuaj-black to-bemkmuaj-dark-gray
      ">
        <div class="
          container-bemkmuaj
          flex flex-col justify-center gap-8 lg:gap-16
          transition-all duration-100 ease-in-out
        ">
          <div v-for="candidate in period.candidates" class="
            flex flex-col gap-4
            transition-all duration-500 ease-in-out
          " :class="{
            'items-start' : candidate.number==='1',
            'items-end' : candidate.number==='2',
          }">
            <h3 class="
              text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-white font-Montserrat-ExtraBold 
              drop-shadow-bemkmuaj-white-shadow
            ">
              Pasangan Calon {{ candidate.number }}
            </h3>
            <p class="
              w-full lg:w-[80%]
              p-6
              rounded-[2rem]
              from-bemkmuaj-orange to-bemkmuaj-gold
              shadow-bemkmuaj-black-shadow
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Medium
            " :class="{
              'rounded-tl-none bg-gradient-to-br' : candidate.number==='1',
              'rounded-tr-none bg-gradient-to-bl' : candidate.number==='2',
            }">
              {{ candidate.vision }}
            </p>
          </div>
        </div>
      </div>
      <div class="
        w-full
        pt-4 lg:pt-8
        bg-bemkmuaj-dark-gray
      ">
        <h2 class="
          bg-gradient-to-b from-bemkmuaj-orange to-bemkmuaj-gold
          bg-clip-text
          drop-shadow-bemkmuaj-orange-shadow
          text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] text-center text-transparent font-Panton-BlackCaps
          transition-all duration-100
        ">
          MISI
        </h2>
      </div>
      <div class="
        flex justify-center
        w-full
        bg-gradient-to-b from-bemkmuaj-dark-gray to-bemkmuaj-black
      ">
        <div class="
          container-bemkmuaj
          flex flex-col justify-center gap-8 lg:gap-16
          transition-all duration-100 ease-in-out
        ">
          <div v-for="candidate in period.candidates" class="
            flex flex-col gap-4
            transition-all duration-500 ease-in-out
          " :class="{
            'items-start' : candidate.number==='1',
            'items-end' : candidate.number==='2',
          }">
            <h3 class="
              text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-white font-Montserrat-ExtraBold 
              drop-shadow-bemkmuaj-white-shadow
            ">
              Pasangan Calon {{ candidate.number }}
            </h3>
            <p class="
              w-full lg:w-[80%]
              p-6
              rounded-[2rem]
              from-bemkmuaj-orange to-bemkmuaj-gold
              shadow-bemkmuaj-black-shadow
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Medium
            " :class="{
              'rounded-tl-none bg-gradient-to-br' : candidate.number==='1',
              'rounded-tr-none bg-gradient-to-bl' : candidate.number==='2',
            }">
              {{ candidate.mission }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section v-if="period" id="program" class="
      flex justify-center
      ">
      <div class="
        container-bemkmuaj
        flex flex-col gap-y-4 lg:gap-y-8
        bg-bemkmuaj-black bg-opacity-75
        shadow-bemkmuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <h2 class="
          bg-gradient-to-b from-bemkmuaj-orange to-bemkmuaj-gold
          bg-clip-text
          drop-shadow-bemkmuaj-orange-shadow
          text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] text-center text-transparent font-Panton-BlackCaps
          transition-all duration-100
        ">
          PROGRAM KERJA
        </h2>
        <div class="
        flex flex-col gap-y-8 lg:gap-y-16
        ">
          <div v-for="candidate in period.candidates" class="
            flex flex-col gap-4 lg:gap-8
            transition-all duration-500 ease-in-out
          ">
            <h3 class="
              text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-right text-bemkmuaj-white font-Montserrat-ExtraBold 
              drop-shadow-bemkmuaj-white-shadow
            " :class="{
              'self-start' : candidate.number==='1',
              'self-end' : candidate.number==='2',
            }">
              Pasangan Calon {{ candidate.number }}
            </h3>
            <div v-for="(program, index) in candidate.programs" class="
              grid grid-cols-2
              w-full lg:w-[80%]
              rounded-[2rem]
              [background-size:_150%]
              from-bemkmuaj-white
              shadow-bemkmuaj-black-shadow
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Medium
              overflow-hidden
            " :class="{
              'bg-gradient-to-r self-start rounded-tl-none' : (index%2===0 && candidate.number==='1') || (index%2===1 && candidate.number==='2'),
              'bg-gradient-to-l bg-right self-end rounded-tr-none' : (index%2===1 && candidate.number==='1') || (index%2===0 && candidate.number==='2'),
            }">
              <div class="
                col-span-2
                px-6 py-2 
                bg-bemkmuaj-black
                text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-center text-bemkmuaj-orange font-Panton-BlackCaps
              ">
                {{ program.name }}
              </div>
              <div class="
                col-span-2
                p-6
                text-bemkmuaj-black
              ">
                {{ program.description }}
              </div>
              <div class="
                col-span-2
                px-6 py-2 
                bg-bemkmuaj-black
                text-center text-bemkmuaj-white font-Montserrat-ExtraBold
              ">
                PILAR SLJ
              </div>
              <div v-for="SLJPillar in program.SLJPillars" class="
                w-full
                col-span-2 flex
              " :class="{
                'flex-row-reverse' : (index%2===1 && candidate.number==='1') || (index%2===0 && candidate.number==='2'),
              }">
                <div class="
                  flex
                  w-[50%]
                  px-6 py-2 
                  border-bemkmuaj-black
                  bg-bemkmuaj-orange
                  text-[0.75rem] sm:text-[1rem] text-bemkmuaj-black font-Montserrat-ExtraBold 
                " :class="{
                  'border-r justify-start' : (index%2===0 && candidate.number==='1') || (index%2===1 && candidate.number==='2'),
                  'border-l justify-end' : (index%2===1 && candidate.number==='1') || (index%2===0 && candidate.number==='2'),
                }">
                  {{ SLJPillar.name }}
                </div>
                <div class="
                  flex justify-center items-center
                  w-[50%]
                  px-6 py-2 
                  border-bemkmuaj-black
                " :class="{
                  'border-l' : (index%2===0 && candidate.number==='1') || (index%2===1 && candidate.number==='2'),
                  'border-r' : (index%2===1 && candidate.number==='1') || (index%2===0 && candidate.number==='2'),
                }">
                  <svg v-if="SLJPillar.isTrue" class="h-[1rem] fill-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.3 12.03">
                    <path d="m5.7,12.03L0,6.33l1.43-1.43,4.28,4.28L14.88,0l1.43,1.43L5.7,12.03Z" style="stroke-width: 0px;"/>
                  </svg>
                  <svg v-else class="h-[1rem] fill-red-700 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                    <path d="m1.4,14l-1.4-1.4,5.6-5.6L0,1.4,1.4,0l5.6,5.6L12.6,0l1.4,1.4-5.6,5.6,5.6,5.6-1.4,1.4-5.6-5.6L1.4,14Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="period" id="vote" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex justify-center
      bg-gradient-to-b from-bemkmuaj-dark-gray via-bemkmuaj-black to-bemkmuaj-dark-gray
      shadow-bemkmuaj-black-shadow
    ">
      <div class="
        container-bemkmuaj
        flex flex-col justify-center gap-8
        transition-all duration-100 ease-in-out
      ">
        <h2 class="
          bg-gradient-to-b from-bemkmuaj-orange to-bemkmuaj-gold
          bg-clip-text
          drop-shadow-bemkmuaj-orange-shadow
          text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] text-center text-transparent font-Panton-BlackCaps
          transition-all duration-100
        ">
          PILIH
        </h2>
        <div class="
          flex flex-col gap-8 lg:gap-16
        ">
          <div v-for="candidate in period.candidates" :key="`candidate-${candidate.number}`" class="
            flex flex-col
            border-[0.15rem] border-bemkmuaj-gold rounded-[2rem]
            overflow-hidden
          ">
            <div class="
              bg-gradient-to-b from-neutral-800 to-bemkmuaj-white
            ">
              <Carousel :ref="returnCandidateCarousel(candidate.number)" :itemsToShow="returnShowNumber()" :mouseDrag="false" :touchDrag="!isSmallScreen">
                <Slide v-for="member in candidate.members" :key="`member-${candidate.number}-${member.name}`" class="
                  board-member-profile
                  flex flex-col justify-self-center
                  transition-all  duration-100 ease-in-out
                " :class="{
                  'drop-shadow-bemkmuaj-black-shadow' : !is3XLScreen && returnShowValue(candidate.number, member.position),
                }">
                  <div @click="showCandidate(candidate.number, member.position)" class="
                    relative
                    flex justify-center
                    w-[15rem] h-[17.5rem]
                    cursor-pointer
                  ">
                    <img :src="member.photo" alt="" class="
                      absolute bottom-0
                      w-[90%]
                      transition-all duration-200 ease-in-out
                    ">
                  </div>
                </Slide>
                <template #addons>
                  <Pagination v-if="!isSmallScreen" />
                </template>
              </Carousel>
            </div>
            <div class="
              grid grid-cols-2
              pb-4
              bg-gradient-to-br from-bemkmuaj-orange via-bemkmuaj-gold to-bemkmuaj-white to-[125%]
            ">
              <div v-for="(member, index) in candidate.members" class="
                justify-self-center
                w-full
                border-bemkmuaj-black
                overflow-hidden
                transition-all  duration-100 ease-in-out
              " :class="{
                'border-r-2' : index%2===0,
                'border-l-2' : index%2===1,
                'bg-bemkmuaj-black bg-opacity-[0%] sm:hover:bg-opacity-[50%]' : !is3XLScreen && !returnShowValue(candidate.number, member.position),
                'bg-bemkmuaj-black bg-opacity-[75%]' : !is3XLScreen && returnShowValue(candidate.number, member.position),
              }">
                <button @click="showCandidate(candidate.number, member.position)" class="
                  w-full h-full
                  p-4
                  text-[1.2rem] xs:text-[1.5rem] sm:text-[2rem] text-center text-bemkmuaj-black font-Panton-BlackCaps
                  transition-all  duration-100 ease-in-out
                " :class="{
                  'border-transparent' : is3XLScreen || returnShowValue(candidate.number, member.position),
                  'text-bemkmuaj-black  sm:hover:text-bemkmuaj-light-gray' : !is3XLScreen && !returnShowValue(candidate.number, member.position),
                  'text-bemkmuaj-white' : !is3XLScreen && returnShowValue(candidate.number, member.position),
                }">
                  {{ member.position }} {{ candidate.number }}
                </button>
              </div>
              <div v-for="(member, index) in candidate.members" class="
                col-span-2 3xl:col-span-1 flex flex-col items-center gap-4
                w-full
                p-4
                3xl:mb-8
                border-bemkmuaj-black
              " :class="{
                'hidden' : !is3XLScreen && !returnShowValue(candidate.number, member.position),
                '3xl:border-r-2': index%2===0,
                '3xl:border-l-2': index%2===1,
              }">
                <div class="
                  grid grid-cols-[max-content_min-content] sm:grid-cols-[max-content_min-content_1fr] justify-center gap-2 sm:gap-4
                ">
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold  
                  ">
                    Nama
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold 
                  ">
                    :
                  </span>
                  <span class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Medium
                  ">
                    {{ member.name }}
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold  
                  ">
                    NIM
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold 
                  ">
                    :
                  </span>
                  <span class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Medium
                  ">
                    {{ member.campusID }}
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold  
                  ">
                    Fakultas
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold 
                  ">
                    :<br>
                  </span>
                  <span class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Medium
                  ">
                    Fakultas XXXX
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold  
                  ">
                    Program Studi
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold 
                  ">
                    :
                  </span>
                  <span class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Medium
                  ">
                    {{ member.major }}
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold  
                  ">
                    Pengalaman
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Bold 
                  ">
                    :
                  </span>
                  <ul class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] sm:text-[1.5rem] font-Montserrat-Medium
                  ">
                    <li v-for="experience in member.experiences">
                      {{ experience }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="
                vote-div
                col-span-2 justify-self-center flex justify-center
                w-56 sm:w-64
              ">
                <button class="
                  vote-btn
                  flex justify-center items-center gap-10
                  w-56 sm:w-64 h-14 sm:h-16
                  border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
                  bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
                  text-bemkmuaj-white hover:text-bemkmuaj-orange fill-bemkmuaj-white hover:fill-bemkmuaj-orange
                  hover:shadow-bemkmuaj-orange-shadow-sm
                  transition-all duration-100 ease-in-out
                ">
                  <span class="
                    vote-span
                    text-[2.5rem]
                    transition-all duration-100 ease-in-out
                    overflow-hidden
                  ">
                    Pilih
                  </span>
                  <svg class="h-[1.25rem] sm:h-[1.5rem]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 9">
                    <path d="m14.5,9l-1.43-1.4,2.1-2.1H0v-2h15.18l-2.08-2.1,1.43-1.4,4.48,4.5-4.5,4.5Z" style="stroke-width: 0px;"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

definePageMeta({
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in'
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      (from.meta.pageTransition as {name:string}).name = 'slide-left';
      (to.meta.pageTransition as {name:string}).name = 'slide-left';
    }
  }
})

import { doc, onSnapshot } from 'firebase/firestore';

const period = ref<any>(null);
const electionPage = ref<any>(null);

const candidateCarousel1 = ref<any>(null);
const candidateCarousel2 = ref<any>(null);

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', 'gLUTVq5uOd7iRw2QqC7P');
  onSnapshot(docRef, (snap) => {
    period.value = snap.data();
    nextTick(() => {
      watch(() => candidateCarousel1.value[0].data.currentSlide.value,(newValue:any) => {
        if (newValue===0) candidates.showPCandidate1.value=true;
        if (newValue===1) candidates.showPCandidate1.value=false;
      });
      watch(() => candidateCarousel2.value[0].data.currentSlide.value,(newValue:any) => {
        if (newValue===0) candidates.showPCandidate2.value=true;
        if (newValue===1) candidates.showPCandidate2.value=false;
      });
    })
  })
})

const isSmallScreen = ref(false);
const isXLScreen = ref(false);
const is3XLScreen = ref(false);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth >= 640;
  isXLScreen.value = window.innerWidth >= 1280;
  is3XLScreen.value = window.innerWidth >= 1920;
}

onMounted(() => {
  isSmallScreen.value = window.innerWidth >= 640;
  isXLScreen.value = window.innerWidth >= 1280;
  is3XLScreen.value = window.innerWidth >= 1920;
  window.addEventListener('resize', updateScreenSize);
  watch(isSmallScreen.value,(newValue:any) => {
    if (newValue===false) {
      if (!candidates.showPCandidate1) {
        try {
          candidateCarousel1.value[0].data.currentSlide.value=1;
        } catch {
          candidateCarousel1.value[0].data.currentSlide.value=0;
        }
      };
      if (!candidates.showPCandidate2) {
        try {
          candidateCarousel2.value[0].data.currentSlide.value=1;
        } catch {
          candidateCarousel2.value[0].data.currentSlide.value=0;
        }
      };
    }
  })
});

defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
})

// P: President, VP: Vice President
const candidates = {
  showPCandidate1: ref(true),
  showPCandidate2: ref(true),
}

const showCandidate = (number:string, position:string) => {
  if (number==='1' && position==='Calon Ketua') {
    candidates.showPCandidate1.value=true;
    candidateCarousel1.value[0].data.currentSlide.value=0;
  }
  if (number==='1' && position==='Calon Wakil Ketua') {
    candidates.showPCandidate1.value=false;
    try { 
      candidateCarousel1.value[0].data.currentSlide.value=1;
    }
    catch {
      candidateCarousel1.value[0].data.currentSlide.value=0;
    }
  }
  if (number==='2' && position==='Calon Ketua') {
    candidates.showPCandidate2.value=true;
    candidateCarousel2.value[0].data.currentSlide.value=0;
  };
  if (number==='2' && position==='Calon Wakil Ketua') 
  {
    candidates.showPCandidate2.value=false;
    try { 
      candidateCarousel2.value[0].data.currentSlide.value=1;
    }
    catch {
      candidateCarousel2.value[0].data.currentSlide.value=0;
    }
  };
}

const returnShowValue = (number:string, position:string) => {
  if (number==='1' && position==='Calon Ketua') return candidates.showPCandidate1.value;
  if (number==='1' && position==='Calon Wakil Ketua') return !candidates.showPCandidate1.value;
  if (number==='2' && position==='Calon Ketua') return candidates.showPCandidate2.value;
  if (number==='2' && position==='Calon Wakil Ketua') return !candidates.showPCandidate2.value;
}

const returnShowNumber = () => {
  if (isSmallScreen.value) return 2;
  else return 1; 
}

const returnCandidateCarousel = (number:string) => {
  return "candidateCarousel"+number
}

</script>

<style lang="scss">
  .paslon {
    &:hover {
      .paslon-number {
        @apply bg-opacity-100 text-bemkmuaj-orange;
      }

      .paslon-name {
        @apply bg-opacity-100;

        span {
          @apply text-bemkmuaj-black;
        }
      }
      div {
        .caket {
        @apply w-[55%];
        }
        .cawaket {
          @apply w-[35%];
        }
      }
    }
  }

  .board-member-profile {
    &:hover {
      div {
        img {
          @apply w-[95%];
        }
      }      
    }
  }

  .vote-div {
    &:hover {
      .vote-btn {
        @apply  gap-0 w-28 sm:w-32;
        .vote-span {
          @apply w-0 opacity-0;
        }
      }
    }
  }

  .carousel__pagination {
    @apply mt-0 bg-bemkmuaj-black;
  }


</style>