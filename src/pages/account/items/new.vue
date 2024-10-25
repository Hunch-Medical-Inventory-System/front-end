<script setup>
  import { useCounterStore } from '@/stores/tables';
  import { storeToRefs } from 'pinia';

  const store = useCounterStore();

  const { crewMembers } = storeToRefs(store);

</script>

<template>
  <v-container>
    test
    {{ crewMembers }}
  </v-container>
</template>
