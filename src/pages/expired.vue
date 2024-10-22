<template>
    <v-container rounded="10px" class="expired-container">
      <h1>Epiry Alert</h1>
  
      <v-data-table-server
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="filteredInventory"
        :items-length="filteredInventory.length"
        :loading="loading"
      >
        <template v-slot:item="{ item }">
          <tr :class="getExpiryClass(item.exp_date)">
            <td>{{ item.id }}</td>
            <td>{{ item.supply_name }}</td>
            <td>{{ item.crew_members }}</td>
            <td>{{ item.dosage }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.units_per_package }}</td>
            <td>{{ new Date(item.exp_date).toLocaleDateString() }}</td>
            <td>{{ new Date(item.created_at).toL' ocaleDateString() }}</td>
            <td>{{ item.crew_member_name }}</td>
          </tr>
        </template>
      </v-data-table-server>
  
      <div v-if="!filteredInventory.length">
        <p>No expired or about-to-expire medications found.</p>
      </div>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/lib/supabaseClient'
  
  // Inventory data
  const inventory = ref([])
  
  // Fetch inventory from Supabase
  async function getInventory() {
    const { data } = await supabase.from('Inventory').select()
    inventory.value = data
  }
  
  // Filter for expired or about-to-expire meds
  const filteredInventory = ref([])
  
  function filterExpiredAndAboutToExpire() {
    const today = new Date()
  
    filteredInventory.value = inventory.value.filter((item) => {
      const expiryDate = new Date(item.exp_date)
      const diffTime = expiryDate - today
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) // Days remaining
  
      return diffDays <= 7 // Show items expiring within 7 days or already expired
    })
  }
  
  // Fetch and filter inventory when the component mounts
  onMounted(() => {
    getInventory().then(() => {
      filterExpiredAndAboutToExpire()
    })
  })
  
  // Method to assign row classes based on expiry
  const getExpiryClass = (expDate) => {
    const today = new Date()
    const expiry = new Date(expDate)
    const diffTime = expiry - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
    if (diffDays <= 0) {
      return 'expired'
    } else if (diffDays <= 7) {
      return 'about-to-expire'
    }
    return ''
  }
  </script>
  
  <style scoped>
  /* Styling for rows based on expiry date */
  .expired {
    background-color: hsl(355, 100%, 50%); /* Expired items */
    color: white; 
  }
  
  .about-to-expire {
    background-color: hsl(30, 93%, 49%); /* Items expiring within 7 days */
    color: white; 
  }
  
  .v-data-table__tbody td {
    color: white; 
  }
  
  .v-data-table-header th {
    background-color: #0077c8;
    color: white; 
    font-size: 16px;
    text-transform: uppercase;
    padding: 12px;
    border-bottom: 2px solid #004f6b;
  }
  </style>
  