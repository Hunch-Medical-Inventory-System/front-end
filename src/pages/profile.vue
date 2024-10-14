<template>
  <v-container rounded="10px" class="profile-container">
    <h1>Demo Profile</h1>

    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="serverItems"
      :items-length="totalItems"
      :loading="loading"
      :search="search"
      item-value="id"
      @update:options="loadItems"
    >
      <template v-slot:tfoot>
        <tr>
          <td>
            <v-text-field v-model="search" class="ma-2" density="compact" placeholder="Search inventory..." hide-details></v-text-field>
          </td>
        </tr>
      </template>
    </v-data-table-server>

    <div v-if="!serverItems.length">
      <p>No items in inventory yet.</p>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'


const itemsPerPage = ref(10)
const headers = ref([
  { title: 'ID', key: 'id', align: 'start', divider: true },
  { title: 'Supply Name', key: 'supply_name', align: 'start', divider: true },
  { title: 'Crew Members', key: 'crew_members', align: 'start', divider: true },
  { title: 'Dosage', key: 'dosage', align: 'start', divider: true },
  { title: 'Quantity', key: 'quantity', align: 'end', divider: true },
  { title: 'Units per Package', key: 'units_per_package', align: 'end', divider: true },
  { title: 'Expiry Date', key: 'exp_date', align: 'end', divider: true },
  { title: 'Created At', key: 'created_at', align: 'end', divider: true },
  { title: 'Crew Member Name', key: 'crew_member_name', align: 'start', divider: true },
])

const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)
const search = ref('')



const loadItems = async ({ page, itemsPerPage }) => {
  loading.value = true

  const { data, count, error } = await supabase
    .from('Inventory')
    .select('*', { count: 'exact' }) 
    .ilike('supply_name', `%${search.value}%`) 
    .range((page - 1) * itemsPerPage, page * itemsPerPage - 1)

  if (error) {
    console.error("Error fetching data:", error)
    serverItems.value = []
    totalItems.value = 0
  } else {
    serverItems.value = data || []
    totalItems.value = count || 0
  }

  loading.value = false
}


onMounted(() => {
  loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
})
</script>


<style scoped>
.profile-container {
  background-color: #000000;
  border-radius: 12px;
  border-color: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}


.v-data-table-header th {
  background-color: #0077c8; 
  color: #050505;
  font-size: 16px;
  text-transform: uppercase;
  padding: 12px;
  border-bottom: 2px solid #004f6b; 
}

.v-data-table__divider {
  border: none;
}

.v-data-table__tbody td {
  padding: 10px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #e0e0e0;
}

.v-data-table__tbody tr:hover {
  background-color: #f1f8ff; 
}

.v-data-table__tbody td:first-child {
  border-left: none;
}

.v-data-table__tbody td:last-child {
  border-right: none;
}


.v-text-field {
  background-color: #020202;
  border-radius: 8px;
  border: 1px solid #c4dfe6;
}

.v-text-field .v-input__control {
  font-size: 14px;
  padding: 8px;
}

.v-text-field input {
  color: #333;
}

.v-text-field input::placeholder {
  color: #999;
}


.v-btn {
  background-color: #0077c8;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .profile-container {
    padding: 16px;
  }

  .v-data-table-header th, .v-data-table__tbody td {
    font-size: 12px;
    padding: 8px;
  }
}
</style>

