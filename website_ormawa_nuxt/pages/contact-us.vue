<template>
  <div>
    <section id="title" class="
      flex flex-col justify-center items-center
      w-full h-24 sm:h-48
      bg-ormawaxyzuaj-white
      shadow-ormawaxyzuaj-black-shadow
      transition-all duration-100 ease-in-out
    ">
      <h1 class="
        text-[2rem] xs:text-[2.5rem] sm:text-[4rem] text-center text-ormawaxyzuaj-orange font-Poppins-SemiBold
        drop-shadow-ormawaxyzuaj-black-shadow 
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
        container-ormawaxyzuaj
        flex flex-col justify-center gap-8
        bg-ormawaxyzuaj-black bg-opacity-75
        shadow-ormawaxyzuaj-black-shadow 
      ">
        
        <div class="
          grid grid-cols-1 2xl:grid-cols-2 items-start gap-8
          w-[100%]
        ">
          <div class="
            flex flex-col gap-4 2xl:gap-6
            w-full
          "> 
            <h2 class="
              bg-gradient-to-r from-ormawaxyzuaj-orange from-[25%] to-transparent to-50%
              [background-size:_400%]
              bg-clip-text
              text-[1.5rem] sm:text-[2rem] text-transparent font-Montserrat-Bold
              drop-shadow-ormawaxyzuaj-black-shadow 
              animate-[slide-fill-animation_1s_ease-in-out]
            ">
              KONTAK
            </h2>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(email,'change-to')" @mouseleave="changeColor(email,'change-back')">
                <NuxtLink to="mailto: ormawa.xyz@atmajaya.ac.id" class="
                  flex justify-center items-center
                  w-[5.75rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                  bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Email
                </NuxtLink>
              </div>
              <span ref="email" class="
                text-[0.75rem] xs:text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white
                transition-all duration-100 ease-in-out
              ">
                ormawa.xyz@atmajaya.ac.id
              </span>
            </div>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(instagram,'change-to')" @mouseleave="changeColor(instagram,'change-back')">
                <NuxtLink to="https://instagram.com/ormawaxyz.uaj" target="_blank" class="
                  flex justify-center items-center
                  w-[5.75rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                  bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Instagram
                </NuxtLink>
              </div>
              <span ref="instagram" class="
                text-[0.75rem] xs:text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white
                transition-all duration-100 ease-in-out
              ">
                ormawaxyz.uaj
              </span>
            </div>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(eksternal,'change-to')" @mouseleave="changeColor(eksternal,'change-back')">
                <NuxtLink to="https://wa.me/628000000000" target="_blank" class="
                  flex justify-center items-center
                  w-[5.75rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                  bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Eksternal
                </NuxtLink>
              </div>
              <span ref="eksternal" class="
                text-[0.75rem] xs:text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white
                transition-all duration-100 ease-in-out
              ">
                +62 8000000000 (Lorem)
              </span>
            </div>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(internal,'change-to')" @mouseleave="changeColor(internal,'change-back')">
                <NuxtLink to="https://wa.me/628000000000" target="_blank" class="
                  flex justify-center items-center
                  w-[5.75rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                  bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Internal
                </NuxtLink>
              </div>
              <span ref="internal" class="
                text-[0.75rem] xs:text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white
                transition-all duration-100 ease-in-out
              ">
                +62 8000000000 (Ipsum)
              </span>
            </div>
            <div class="
              flex justify-self-left items-center gap-2 xs:gap-4
              w-full
            ">
              <div @mouseenter="changeColor(aspirasi,'change-to')" @mouseleave="changeColor(aspirasi,'change-back')">
                <NuxtLink to="https://wa.me/628000000000" target="_blank" class="
                  flex justify-center items-center
                  w-[5.75rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                  bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Aspirasi
                </NuxtLink>
              </div>
              <span ref="aspirasi" class="
                text-[0.75rem] xs:text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white
                transition-all duration-100 ease-in-out
              ">
                +62 8000000000 (Dolor)
              </span>
            </div>
          </div>
          <div class="
            flex flex-col gap-4
            w-full
          ">
            <div>
              <h2 class="
                bg-gradient-to-r from-ormawaxyzuaj-orange from-[25%] to-transparent to-50%
                [background-size:_400%]
                bg-clip-text
                text-[1.5rem] sm:text-[2rem] text-transparent font-Montserrat-Bold
                drop-shadow-ormawaxyzuaj-black-shadow 
                animate-[slide-fill-animation_1s_ease-in-out]
              ">
                ALAMAT
              </h2>
              <span class="
                text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white
              ">
                Jl. Lorem No. 0, Kelurahan Ipsum, Kecamatan Dolor, Kota Sit Amet, 0000
              </span>
            </div>
            <div class="h-[15rem] xs:h-[20rem] sm:h-[30rem] 2xl:h-[16rem]">
              <iframe title="streetViewUXYZ" class="w-full h-full" src="https://www.google.com/maps/embed?pb=!4v1709462052151!6m8!1m7!1sCAoSLEFGMVFpcE93d3RTRDRwYVBqOFA1X0hLcFgxWGd4TVRCSXl5STMza0NEVERR!2m2!1d-64.2543795!2d-56.6833253!3f226.55193529847827!4f8.009682844650754!5f0.7820865974627469" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div>
          <h2 class="
            bg-gradient-to-r from-ormawaxyzuaj-orange from-[25%] to-transparent to-50%
            [background-size:_400%]
            bg-clip-text
            text-[1.5rem] sm:text-[2rem] text-transparent font-Montserrat-Bold
            drop-shadow-ormawaxyzuaj-black-shadow 
            animate-[slide-fill-animation_1s_ease-in-out]
          ">
            FORM
          </h2>
          <form @submit.prevent="submitForm">
            <div class="
              grid grid-cols-2 gap-x-8 gap-y-4
              w-full
            ">
              <div class="
                col-span-2 sm:col-span-1
                flex flex-col
                w-full
              ">
                <label for="name" class="
                  w-max
                  text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange
                  transition-all duration-100 ease-in-out
                ">
                  Nama
                </label>
                <input type="text" id="name" v-model="formData.name" required minlength="3" maxlength="100">
                <span v-if="!formNameIsValid && formData.name!==''" class="text-red-600">
                  Format nama minimal 3 karakter dan tidak mengandung simbol atau angka
                </span>
              </div>
              <div class="
                col-span-2 sm:col-span-1
                flex flex-col
                w-full
              ">
                <label for="email" class="
                  w-max
                  text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange
                  transition-all duration-100 ease-in-out
                ">
                  Email
                </label>
                <input type="email" id="email" v-model="formData.email" required>
                <span v-if="!formEmailIsValid && formData.email!=='' && !formData.isAnAspiration" class="text-red-600">
                  Masukan format email yang benar
                </span>
                <span v-if="!formEmailIsValid && formData.email!=='' && formData.isAnAspiration" class="text-red-600">
                  Masukan format email mahasiswa UAJ yang benar
                </span>
              </div>
              <div class="
                col-span-2
                flex flex-col
                w-full
              ">
                <label for="subject" class="
                  w-max
                  text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange
                  transition-all duration-100 ease-in-out
                ">
                  Subjek
                </label>
                <input type="text" id="subject" v-model="formData.subject" required>
                <span v-if="!formSubjectIsValid && formData.subject!==''" class="text-red-600">
                  Format nama minimal 10 karakter dan tidak mengandung simbol
                </span>
              </div>
              <div class="
                col-span-2
                flex flex-col
                w-full
              ">
                <label for="message" class="
                  w-max
                  text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange
                  transition-all duration-100 ease-in-out
                ">
                  Pesan
                </label>
                <textarea type="text" id="message" v-model="formData.message" required minlength="100" maxlength="2000" class="
                  h-[5rem]
                  resize-none
                ">
                </textarea>
                <span v-if="!formMessageIsValid && formData.message!==''" class="text-red-600">
                  Format pesan minimal 100 karakter
                </span>
              </div>
              <div class="
                col-span-2 gap-2
                flex justify-start items-center
                w-full
              ">
                <input type="checkbox" id="isAnAspiration" v-model="formData.isAnAspiration" class="w-5 h-5 accent-ormawaxyzuaj-orange">
                <label for="isAnAspiration" class="
                  text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange
                  transition-all duration-100 ease-in-out
                ">
                  Pesan adalah aspirasi mahasiswa UAJ
                </label>
              </div>
              <div class="
                col-span-2
                flex flex-col items-center gap-4
                w-full
              ">
                <button v-if="!isUploading && !uploadSucess && !uploadFail" type="submit" class="
                  flex justify-center items-center
                  w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                  bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Kirim
                </button>
                <div v-if="isUploading && !uploadSucess" class="
                  flex justify-center items-center gap-4
                  h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-orange font-Panton-BlackCaps fill-ormawaxyzuaj-white
                ">
                  <Icons name="progress" class="h-[0.8rem] xs:h-[1rem] sm:h-[1.2rem] animate-spin"/>
                  Mengirim
                </div>
                <div v-if="!isUploading && uploadSucess" class="
                  flex justify-center items-center gap-4
                  h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-orange font-Panton-BlackCaps fill-ormawaxyzuaj-white
                ">
                  <Icons name="done" class="h-[0.8rem] xs:h-[1rem] sm:h-[1.2rem]"/>
                  Berhasil Kirim
                </div>
                <div v-if="!isUploading && uploadFail" class="
                  flex justify-center items-center gap-4
                  h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-orange font-Panton-BlackCaps fill-ormawaxyzuaj-white
                ">
                  <Icons name="close" class="h-[0.8rem] xs:h-[1rem] sm:h-[1.2rem]"/>
                  Gagal Kirim
                </div>
                <button v-if="uploadSucess || uploadFail" @click.prevent="resetForm" class="
                  flex justify-center items-center
                  w-[6rem] xs:w-[7rem] sm:w-[9rem] h-[1.5rem] xs:h-[2rem] sm:h-[2.5rem]
                  border-solid border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[1.5rem]
                  bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                  hover:shadow-ormawaxyzuaj-orange-shadow-sm
                  text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black hover:text-ormawaxyzuaj-orange font-Panton-BlackCaps
                  transition-all duration-100 ease-in-out
                ">
                  Atur Ulang
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Hubungi Kami | Ormawa XYZ-UAJ'
})

useSeoMeta({
  description: 'Halaman ini mamaparkan cara menghubungi Ormawa XYZ-Unika Atma Jaya. Halaman ini menampilkan informasi tentang informasi kontak dan alamat lokasi Ormawa XYZ-UAJ',
})

definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
  middleware(to, from) {
    if(to.meta.pageTransition) {
      if (from.fullPath === '/' || from.fullPath === '/profile' || from.fullPath.slice(0,8) ==='/program') {
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

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  isAnAspiration: false,
})

const formEmailIsValid = ref<boolean>(false);
const formNameIsValid = ref<boolean>(false);
const formSubjectIsValid = ref<boolean>(false);
const formMessageIsValid = ref<boolean>(false);

const isUploading = ref<boolean>(false);
const uploadSucess = ref<boolean>(false);
const uploadFail = ref<boolean>(false);

import { addDoc, serverTimestamp, collection } from 'firebase/firestore';

const submitForm = async () => {
  checkFormData();
  if (formNameIsValid.value && formEmailIsValid.value && formSubjectIsValid.value && formMessageIsValid.value) {
    const { db } = useFirebase();
    isUploading.value=true;
    const folder = ref<string>('')
    if (formData.value.isAnAspiration) folder.value = 'form_aspirasi';
    else if (!formData.value.isAnAspiration) folder.value = 'form_biasa';

    addDoc(collection(db, folder.value), {
      name: formData.value.name,
      email: formData.value.email,
      subject: formData.value.subject,
      message: formData.value.message,
      timeCreated: serverTimestamp(),
    }).then(() => {
      isUploading.value=false;
      uploadSucess.value=true;
    }).catch(() => {
      isUploading.value=false;
      uploadFail.value=true;
    })
  }
}

const checkFormData = () => {
  // Validate name
  if (formData.value.name.length >=3) {
    const onlyLetters = /^[a-zA-Z ]+$/.test(formData.value.name);
    if (onlyLetters) formNameIsValid.value=true;
    else formNameIsValid.value=false;
  }
  else formNameIsValid.value=false;

  // Validate email
  if (formData.value.isAnAspiration) {
    const { emailIsValid } = checkFormEmail(formData.value.email);  
    formEmailIsValid.value = emailIsValid.value;
  }
  else if (!formData.value.isAnAspiration) {
    const email = formData.value.email;
    if ((email.match(/\@/g) || []).length === 1) {
      const secondPart = email.split('@')[1];
      if ((secondPart.match(/\./g) || []).length >= 1 && /^[a-z]+(?:\.[a-z]+)*$/i.test(secondPart)) formEmailIsValid.value=true;
      else formEmailIsValid.value=false;
    }
    else formEmailIsValid.value=false;
  }
  else formEmailIsValid.value=false;

  // Validate subject
  if (formData.value.subject.length >=10) {
    const onlyLetters = /^[a-z0-9 ]+$/i.test(formData.value.subject);;
    if (onlyLetters) formSubjectIsValid.value=true;
    else formSubjectIsValid.value=false;
  }
  else formSubjectIsValid.value=false;

  // Validate message
  if (formData.value.message.length >= 100) formMessageIsValid.value=true;
  else formMessageIsValid.value=false;
}

const resetForm = () => {
  isUploading.value = false;
  uploadSucess.value = false;
  uploadFail.value = false;
  formData.value.name=''; 
  formData.value.email=''; 
  formData.value.subject=''; 
  formData.value.message=''; 
  formData.value.isAnAspiration=false;
}

const email = ref<HTMLElement | null>(null);
const instagram = ref<HTMLElement | null>(null);
const eksternal = ref<HTMLElement | null>(null);
const internal = ref<HTMLElement | null>(null);
const aspirasi = ref<HTMLElement | null>(null);

const changeColor = (element: HTMLElement | null, changeOptions: string) => {
  if(changeOptions==='change-to') {
    element!.classList.add('text-ormawaxyzuaj-orange');
    element!.classList.remove('text-ormawaxyzuaj-white');
  }
  if(changeOptions==='change-back') {
    element!.classList.add('text-ormawaxyzuaj-white');
    element!.classList.remove('text-ormawaxyzuaj-orange');
  }
}

onMounted(() => {
  watch(formData.value, () => {
    checkFormData();
    console.log('test')
  })
})

</script>

<style lang="scss" scoped>

</style>