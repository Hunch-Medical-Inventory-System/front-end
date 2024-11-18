<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'

  import { useInventoryStore, useSuppliesStore } from '@/stores/tables'

  const suppliesStore = useSuppliesStore()
  const inventoryStore = useInventoryStore()

  const { suppliesLoading, currentSupplies } = storeToRefs(suppliesStore)
  const { inventoryLoading, deletedInventory, deletedInventoryLength } = storeToRefs(inventoryStore)

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

  /**
   * Determines the status of an item based on its expiry date.
   *
   * @param {string|Date} expiryDate - The expiry date of the item.
   *
   * @returns {string} - Returns "error" if the item is expired, "warning" if the item
   *                     will expire in 3 days or less, and "success" if the item
   *                     is not expiring soon.
   */
  const isExpired = (expiryDate) => {
    const today = new Date()
    const expiry = new Date(expiryDate)

    const msInADay = 24 * 60 * 60 * 1000
    const differenceInMs = expiry.getTime() - today.getTime()
    const differenceInDays = differenceInMs / msInADay

    if (expiry.getTime() < today.getTime()) {
      return "error"
    }
    if (Math.floor(differenceInDays) <= 3) {
      return "warning"
    }
    return "success"

  }
</script>

<template>
  <v-app class="bg-container">
    <v-container class="rounded-lg">

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
        :items="deletedInventory.data"
        :items-length="deletedInventoryLength"
        :loading="inventoryLoading"
        @update:options="loadInventory"
      >
        <template v-slot:top>
          <v-toolbar class="rounded-lg">
            <v-toolbar-title>Taken Inventory Table</v-toolbar-title>
          </v-toolbar>
        </template>
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ suppliesLoading ? 'Loading...' : currentSupplies.data.find(supply => supply.id === item.supply_id)?.item }}</td>
            <td>
              <v-chip :color="isExpired(item.expiry_date)">
                {{ item.expiry_date ? new Date(item.expiry_date).toLocaleDateString() : 'N/A' }}
              </v-chip>
            </td>
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

<style scoped>

.bg-container {
  background-image: url('@/assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.v_alert {
  background-color: hwb(0 21% 27% / 0.897) 55%, 47%, 0.897;
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
