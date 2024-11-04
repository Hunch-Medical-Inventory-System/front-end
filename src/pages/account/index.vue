<template>
  <v-app class="bg-container">
    <v-container rounded="10px" class="profile-container">
      <h1>Inventory Profile</h1>

      <v-alert v-if="alertMessage" type="warning" border="top" prominent class="mb-4 v_alert alert-pop-in">
        {{ alertMessage }}
      </v-alert>
      <!-- {{ currentInventory }} -->

      <!-- Data table -->
      <v-data-table-server
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="currentInventory"
        :items-length="totalItems"
        :loading="loading" item-value="name"
        @update:options="loadItems"
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.supply_id }}</td>
            <td>{{ new Date(item.expiry_date).toLocaleDateString() }}</td>
            <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
            <td>{{ item.card_id }}</td>
          </tr>
        </template>

        <template v-slot:tfoot>
          <tr>
            <td colspan="9">
              <v-text-field v-model="search" class="ma-2" density="compact" placeholder="Search inventory..."
                hide-details></v-text-field>
            </td>
          </tr>
        </template>
      </v-data-table-server>

    </v-container>
  </v-app>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { supabase } from '@/lib/supabaseClient'
import { useSuppliesStore, useInventoryStore } from '@/stores/tables'

const suppliesStore = useSuppliesStore();
const inventoryStore = useInventoryStore();

const { suppliesLoading, currentSupplies, currentSuppliesLength } = storeToRefs(suppliesStore);
const { inventoryLoading, currentInventory, currentInventoryLength, retrieveInventory } = storeToRefs(inventoryStore);

const search = ref('')
const itemsPerPage = ref(10)
const serverItems = ref([])
const alertMessage = ref(null)
const headers = ref([
  { title: 'Id', key: 'id' },
  { title: 'Supply Id', key: 'supply_id' },
  { title: 'Expiry Date', key: 'expiry_date' },
  // { title: 'Dosage Taken', key: 'dosage_taken' },
  // { title: 'Quantity', key: 'quantity' },
  // { title: 'Units Per Package', key: 'units_per_package' },
  // { title: 'Location', key: 'location' },
  { title: 'Created At', key: 'created_at' },
  { title: 'Card Id', key: 'card_id' },
])

const loadInventory = async () => {
  inventoryStore.retrieveInventory();
}

</script>

<style scoped>
.expired {
  background-color: hwb(355 4% 9%);
  /* Expired items */
}

.about-to-expire {
  background-color: hwb(39 6% 14%);
  /* Items expiring within 7 days */
}

.expiring-soon {
  font-size: 14px;
  color: rgb(198, 180, 17);
  /* Items expiring within 30 days */
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
  background-color: hwb(0 21% 27% / 0.897) 55%, 47%, 0.897;
  ;
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
