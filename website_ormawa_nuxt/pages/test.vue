<template>
  <div>
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
          TEST PEMILU
        </h2>
        <div class="
          flex flex-col justify-center items-center
          w-full h-full
        ">
          <div class="
            w-full
            p-1
            border-[0.15rem] border-ormawaxyzuaj-orange-glow rounded-[0.5rem]
            bg-ormawaxyzuaj-black
            shadow-ormawaxyzuaj-orange-shadow-sm
            transition-all duration-100 ease-in-out
          ">

            <!-- Start vote form -->
            <form @submit.prevent="submitVote" class="
              grid grid-cols-1 justify-center gap-4
              w-full max-h-full
              p-3
              scrollbar scrollbar-w-[6px] scrollbar-thumb-rounded-md scrollbar-thumb-ormawaxyzuaj-white hover:scrollbar-thumb-neutral-400 scrollbar-track-ormawaxyzuaj-black 
              overflow-y-auto
              overflow-x-hidden
            ">

              <!-- Start vote form email input -->
              <div class="
                flex flex-col
              ">
                <label for="email" class="
                  text-ormawaxyzuaj-white
                ">
                  Email Student Microsoft:
                </label>
                <input v-if="(!formIsProcessing && !validationIsDone)" type="email" id="email" v-model="voteFormData.email" required>
                <span v-else class="h-6 text-ormawaxyzuaj-orange">
                  {{ voteFormData.email }}
                </span>
                <span v-if="!formEmailIsValid && voteFormData.email!==''" class="text-red-600">
                  Masukan email yang valid
                </span>
              </div>
              <!-- End vote form email input -->
              
              <!-- Start vote form vote value input -->
              <div class="
                flex flex-col
              ">
                <label for="vote-value" class="
                  text-ormawaxyzuaj-white
                ">
                  Nomor Paslon:
                </label>
                <input v-if="(!formIsProcessing && !validationIsDone)" type="text" id="vote-value" v-model="voteFormData.voteValue" required>
                <span v-else class="h-6 text-ormawaxyzuaj-orange">
                  {{ voteFormData.voteValue }}
                </span>
                <span v-if="!formVoteValueIsValid && voteFormData.voteValue!==''" class="text-red-600">
                  Nomor paslon hanya bisa bernilai 1 atau 2
                </span>
              </div>
              <!-- End vote form vote value input -->
              
              <!-- Start vote form test submissions input -->
              <div class="
                flex flex-col
              ">
                <label for="test-sumbissions" class="
                  text-ormawaxyzuaj-white
                ">
                  Jumlah Tes:
                </label>
                <input v-if="(!formIsProcessing && !validationIsDone)" type="number" id="test-submissions" v-model="voteFormData.testSubmissions" required>
                <span v-else class="h-6 text-ormawaxyzuaj-orange">
                  {{ voteFormData.testSubmissions }}
                </span>
                <span v-if="!formTestSubmissionsIsValid && voteFormData.testSubmissions<=0" class="text-red-600">
                  Nomor paslon hanya bisa angka bernilai 1 hingga 2000
                </span>
              </div>
              <!-- End vote form test submissions input -->

              <!-- Start vote form file input -->
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
                    border-solid border-[0.15rem] border-transparent  rounded-[1.5rem]
                    bg-ormawaxyzuaj-white
                    text-[0.8rem] xs:text-[1rem] sm:text-[1.2rem] text-center text-ormawaxyzuaj-black font-Panton-BlackCaps
                    transition-all duration-100 ease-in-out
                  " :class="{
                    ' bg-opacity-75 hover:border-ormawaxyzuaj-orange-glow hover:bg-ormawaxyzuaj-black hover:bg-opacity-100 hover:shadow-ormawaxyzuaj-orange-shadow-sm hover:text-ormawaxyzuaj-orange cursor-pointer': !formFileIsValid,
                    ' bg-opacity-25' : formFileIsValid,
                  }">
                    Unggah
                  </label>
                  <input @change.prevent="checkFormFile" ref="studentCardFile" type="file" id="file" name="file" accept=".jpg, .jpeg" required :disabled="formFileIsValid" class="w-0 h-0 overflow-hidden">
                  <div v-if="formFileExist" class="
                    flex gap-x-2
                  ">
                    <span class="text-ormawaxyzuaj-orange">
                      {{ studentCardFile.files[0].name }}
                    </span>
                    <button v-if="(!formIsProcessing && !validationIsDone)" @click.prevent="clearFormFile" class="
                      flex justify-center items-center gap-4
                      w-6 h-6
                      border-[0.15rem] border-transparent hover:border-ormawaxyzuaj-orange-glow rounded-[0.25rem]
                      bg-ormawaxyzuaj-white hover:bg-ormawaxyzuaj-black bg-opacity-75 hover:bg-opacity-100
                      hover:shadow-ormawaxyzuaj-orange-shadow-sm
                      fill-ormawaxyzuaj-black hover:fill-ormawaxyzuaj-orange
                      transition-all duration-100 ease-in-out
                    ">
                      <Icons name="close" class="h-[1rem]" />
                    </button>
                  </div>
                </div>
                <span :class="{
                  'text-red-600' : formFileTooLarge,
                  'text-ormawaxyzuaj-light-gray font-Montserrat-LightItalic' : !formFileTooLarge,
                }">
                  Ukuran file maksimal 500KB
                </span>
                <span v-if="!formFileExist && !formFileFirstTime" class="text-red-600">
                  Masukan file foto KIM
                </span>
              </div>
              <!-- End vote form file input -->


              <div class="
                flex flex-col justify-center items-center gap-y-8
                w-full
              ">
                <button v-if="!formIsProcessing && !validationIsDone" type="submit" @click="checkFormFile" class="
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
                <div v-if="formIsProcessing || validationIsDone" class="
                  flex flex-col justify-center items-center gap-4
                ">
                  <div class="
                    flex
                    gap-x-8
                  ">
                    <div class="flex flex-col">
                      <span class="
                        text-ormawaxyzuaj-white
                      ">
                        Successful Submission:
                      </span>
                      <span class="
                        text-ormawaxyzuaj-orange
                      ">
                        {{ successfulSubmissions }}
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="
                        text-ormawaxyzuaj-white
                      ">
                        Failed Submission:
                      </span>
                      <span class="
                        text-ormawaxyzuaj-orange
                      ">
                        {{ failedSubmissions }}
                      </span>
                    </div>
                      <div class="flex flex-col">
                      <span class="
                        text-ormawaxyzuaj-white
                      ">
                        Successful Validations:
                      </span>
                      <span class="
                        text-ormawaxyzuaj-orange
                      ">
                        {{ successfulValidations }}
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="
                        text-ormawaxyzuaj-white
                      ">
                        Failed Validations:
                      </span>
                      <span class="
                        text-ormawaxyzuaj-orange
                      ">
                        {{ failedValidations }}
                      </span>
                    </div>
                  </div>
                  <div class="
                    flex
                    gap-x-8
                  ">
                    <div class="flex flex-col">
                      <span class="
                        text-ormawaxyzuaj-white
                      ">
                        Submission Time:
                      </span>
                      <span class="
                        text-ormawaxyzuaj-orange
                      ">
                        {{ submissionTime }} ms
                      </span>
                    </div>
                    <div class="flex flex-col">
                      <span class="
                        text-ormawaxyzuaj-white
                      ">
                        Validation Time:
                      </span>
                      <span class="
                        text-ormawaxyzuaj-orange
                      ">
                        {{ validationTime }} ms
                      </span>
                    </div>
                  </div>
                </div>
                <button v-if="validationIsDone" @click="resetForm" class="
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
            </form>
            <!-- End vote form -->

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

