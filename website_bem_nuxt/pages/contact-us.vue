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
        HUBUNGI KAMI
      </h1>
    </section>
    <section id="contact-and-info" class="
      flex justify-center 
      w-full
    ">
      <div class="
        container-bemkmuaj
        flex flex-col justify-center gap-8
        bg-bemkmuaj-black bg-opacity-75
        shadow-bemkmuaj-black-shadow 
      ">
        
        <div class="
          grid grid-cols-1 2xl:grid-cols-2 items-start gap-8
          w-[100%]
        ">
          <div class="
            flex flex-col gap-4 2xl:gap-8
            w-full
          "> 
            <h2 class="
              bg-gradient-to-r from-bemkmuaj-orange from-[25%] to-transparent to-50%
              [background-size:_400%]
              bg-clip-text
              text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-transparent font-Montserrat-Bold
              drop-shadow-bemkmuaj-black-shadow 
              animate-[slide-fill-animation_1s_ease-in-out]
            ">
              KONTAK
            </h2>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(email,'change-to')" @mouseleave="changeColor(email,'change-back')">
                <NuxtLink to="mailto: bem.km@atmajaya.ac.id" class="
                  flex justify-center items-center
                  w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[1.5rem]
                  bg-bemkmuaj-white hover:bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-bemkmuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-bemkmuaj-black hover:text-bemkmuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Email
                </NuxtLink>
              </div>
              <span ref="email" class="
                text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
                transition-all duration-100 ease-in-out
              ">
                bem.km@atmajaya.ac.id
              </span>
            </div>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(instagram,'change-to')" @mouseleave="changeColor(instagram,'change-back')">
                <NuxtLink to="https://instagram.com/bem_kmuaj" target="_blank" class="
                  flex justify-center items-center
                  w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[1.5rem]
                  bg-bemkmuaj-white hover:bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-bemkmuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-bemkmuaj-black hover:text-bemkmuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Instagram
                </NuxtLink>
              </div>
              <span ref="eksternal" class="
                text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
                transition-all duration-100 ease-in-out
              ">
                bem_kmuaj
              </span>
            </div>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(eksternal,'change-to')" @mouseleave="changeColor(eksternal,'change-back')">
                <NuxtLink to="https://wa.me/6287721859106" target="_blank" class="
                  flex justify-center items-center
                  w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[1.5rem]
                  bg-bemkmuaj-white hover:bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-bemkmuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-bemkmuaj-black hover:text-bemkmuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Eksternal
                </NuxtLink>
              </div>
              <span ref="eksternal" class="
                text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
                transition-all duration-100 ease-in-out
              ">
                +62 87721859106 (Josia)
              </span>
            </div>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(internal,'change-to')" @mouseleave="changeColor(internal,'change-back')">
                <NuxtLink to="https://wa.me/628118209287" target="_blank" class="
                  flex justify-center items-center
                  w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[1.5rem]
                  bg-bemkmuaj-white hover:bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-bemkmuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-bemkmuaj-black hover:text-bemkmuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Internal
                </NuxtLink>
              </div>
              <span ref="internal" class="
                text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
                transition-all duration-100 ease-in-out
              ">
                +62 8118209287 (Jo)
              </span>
            </div>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(aspirasi,'change-to')" @mouseleave="changeColor(aspirasi,'change-back')">
                <NuxtLink to="https://wa.me/6288808374177" target="_blank" class="
                  flex justify-center items-center
                  w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-bemkmuaj-orange-glow rounded-[1.5rem]
                  bg-bemkmuaj-white hover:bg-bemkmuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-bemkmuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-bemkmuaj-black hover:text-bemkmuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Aspirasi
                </NuxtLink>
              </div>
              <span ref="aspirasi" class="
                text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
                transition-all duration-100 ease-in-out
              ">
                +62 88808374177 (Michelle)
              </span>
            </div>
          </div>
          <div class="
            flex flex-col gap-8
            w-full
          ">
            <div>
              <h2 class="
                bg-gradient-to-r from-bemkmuaj-orange from-[25%] to-transparent to-50%
                [background-size:_400%]
                bg-clip-text
                text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-transparent font-Montserrat-Bold
                drop-shadow-bemkmuaj-black-shadow 
                animate-[slide-fill-animation_1s_ease-in-out]
              ">
                ALAMAT
              </h2>
              <span class="
                text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
              ">
                Jl. Raya Cisauk Lapan, Sampora, Kec. Cisauk, Kabupaten Tangerang, Banten 15345
              </span>
            </div>
            <div class="h-[15rem] xs:h-[20rem] sm:h-[30rem] 2xl:h-[20rem]">
              <iframe class="w-full h-full" src="https://www.google.com/maps/embed?pb=!4v1690294942130!6m8!1m7!1smms5t2mTyDD8LJQi6Sk_gw!2m2!1d-6.318058307835942!2d106.6505173535916!3f205.4769897449964!4f9.82345676993208!5f1.5080392418408253" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div>
          <h2 class="
            bg-gradient-to-r from-bemkmuaj-orange from-[25%] to-transparent to-50%
            [background-size:_400%]
            bg-clip-text
            text-[1rem] sm:text-[1.5rem] lg:text-[2rem] text-transparent font-Montserrat-Bold
            drop-shadow-bemkmuaj-black-shadow 
            animate-[slide-fill-animation_1s_ease-in-out]
          ">
            FORM
          </h2>
          <form @submit.prevent="submitForm">
            <div class="
              flex flex-col items-center gap-4
              w-full
            ">
              <div class="
                flex flex-col sm:flex-row gap-4 sm:gap-8
                w-full
              ">
                <div class="
                  flex flex-col
                  w-full
                ">
                  <label for="name" class="
                    text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
                  ">
                    Nama
                  </label>
                  <input type="text" id="name" v-model="formData.name" required minlength="3" maxlength="100">
                </div>
                <div class="
                  flex flex-col
                  w-full
                ">
                  <label for="email" class="
                    text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
                  ">
                    Email
                  </label>
                  <input type="text" id="email" v-model="formData.email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}">
                </div>
              </div>
              <div class="
                flex flex-col
                w-full
              ">
                <label for="message" class="
                  text-[1rem] sm:text-[1.2rem] text-bemkmuaj-white
                ">
                  Pesan
                </label>
                <textarea type="text" id="message" v-model="formData.message" required minlength="100" maxlength="2000" class="
                  h-[5rem]
                  resize-none
                ">
                </textarea>
              </div>
              <button type="submit" class="
                flex justify-center items-center
                w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                border-solid border-[0.15rem] border-bemkmuaj-white hover:border-bemkmuaj-orange-glow rounded-[1.5rem]
                hover:bg-bemkmuaj-black
                hover:shadow-bemkmuaj-orange-shadow-sm
                text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-bemkmuaj-white hover:text-bemkmuaj-orange font-Panton-BlackCaps
                transition-all duration-100 ease-in-out
              ">
                Kirim
              </button>
            </div>
          </form>
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
      if (from.fullPath === '/' || from.fullPath === '/profile' || from.fullPath === '/program') {
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

useHead({
  title: 'Hubungi Kami | BEM KM-UAJ'
})

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const submitForm = () => {
  console.log(formData.value);
  formData.value = {
    name: '',
    email: '',
    message: '',
  }
}

const email = ref<HTMLElement | null>(null);
const instagram = ref<HTMLElement | null>(null);
const eksternal = ref<HTMLElement | null>(null);
const internal = ref<HTMLElement | null>(null);
const aspirasi = ref<HTMLElement | null>(null);


const changeColor = (element: HTMLElement | null, changeOptions: string) => {
  if(changeOptions==='change-to') {
    element!.classList.add('text-bemkmuaj-orange');
    element!.classList.remove('text-bemkmuaj-white');
  }
  if(changeOptions==='change-back') {
    element!.classList.add('text-bemkmuaj-white');
    element!.classList.remove('text-bemkmuaj-orange');
  }
}

</script>

<style lang="scss" scoped>

</style>