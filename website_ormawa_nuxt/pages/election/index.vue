<template>
  <div>
    <section id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-ormawaxyzuaj-black
      shadow-ormawaxyzuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-transparent font-Poppins-SemiBold
        [background-size:_400%]
        bg-gradient-to-r from-ormawaxyzuaj-orange via-ormawaxyzuaj-gold via-[25%] to-ormawaxyzuaj-black to-[50%]
        bg-clip-text
        drop-shadow-ormawaxyzuaj-black-shadow 
        transition-all duration-100 ease-in-out
        animate-[slide-fill-animation_1s_ease-in-out] 
      ">
        PEMILIHAN UMUM
      </h1>
      <span v-if="period" class="
        text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-ormawaxyzuaj-white
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
          grid grid-cols-2
          w-full
        ">
          <div v-if="period" v-for="candidate in period.candidates" class="
            paslon
            flex flex-col items-center gap-y-8 lg:gap-y-16
            border-ormawaxyzuaj-white
            [background-size:_200%]
            from-ormawaxyzuaj-white to-transparent to-[50%]
            transition-all duration-100 ease-in-out
          " :class="{
            'border-r rounded-tl-[1.5rem] rounded-bl-[1.5rem] bg-left hover:bg-right bg-gradient-to-l' : candidate.number === '1',
            'border-l rounded-tr-[1.5rem] rounded-br-[1.5rem] bg-right hover:bg-left bg-gradient-to-r' : candidate.number === '2',
          }">
            <span class="
              paslon-number
              w-full
              px-4
              bg-ormawaxyzuaj-black bg-opacity-0
              text-[1rem] xs:text-[1.5rem] sm:text-[2rem] text-ormawaxyzuaj-white text-center font-Panton-BlackCaps
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
              'flex-row-reverse' : candidate.number==='1'
            }">
              <img v-for="member in candidate.members" :src="`/images/election_candidates/${member.photo}`" alt="" class="
                h-min
                transition-all duration-100 ease-in-out
              " :class="{
                'caket w-[40%]' : member.position==='Calon Ketua',
                'cawaket w-[30%]' : member.position==='Calon Wakil Ketua',
              }" />
            </div>
            <div class="
              paslon-name
              flex flex-col justify-center items-center
              w-full h-16 xs:h-24 md:h-[7.5rem]
              px-4
              bg-ormawaxyzuaj-orange bg-opacity-0
              transition-all duration-100 ease-in-out
            " :class="{
              'rounded-bl-[1rem]' : candidate.number === '1',
              'rounded-br-[1rem]' : candidate.number === '2',
            }">
              <span v-for="member in candidate.members" class="
                text-center text-ormawaxyzuaj-white
              " :class="{
                'text-[0.75rem] 2xs:text-[0.9rem] xs:text-[1.2rem] sm:text-[1.4rem] md:text-[1.8rem] font-Montserrat-Bold' : member.position==='Calon Ketua',
                'text-[0.7rem] 2xs:text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] font-Montserrat-Regular' : member.position==='Calon Wakil Ketua',
              }">
                {{ returnFirstTwoNames(member.name) }}
              </span>
            </div>
          </div>
          <div v-else class="
            h-[10rem] xs:h-[13rem] sm:h-[22rem] lg:h-[26rem] 2xl:h-[32rem]
          ">
          </div>
        </div>
      </div>
    </section>
    <section id="vision-mission" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex flex-col items-center
      shadow-ormawaxyzuaj-black-shadow
    ">
      <div class="
        w-full
        pt-4 lg:pt-8
        bg-ormawaxyzuaj-black
      ">
        <h2 class="
          bg-gradient-to-b from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
          bg-clip-text
          drop-shadow-ormawaxyzuaj-orange-shadow
          text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] text-center text-transparent font-Panton-BlackCaps
          transition-all duration-100
        ">
          VISI
        </h2>
      </div>
      <div class="
        flex justify-center
        w-full
        bg-gradient-to-b from-ormawaxyzuaj-black to-ormawaxyzuaj-dark-gray
      ">
        <div class="
          container-ormawaxyzuaj
          flex flex-col justify-center items-center gap-8
          transition-all duration-100 ease-in-out
        ">
          <div v-if="period" v-for="candidate in period.candidates" class="
            flex flex-col gap-4
            transition-all duration-500 ease-in-out
          " :class="{
            'items-start' : candidate.number==='1',
            'items-end' : candidate.number==='2',
          }">
            <h3 class="
              text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
              drop-shadow-ormawaxyzuaj-white-shadow
            ">
              Pasangan Calon {{ candidate.number }}
            </h3>
            <p class="
              w-full lg:w-[80%]
              p-6
              rounded-[2rem]
              from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
              shadow-ormawaxyzuaj-black-shadow
              text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Medium
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
        bg-ormawaxyzuaj-dark-gray
      ">
        <h2 class="
          bg-gradient-to-b from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
          bg-clip-text
          drop-shadow-ormawaxyzuaj-orange-shadow
          text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] text-center text-transparent font-Panton-BlackCaps
          transition-all duration-100
        ">
          MISI
        </h2>
      </div>
      <div class="
        flex justify-center
        w-full
        bg-gradient-to-b from-ormawaxyzuaj-dark-gray to-ormawaxyzuaj-black
      ">
        <div class="
          container-ormawaxyzuaj
          flex flex-col justify-center items-center gap-8
          transition-all duration-100 ease-in-out
        ">
          <div v-if="period" v-for="candidate in period.candidates" class="
            flex flex-col gap-4
            transition-all duration-500 ease-in-out
          " :class="{
            'items-start' : candidate.number==='1',
            'items-end' : candidate.number==='2',
          }">
            <h3 class="
              text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
              drop-shadow-ormawaxyzuaj-white-shadow
            ">
              Pasangan Calon {{ candidate.number }}
            </h3>
            <ol class="
              flex flex-col gap-2
              w-full lg:w-[80%]
              p-6 pl-9 sm:pl-12
              rounded-[2rem]
              from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
              shadow-ormawaxyzuaj-black-shadow
              text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Medium
              list-[lower-alpha]
            " :class="{
              'rounded-tl-none bg-gradient-to-br' : candidate.number==='1',
              'rounded-tr-none bg-gradient-to-bl' : candidate.number==='2',
            }">
              <li v-for="mission in candidate.missions">
                {{ mission }}
              </li>
          </ol>
          </div>
        </div>
      </div>
    </section>
    <section id="program" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex justify-center
      ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col gap-y-4 lg:gap-y-8
        bg-ormawaxyzuaj-black bg-opacity-75
        shadow-ormawaxyzuaj-black-shadow
        transition-all duration-100 ease-in-out
      ">
        <h2 class="
          bg-gradient-to-b from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
          bg-clip-text
          drop-shadow-ormawaxyzuaj-orange-shadow
          text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] text-center text-transparent font-Panton-BlackCaps
          transition-all duration-100
        ">
          PROGRAM KERJA
        </h2>
        <div class="
          flex flex-col justify-center items-center gap-y-8
        ">
          <div v-if="period" v-for="candidate in period.candidates" class="
            flex flex-col gap-4 lg:gap-8
            transition-all duration-500 ease-in-out
          ">
            <h3 class="
              text-[1.5rem] sm:text-[2rem] text-right text-ormawaxyzuaj-white font-Montserrat-ExtraBold 
              drop-shadow-ormawaxyzuaj-white-shadow
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
              from-ormawaxyzuaj-white
              shadow-ormawaxyzuaj-black-shadow
              text-[1rem] sm:text-[1.2rem] text-justify text-ormawaxyzuaj-white font-Montserrat-Medium
              overflow-hidden
            " :class="{
              'bg-gradient-to-r self-start rounded-tl-none' : (index%2===0 && candidate.number==='1') || (index%2===1 && candidate.number==='2'),
              'bg-gradient-to-l bg-right self-end rounded-tr-none' : (index%2===1 && candidate.number==='1') || (index%2===0 && candidate.number==='2'),
            }">
              <div class="
                col-span-2
                px-6 py-2 
                bg-ormawaxyzuaj-black
                text-[1rem] xs:text-[1.5rem] text-center text-ormawaxyzuaj-orange font-Panton-BlackCaps
              ">
                {{ program.name }}
              </div>
              <div class="
                col-span-2
                px-2 xs:px-6 py-6
                text-ormawaxyzuaj-black
              ">
                {{ program.description }}
              </div>
              <div class="
                col-span-2
                px-6 py-2 
                bg-ormawaxyzuaj-black
                text-center text-ormawaxyzuaj-white font-Montserrat-ExtraBold
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
                  px-2 xs:px-6 py-2
                  border-ormawaxyzuaj-black
                  bg-ormawaxyzuaj-orange
                  text-[0.75rem] sm:text-[1rem] text-ormawaxyzuaj-black font-Montserrat-ExtraBold
                " :class="{
                  'border-r justify-start' : (index%2===0 && candidate.number==='1') || (index%2===1 && candidate.number==='2'),
                  'border-l justify-end text-right' : (index%2===1 && candidate.number==='1') || (index%2===0 && candidate.number==='2'),
                }">
                  {{ SLJPillar.name }}
                </div>
                <div class="
                  flex justify-center items-center
                  w-[50%]
                  px-6 py-2
                  border-ormawaxyzuaj-black
                " :class="{
                  'border-l' : (index%2===0 && candidate.number==='1') || (index%2===1 && candidate.number==='2'),
                  'border-r' : (index%2===1 && candidate.number==='1') || (index%2===0 && candidate.number==='2'),
                }">
                  <Icons v-if="SLJPillar.isTrue" name="done" class="h-[1rem] fill-green-700" />
                  <Icons v-else name="close" class="h-[1rem] fill-red-700 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="vote" class="
      scroll-mt-[4rem] xl:scroll-mt-[6rem]
      flex justify-center
      bg-gradient-to-b from-ormawaxyzuaj-dark-gray via-ormawaxyzuaj-black to-ormawaxyzuaj-dark-gray
      shadow-ormawaxyzuaj-black-shadow
    ">
      <div class="
        container-ormawaxyzuaj
        flex flex-col justify-center gap-8
        transition-all duration-100 ease-in-out
      ">
        <h2 class="
          bg-gradient-to-b from-ormawaxyzuaj-orange to-ormawaxyzuaj-gold
          bg-clip-text
          drop-shadow-ormawaxyzuaj-orange-shadow
          text-[1.7rem] xs:text-[2.4rem] sm:text-[3rem] text-center text-transparent font-Panton-BlackCaps
          transition-all duration-100 ease-in-out
        ">
          PILIH
        </h2>
        <div class="
          flex flex-col justify-center items-center gap-8 lg:gap-16
        ">
          <div v-if="period" v-for="candidate in period.candidates" :key="`candidate-${candidate.number}`" class="
            flex flex-col
            border-[0.15rem] border-ormawaxyzuaj-gold rounded-[2rem]
            overflow-hidden
          ">
            <div class="
              grid grid-cols-1 sm:grid-cols-2
              bg-gradient-to-b from-neutral-800 to-ormawaxyzuaj-white
            ">
              <div v-for="member in candidate.members" :key="`member-${candidate.number}-${member.name}`" class="
                board-member-profile
                flex flex-col justify-self-center
                w-[11rem] h-[12rem]
                transition-all duration-200 ease-in-out
              " :class="{
                'hidden' : !isSmallScreen && !returnShowValue(candidate.number, member.position),
                'drop-shadow-ormawaxyzuaj-black-shadow' : !is3XLScreen && returnShowValue(candidate.number, member.position),
              }">
                <button :disabled="is3XLScreen" @click="showCandidate(candidate.number, member.position)" class="
                  relative
                  flex justify-center
                  w-full h-full
                ">
                  <img :src="`/images/election_candidates/${member.photo}`" alt="" class="
                    absolute bottom-0
                    w-[90%]
                    transition-all duration-200 ease-in-out
                  " />
                </button>
              </div>
            </div>
            <div class="
              grid grid-cols-2
              pb-4
              bg-gradient-to-br from-ormawaxyzuaj-orange via-ormawaxyzuaj-gold to-ormawaxyzuaj-white to-[125%]
            ">
              <div v-for="(member, index) in candidate.members" class="
                justify-self-center
                w-full
                border-ormawaxyzuaj-black
                overflow-hidden
                transition-all  duration-100 ease-in-out
              " :class="{
                'border-r-2' : index%2===0,
                'border-l-2' : index%2===1,
                'bg-ormawaxyzuaj-black bg-opacity-[0%] hover:bg-opacity-[50%]' : !is3XLScreen && !returnShowValue(candidate.number, member.position),
                'bg-ormawaxyzuaj-black bg-opacity-[75%]' : !is3XLScreen && returnShowValue(candidate.number, member.position),
              }">
                <button :disabled="is3XLScreen" @click="showCandidate(candidate.number, member.position)" class="
                  w-full h-full
                  px-4 py-3
                  text-[1.2rem] xs:text-[1.5rem] text-center text-ormawaxyzuaj-black font-Panton-BlackCaps
                  transition-all  duration-100 ease-in-out
                " :class="{
                  'border-transparent' : is3XLScreen || returnShowValue(candidate.number, member.position),
                  'text-ormawaxyzuaj-black  hover:text-ormawaxyzuaj-light-gray' : !is3XLScreen && !returnShowValue(candidate.number, member.position),
                  'text-ormawaxyzuaj-white' : !is3XLScreen && returnShowValue(candidate.number, member.position),
                }">
                  {{ member.position }} {{ candidate.number }}
                </button>
              </div>
              <div v-for="(member, index) in candidate.members" class="
                col-span-2 3xl:col-span-1 flex flex-col items-center gap-4
                w-full
                px-4 py-3
                3xl:mb-4
                border-ormawaxyzuaj-black
              " :class="{
                'hidden' : !is3XLScreen && !returnShowValue(candidate.number, member.position),
                '3xl:border-r-2': index%2===0,
                '3xl:border-l-2': index%2===1,
              }">
                <div class="
                  grid grid-cols-[auto_min-content] sm:grid-cols-[max-content_min-content_1fr] justify-center gap-2 sm:gap-4
                ">
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold  
                  ">
                    Nama
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold 
                  ">
                    :
                  </span>
                  <span class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Medium
                  ">
                    {{ member.name }}
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold  
                  ">
                    NIM
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold 
                  ">
                    :
                  </span>
                  <span class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Medium
                  ">
                    {{ member.campusID }}
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold  
                  ">
                    Fakultas
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold 
                  ">
                    :<br>
                  </span>
                  <span class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Medium
                  ">
                    {{ member.faculty }}
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold  
                  ">
                    Program Studi
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold 
                  ">
                    :
                  </span>
                  <span class="
                    col-span-2 sm:col-span-1
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Medium
                  ">
                    {{ member.major }}
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold  
                  ">
                    Pengalaman
                  </span>
                  <span class="
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Bold 
                  ">
                    :
                  </span>
                  <ul class="
                    col-span-2 sm:col-span-1
                    pl-6
                    text-[1rem] xs:text-[1.2rem] font-Montserrat-Medium
                    list-disc
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
                <button @click.prevent="openVoteForm(candidate.number)" class="
                  vote-btn
                  flex justify-center items-center gap-10
                  w-56 h-14
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[2rem]
                  bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange fill-ormawaxyzuaj-white hover:fill-ormawaxyzuaj-orange
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  transition-all duration-100 ease-in-out
                ">
                  <span class="
                    vote-span
                    text-[2rem]
                    transition-all duration-100 ease-in-out
                    overflow-hidden
                  ">
                    Pilih
                  </span>
                  <Icons name="trending_flat" class="h-[1.2rem] sm:h-[1.5rem]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div ref="voteForm" class="
      fixed top-16 xl:top-24 left-0 right-0 bottom-0
      bg-ormawaxyzuaj-black bg-opacity-95
      transition-opacity duration-200 ease-in-out
      opacity-0
      translate-x-full
      z-[9]
      pointer-events-none
    ">
      <div class="
        flex justify-center items-center 
        w-full h-full
      ">
        <div class="
          container-ormawaxyzuaj
          flex flex-col justify-center items-center
          w-full h-full
        ">
          <button v-if="!isUploading && !isValidating" @click.prevent="closeVoteForm" class="
            flex justify-center items-center gap-4
            w-full h-8
            border-[0.15rem] border-b-0 border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-t-[0.5rem]
            bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
            hover:shadow-ormawaxyzuaj-orange-shadow-sm
            text-[1.2rem] text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange
            fill-ormawaxyzuaj-black hover:fill-ormawaxyzuaj-orange
            transition-all duration-100 ease-in-out
          ">
            <Icons name="close" class="h-[1.2rem]" />
            <span class="
              font-Panton-BlackCaps   
              overflow-hidden
            ">
              Tutup Form
            </span>
          </button>
          <div class="
            w-full max-h-[90%]
            p-1
            border-[0.15rem] border-ormawaxyzuaj-orange-glow rounded-b-[0.5rem]
            bg-ormawaxyzuaj-black
            shadow-ormawaxyzuaj-orange-shadow-sm
            transition-all duration-100 ease-in-out
          ">
            <form @submit.prevent="submitVote" class="
              grid grid-cols-1 justify-center gap-4
              w-full max-h-full
              p-3
              scrollbar scrollbar-w-[6px] scrollbar-thumb-rounded-md scrollbar-thumb-ormawaxyzuaj-white hover:scrollbar-thumb-neutral-400 scrollbar-track-ormawaxyzuaj-black 
              overflow-y-auto
              overflow-x-hidden
            ">
              <div class="
                flex flex-col
              ">
                <label for="email" class="
                  text-ormawaxyzuaj-white
                ">
                  Email Student Microsoft:
                </label>
                <input type="email" id="email" v-model="voteFormData.email" required>
                <span v-if="!formEmailIsValid && voteFormData.email!==''" class="text-red-600">
                  Masukan email yang valid
                </span>
              </div>
              <div class="
                flex flex-col
              ">
                <span class="
                  text-ormawaxyzuaj-white
                ">
                  Foto KIM:
                </span>
                <div class="
                  flex items-center gap-x-1
                ">
                  <label for="file" class="
                    flex justify-center items-center
                    w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                    border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                    bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                    hover:shadow-ormawaxyzuaj-orange-shadow-sm
                    text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                    transition-all duration-100 ease-in-out
                    cursor-pointer
                  ">
                    Unggah
                  </label>
                  <input @change.prevent="checkFormFile" ref="KIMFile" type="file" id="file" name="file" accept=".jpg, .jpeg" required class="w-0 h-0 overflow-hidden">
                  <span v-if="formFileIsValid" class="text-ormawaxyzuaj-orange">
                    {{ KIMFile.files[0].name }}
                  </span>
                </div>
                <span v-if="!formFileIsValid && !formFileFirstTime" class="text-red-600">
                  Masukan file foto KIM
                </span>
              </div>
              <div class="
                flex flex-col
              ">
                <label for="vote-value" class="
                  text-ormawaxyzuaj-white
                ">
                  Pilihan Paslon
                </label>
                <div v-if="period" class="
                  self-center flex flex-col
                  w-max
                  border-[0.15rem] border-ormawaxyzuaj-gold rounded-[2rem]
                  transistion-all duration-100 eas-in-out
                  overflow-hidden
                ">
                  <div class="
                    grid grid-cols-2
                    bg-gradient-to-b from-neutral-800 to-ormawaxyzuaj-white
                  ">
                    <div v-for="member in period.candidates[returnVoteValueInt(voteFormData.voteValue)].members" :key="`member-${period.candidates[returnVoteValueInt(voteFormData.voteValue)].number}-${member.name}`" class="
                      board-member-profile
                      flex flex-col justify-self-center
                      w-[6rem] h-[7rem]
                      transition-all duration-200 ease-in-out
                    ">
                      <div class="
                        relative
                        flex justify-center
                        w-full h-full
                      ">
                        <img :src="`/images/election_candidates/${member.photo}`" alt="" class="
                          absolute bottom-0
                          w-[90%]
                          transition-all duration-200 ease-in-out
                        " />
                      </div>
                    </div>
                  </div>
                  <div class="
                    grid grid-cols-2
                    bg-gradient-to-br from-ormawaxyzuaj-orange via-ormawaxyzuaj-gold to-ormawaxyzuaj-white to-[125%]
                  ">
                    <div class="
                      col-span-2
                      justify-self-center
                      w-full
                      border-ormawaxyzuaj-black
                      text-[1.2rem] xs:text-[1.5rem] text-center text-ormawaxyzuaj-black font-Panton-BlackCaps
                      transition-all  duration-100 ease-in-out
                    ">
                      PASLON {{ period.candidates[returnVoteValueInt(voteFormData.voteValue)].number }}
                    </div>
                    <div class="
                      col-span-2 flex flex-col items-center gap-4
                      w-full
                      p-4 pt-0
                      border-ormawaxyzuaj-black
                    ">
                      <div class="
                        grid grid-cols-[max-content_min-content] sm:grid-cols-[max-content_min-content_1fr] justify-center gap-2 md:gap-4
                      ">
                        <span class="
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Bold  
                        ">
                          Nama Calon Ketua
                        </span>
                        <span class="
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Bold 
                        ">
                          :
                        </span>
                        <span class="
                          col-span-2 sm:col-span-1
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Medium
                        ">
                          {{ period.candidates[returnVoteValueInt(voteFormData.voteValue)].members[0].name }}
                        </span>
                        <span class="
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Bold  
                        ">
                          NIM Calon Ketua
                        </span>
                        <span class="
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Bold 
                        ">
                          :
                        </span>
                        <span class="
                          col-span-2 sm:col-span-1
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Medium
                        ">
                          {{ period.candidates[returnVoteValueInt(voteFormData.voteValue)].members[0].campusID }}
                        </span>
                        <span class="
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Bold  
                        ">
                          Nama Calon Wakil Ketua
                        </span>
                        <span class="
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Bold 
                        ">
                          :<br>
                        </span>
                        <span class="
                          col-span-2 sm:col-span-1
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Medium
                        ">
                          {{ period.candidates[returnVoteValueInt(voteFormData.voteValue)].members[1].name }}
                        </span>
                        <span class="
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Bold  
                        ">
                          NIM Calon Wakil Ketua
                        </span>
                        <span class="
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Bold 
                        ">
                          :
                        </span>
                        <span class="
                          col-span-2 sm:col-span-1
                          text-[0.8rem] xs:text-[1.2rem] font-Montserrat-Medium
                        ">
                          {{ period.candidates[returnVoteValueInt(voteFormData.voteValue)].members[1].campusID }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="
                flex justify-center
                w-full
              ">
                <button v-if="!isUploading && !uploadSucess" type="submit" @click="checkFormFile" class="
                  flex justify-center items-center
                  w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                  bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Pilih
                </button>
                <div v-if="isUploading && !uploadSucess && !isValidating && !voteIsValid" class="
                  flex justify-center items-center gap-4
                  h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-orange font-Panton-BlackCaps fill-ormawaxyzuaj-white
                ">
                  <Icons name="progress" class="h-[0.8rem] xs:h-[1rem] sm:h-[1.2rem] animate-spin"/>
                  Mengunggah
                </div>
                <div v-if="!isUploading && uploadSucess && isValidating && !voteIsValid" class="
                  flex justify-center items-center gap-4
                  h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-orange font-Panton-BlackCaps fill-ormawaxyzuaj-white
                ">
                  <Icons name="progress" class="h-[0.8rem] xs:h-[1rem] sm:h-[1.2rem] animate-spin"/>
                  Memvalidasi
                </div>
                <div v-if="!isUploading && uploadSucess  && !isValidating && voteIsValid" class="
                  flex flex-col items-center
                  w-full
                ">
                  <div class="
                    flex justify-center items-center gap-4
                    h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                    fill-ormawaxyzuaj-white
                  ">
                    <Icons v-if="voteIsValid.isValid" name="done" class="h-[0.8rem] xs:h-[1rem] sm:h-[1.2rem]"/>
                    <Icons v-else name="close" class="h-[0.8rem] xs:h-[1rem] sm:h-[1.2rem]"/>
                    <span v-if="voteIsValid.isValid" class="
                      text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-orange font-Panton-BlackCaps 
                    ">Suara valid</span>
                    <span v-else class="
                      text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-orange font-Panton-BlackCaps 
                    ">Suara tidak valid</span>
                  </div>
                  <span v-if="voteIsValid.code==='0'" class="
                    w-[75%]
                    text-center text-green-700 font-Montserrat-Bold
                  ">
                    Anda berhasil menggunakan hak suara anda!
                  </span>
                  <span v-else-if="voteIsValid.code==='1'" class="
                    w-[75%]
                    text-center text-red-700 font-Montserrat-Bold
                  ">
                    Anda telah menggunakan hak suara anda pada kesempatan sebelumnya. Jika anda merasa ini merupakan sebuah kesalahan silakan menghubungi nara hubung Internal
                  </span>
                  <span v-else-if="voteIsValid.code==='2'" class="
                    w-[75%]
                    text-center text-red-700 font-Montserrat-Bold
                  ">
                    Validasi email mahasiswa dan kartu identitas mahasiswa anda gagal. Pastikan email dan kartu identitas yang anda gunakan memiliki identitas yang sama!
                  </span>
                  <span v-else-if="voteIsValid.code==='3'" class="
                    w-[75%]
                    text-center text-red-700 font-Montserrat-Bold
                  ">
                    Validasi kartu identitas mahasiswa anda gagal. Pastikan foto kartu identitas yang anda gunakan jelas!
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Pemilu | Ormawa ABC-UXYZ'
})

