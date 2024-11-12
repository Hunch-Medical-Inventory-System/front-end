<template>
  <v-app class="bg-container">
    <v-container rounded="10px" class="profile-container">
      <h1>Inventory Profile</h1>

      <!-- Data table -->
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="serverItems"
        :items-length="totalItems"
        :loading="loading"
        :search="search"
        item-value="id"
        @update:options="loadItems"
      >
        <template v-slot:item="{ item }">
          <tr :class="getExpiryClass(item.expiry_date)">
            <td>{{ item.id }}</td>
            <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
            <td>{{ item.is_deleted }}</td>
            <td>{{ item.supply_id }}</td>
            <td>{{ new Date(item.expiry_date).toLocaleDateString() }}</td>
            <td>{{ item.crew_member }}</td>
          </tr>
        </template>

        <template v-slot:tfoot>
          <tr>
            <td colspan="6">
              <v-text-field v-model="search" class="ma-2" density="compact" placeholder="Search inventory..." hide-details></v-text-field>
            </td>
          </tr>
        </template>
      </v-data-table>

    </v-container>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const itemsPerPage = ref(10)
const headers = ref([
  { title: 'ID', key: 'id', align: 'center', divider: true },
  { title: 'Created At', key: 'created_at', align: 'center', divider: true },
  { title: 'Is Deleted', key: 'is_deleted', align: 'center', divider: true },
  { title: 'Supply ID', key: 'supply_id', align: 'center', divider: true },
  { title: 'Expiry Date', key: 'expiry_date', align: 'center', divider: true },
  { title: 'Crew Member', key: 'crew_member', align: 'center', divider: true },
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

  const { data, error } = await supabase
  .from('inventory')
  .select('id, supply_id, created_at')  // Replace with any known working columns
  .limit(10);
if (error) console.error('Error:', error);

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
  font-size: 14px;
  color: rgb(198, 180, 17); /* Items expiring within 30 days */
}

.profile-container {
  background-color: #000000;
  border-radius: 10px;
  padding: 2em;
  color: #ffffff;
  max-width: 80%;
  margin: 0 auto;
}

.bg-container {
  background-image: url('@/assets/earth.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
