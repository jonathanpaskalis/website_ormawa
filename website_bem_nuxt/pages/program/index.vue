<template>
  <div>
    <section id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-bemkmuaj-white
      shadow-bemkmuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-bemkmuaj-orange font-Poppins-SemiBold
        drop-shadow-bemkmuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[opacity-fill-animation_1s_ease-in-out]
      ">
        PROGRAM KERJA
      </h1>
    </section>
    <section title="program-list" class="
      flex justify-center
    ">
      <div class="
        container-bemkmuaj
        flex flex-col gap-y-8 lg:gap-y-16
        bg-bemkmuaj-black bg-opacity-75
        shadow-bemkmuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <div v-for="period in periods" :key="`period-${period.name}`" class="
          flex flex-col gap-4
        ">
          <h2 class="
            bg-gradient-to-b from-bemkmuaj-orange to-bemkmuaj-gold
            bg-clip-text
            drop-shadow-bemkmuaj-orange-shadow
            text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] text-center text-transparent font-Panton-BlackCaps
            transition-all duration-100
          ">
            {{ period.name }}
          </h2>
          <div class="
            grid grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8 
          ">
            <NuxtLink :to="`/program/${period.name}/${program.name}`" v-for="program in period.programs" :key="`program-${program.name}`" class="
              flex justify-center items-center justify-self-center
              w-[7rem] xs:w-[10rem] sm:w-[15rem]
              p-4
              border-solid border-2 sm:border-4 border-transparent hover:border-bemkmuaj-orange-glow rounded-[2rem]
              bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
              hover:shadow-bemkmuaj-orange-shadow
              transition-all duration-200 ease-in-out
            ">
              <img :src="program.logo" alt="" class="
                w-full h-full
              ">
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      if (from.fullPath === '/' || from.fullPath === '/profile') {
        (from.meta.pageTransition as {name:string}).name = 'slide-left';
        (to.meta.pageTransition as {name:string}).name = 'slide-left';
      }
      else if (from.fullPath.slice(0,8) ==='/program') {
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

const periods = [
  {
    name: '2022-2023',
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
    ]
  },
]

</script>

<style lang="scss" scoped>
  
</style>