<template>
  <div class="profile-container">
    <h2>Your Profile</h2>
    <div v-if="medicines.length">
      <table>
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Dosage</th>
            <th>Time Taken</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="medicine in medicines" :key="medicine.name">
            <td>{{ medicine.name }}</td>
            <td>{{ medicine.dosage }}</td>
            <td>{{ formatDate(medicine.timeTaken) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>No medicines logged yet.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      medicines: [
        {
          name: 'Ibuprofen',
          dosage: '200mg',
          timeTaken: new Date('2024-10-04T10:30:00')
        },
        {
          name: 'Paracetamol',
          dosage: '500mg',
          timeTaken: new Date('2024-10-03T08:00:00')
        }
      ]
    };
  },
  methods: {
    formatDate(date) {
      return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'short',
        timeStyle: 'short'
      }).format(date);
    }
  }
};
</script>

<style scoped>
/* Basic styling */
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
th {
  background-color: #000002;
}
</style>