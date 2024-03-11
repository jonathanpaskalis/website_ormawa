<template>
  <div class="
    board-member-profile
    flex flex-col justify-self-center
    w-[15rem] h-[23rem]
    border-solid border-4 rounded-[2rem]
  " :class="{
    'border-ormawaxyzuaj-gold hover:shadow-ormawaxyzuaj-gold-shadow' : member.position==='Ketua'||member.position==='Wakil Ketua',
    'col-start-1 sm:col-end-3 2xl:col-end-4 3xl:col-end-5 border-ormawaxyzuaj-orange hover:shadow-ormawaxyzuaj-orange-shadow': member.position==='Koordinator',
    'border-transparent' : member.position==='Staf'
  }">
    <div class="
      relative
      flex justify-center
      w-full h-[17.5rem]
      bg-gradient-to-b from-neutral-800 to-ormawaxyzuaj-white
      shadow-[inset_0_0_2rem_rgba(0,0,0,0.5)]
      rounded-t-[1.6rem]
    ">
      <img :src="`/images/board_members/${member.photo}`" alt="" class="
        absolute bottom-0
        w-[90%]
        transition-all duration-200 ease-in-out
      " />
    </div>
    <div class="
      flex flex-col justify-center items-center
      w-full h-[5.5rem]
      rounded-b-[1.6rem]
    " :class="{
      'bg-gradient-to-b from-ormawaxyzuaj-orange from-[50%] to-ormawaxyzuaj-gold' : member.position==='Ketua',
      'bg-gradient-to-b from-ormawaxyzuaj-orange from-[70%] to-ormawaxyzuaj-gold' : member.position==='Wakil Ketua',
      'bg-ormawaxyzuaj-orange' : member.position==='Koordinator'||member.position==='Staf'
    }">
      <h3 class="
        drop-shadow-ormawaxyzuaj-black-shadow
        text-center text-ormawaxyzuaj-white font-Panton-BlackCaps
        transition-all duration-200 ease-in-out
      " :class="{
        'text-[1.7rem]' : department.name==='Ketua dan Wakil Ketua',
        'text-[1.1rem]' : department.name !=='Ketua dan Wakil Ketua'
        // Examples if different font sizes needed
        // 'text-[1rem]' : department.name==='A'||department.name==='B',
        // 'text-[1.1rem]' : department.name==='C'||department.name==='D',
        // 'text-[0.75rem]' : department.name==='E'
      }">
        {{ member.position+(department.name!=='Ketua dan Wakil Ketua'?' Departemen '+department.name:'') }}
      </h3>
      <span class="
        drop-shadow-ormawaxyzuaj-black-shadow
        text-[1.3rem] text-center text-ormawaxyzuaj-white font-Montserrat-Medium
        transition-all duration-200 ease-in-out
      ">
        {{ member.nickname }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { member, department } = defineProps({
    member: {
      type: Object,
      required: true,
    },
    department: {
      type: Object,
      required: true,
    }
  });
</script>

<style lang="scss" scoped>
  .board-member-profile {
    &:hover {
      div {
        img {
          @apply w-[95%];
        }
        h3, span {
          @apply text-ormawaxyzuaj-black;
        }
      }      
    }
  }
</style>