<template>
  <div id="body">
    <section id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-bemkmuaj-white
      shadow-bemkmuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-transparent font-Poppins-SemiBold
        [background-size:_400%]
        bg-gradient-to-r from-bemkmuaj-orange via-bemkmuaj-gold via-[25%] to-bemkmuaj-white to-[50%]
        bg-clip-text
        drop-shadow-bemkmuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[slide-fill-animation_1s_ease-in-out] 
      ">
        KABINET ASIX #1
      </h1>
      <span class="
        text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-bemkmuaj-black 
        transition-all duration-100 ease-in-out
      ">
        PERIODE 2022-2023
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
          <p class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tl-none
            bg-gradient-to-br from-bemkmuaj-orange to-bemkmuaj-gold
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Medium
          ">
            Mewujudkan BEM KM-UAJ sebagai organisasi yang independen 
            dan transparan dalam menjadi penghubung seluruh civitas UNIKA Atma Jaya
            serta memberikan manfaat kepada mahasiswa dengan berkolaborasi aktif 
            dengan berbagai lembaga kemahasiswaan serta instansi yang terdapat di dalam maupun di luar UNIKA Atma Jaya.
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
          <p class="
            w-full lg:w-[80%]
            p-6
            rounded-[2rem] rounded-tr-none
            bg-gradient-to-bl from-bemkmuaj-orange to-bemkmuaj-gold
            shadow-bemkmuaj-black-shadow
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-justify text-bemkmuaj-white font-Montserrat-Medium
          ">
            a. Menyelenggarakan kegiatan sosialisasi mengenai BEM KM-UAJ kepada mahasiswa UNIKA Atma Jaya.<br><br>
            b. Menampung dan menindaklanjuti semua aspirasi mahasiswa UNIKA Atma Jaya melalui hubungan kerjasama dengan BPM KM - UAJ.<br><br>
            c. Menjadi wadah berkembangnya mahasiswa UNIKA Atma Jaya dengan mengadakan kegiatan yang mengarah kepada KUPP.<br><br>
            d. Membangun hubungan kerja yang koordinatif dan konsultatif dengan lembaga kemahasiswaan serta instansi internal maupun eksternal UNIKA Atma Jaya.
          </p>
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
        flex flex-col justify-center gap-16
        transition-all duration-100 ease-in-out
      ">
        <div v-for="department in departments" :key="`department-${department.name}`" class="
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
                <img :src="member.photo" alt="" class="
                  absolute bottom-0
                  w-[90%]
                  transition-all duration-200 ease-in-out
                ">
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
        flex flex-col gap-4 lg:gap-8
        bg-bemkmuaj-black bg-opacity-75
      ">
        <h2 class="
          text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] text-center text-bemkmuaj-white font-Montserrat-ExtraBold 
          drop-shadow-bemkmuaj-white-shadow
        ">
          Komposisi Pengurus
        </h2>
        <div class="
          grid grid-cols-[5rem_1fr] sm:grid-cols-[6rem_1fr] lg:grid-cols-[9rem_1fr] justify-center items-center gap-4
          w-full
        ">
          <h3 class="
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-Regular
          ">
            FEB
          </h3>
          <div class="
            flex items-center
            h-6 sm:h-8 lg:h-12 w-[calc(14/14*100%)]
            bg-uaj-feb
            transition-all duration-500 ease-in-out
          ">
            <span class="
              pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
            ">
              14
            </span>
          </div>
          <h3 class="
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-Regular
          ">
            FIABIKOM
          </h3>
          <div class="
            flex items-center
            h-6 sm:h-8 lg:h-12 w-[calc(3/14*100%)]
            bg-uaj-fiabikom
            transition-all duration-500 ease-in-out
          ">
            <span class="
              pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
            ">
              3
            </span>
          </div>
          <h3 class="
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-Regular
          ">
            FPB
          </h3>
          <div class="
            flex items-center
            h-6 sm:h-8 lg:h-12 w-[calc(3/14*100%)]
            bg-uaj-fpb
            transition-all duration-500 ease-in-out
          ">
            <span class="
              pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
            ">
              3
            </span>
          </div>
          <h3 class="
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-Regular
          ">
            FT
          </h3>
          <div class="
            flex items-center
            h-6 sm:h-8 lg:h-12 w-[calc(2/14*100%)]
            bg-uaj-ft
            transition-all duration-500 ease-in-out
          ">
            <span class="
              pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
            ">
              2
            </span>
          </div>
          <h3 class="
            text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-Regular
          ">
            FH
          </h3>
          <div class="
            flex items-center
            h-6 sm:h-8 lg:h-12 w-[calc(0/14*100%)]
            bg-uaj-fh
            transition-all duration-500 ease-in-out
          ">
            <span class="
              pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] lg:text-[1.5rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
            ">
              0
            </span>
          </div>
          <h3 class="
            text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white font-Montserrat-Regular
          ">
            FKIK
          </h3>
          <div class="
            flex items-center
            h-6 sm:h-8 lg:h-12 w-[calc(2/14*100%)]
            bg-uaj-fkik
            transition-all duration-0 ease-in-out
          ">
            <span class="
              pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
            ">
              2
            </span>
          </div>
          <h3 class="
            text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white font-Montserrat-Regular
          ">
            FP
          </h3>
          <div class="
            flex items-center
            h-6 sm:h-8 lg:h-12 w-[calc(12/14*100%)]
            bg-uaj-fp
            transition-all duration-0 ease-in-out
          ">
            <span class="
            pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
            ">
              12
            </span>
          </div><h3 class="
            text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white font-Montserrat-Regular
          ">
            FTB
          </h3>
          <div class="
            flex items-center
            h-6 sm:h-8 lg:h-12 w-[calc(1/14*100%)]
            bg-uaj-ftb
            transition-all duration-0 ease-in-out
          ">
            <span class="
              pl-2 lg:pl-4
              text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white font-Montserrat-SemiBold
              drop-shadow-bemkmuaj-black-shadow
            ">
              1
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Profile | BEM KM-UAJ'
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

const departments = [
  {
    name: 'Ketua dan Wakil Ketua',
    members: [
      {
        nickname: 'Angel',
        position: 'Ketua',
        photo: '/board_members/Ketua_Angel.png',
      },
      {
        nickname: 'Felix',
        position: 'Wakil Ketua',
        photo: '/board_members/Wakil_Ketua_Felix.png',
      }
    ]
  },
  {
    name: 'Kesekretariatan',
    members: [
      {
        nickname: 'Joy',
        position: 'Koordinator',
        photo: '/board_members/Kesekretariatan_Joy.png'
      },
      {
        nickname: 'Dea',
        position: 'Staf',
        photo: '/board_members/Kesekretariatan_Dea.png'
      },
      {
        nickname: 'Dwi',
        position: 'Staf',
        photo: '/board_members/Kesekretariatan_Dwi.png'
      },
      {
        nickname: 'Joce',
        position: 'Staf',
        photo: '/board_members/Kesekretariatan_Joce.png'
      },
      {
        nickname: 'Maria',
        position: 'Staf',
        photo: '/board_members/Kesekretariatan_Maria.png'
      },
      {
        nickname: 'Yora',
        position: 'Staf',
        photo: '/board_members/Kesekretariatan_Yora.png'
      },
      {
        nickname: 'Yoseph',
        position: 'Staf',
        photo: '/board_members/Kesekretariatan_Yoseph.png'
      },
    ]
  },
  {
    name: 'Keuangan',
    members: [
      {
        nickname: 'Gerry',
        position: 'Koordinator',
        photo: '/board_members/Keuangan_Gerry.png'
      },
      {
        nickname: 'Atta',
        position: 'Staf',
        photo: '/board_members/Keuangan_Atta.png'
      },
      {
        nickname: 'Bianca',
        position: 'Staf',
        photo: '/board_members/Keuangan_Bianca.png'
      },
      {
        nickname: 'Dini',
        position: 'Staf',
        photo: '/board_members/Keuangan_Dini.png'
      },
      {
        nickname: 'Nancy',
        position: 'Staf',
        photo: '/board_members/Keuangan_Nancy.png'
      },
      {
        nickname: 'Tere',
        position: 'Staf',
        photo: '/board_members/Keuangan_Tere.png'
      },
    ]
  },
  {
    name: 'Internal',
    members: [
      {
        nickname: 'Jopas',
        position: 'Koordinator',
        photo: '/board_members/Internal_Jopas.png'
      },
      {
        nickname: 'Agatha',
        position: 'Staf',
        photo: '/board_members/Internal_Agatha.png'
      },
      {
        nickname: 'Debby',
        position: 'Staf',
        photo: '/board_members/Internal_Debby.png'
      },
      {
        nickname: 'Michelle',
        position: 'Staf',
        photo: '/board_members/Internal_Michelle.png'
      },
      {
        nickname: 'There',
        position: 'Staf',
        photo: '/board_members/Internal_There.png'
      },
      {
        nickname: 'Yo',
        position: 'Staf',
        photo: '/board_members/Internal_Yo.png'
      },
    ]
  },
  {
    name: 'Hubungan Masyarakat',
    members: [
      {
        nickname: 'Josia',
        position: 'Koordinator',
        photo: '/board_members/Humas_Josia.png'
      },
      {
        nickname: 'Filbert',
        position: 'Staf',
        photo: '/board_members/Humas_Filbert.png'
      },
      {
        nickname: 'Gaby',
        position: 'Staf',
        photo: '/board_members/Humas_Gaby.png'
      },
      {
        nickname: 'Grace',
        position: 'Staf',
        photo: '/board_members/Humas_Grace.png'
      },
      {
        nickname: 'Jolau',
        position: 'Staf',
        photo: '/board_members/Humas_Jolau.png'
      },
      {
        nickname: 'Joshu',
        position: 'Staf',
        photo: '/board_members/Humas_Joshu.png'
      },
      {
        nickname: 'Lina',
        position: 'Staf',
        photo: '/board_members/Humas_Lina.png'
      },
      {
        nickname: 'Sasa',
        position: 'Staf',
        photo: '/board_members/Humas_Sasa.png'
      },
    ]
  },
  {
    name: 'Pengembangan Mutu Organisasi',
    members: [
      {
        nickname: 'Claren',
        position: 'Koordinator',
        photo: '/board_members/PMO_Claren.png'
      },
      {
        nickname: 'Andre',
        position: 'Staf',
        photo: '/board_members/PMO_Andre.png'
      },
      {
        nickname: 'Ayxie',
        position: 'Staf',
        photo: '/board_members/PMO_Ayxie.png'
      },
      {
        nickname: 'Gabby',
        position: 'Staf',
        photo: '/board_members/PMO_Gabby.png'
      },
      {
        nickname: 'Laura',
        position: 'Staf',
        photo: '/board_members/PMO_Laura.png'
      },
      {
        nickname: 'Lucas',
        position: 'Staf',
        photo: '/board_members/PMO_Lucas.png'
      },
      {
        nickname: 'Rosa',
        position: 'Staf',
        photo: '/board_members/PMO_Rosa.png'
      },
      {
        nickname: 'Tobi',
        position: 'Staf',
        photo: '/board_members/PMO_Tobi.png'
      },
    ]
  },
]
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