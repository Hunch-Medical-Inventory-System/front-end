<script setup>
  import { ref, onMounted } from 'vue';
  import { useSuppliesStore } from '@/stores/tables';
  import { storeToRefs } from 'pinia';

  const suppliesStore = useSuppliesStore();
  const { suppliesItem, suppliesItemId } = storeToRefs(suppliesStore);

  const rules = ref({
    required: value => !!value || 'Required.',
  });

  const formRef = ref(null);
  const errs = ref(null);
  const status = ref(null);


  const saveItem = async () => {
    const { valid } = await formRef.value.validate();

    if (!valid) {
      errs.value = "Please fill out all required fields";
      return
    }

    const data = await fetch(`/api/supplies/${suppliesItemId.value}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(suppliesItem.value),
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
                v-model="suppliesItem.type"
                label="Item Type"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="suppliesItem.item"
                label="Item Name"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="suppliesItem.strength_or_volume"
                label="Strength/Volume"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="suppliesItem.route_of_use"
                label="Route of Use"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="suppliesItem.quantity_in_pack"
                label="Quantity in Pack"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="suppliesItem.possible_side_effects"
                label="Possible Side Effects"
                :rules="[rules.required]"
              ></v-text-field>
              <v-text-field
                v-model="suppliesItem.location"
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
