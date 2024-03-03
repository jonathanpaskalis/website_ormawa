<template>
  <div>
    
  </div>
</template>

<script setup lang="ts">

  import { collection, addDoc } from "firebase/firestore";

  const period = {
    name: "2023-2024",
    candidates: [
      {
        number: 1,
        vision: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis porro expedita nam ea a minus, eius vel magnam veniam omnis similique quia quo sit obcaecati tempora! Suscipit ipsum voluptatibus, similique obcaecati ab unde, eaque distinctio voluptatum exercitationem provident veniam!",
        missions: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
        ],
        members: [
          {
            name: "Nama",
            position: "Calon Ketua",
            faculty: "Fakultas Ekonomi dan Bisnis",
            major: "Manajemen",
            campusID: "202101019999",
            photo: "Foto_Calon_Ketua_1.webp",
            experiences: [
              "Lorem Ipsum Dolor Sit Amet",
              "Lorem Ipsum Dolor Sit Amet",
              "Lorem Ipsum Dolor Sit Amet",
            ]
          },
          {
            name: "Nama",
            position: "Calon Wakil Ketua",
            faculty: "Fakultas Ilmu Administrasi Bisnis dan Ilmu Komunikasi",
            major: "Administrasi Bisnis",
            campusID: "202102019999",
            photo: "Foto_Calon_Wakil_Ketua_1.webp",
            experiences: [
              "Lorem Ipsum Dolor Sit Amet",
              "Lorem Ipsum Dolor Sit Amet",
              "Lorem Ipsum Dolor Sit Amet",
            ]
          },
        ],
        programs: [
          {
            name: "Program 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
            XYZPillars: [
              {
                name: "Pilar 1",
                isTrue: true,
              },
              {
                name: "Pilar 2",
                isTrue: false,
              },
              {
                name: "Pilar 3",
                isTrue: true,
              },
              {
                name: "Pilar 4",
                isTrue: false,
              },
              {
                name: "Pilar 5",
                isTrue: true,
              },
            ],
          },
          {
            name: "Program 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
            XYZPillars: [
              {
                name: "Pilar 1",
                isTrue: false,
              },
              {
                name: "Pilar 2",
                isTrue: true,
              },
              {
                name: "Pilar 3",
                isTrue: false,
              },
              {
                name: "Pilar 4",
                isTrue: true,
              },
              {
                name: "Pilar 5",
                isTrue: false,
              },
            ],
          },
          {
            name: "Program 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
            XYZPillars: [
              {
                name: "Pilar 1",
                isTrue: true,
              },
              {
                name: "Pilar 2",
                isTrue: false,
              },
              {
                name: "Pilar 3",
                isTrue: true,
              },
              {
                name: "Pilar 4",
                isTrue: false,
              },
              {
                name: "Pilar 5",
                isTrue: true,
              },
            ],
          }
        ],
      },
      {
        number: 2,
        vision: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis porro expedita nam ea a minus, eius vel magnam veniam omnis similique quia quo sit obcaecati tempora! Suscipit ipsum voluptatibus, similique obcaecati ab unde, eaque distinctio voluptatum exercitationem provident veniam!",
        missions: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
        ],
        members: [
          {
            name: "Nama",
            position: "Calon Ketua",
            faculty: "Fakultas Pendidikan dan Bahasa",
            major: "Pendidikan Bahasa Inggris",
            campusID: "202103019999",
            photo: "Foto_Calon_Ketua_2.webp",
            experiences: [
              "Lorem Ipsum Dolor Sit Amet",
              "Lorem Ipsum Dolor Sit Amet",
              "Lorem Ipsum Dolor Sit Amet",
            ]
          },
          {
            name: "Nama",
            position: "Calon Wakil Ketua",
            faculty: "Fakultas Ilmu Administrasi Bisnis dan Ilmu Komunikasi",
            major: "Teknik Industri",
            campusID: "202104039999",
            photo: "Foto_Calon_Wakil_Ketua_2.webp",
            experiences: [
              "Lorem Ipsum Dolor Sit Amet",
              "Lorem Ipsum Dolor Sit Amet",
              "Lorem Ipsum Dolor Sit Amet",
            ]
          },
        ],
        programs: [
          {
            name: "Program 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
            XYZPillars: [
              {
                name: "Pilar 1",
                isTrue: false,
              },
              {
                name: "Pilar 2",
                isTrue: true,
              },
              {
                name: "Pilar 3",
                isTrue: false,
              },
              {
                name: "Pilar 4",
                isTrue: true,
              },
              {
                name: "Pilar 5",
                isTrue: false,
              },
            ],
          },
          {
            name: "Program 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
            XYZPillars: [
              {
                name: "Pilar 1",
                isTrue: true,
              },
              {
                name: "Pilar 2",
                isTrue: false,
              },
              {
                name: "Pilar 3",
                isTrue: true,
              },
              {
                name: "Pilar 4",
                isTrue: false,
              },
              {
                name: "Pilar 5",
                isTrue: true,
              },
            ],
          },
          {
            name: "Program 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
            XYZPillars: [
              {
                name: "Pilar 1",
                isTrue: false,
              },
              {
                name: "Pilar 2",
                isTrue: true,
              },
              {
                name: "Pilar 3",
                isTrue: false,
              },
              {
                name: "Pilar 4",
                isTrue: true,
              },
              {
                name: "Pilar 5",
                isTrue: false,
              },
            ],
          },
        ],
      },
    ],
    // vision: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat veritatis porro expedita nam ea a minus, eius vel magnam veniam omnis similique quia quo sit obcaecati tempora! Suscipit ipsum voluptatibus, similique obcaecati ab unde, eaque distinctio voluptatum exercitationem provident veniam!",
    // mission: [
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum pariatur quibusdam ducimus incidunt praesentium reprehenderit!",
    // ],
    // departments: [
    //   {
    //     name: "Ketua dan Wakil Ketua",
    //     members: [
    //       {
    //         nickname: "Nama",
    //         campusID: "202001019999",
    //         faculty: "FEB",
    //         major: "Manajemen",
    //         position: "Ketua",
    //         photo: "Foto_Pengurus.webp"
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202001029999",
    //         faculty: "FEB",
    //         major: "Akuntansi",
    //         position: "Foto_Pengurus.webp",
    //       },
    //     ],
    //   },
    //   {
    //     name: "Departemen A",
    //     members: [
    //       {
    //         nickname: "Nama",
    //         campusID: "202001039999",
    //         faculty: "FEB",
    //         major: "Ekonomi Pembangunan",
    //         position: "Koordinator",
    //         photo: "Foto_Pengurus.webp"
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202001519999",
    //         faculty: "FEB",
    //         major: "Manajemen",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202001529999",
    //         faculty: "FEB",
    //         major: "Akuntansi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202002019999",
    //         faculty: "FIABIKOM",
    //         major: "Administrasi Binis",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202002029999",
    //         faculty: "FIABIKOM",
    //         major: "Ilmu Komunikasi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202002039999",
    //         faculty: "FIABIKOM",
    //         major: "Pariwisata",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202002519999",
    //         faculty: "FIABIKOM",
    //         major: "Administrasi Bisnis",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202002529999",
    //         faculty: "FIABIKOM",
    //         major: "Ilmu Komunikasi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //     ],
    //   },
    //   {
    //     name: "Departemen B",
    //     members: [
    //       {
    //         nickname: "Nama",
    //         campusID: "202003019999",
    //         faculty: "FPB",
    //         major: "Pendidikan Bahasa Inggris",
    //         position: "Koordinator",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202003039999",
    //         faculty: "FPB",
    //         major: "Pendidikan Agama Katolik",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202003049999",
    //         faculty: "FPB",
    //         major: "Bimbingan Konseling",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202003059999",
    //         faculty: "FPB",
    //         major: "Pendidikan Guru Sekolah Dasar",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202003519999",
    //         faculty: "FPB",
    //         major: "Pendidikan Bahasa Inggris",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202004039999",
    //         faculty: "FT",
    //         major: "Teknik Industri",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202004519999",
    //         faculty: "FT",
    //         major: "Teknik Mesin",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202004529999",
    //         faculty: "FT",
    //         major: "Teknik Elektro",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //     ],
    //   },
    //   {
    //     name: "Departemen C",
    //     members: [
    //       {
    //         nickname: "Nama",
    //         campusID: "202004539999",
    //         faculty: "FT",
    //         major: "Teknik Industri",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202004569999",
    //         faculty: "FT",
    //         major: "Sistem Informasi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202005009999",
    //         faculty: "FH",
    //         major: "Ilmu Hukum",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202005519999",
    //         faculty: "FH",
    //         major: "Ilmu Hukum",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202005009998",
    //         faculty: "FH",
    //         major: "Ilmu Hukum",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202005519998",
    //         faculty: "FH",
    //         major: "Ilmu Hukum",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202005009997",
    //         faculty: "FH",
    //         major: "Ilmu Hukum",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202006009999",
    //         faculty: "FKIK",
    //         major: "Kedokteran",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //     ],
    //   },
    //   {
    //     name: "Departemen D",
    //     members: [
    //       {
    //         nickname: "Nama",
    //         campusID: "202006029999",
    //         faculty: "FKIK",
    //         major: "Farmasi",
    //         position: "Koordinator",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202006009998",
    //         faculty: "FKIK",
    //         major: "Kedokteran",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202006029998",
    //         faculty: "FKIK",
    //         major: "Farmasi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202006009997",
    //         faculty: "FKIK",
    //         major: "Kedokteran",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202007009999",
    //         faculty: "FP",
    //         major: "Psikologi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202007519999",
    //         faculty: "FP",
    //         major: "Psikologi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202007009998",
    //         faculty: "FP",
    //         major: "Psikologi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //     ],
    //   },
    //   {
    //     name: "Departemen E",
    //     members: [
    //       {
    //         nickname: "Nama",
    //         campusID: "202007519998",
    //         faculty: "FP",
    //         major: "Psikologi",
    //         position: "Koordinator",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202007009997",
    //         faculty: "FP",
    //         major: "Psikologi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202008519999",
    //         faculty: "FTB",
    //         major: "Bioteknologi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202008529999",
    //         faculty: "FTB",
    //         major: "Teknologi Pangan",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202008519998",
    //         faculty: "FTB",
    //         major: "Bioteknologi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202008529998",
    //         faculty: "FTB",
    //         major: "Teknologi Pangan",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //       {
    //         nickname: "Nama",
    //         campusID: "202008519997",
    //         faculty: "FTB",
    //         major: "Bioteknologi",
    //         position: "Staf",
    //         photo: "Foto_Pengurus.webp",
    //       },
    //     ],
    //   },
    // ],
    // programs: [
    //   {
    //     nickname: "Program 1",
    //     logo: "Logo_Program_1.webp",
    //     documentation: "Program_Documentation_1.webp",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
    //     objectives: [
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //     ],
    //   },
    //   {
    //     nickname: "Program 2",
    //     logo: "Logo_Program_2.webp",
    //     documentation: "Program_Documentation_2.webp",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
    //     objectives: [
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //     ],
    //   },
    //   {
    //     nickname: "Program 3",
    //     logo: "Logo_Program_3.webp",
    //     documentation: "Program_Documentation_3.webp",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
    //     objectives: [
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //     ],
    //   },
    //   {
    //     nickname: "Program 4",
    //     logo: "Logo_Program_4.webp",
    //     documentation: "Program_Documentation_4.webp",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
    //     objectives: [
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //     ],
    //   },
    //   {
    //     nickname: "Program 5",
    //     logo: "Logo_Program_5.webp",
    //     documentation: "Program_Documentation_5.webp",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
    //     objectives: [
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //     ],
    //   },
    //   {
    //     nickname: "Program 6",
    //     logo: "Logo_Program_6.webp",
    //     documentation: "Program_Documentation_6.webp",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
    //     objectives: [
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //     ],
    //   },
    //   {
    //     nickname: "Program 7",
    //     logo: "Logo_Program_7.webp",
    //     documentation: "Program_Documentation_7.webp",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat esse saepe nobis optio ipsum officiis ab impedit recusandae mollitia consequuntur?",
    //     objectives: [
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cumque!",
    //     ],
    //   },
    // ],
  }

  onMounted(async ()=> {
    const { db } = useFirebase();
    const docRef = addDoc(collection(db, "periods"), period)
  })
</script>

<style scoped>

</style>