// --Start adding head information--
useHead({
  title: 'Pemilu Test | Ormawa XYZ-UAJ'
})
// --End adding head information--

// --Start form data logic--
// -Start form data variables-
const studentCardFile = ref<any>(null);
const voteValue = ref<string>('0');

const voteFormData = ref({
  email: '',
  voteValue: '',
  testSubmissions: 1,
})
// -End form data variables-

// -Start validation variables-
const formEmailIsValid = ref<boolean>(false);
const formVoteValueIsValid = ref<boolean>(false);
const formTestSubmissionsIsValid = ref<boolean>(false);
const formFileTooLarge = ref<boolean>(false);
const formFileExist = ref<boolean>(false);
const formFileIsValid = ref<boolean>(false);
const formFileFirstTime = ref<boolean>(true);
// -End validation variables-

// -Start submited form status variables-
const formIsProcessing = ref<boolean>(false);
const submissionIsDone = ref<boolean>(false);
const validationIsDone = ref<boolean>(false);
const submissionTime = ref<number>(0);
const validationTime = ref<number>(0);
const voteIsValidArray = ref<any[]>([])
// -End submited form status variables-

const submitVote = async () => { // Function for submiting form
  startTime.value = Date.now(); // Record the start time
  const { emailIsValid } = checkFormEmail(voteFormData.value.email);
  formEmailIsValid.value = emailIsValid.value;
  checkFormFile();
  if (formEmailIsValid.value && formVoteValueIsValid.value && formTestSubmissionsIsValid.value && formFileIsValid.value) {
    formIsProcessing.value=true;
    repeatSubmission();
  }
};

import { addDoc, setDoc, doc, onSnapshot, collection, serverTimestamp } from 'firebase/firestore';
import { ref as firebaseRef, uploadBytes } from 'firebase/storage';

// -Start success rate variables-
const successfulSubmissions = ref(0);
const failedSubmissions = ref(0);
const successfulValidations = ref(0);
const failedValidations = ref(0);
// -End success rate variables-

const startTime = ref<any>(null);

