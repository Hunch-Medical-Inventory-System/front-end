<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useInventoryStore, useSuppliesStore } from '@/stores/tables'

const suppliesStore = useSuppliesStore()
const inventoryStore = useInventoryStore()

const { suppliesLoading, currentSupplies } = storeToRefs(suppliesStore)
const { inventoryLoading, currentInventory, expiredInventory, currentInventoryLength } = storeToRefs(inventoryStore)

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
      <v-expansion-panels v-if="!inventoryLoading" variant="accordion">
        <v-expansion-panel
          v-for="item in expiredInventory.data"
          :key="item.id"
        >
          <v-expansion-panel-title>
            <v-row>
              <v-col>{{ item.id }}</v-col>
              <v-col>
                {{ suppliesLoading ? 'Loading...' : currentSupplies.data.find(supply => supply.id === item.supply_id)?.item }}
              </v-col>
              <v-col>
                <v-chip color="error">{{ new Date(item.expiry_date).toLocaleDateString() }}</v-chip>
              </v-col>
            </v-row>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-row class="my-5">
              <v-btn class="ma-auto" color="error">Delete</v-btn>
            </v-row>
          </v-expansion-panel-text>

        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>

</template>
