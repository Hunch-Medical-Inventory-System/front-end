<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'

  import { useInventoryStore, useSuppliesStore } from '@/stores/tables'

  const suppliesStore = useSuppliesStore()
  const inventoryStore = useInventoryStore()

  const { suppliesLoading, currentSupplies } = storeToRefs(suppliesStore)
  const { inventoryLoading, currentInventory, expiredInventory, currentInventoryLength } = storeToRefs(inventoryStore)

  const isOpenedDelete = ref(false)
  const itemId = ref(0)

  /**
   * Toggles the state of the delete dialog and sets the item ID.
   *
   * @param {number} id - The ID of the item to be deleted.
   */
  const toggleDelete = (id) => {
    itemId.value = id
    isOpenedDelete.value = !isOpenedDelete.value
  }

  /**
   * Closes the delete dialog and refreshes the inventory table.
   */
  const closeDelete = () => {
    isOpenedDelete.value = false
    inventoryStore.retrieveInventory()
  }

</script>

<template>
  <v-container class="my-10">

      <v-row class="text-h4 justify-center text-center mb-5">
        Expired Inventory
      </v-row>

      <v-carousel
        v-if="!inventoryLoading"
        progress="primary"
        height="370"
        hide-delimiters
      >
        <v-carousel-item
          v-for="item in expiredInventory.data"
          :key="item.id"
        >
          <v-sheet
            height="100%"
            tile
          >
            <v-container class="">
              <v-row>
                <v-col class="text-start">{{ item.id }}</v-col>
                <v-col class="text-end">{{ item.card_id }}</v-col>
              </v-row>
              <v-row class="text-h4 justify-center text-center">
                {{ suppliesLoading ? 'Loading...' : currentSupplies.data.find(supply => supply.id === item.supply_id)?.item }}
              </v-row>
              <v-row class="my-10">
                <v-col class="text-center">
                  <v-chip>Created on: {{ new Date(item.created_at).toLocaleDateString() }}</v-chip>
                </v-col>
                <v-col class="text-center">
                  <v-chip color="error">Expired on: {{ new Date(item.expiry_date).toLocaleDateString() }}</v-chip>
                </v-col>
              </v-row>
              <v-row class="justify-center">
                <v-btn  @click="toggleDelete(item.id)" color="error">Delete</v-btn>
              </v-row>
            </v-container>

          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-dialog
        v-model="isOpenedDelete"
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card class="rounded-lg">
          <v-toolbar class="rounded-lg">
            <v-toolbar-title>Delete Item</v-toolbar-title>
            <v-spacer />
            <v-btn
              icon
              @click="toggleDelete(itemId)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <DeleteRowConfirmation
            :id="itemId"
            :table="'supplies'"
            @close="closeDelete"
          />
        </v-card>
      </v-dialog>
  </v-container>
</template>
