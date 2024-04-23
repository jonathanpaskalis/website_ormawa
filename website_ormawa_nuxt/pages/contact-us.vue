<template>
  <div>

    <!-- Start contact us page title section -->
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
    <!-- End contact us page title section -->
    
    <!-- Start contact us page contact and info section -->
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
            
            <!-- Start email link -->
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
            <!-- End email link -->

            <!-- Start Instagram link -->
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
            <!-- End Instagram link -->

            <!-- Start external contact link -->
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
            <!-- End external contact link -->

            <!-- Start internal contact link -->
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
            <!-- End internal contact link -->

            <!-- Start aspiration contact link -->
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
            <!-- End aspiration contact link -->

          </div>
          <div class="
            flex flex-col gap-4
            w-full
          ">
            <!-- Start address information -->
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
                Jl. Jend. Sudirman No.51, RT.004/RW.4, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930
              </span>
            </div>
            <div class="h-[15rem] xs:h-[20rem] sm:h-[30rem] 2xl:h-[16rem]">
              <iframe title="streetViewXYZUAJ" class="w-full h-full" src="https://www.google.com/maps/embed?pb=!4v1713802401584!6m8!1m7!1sFYxyFO4J7KYlhQ0I2uFIrQ!2m2!1d-6.218241077231734!2d106.8143271477776!3f127.92120722638042!4f8.982766091315966!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- End address information -->

          </div>
        </div>

        <!-- Start contact form -->
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
              <!-- Start name text input -->
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
                <input v-if="!(isUploading || uploadSucess || uploadFail)" type="text" id="name" v-model="formData.name" required minlength="3" maxlength="100">
                <span v-else class="h-8 bg-ormawaxyzuaj-black text-ormawaxyzuaj-orange">
                  {{ formData.name }}
                </span>
                <span v-if="!formNameIsValid && formData.name!==''" class="text-red-600">
                  Format nama minimal 3 karakter dan tidak mengandung simbol atau angka
                </span>
              </div>
              <!-- End name text input -->

              <!-- Start email text input -->
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
                <input v-if="!(isUploading || uploadSucess || uploadFail)" type="email" id="email" v-model="formData.email" required>
                <span v-else class="h-8 bg-ormawaxyzuaj-black text-ormawaxyzuaj-orange">
                  {{ formData.email }}
                </span>
                <span v-if="!formEmailIsValid && formData.email!=='' && !formData.isAnAspiration" class="text-red-600">
                  Masukan format email yang benar
                </span>
                <span v-if="!formEmailIsValid && formData.email!=='' && formData.isAnAspiration" class="text-red-600">
                  Masukan format email mahasiswa UAJ yang benar
                </span>
              </div>
              <!-- End email text input -->

              <!-- Start subject text input -->
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
                <input v-if="!(isUploading || uploadSucess || uploadFail)" type="text" id="subject" v-model="formData.subject" required>
                <span v-else class="h-8 bg-ormawaxyzuaj-black text-ormawaxyzuaj-orange">
                  {{ formData.subject }}
                </span>
                <span v-if="!formSubjectIsValid && formData.subject!==''" class="text-red-600">
                  Format nama minimal 10 karakter dan tidak mengandung simbol
                </span>
              </div>
              <!-- End subject text input -->

              <!-- Start message text input -->
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
                <textarea v-if="!(isUploading || uploadSucess || uploadFail)" type="text" id="message" v-model="formData.message" required minlength="100" maxlength="2000" class="
                  h-20
                  resize-none
                ">
                </textarea>
                <p v-else class="h-20 bg-ormawaxyzuaj-black text-ormawaxyzuaj-orange">
                  {{ formData.message }}
                </p>
                <span v-if="!formMessageIsValid && formData.message!==''" class="text-red-600">
                  Format pesan minimal 100 karakter
                </span>
              </div>
              <!-- End message text input -->

              <!-- Start message category checkbox input -->
              <div class="
                col-span-2 gap-2
                flex justify-start items-center
                w-full
              ">
                <input :disabled="isUploading || uploadSucess || uploadFail" type="checkbox" id="isAnAspiration" v-model="formData.isAnAspiration" class="w-5 h-5 accent-ormawaxyzuaj-orange">
                <!-- <Icons v-else-if="formData.isAnAspiration" name="done" class="w-5 h-5 fill-ormawaxyzuaj-orange" />  -->
                <label for="isAnAspiration" class="
                  text-[1rem] sm:text-[1.2rem] text-ormawaxyzuaj-white hover:text-ormawaxyzuaj-orange
                  transition-all duration-100 ease-in-out
                ">
                  Pesan adalah aspirasi mahasiswa UAJ
                </label>
              </div>
              <!-- Start message category checkbox input -->

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
        <!-- End contact form -->
        
      </div>
    </section>
    <!-- End contact us page contact and info section -->

  </div>
</template>

<script setup lang="ts">

// --Start adding head information--
useHead({
  title: 'Hubungi Kami | Ormawa XYZ-UAJ'
})

useSeoMeta({
  description: 'Halaman ini mamaparkan cara menghubungi Ormawa XYZ-Unika Atma Jaya. Halaman ini menampilkan informasi tentang informasi kontak dan alamat lokasi Ormawa XYZ-UAJ',
})
// --End adding head information--

// --Start links UI logic--
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
// --End links UI logic--

// --Start form logic--
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  isAnAspiration: false,
})

// -Start validation variables-
const formEmailIsValid = ref<boolean>(false);
const formNameIsValid = ref<boolean>(false);
const formSubjectIsValid = ref<boolean>(false);
const formMessageIsValid = ref<boolean>(false);
// -End validation variables-

// -Start submited form status variables-
const isUploading = ref<boolean>(false);
const uploadSucess = ref<boolean>(false);
const uploadFail = ref<boolean>(false);
// -End submited form status variables-

import { addDoc, serverTimestamp, collection } from 'firebase/firestore';

const submitForm = async () => { // Function for submiting form
  checkFormData();
  if (formNameIsValid.value && formEmailIsValid.value && formSubjectIsValid.value && formMessageIsValid.value) {
    const { db } = useFirebase();
    isUploading.value=true;
    const folder = ref<string>('')
    if (formData.value.isAnAspiration) folder.value = 'aspiration_form_data';
    else if (!formData.value.isAnAspiration) folder.value = 'regular_form_data';

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

const checkFormData = () => { // Function for validating form data

  if (formData.value.name.length >=3) { // Validate name
    const onlyLetters = /^[a-zA-Z ]+$/.test(formData.value.name);
    if (onlyLetters) formNameIsValid.value=true;
    else formNameIsValid.value=false;
  }
  else formNameIsValid.value=false;

  if (formData.value.isAnAspiration) { // Validate name
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

  if (formData.value.subject.length >=10) { // Validate subject
    const onlyLetters = /^[a-z0-9 ]+$/i.test(formData.value.subject);;
    if (onlyLetters) formSubjectIsValid.value=true;
    else formSubjectIsValid.value=false;
  }
  else formSubjectIsValid.value=false;

  if (formData.value.message.length >= 100) formMessageIsValid.value=true; // Validate message
  else formMessageIsValid.value=false;
}

const resetForm = () => { // Function for reseting form data
  isUploading.value = false;
  uploadSucess.value = false;
  uploadFail.value = false;
  formData.value.name=''; 
  formData.value.email=''; 
  formData.value.subject=''; 
  formData.value.message=''; 
  formData.value.isAnAspiration=false;
}

watch(formData.value, () => checkFormData()); // Form data watcher
// --End form logic--

</script>

<style lang="scss" scoped>

</style>