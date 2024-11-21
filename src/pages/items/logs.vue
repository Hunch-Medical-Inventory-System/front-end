<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia'

  import { useLogsStore, useCrewStore } from '@/stores/tables'

  const crewStore = useCrewStore()
  const logsStore = useLogsStore()

  const { crewLoading, currentCrew } = storeToRefs(crewStore)
  const { logsLoading, currentLogs, currentLogsLength } = storeToRefs(logsStore)

  const search = ref('')
  const itemsPerPage = ref(10)
  const page = ref(1)
  const alertMessage = ref(null)
  const headers = ref([
    { title: 'Id', key: 'id' },
    { title: 'Crew Name', key: 'crew_member_id' },
    { title: 'Created At', key: 'created_at' },
  ])

  /**
   * Fetches the logs from the store, passing the current search query,
   * page number, and items per page as options.
   *
   * @returns {Promise<void>}
   */
  const loadLogs = async () => {
    logsStore.retrieveLogs({
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
        :items="currentLogs.data"
        :items-length="currentLogsLength"
        :loading="logsLoading"
        @update:options="loadLogs"
      >
        <template v-slot:top>
          <v-toolbar class="rounded-lg">
            <v-toolbar-title>Logs Table</v-toolbar-title>
          </v-toolbar>
        </template>
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <v-chip>
                {{
                  crewLoading ? 'Loading...' :
                  currentCrew.data.find(crew => crew.id === item.crew_member_id)?.first_name +
                  ' ' + currentCrew.data.find(crew => crew.id === item.crew_member_id)?.last_name
                }}
              </v-chip>
            </td>
            <td>{{ new Date(item.created_at).toLocaleDateString() }}</td>
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
                placeholder="Search logs..."
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
