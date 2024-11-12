<template>
  <v-app class="bg-container">
    <v-container class="profile-container" rounded="10px">
      <h1>Inventory Profile</h1>
      <v-alert
        v-if="alertMessage"
        border="top"
        class="mb-4 v_alert alert-pop-in"
        prominent
        type="warning"
      >
        {{ alertMessage }}
      </v-alert>
      <v-data-table-server
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        item-value="name"
        :items="currentInventory.data"
        :items-length="currentInventoryLength"
        :loading="inventoryLoading"
        @update:options="loadInventory"
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ suppliesLoading ? 'Loading...' : currentSupplies.data.find(supply => supply.id === item.supply_id)?.item }}</td>
            <td>{{ new Date(item.expiry_date).toLocaleDateString() }}</td>
            <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
            <td>{{ item.card_id }}</td>
          </tr>
        </template>

        <template #tfoot>
          <tr>
            <td colspan="9">
              <v-text-field
                v-model="search"
                class="ma-2"
                density="compact"
                hide-details
                placeholder="Search inventory..."
              />
            </td>
          </tr>
        </template>
      </v-data-table-server>

    </v-container>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'

  import { useInventoryStore, useSuppliesStore } from '@/stores/tables'

  const suppliesStore = useSuppliesStore()
  const inventoryStore = useInventoryStore()

  const { suppliesLoading, currentSupplies } = storeToRefs(suppliesStore)
  const { inventoryLoading, currentInventory, currentInventoryLength } = storeToRefs(inventoryStore)

  const search = ref('')
  const itemsPerPage = ref(10)
  const page = ref(1)
  const alertMessage = ref(null)
  const headers = ref([
    { title: 'Id', key: 'id' },
    { title: 'Supply Name', key: 'supply_id' },
    { title: 'Expiry Date', key: 'expiry_date' },
    { title: 'Created At', key: 'created_at' },
    { title: 'Card Id', key: 'card_id' },
  ])

  /**
   * Fetches the inventory from the store, passing the current search query,
   * page number, and items per page as options.
   *
   * @returns {Promise<void>}
   */
  const loadInventory = async () => {
    inventoryStore.retrieveInventory({
      keywords: search.value,
      page: page.value,
      itemsPerPage: itemsPerPage.value
    })
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
