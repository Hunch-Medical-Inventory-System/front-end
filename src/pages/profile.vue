<template>
  <v-container rounded="10px" class="profile-container">
    <h1>Demo Profile</h1>

    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="serverItems"
      :items-length="totalItems"
      :loading="loading"
      :search="search"
      item-value="name"
      @update:options="loadItems"
    >
      <template v-slot:tfoot>
        <tr>
          <td>
            <v-text-field v-model="name" class="ma-2" density="compact" placeholder="Search medicine..." hide-details></v-text-field>
          </td>
          <td>
            <v-text- field
              v-model="dosage"
              class="ma-2"
              density="compact"
              placeholder="Minimum dosage"
              type="number"
              hide-details
            ></v-text->
          </td>
        </tr>
      </template>
    </v-data-table-server>

    <div v-if="!serverItems.length">
      <p>No medicines logged yet.</p>
    </div>
  </v-container>
</template>

<script>
const medicines = [
  {
    name: 'Ibuprofen',
    dosage: '200mg',
    timeTaken: new Date('2024-10-04T10:30:00'),
  },
  {
    name: 'Paracetamol',
    dosage: '500mg',
    timeTaken: new Date('2024-10-03T08:00:00'),
  },
  {
    name: 'Humira',
    dosage: '260mg',
    timeTaken: new Date('2024-10-04T14:39:00'),
  },
  {
    name: 'Adderall',
    dosage: '350mg',
    timeTaken: new Date('2024-10-03T07:07:00'),
  },
  {
    name: 'Opdivo',
    dosage: '120mg',
    timeTaken: new Date('2024-10-06T03:56:00'),
  },
  {
    name: 'Probuphine',
    dosage: '310mg',
    timeTaken: new Date('2024-10-05T06:10:00'),
  },
  {
    name: 'Naltrexone',
    dosage: '580mg',
    timeTaken: new Date('2024-10-03T20:00:00'),
  },
  {
    name: 'Botox',
    dosage: '230mg',
    timeTaken: new Date('2024-10-07T13:30:00'),
  },
  {
    name: 'Cymbalta',
    dosage: '390mg',
    timeTaken: new Date('2024-10-07T12:30:00'),
  },
  {
    name: 'Melatonin',
    dosage: '180mg',
    timeTaken: new Date('2024-10-01T11:35:00'),
  },
  {
    name: 'Cephalexin',
    dosage: '320mg',
    timeTaken: new Date('2024-10-09T09:00:00'),
  },
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy, search }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = medicines
          .slice()
          .filter((item) => {
            if (search.name && !item.name.toLowerCase().includes(search.name.toLowerCase())) {
              return false;
            }

            if (search.dosage && !(Number(item.dosage.replace('mg', '')) >= Number(search.dosage))) {
              return false;
            }

            return true;
          });

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === 'desc' ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      { title: 'Medication', key: 'name', align: 'start', divider: true },
      { title: 'Dosage', key: 'dosage', align: 'end', divider: true },
      { title: 'Time Taken', key: 'timeTaken', align: 'end', divider: true },
    ],
    serverItems: [],
    loading: true,
    totalItems: 0,
    name: '',
    dosage: '',
    search: '',
  }),
  watch: {
    name() {
      this.search = String(Date.now());
    },
    dosage() {
      this.search = String(Date.now());
    },
  },
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({
        page,
        itemsPerPage,
        sortBy,
        search: { name: this.name, dosage: this.dosage },
      }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background-color: #000002;
}

.v-data-table-header th {
  font-size: 18px;
}
</style>


