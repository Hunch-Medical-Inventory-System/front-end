<script setup>
  import { ref } from 'vue';

  const rules = ref({
    required: value => !!value || 'Required.',
  });

  const newItem = ref({
    type: '',
    item:'',
    strength_or_volume: '',
    route_of_use: '',
    quantity_in_pack: '',
    possible_side_effects: '',
    location: '',
  });

  const formRef = ref(null);
  const errs = ref(null);
  const status = ref(null);


  /**
   * Asynchronously saves a new item to the inventory.
   *
   * Validates the form using formRef. If the form is valid,
   * the function sends a POST request to the 'inventory' endpoint
   * with the new item data in JSON format. Upon successful submission,
   * the form is reset. If validation fails, the function sets the
   * errs reactive variable to "Please fill out all required fields".
   * If the POST request fails, the function sets the errs reactive
   * variable to "Something went wrong".
   */
  const saveItem = async () => {
    const { valid } = await formRef.value.validate();

    if (!valid) {
      errs.value = "Please fill out all required fields";
      return
    }

    const data = await fetch("/api/supplies", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem.value),
    });

    status.value = data.status === 200 ? "Success" : "Error";

    if (!data.ok) {
      errs.value = "Something went wrong";
      return;
    }

    errs.value = null;
    formRef.value.reset();
  };
</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h3 text-center">New Item</v-card-title>
      <v-card-subtitle class="text-h5 text-center">{{ errs }}</v-card-subtitle>
      <v-card-text>
        <v-form ref="formRef" @submit.prevent="saveItem">
          <v-row>
            <v-col>
              <v-text-field
                v-model="newItem.type"
                label="Item Type"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="newItem.item"
                label="Item Name"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="newItem.strength_or_volume"
                label="Strength/Volume"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="newItem.route_of_use"
                label="Route of Use"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="newItem.quantity_in_pack"
                label="Quantity in Pack"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="newItem.possible_side_effects"
                label="Possible Side Effects"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="newItem.location"
                label="Location"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-container class="text-center">
            <v-btn color="primary" type="submit">Create</v-btn>
            <v-container>{{ status }}</v-container>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
