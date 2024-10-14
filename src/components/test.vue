<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const inventory = ref([])

async function getInventory() {
  const { data } = await supabase.from('Inventory').select()
  inventory.value = data
}

onMounted(() => {
  getInventory()
})
</script>

<template>
  <ul>
    <li v-for="item in inventory" :key="item.id">{{ item.supply_name }}</li>
  </ul>
</template>