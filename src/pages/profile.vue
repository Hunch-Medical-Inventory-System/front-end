<template>
  <v-app class="bg-container">
  <v-container rounded="10px" class="profile-container">
    <h1>Inventory Profile</h1>

    <v-alert
      v-if="alertMessage"
      type="warning"
      border="top"
      prominent
      class="mb-4 v_alert alert-pop-in"
    >
      {{ alertMessage }}
    </v-alert>

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
    </v-data-table>

  </v-container>
  </v-app>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
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
const alertMessage = ref('')
const showMenu = ref(false)
const selectedMed = ref(null)
const medOptions = ref([])
const newQuantity = ref('')
const newExpiryDate = ref('')

const showAlert = (message) => {
  alertMessage.value = message
}

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const fetchMedOptions = async () => {
  const { data, error } = await supabase.from('inventory').select('supply_name')
  if (error) {
    console.error("Error fetching meds:", error)
  } else {
    medOptions.value = data.map(med => med.supply_name)
  }
}

const submitNewDetails = async () => {
  if (selectedMed.value && newQuantity.value && newExpiryDate.value) {
    const { error } = await supabase
      .from('inventory')
      .update({
        quantity: newQuantity.value,
        exp_date: newExpiryDate.value,
      })
      .eq('supply_name', selectedMed.value)

    if (error) {
      console.error("Error updating inventory:", error)
    } else {
      console.log("Inventory updated successfully")
      showMenu.value = false
    }
  }
}

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
    .from('inventory')
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

watch(serverItems, (newItems) => {
  newItems.forEach((item) => {
    const diffDays = Math.ceil((new Date(item.exp_date) - new Date()) / (1000 * 60 * 60 * 24))
    if (diffDays <= 0) {
      showAlert(`Item ${item.supply_name} has expired!`)
    } else if (diffDays <= 7) {
      showAlert(`Item ${item.supply_name} is about to expire in ${diffDays} days!`)
    }
  })
})

onMounted(() => {
  loadItems({ page: 1, itemsPerPage: itemsPerPage.value })
  fetchMedOptions()
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
  background-image: url('@/assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.v_alert {
  background-color: hwb(0 21% 27% / 0.897) 55%, 47%, 0.897;;
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
