<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'

  import { useSuppliesStore } from '@/stores/tables'
  import NewSupply from '@/components/supplies/NewSupply.vue';
  import DeleteRowConfirmation from '@/components/DeleteRowConfirmation.vue';

  const suppliesStore = useSuppliesStore()

  const { suppliesLoading, currentSupplies, currentSuppliesLength } = storeToRefs(suppliesStore)

  const suppliesItemId = ref(0);

  const search = ref('')
  const itemsPerPage = ref(10)
  const page = ref(1)
  const alertMessage = ref(null)
  const expanded = ref([])
  const headers = ref([
    { title: 'Id', key: 'id', sortable: false },
    { title: 'Type', key: 'type', sortable: false },
    { title: 'Item Name', key: 'item', sortable: false },
    { title: 'Strength/Volume', key: 'strength_or_volume', sortable: false },
    { title: 'Route Of Use', key: 'route_of_use', sortable: false },
    { title: 'Quantity In Pack', key: 'quantity_in_pack', sortable: false },
    { title: 'Location', key: 'location', sortable: false },
    { title: 'Created At', key: 'created_at', sortable: false },
    { title: 'Actions', key: 'actions', align: 'center', sortable: false },
    { title: 'Possible Side Effects', key: 'data-table-expand', value: 'data-table-expand', sortable: false },
  ])

  const isOpenedNew = ref(false)
  const isOpenedEdit = ref(false)
  const isOpenedDelete = ref(false)

  const toggleNew = () => {
    isOpenedNew.value = !isOpenedNew.value
  }
  const toggleEdit = (id) => {
    suppliesItemId.value = id
    isOpenedEdit.value = !isOpenedEdit.value
  }

  const toggleDelete = (id) => {
    suppliesItemId.value = id
    isOpenedDelete.value = !isOpenedDelete.value
  }

  const closeNew = () => {
    isOpenedNew.value = false
    loadSupplies()
  }
  const closeEdit = () => {
    isOpenedEdit.value = false
    loadSupplies()
  }
  const closeDelete = () => {
    isOpenedDelete.value = false
    loadSupplies()
  }
  const loadSupplies = async () => {
    suppliesStore.retrieveSupplies({
      keywords: search.value,
      page: page.value,
      itemsPerPage: itemsPerPage.value
    })
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
        v-model:expanded="expanded"
        :headers="headers"
        :items="currentSupplies.data"
        :items-length="currentSuppliesLength"
        :loading="suppliesLoading"
        show-expand
        item-value="id"
        @update:options="loadSupplies"
      >
        <template v-slot:top>
          <v-toolbar class="rounded-lg">
            <v-toolbar-title>Supply Table</v-toolbar-title>
            <v-spacer />
            <v-btn
              color="primary"
              @click="toggleNew"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-toolbar>
        </template>

        <template #item.created_at="{ item }">
          <tr>
            <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
          </tr>
        </template>

        <template #item.actions="{ item }">
          <tr>
            <td>
              <v-container class="">
                <v-btn
                  @click="toggleEdit(item.id)"
                  color="primary"
                  size="small"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn
                  @click="toggleDelete(item.id)"
                  color="error"
                  size="small"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-container>
            </td>
          </tr>
        </template>

        <!-- Expanded content -->
        <template #expanded-row="{ columns, item }">
          <tr>
            <td :colspan="columns.length">
              {{item.possible_side_effects}}
            </td>
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

      <v-dialog
        v-model="isOpenedNew"
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card class="rounded-lg">
          <v-toolbar class="rounded-lg">
            <v-toolbar-title>Create Item</v-toolbar-title>
            <v-spacer />
            <v-btn
              icon
              @click="toggleNew"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <NewSupply @close="closeNew" />
        </v-card>
      </v-dialog>

      <v-dialog
        v-model="isOpenedEdit"
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card class="rounded-lg">
          <v-toolbar class="rounded-lg">
            <v-toolbar-title>Edit Item</v-toolbar-title>
            <v-spacer />
            <v-btn
              icon
              @click="toggleEdit(suppliesItemId)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <EditSupply :id="suppliesItemId" @close="closeEdit" />
        </v-card>
      </v-dialog>

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
              @click="toggleDelete(suppliesItemId)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <DeleteRowConfirmation
            :id="suppliesItemId"
            :table="'supplies'"
            @close="closeDelete"
          />
        </v-card>
      </v-dialog>

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