const repeatSubmission = async () => { // Function for repeating submission for test purpose
  const numberOfSubmissions = voteFormData.value.testSubmissions;
  for (let i = 0; i < numberOfSubmissions; i++) {
    const { db, storage } = useFirebase();
    const imageFile = studentCardFile.value.files[0];
    addDoc(collection(db, 'voter_emails'), {
      email: voteFormData.value.email,
      timeCreated: serverTimestamp(),
    }).then((snap) => {
      const emailDocID = snap.id;
      setDoc(doc(db, 'voter_votes', emailDocID), {
        voteValue: voteFormData.value.voteValue,
        timeCreated: serverTimestamp(),
      }).then(() => {
        const imageRef = firebaseRef(storage, `student_card_images/${emailDocID}.jpg`);
        uploadBytes(imageRef, imageFile).then(() => {
          const docRef = doc(db, 'voted_clients', emailDocID);
          onSnapshot(docRef, (snap) => {
            voteIsValidArray.value[i] = snap.data();
          });
          successfulSubmissions.value++; // Increment the counter
        }).catch(() => {
          failedSubmissions.value++;
          console.log('Failed');
        });
      }).catch(() => {
        failedSubmissions.value++;
        console.log('Failed');
      });
    }).catch(() => {
      failedSubmissions.value++;
      console.log('Failed');
    });
  }
}

watch(successfulSubmissions, () => { // Test submission watcher
  if (successfulSubmissions.value === voteFormData.value.testSubmissions) {
    const endTime = Date.now(); // Record the end time
    submissionTime.value = endTime - startTime.value; // Calculate elapsed time
    console.log('Submission Done');
    console.log(`Successful Submission Time: ${submissionTime.value} milliseconds`); // Log elapsed time 
  }
})

watch(voteIsValidArray, () => {
  let successfulValidationsTemp = 0;
  let failedValidationsTemp = 0;
  const numberOfSubmissions = voteFormData.value.testSubmissions;
  if (voteIsValidArray.value.length===numberOfSubmissions) {
    voteIsValidArray.value.forEach(el => {
      if (el) successfulValidationsTemp++;
      else failedValidationsTemp++;
    })
    successfulValidations.value = successfulValidationsTemp;
    failedValidations.value = failedValidationsTemp;
  }
}, {deep:true})

watch(successfulValidations, () => {
  const numberOfSubmissions = voteFormData.value.testSubmissions;
  if (successfulValidations.value === numberOfSubmissions) {
    const endTime = Date.now(); // Record the end time
    validationTime.value = endTime - startTime.value; // Calculate elapsed time
    validationIsDone.value = true;
    formIsProcessing.value=false;
    console.log('Validation Done');
    console.log(`Successful Validation Time: ${validationTime.value} milliseconds`); // Log elapsed time 
  }
})

const checkFormFile = () => { // Function for validating jpg/jpeg file
  formFileFirstTime.value = false;
  if (studentCardFile.value.files.length === 1) {
    formFileExist.value = true;
    if (studentCardFile.value.files[0].size > 500000) formFileTooLarge.value=true;
    else formFileTooLarge.value=false;
  }
  else {
    formFileExist.value=false;
    formFileTooLarge.value=false;
  }
  if (formFileExist.value && !formFileTooLarge.value) formFileIsValid.value=true;
  else formFileIsValid.value=false;
}

const clearFormFile = () => { // Function for clearing file input
  studentCardFile.value.value = '';
  checkFormFile();
}

const resetForm = () => { // Function for reseting form data
  voteFormData.value.email='';
  voteFormData.value.testSubmissions=1;
  voteFormData.value.voteValue='';
  studentCardFile.value.value='';
  formEmailIsValid.value = false;
  formFileIsValid.value = false;
  formFileTooLarge.value = false;
  formFileExist.value = false;
  formFileFirstTime.value = true;
  voteIsValidArray.value = [];
  startTime.value = null;
  formIsProcessing.value=false;
  submissionTime.value = 0;
  validationTime.value = 0;
  submissionIsDone.value = false;
  validationIsDone.value = false;
  successfulSubmissions.value = 0;
  failedSubmissions.value = 0;
  successfulValidations.value = 0;
  failedValidations.value = 0;
}

watchEffect(() => { // Form data watcher
  const { emailIsValid } = checkFormEmail(voteFormData.value.email);
  formEmailIsValid.value = emailIsValid.value;
})

watchEffect(() => {
  formVoteValueIsValid.value = voteFormData.value.voteValue==='1'? true : voteFormData.value.voteValue==='2'? true : false;
})

watchEffect(() => {
  formTestSubmissionsIsValid.value = voteFormData.value.testSubmissions>=1? true : false;
})

// --Start screen size variable(s) and function--
const isSmallScreen = ref(false);
const isXLScreen = ref(false);
const is3XLScreen = ref(false);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth >= 640;
  isXLScreen.value = window.innerWidth >= 1280;
  is3XLScreen.value = window.innerWidth >= 1920;
}
// --End screen size variable(s) and function--

onMounted(() => {

  // --Start screen size detection--
  isSmallScreen.value = window.innerWidth >= 640;
  isXLScreen.value = window.innerWidth >= 1280;
  is3XLScreen.value = window.innerWidth >= 1920;
  window.addEventListener('resize', updateScreenSize);
  // --End screen size detection--

});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
})

</script>

<style lang="scss" scoped>

</style>