useSeoMeta({
  description: 'Halaman ini menjelaskan tentang pasangan calon Ketua dan Wakil Ketua Organisasi Mahasiswa XYZ-Unika Atma Jaya periode 2023-2025. Halaman ini menampilkan informasi tentang visi, misi, program kerja, dan biodata pasangan calon Ketua dan Wakil Ketua Ormawa XYZ-UAJ periode 2023-2025. Halaman ini memberi fitur kepada mahasiswa aktif S1 UAJ untuk melaksanakan pemilihan umum',
})

definePageMeta({
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in',
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      (from.meta.pageTransition as {name:string}).name = 'slide-left';
      (to.meta.pageTransition as {name:string}).name = 'slide-left';
    }
  }
})

// Data Fetching

import { addDoc, setDoc, doc, onSnapshot, collection, serverTimestamp } from 'firebase/firestore';
import { ref as firebaseRef, uploadBytes } from 'firebase/storage';

const period = ref<any>(null);

onMounted(async() => {
  const { db } = useFirebase();
  const docRef = doc(db, 'periods', 'm7N11UF5rp5Lf2YshfLX');
  onSnapshot(docRef, (snap) => {
    period.value = snap.data();
  })
  watch(voteIsValid, () => {
    console.log('test');
    if (voteIsValid) {
      console.log(voteIsValid.value.isValid);
      isValidating.value = false;
    }
  })
})

