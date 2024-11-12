<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'

  import { useSuppliesStore } from '@/stores/tables'

  const suppliesStore = useSuppliesStore()

  const { suppliesLoading, currentSupplies, currentSuppliesLength } = storeToRefs(suppliesStore)

  const search = ref('')
  const itemsPerPage = ref(10)
  const page = ref(1)
  const alertMessage = ref(null)
  const headers = ref([
    { title: 'Id', key: 'id', sortable: false },
    { title: 'Type', key: 'supply_id', sortable: false },
    { title: 'Item Name', key: 'expiry_date', sortable: false },
    { title: 'Strength Or Volume', key: 'card_id', sortable: false },
    { title: 'Route Of Use', key: 'card_id', sortable: false },
    { title: 'Quantity In Pack', key: 'card_id', sortable: false },
    { title: 'Possible Side Effects', key: 'card_id', sortable: false },
    { title: 'Location', key: 'card_id', sortable: false },
    { title: 'Created At', key: 'created_at', sortable: false },
    { title: 'Actions', key: 'actions', align: 'center', sortable: false },
    { text: 'test', value: 'data-table-expand' },
  ])

/**
 * Loads the inventory data from the inventory store.
 * It uses the current search query, page number, and number of items per page
 * to retrieve the relevant inventory data.
 *
 * @returns {Promise<void>}
 */
  const loadSupplies = async () => {
    suppliesStore.retrieveSupplies({
      keywords: search.value,
      page: page.value,
      itemsPerPage: itemsPerPage.value
    })
    console.log(currentSupplies.value)
  }
  const updateSupplies = async () => {
    suppliesStore.retrieveSupplies()
  }
</script>

<template>
  <v-app class="bg-container">
    <v-container class="profile-container" rounded="10px">
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
        :items="currentSupplies.data"
        :items-length="currentSuppliesLength"
        :loading="suppliesLoading"
        @update:options="loadSupplies"
        :single-expanded="true"
        show-expand
      >
        <template v-slot:top>
          <v-toolbar class="rounded-lg">
            <v-toolbar-title>Supply Table</v-toolbar-title>
          </v-toolbar>
        </template>
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.item }}</td>
            <td>{{ item.strength_or_volume }}</td>
            <td>{{ item.route_of_use }}</td>
            <td>{{ item.quantity_in_pack }}</td>
            <!-- <td>{{ item.possible_side_effects }}</td> -->
            <td>{{ item.location }}</td>
            <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
            <td>{{ item.card_id }}</td>
            <td>
              <v-container class="">
                <v-btn
                  color="primary"
                  size="small"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  color="error"
                  size="small"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-container>

            </td>
          </tr>
        </template>
        <!-- expand column -->
        <template v-slot:item.data-table-expand="{ item, isExpanded, expand }">
          <v-btn @click="expand(true)" v-if="item.canExpand && !isExpanded">Expand</v-btn>
          <v-btn @click="expand(false)" v-if="item.canExpand && isExpanded">close</v-btn>
        </template>

        <!-- expand item/row -->
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length">
            <pre>{{item}}</pre>
          </td>
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
