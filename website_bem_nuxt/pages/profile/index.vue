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
        <div v-for="department in periods[0].departments" :key="`department-${department.name}`" class="
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
        <div v-for="faculty in boardComposition.faculties" :key="`faculty-${faculty.name}`" class="
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

const periods = [
  {
    name: '2022-2023',
    kabinet: 'Asix',
    programs: [
      {
        name: 'Festival Mural',
        nickname: 'Festival Mural',
        objectives: [
          'Memberi wadah untuk mahasiswa Universitas Katolik Indonesia Atma Jaya untuk mengekspresikan diri melalui mural.',
          'Meningkatkan kesadaran mahasiswa melalui mural terkait pentingnya menjaga lingkungan',
        ],
        description: 'Terwujudnya mahasiswa Unika Atma Jaya yang sesuai dengan pembuatan mural di tiga kampus Unika Atma Jaya melibatkan mahasiswa dalam pembuatan desain dan mural.',
        logo: '/program_logos/Logo_Festival_Mural.webp',
      },
      {
        name: 'Atma Jaya Chrismast Carol',
        nickname: 'AJCC',
        objectives: [
          'Mempererat ikatan tali persaudaraan dalam kristus dan menjalin rasa keakraban antar Civitas Akademica Universitas Atma Jaya dengan  Universitas-universitas yang berada di Jakarta.',
        ],
        description: 'Acara akan dihadiri Civitas Academica Atma Jaya dan Universitas-universitas se-Jakarta. Acara akan diawali dengan Perayaan Ekaristi yang akan dipimpin oleh Romo. Setelah itu akan dilanjutkan dengan Ramah tamah dan juga persembahan acara dari UKM.',
        logo: '/program_logos/Logo_AJCC.webp',
      },
      {
        name: 'Atma Jaya Dance and Vocal Internal Competition for the Enthusiast',
        nickname: "Atma D'VICE",
        objectives: [
          'Memberi wadah untuk mahasiswa/i Universitas Katolik Indonesia Atma Jaya untuk menyalurkan minat dan bakat dalam bidang seni tari dan seni vokal.',
          'Meningkatkan kesadaran mahasiswa pentingnya pengembangan minat dan bakat.'
        ],
        description: 'Perlombaan antar mahasiswa/i Unika Atma Jaya dengan tema kegiatan perlombaan seni tari dan seni vokal',
        logo: '/program_logos/Logo_Atma_DVICE.webp',
      },
      {
        name: 'Badan Eksekutif Mahasiswa Muda Keluarga Mahasiswa UAJ',
        nickname: 'BEM Muda KM-UAJ',
        objectives: [
          'Memperkenalkan sistem kerja BEM KM-UAJ kepadamahasiswa UAJ',
          'Mempersiapkan anggota BEM MUDA sebagai calonpengurus BEM KM-UAJ berikutnya',
        ],
        description: 'Seluruh anggota BEM MUDA akan mengikuti pelatihan yang terdiri dari dari pengenalan sistem kerja BEM KM-UAJ dan pelatihan merumuskan sebuah acara di bawah BEM KM-UAJ. Seluruh anggota BEM Muda akan dikumpulkan dalam beberapa kelompok untuk mengerjakan tugas-tugas yang diberikan oleh koordinator departemen BEM KM-UAJ sehingga dapat merumuskan sebuah acara seseuai aspirasi atau kasus yang diberikan.',
        logo: '/program_logos/Logo_BEM_Muda.webp',
      },
      {
        name: 'Mahasiswa Talks',
        nickname: 'Mata',
        objectives: [
          'Mendengar aspirasi dari mahasiswa Unika Atma Jaya yang berprestasi di bidang akademis maupun non akademis.',
        ],
        description: 'Membuat podcast berisikan tanya jawab saran kegiatan untuk BEM KM UAJ serta tips and tricks cara mencapai prestasi yang digapai mahasiswa berprestasi di bidang akademis maupun non akademis.',
        logo: '/program_logos/Logo_Mata.webp',
      },
    ],
    departments: [
      {
        name: 'Ketua dan Wakil Ketua',
        members: [
          {
            nickname: 'Angel',
            position: 'Ketua',
            photo: '/board_members/Ketua_Angel.png',
            campusID: '202003540003',
            faculty: 'FPB',
            major: 'Bimbingan dan Konseling',
          },
          {
            nickname: 'Felix',
            position: 'Wakil Ketua',
            photo: '/board_members/Wakil_Ketua_Felix.png',
            campusID: '201901020258',
            faculty: 'FEB',
            major: 'Akuntansi',
          }
        ]
      },
      {
        name: 'Kesekretariatan',
        members: [
          {
            nickname: 'Joy',
            position: 'Koordinator',
            photo: '/board_members/Kesekretariatan_Joy.png',
            campusID: '201907000072',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Dea',
            position: 'Staf',
            photo: '/board_members/Kesekretariatan_Dea.png',
            campusID: '201901020135',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
          {
            nickname: 'Dwi',
            position: 'Staf',
            photo: '/board_members/Kesekretariatan_Dwi.png',
            campusID: '202001020121',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
          {
            nickname: 'Joce',
            position: 'Staf',
            photo: '/board_members/Kesekretariatan_Joce.png',
            campusID: '202101020021',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
          {
            nickname: 'Maria',
            position: 'Staf',
            photo: '/board_members/Kesekretariatan_Maria.png',
            campusID: '201903050024',
            faculty: 'FPB',
            major: 'Pendidikan Guru Sekolah Dasar',
          },
          {
            nickname: 'Yora',
            position: 'Staf',
            photo: '/board_members/Kesekretariatan_Yora.png',
            campusID: '202007000154',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Yoseph',
            position: 'Staf',
            photo: '/board_members/Kesekretariatan_Yoseph.png',
            campusID: '201901020256',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
        ]
      },
      {
        name: 'Keuangan',
        members: [
          {
            nickname: 'Gerry',
            position: 'Koordinator',
            photo: '/board_members/Keuangan_Gerry.png',
            campus: '202004530005',
            faculty: 'FT',
            major: 'Teknik Industri',
          },
          {
            nickname: 'Atta',
            position: 'Staf',
            photo: '/board_members/Keuangan_Atta.png',
            campusID: '201901520056',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
          {
            nickname: 'Bianca',
            position: 'Staf',
            photo: '/board_members/Keuangan_Bianca.png',
            campusID: '201901520056',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
          {
            nickname: 'Dini',
            position: 'Staf',
            photo: '/board_members/Keuangan_Dini.png',
            campusID: '202107000177',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Nancy',
            position: 'Staf',
            photo: '/board_members/Keuangan_Nancy.png',
            campusID: '202001020082',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
          {
            nickname: 'Tere',
            position: 'Staf',
            photo: '/board_members/Keuangan_Tere.png',
            campusID: '202001520043',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
        ]
      },
      {
        name: 'Internal',
        members: [
          {
            nickname: 'Jopas',
            position: 'Koordinator',
            photo: '/board_members/Internal_Jopas.png',
            campusID: '202004520031',
            faculty: 'FT',
            major: 'Teknik Elektro',
          },
          {
            nickname: 'Debby',
            position: 'Staf',
            photo: '/board_members/Internal_Debby.png',
            campusID: '202007510087',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Agatha',
            position: 'Staf',
            photo: '/board_members/Internal_Agatha.png',
            campusID: '202007510100',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Michelle',
            position: 'Staf',
            photo: '/board_members/Internal_Michelle.png',
            campusID: '202103040016',
            faculty: 'FPB',
            major: 'Bimbingan dan Konseling',
          },
          {
            nickname: 'There',
            position: 'Staf',
            photo: '/board_members/Internal_There.png',
            campusID: '202006000167',
            faculty: 'FKIK',
            major: 'Kedokteran Umum',
          },
          {
            nickname: 'Yo',
            position: 'Staf',
            photo: '/board_members/Internal_Yo.png',
            campusID: '202106020008',
            faculty: 'FKIK',
            major: 'Farmasi',
          },
        ]
      },
      {
        name: 'Hubungan Masyarakat',
        members: [
          {
            nickname: 'Josia',
            position: 'Koordinator',
            photo: '/board_members/Humas_Josia.png',
            campusID: '201901020226',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
          {
            nickname: 'Filbert',
            position: 'Staf',
            photo: '/board_members/Humas_Filbert.png',
            campusID: '202002020014',
            faculty: 'FIABIKOM',
            major: 'Ilmu Komunikasi',
          },
          {
            nickname: 'Gaby',
            position: 'Staf',
            photo: '/board_members/Humas_Gaby.png',
            campusID: '201907000050',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Grace',
            position: 'Staf',
            photo: '/board_members/Humas_Grace.png',
            campusID: '202002520025',
            faculty: 'FIABIKOM',
            major: 'Ilmu Komunikasi',
          },
          {
            nickname: 'Jolau',
            position: 'Staf',
            photo: '/board_members/Humas_Jolau.png',
            campusID: '201901020122',
            faculty: 'FEB',
            major: 'Akuntansi',
          },
          {
            nickname: 'Joshu',
            position: 'Staf',
            photo: '/board_members/Humas_Joshu.png',
            campusID: '202002020070',
            faculty: 'FIABIKOM',
            major: 'Ilmu Komunikasi',
          },
          {
            nickname: 'Lina',
            position: 'Staf',
            photo: '/board_members/Humas_Lina.png',
            campusID: '202001510009',
            faculty: 'FEB',
            major: 'Manajemen',
          },
          {
            nickname: 'Sasa',
            position: 'Staf',
            photo: '/board_members/Humas_Sasa.png',
            campusID: '202101010091',
            faculty: 'FEB',
            major: 'Manajemen',
          },
        ]
      },
      {
        name: 'Pengembangan Mutu Organisasi',
        members: [
          {
            nickname: 'Claren',
            position: 'Koordinator',
            photo: '/board_members/PMO_Claren.png',
            campusID: '201907000025',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Andre',
            position: 'Staf',
            photo: '/board_members/PMO_Andre.png',
            campusID: '201908520020',
            faculty: 'FTB',
            major: 'Teknologi Pangan',
          },
          {
            nickname: 'Ayxie',
            position: 'Staf',
            photo: '/board_members/PMO_Ayxie.png',
            campusID: '202007000075',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Gabby',
            position: 'Staf',
            photo: '/board_members/PMO_Gabby.png',
            campusID: '202007510059',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Laura',
            position: 'Staf',
            photo: '/board_members/PMO_Laura.png',
            campusID: '201907000243',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Lucas',
            position: 'Staf',
            photo: '/board_members/PMO_Lucas.png',
            campusID: '202001030020',
            faculty: 'FEB',
            major: 'Ekonomi Pembangunan',
          },
          {
            nickname: 'Rosa',
            position: 'Staf',
            photo: '/board_members/PMO_Rosa.png',
            campusID: '201907000066',
            faculty: 'FP',
            major: 'Psikologi',
          },
          {
            nickname: 'Tobi',
            position: 'Staf',
            photo: '/board_members/PMO_Tobi.png',
            campusID: '201907000091',
            faculty: 'FP',
            major: 'Psikologi',
          },
        ]
      },
    ],
  },
]

const countComposition = (period: number) => {
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

  periods[period].departments.forEach((department) => {
    department.members.forEach((member) => {
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

const boardComposition = countComposition(0)

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