// Form Logic

const showForm = ref(false);
const voteForm = ref<any>(null);

const KIMFile = ref<any>(null);
const voteValue = ref<string>('0');

const voteFormData = ref({
  email: '',
  voteValue: voteValue.value,
})

const formEmailIsValid = ref<boolean>(false);
const formFileIsValid = ref<boolean>(false);
const formFileFirstTime = ref<boolean>(true);

const isUploading = ref<boolean>(false);
const uploadSucess = ref<boolean>(false);
const isValidating = ref<boolean>(false);
const voteIsValid = ref<any>(null);

const openVoteForm = (vote:string) => {
  showForm.value = true;
  voteFormData.value.voteValue = vote;
}

const closeVoteForm = () => {
  resetForm();
  showForm.value = false;
}

const submitVote = async () => {
  const { emailIsValid } = checkFormEmail(voteFormData.value.email);
  formEmailIsValid.value = emailIsValid.value;
  checkFormFile();
  if (formEmailIsValid.value && formFileIsValid.value) {
    const { db, storage } = useFirebase();
    const imageFile = KIMFile.value.files[0];
    isUploading.value=true;
    addDoc(collection(db, 'voter_emails'), {
      email: voteFormData.value.email,
      timeCreated: serverTimestamp(),
    }).then((snap => {
      const emailDocID = snap.id;
      setDoc(doc(db, 'voter_votes', emailDocID), {
        voteValue: voteFormData.value.voteValue,
        timeCreated: serverTimestamp(),
      }).then(() => {
        const imageRef = firebaseRef(storage, `student_card_images/${emailDocID}.jpg`);
        uploadBytes(imageRef, imageFile).then(() => {
          isUploading.value = false;
          uploadSucess.value = true;
          isValidating.value = true;
          const docRef = doc(db, 'voted_clients', emailDocID);
          onSnapshot(docRef, (snap) => {
            voteIsValid.value = snap.data();
          })
        });
      })
    }))
  };
}

