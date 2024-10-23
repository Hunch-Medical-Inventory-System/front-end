<template>
    <v-container rounded="10px" class="log-container">
      <h1>Log Records</h1>
  
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="logItems"
        :items-length="totalItems"
        :loading="loading"
        item-value="id"
        @update:options="loadLogs"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
            <td>{{ item.crew_member }}</td>
          </tr>
        </template>
  
        <template v-slot:tfoot>
          <tr>
            <td colspan="3">
              <v-text-field v-model="search" class="ma-2" density="compact" placeholder="Search logs..." hide-details></v-text-field>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/lib/supabaseClient'
  
  const itemsPerPage = ref(10)
  const headers = ref([
    { title: 'ID', key: 'id', align: 'center', divider: true },
    { title: 'Created At', key: 'created_at', align: 'center', divider: true },
    { title: 'Crew Member', key: 'crew_member', align: 'center', divider: true },
  ])
  
  const logItems = ref([])
  const loading = ref(true)
  const totalItems = ref(0)
  const search = ref('')
  
  const loadLogs = async ({ page, itemsPerPage }) => {
    loading.value = true
  
    const { data, count, error } = await supabase
      .from('logs')
      .select('*', { count: 'exact' })
      .ilike('crew_member', `%${search.value}%`)
      .range((page - 1) * itemsPerPage, page * itemsPerPage - 1)
  
    if (error) {
      console.error("Error fetching logs:", error)
      logItems.value = []
      totalItems.value = 0
    } else {
      logItems.value = data || []
      totalItems.value = count || 0
    }
  
    loading.value = false
  }
  
  onMounted(() => {
    loadLogs({ page: 1, itemsPerPage: itemsPerPage.value })
  })
  </script>
  
  <style scoped>
  .log-container {
    background-color: #000000;
    border-radius: 10px;
    padding: 2em;
    color: #ffffff;
    max-width: 80%;
    margin: 0 auto;
  }
  
  .v_alert {
    background-color: hwb(0 21% 27% / 0.897);
  }
  
  .alert-pop-in {
    animation: pop-in 0.6s ease-in-out;
  }
  
  @keyframes pop-in {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  </style>
  