<template>
  <v-container rounded="10px" class="profile-container">
    <h1>Inventory Profile</h1>

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
      <!-- Row template with conditional class based on expiry date -->
      <template v-slot:item="{ item }">
        <tr :class="getExpiryClass(item.exp_date)">
          <td>{{ item.id }}</td>
          <td>{{ item.supply_name }}</td>
          <td>{{ item.crew_members }}</td>
          <td>{{ item.dosage_taken }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.units_per_package }}</td>
          <td>{{ new Date(item.exp_date).toLocaleDateString() }}</td>
          <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
          <td>{{ item.crew_member_name }}</td>
          <td>{{ item.location }}</td>
        </tr>
      </template>

      <template v-slot:tfoot>
        <tr>
          <td colspan="9">
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
  { title: 'ID', key: 'id', align: 'center', divider: true },
  { title: 'Supply Name', key: 'supply_name', align: 'center', divider: true },
  { title: 'Member ID', key: 'crew_members', align: 'center', divider: true },
  { title: 'Dosage', key: 'dosage', align: 'center', divider: true },
  { title: 'Quantity', key: 'quantity', align: 'center', divider: true },
  { title: 'Units per Package', key: 'units_per_package', align: 'center', divider: true },
  { title: 'Expiry Date', key: 'exp_date', align: 'center', divider: true },
  { title: 'Created At', key: 'created_at', align: 'center', divider: true },
  { title: 'Crew Member Name', key: 'crew_member_name', align: 'center', divider: true },
  { title: 'Location', key: 'location', align: 'center', divider: true },
])

const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)
const search = ref('')

const getExpiryClass = (expDate) => {
  const today = new Date()
  const expiry = new Date(expDate)
  const diffTime = expiry - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) 

  if (diffDays <= 0) {
    return 'expired' 
  } else if (diffDays <= 7) {
    return 'about-to-expire'
  } else if (diffDays <= 30) {
    return 'expiring-soon'
  }
  return '' 
}


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
.expired {
  background-color: hwb(355 4% 9%); /* Expired items */
}

.about-to-expire {
  background-color: hwb(39 6% 14%); /* Items expiring within 7 days */
}

.expiring-soon {
  background-color: hsl(54, 93%, 48%); /* Items expiring within 30 days */
}

.profile-container {
  background-color: #000000;
  border-radius: 12px;
  border-color: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.v-data-table-header th,
.v-data-table__tbody td {
  text-align: center; 
}

.v-data-table__divider {
  border: none;
}

.v-data-table__tbody td {
  padding: 10px;
  font-size: 14px;  
  color: hwb(0 100% 0%);
  border-bottom: 1px solid #e0e0e0;

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
  color: linear-gradient(to right, rgb(0, 8, 12), hwb(228 7% 20%)) 1;
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