// const returnEmailPart = (email:string) => {
//   const emailPart = email.split('@')[0];
//   return emailPart;
// }

const returnVoteValueInt = (number:string) => {
  if (number==='1') return 0;
  else if (number==='2') return 1;
  else return 0;
}

const checkFormFile = () => {
  formFileFirstTime.value = false;
  if (KIMFile.value.files.length === 1) formFileIsValid.value = true; 
  else formFileIsValid.value = false;
}

const resetForm = () => {
  voteFormData.value.email='';
  KIMFile.value.value='';
  voteFormData.value.voteValue = '0';
  formEmailIsValid.value = false;
  formFileIsValid.value = false;
  formFileFirstTime.value = true;
  isUploading.value = false;
  uploadSucess.value = false;
  isValidating.value = false;
  voteIsValid.value = null;
}

const voteFormTransition = () => {
  const voteFormClasses = voteForm.value.classList
  if (showForm.value) {
      voteFormClasses.add('opacity-100');
      voteFormClasses.remove('pointer-events-none');
      voteFormClasses.remove('opacity-0');
      voteFormClasses.remove('translate-x-full');
    }
    if (!showForm.value) {
      voteFormClasses.add('opacity-0');
      voteFormClasses.add('pointer-events-none');
      voteFormClasses.remove('opacity-100');
      setTimeout(() => {
        voteFormClasses.add('translate-x-full');
      }, 200)
    }
}

