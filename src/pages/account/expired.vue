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
 * Fetches the inventory from the store, passing the deleted search query,
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
  <v-container>
    <v-row class="my-10">
      <v-expansion-panels variant="accordion">
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>

</template>
