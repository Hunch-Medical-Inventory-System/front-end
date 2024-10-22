<template>
  <v-container class="update-container" v-if="medOptions.length > 0">
    <v-card class="update-card">
      <v-card-title class="title">Update Medication</v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="submitNewDetails">
          <!-- Medication Select Dropdown -->
          <v-select
            v-model="selectedMed"
            :items="medOptions"
            label="Select Medication"
            placeholder="Choose a medication"
            class="form-item"
            required
          ></v-select>

          <v-text-field
            v-model="newQuantity"
            label="Enter New Quantity"
            placeholder="Quantity"
            class="form-item"
            type="number"
            :rules="[v => !!v || 'Quantity is required']"
          ></v-text-field>

          <!-- Expiration Date Picker -->
          <v-date-picker
            v-model="newExpiryDate"
            label="Select New Expiration Date"
            class="form-item"
            :rules="[v => !!v || 'Expiration date is required']"
            :max="maxDate"
          ></v-date-picker>
        </v-form>
      </v-card-text>

      <!-- Submit and Cancel Buttons -->
      <v-card-actions class="action-buttons">
        <v-btn color="primary" @click="submitNewDetails">Submit</v-btn>
        <v-btn @click="goBack">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>

  <!-- Show loading message when options are being fetched -->
  <div v-else class="loading-message">Loading medications...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '@/lib/supabaseClient'; // Ensure this path is correct

// Initialize router
const router = useRouter();

// Reactive variables
const selectedMed = ref(null);
const newQuantity = ref('');
const newExpiryDate = ref(null);
const medOptions = ref([]);

// Set maximum date to prevent past selections
const maxDate = ref(new Date().toISOString().substr(0, 10));

// Fetch medication options from the database
const fetchMedOptions = async () => {
  const { data, error } = await supabase
    .from('Inventory')
    .select('supply_name');

  if (error) {
    console.error('Error fetching medications:', error);
  } else if (data) {
    medOptions.value = data.map(med => med.supply_name);
  }
};

// Submit the updated medication details
const submitNewDetails = async () => {
  if (selectedMed.value && newQuantity.value && newExpiryDate.value) {
    const { error } = await supabase
      .from('Inventory')
      .update({
        quantity: newQuantity.value,
        exp_date: newExpiryDate.value,
      })
      .eq('supply_name', selectedMed.value);

    if (error) {
      console.error('Error updating inventory:', error);
    } else {
      console.log('Medication updated successfully');
      router.push('/profile'); // Redirect to profile page after submission
    }
  } else {
    console.error('Please fill out all fields before submitting.');
  }
};

// Go back to profile page without saving changes
const goBack = () => {
  router.push('/profile');
};

// Fetch medication options when component mounts
onMounted(fetchMedOptions);
</script>

<style scoped>
.update-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.update-card {
  width: 500px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
}

.form-item {
  margin-bottom: 24px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
}

.v-btn {
  width: 48%;
  border-radius: 8px;
  padding: 10px;
}

.v-btn.primary {
  background-color: #0077c8;
  color: white;
}

.v-btn:hover {
  background-color: #005a99;
}

.v-btn:focus {
  outline: none;
}

.loading-message {
  text-align: center;
  font-size: 18px;
  margin-top: 100px;
}
</style>