// UI logic

// P: President, VP: Vice President
const candidates = {
  showPCandidate1: ref(true),
  showPCandidate2: ref(true),
}

const showCandidate = (number:string, position:string) => {
  if (number==='1' && position==='Calon Ketua') candidates.showPCandidate1.value=true;
  if (number==='1' && position==='Calon Wakil Ketua') candidates.showPCandidate1.value=false;
  if (number==='2' && position==='Calon Ketua') candidates.showPCandidate2.value=true;
  if (number==='2' && position==='Calon Wakil Ketua') candidates.showPCandidate2.value=false;
}

const returnShowValue = (number:string, position:string) => {
  if (number==='1' && position==='Calon Ketua') return candidates.showPCandidate1.value;
  if (number==='1' && position==='Calon Wakil Ketua') return !candidates.showPCandidate1.value;
  if (number==='2' && position==='Calon Ketua') return candidates.showPCandidate2.value;
  if (number==='2' && position==='Calon Wakil Ketua') return !candidates.showPCandidate2.value;
}

const returnFirstTwoNames = (name:string) => {
  const firstTwoNames = `${name.split(' ')[0]} ${name.split(' ')[1]}`;
  return firstTwoNames;
}

// Event listeners

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
  watch(showForm, voteFormTransition)
  watch(voteFormData.value, () => {
    const { emailIsValid } = checkFormEmail(voteFormData.value.email);
    formEmailIsValid.value = emailIsValid.value;
  });
  
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
})

</script>

<style lang="scss" scoped>
  .paslon {
    &:hover {
      .paslon-number {
        @apply bg-opacity-100 text-ormawaxyzuaj-orange;
      }

      .paslon-name {
        @apply bg-opacity-100;

        span {
          @apply text-ormawaxyzuaj-black;
        }
      }
      div {
        .caket {
        @apply w-[50%];
        }
        .cawaket {
          @apply w-[35%];
        }
      }
    }
  }

  .board-member-profile {
    &:hover {
      img {
        @apply w-[95%];
      }
      button {
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
    @apply mt-0 bg-ormawaxyzuaj-black;
  }


</style>