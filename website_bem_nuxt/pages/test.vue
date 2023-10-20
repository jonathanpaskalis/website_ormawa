<template>
  <div>
    <h2>
      Test
    </h2>
    <p>
      {{ period.departments }}
    </p>
  </div>
</template>

<script setup>
  import { doc, onSnapshot } from 'firebase/firestore';
  const { data: period } = useFetch('/api/periods');

  // const period = ref<any>(null);

  // const fetchData = async () => {
  //   try {
  //     const { data } = await useFetch('/api/periods');
  //     period.value = data;
  //     console.log(period.value._rawValue.departments)
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const fetchData = async () => {
  //   try {
  //     const { db } = useFirebase();
  //     const docRef = doc(db, 'periods', '3ncRdPx5QVn3nTq1iM4I');
  //     onSnapshot(docRef, (snap) => {
  //       period.value = snap.data();
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // fetchData();
</script>

<style scoped>

</style>