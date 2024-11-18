<script setup>
  import { ref } from 'vue';
  import { createRowFromTable } from '@/lib/supabaseClient';

  const emits = defineEmits(['close']);

  const table = ref('supplies');
  const row = ref({
    type: '',
    item: '',
    strength_or_volume: '',
    route_of_use: '',
    quantity_in_pack: '',
    possible_side_effects: '',
    location: '',
  })

  const rules = ref({
    required: value => !!value || 'Required.',
  });

  const formRef = ref(null);
  const errs = ref(null);
  const status = ref(null);


  const createItem = async () => {
    const { valid } = await formRef.value.validate();

    if (!valid) {
      errs.value = "Please fill out all required fields";
      return
    }

    status.value = await createRowFromTable(table.value, row.value);

    if (!status) {
      errs.value = "Something went wrong";
      return;
    }

    errs.value = null;
    formRef.value.reset();
    emits('close');
  };

</script>

<template>
  <v-container>
    <v-row class="text-h5 text-center">{{ errs }}</v-row>
    <v-form ref="formRef" @submit.prevent="createItem">
      <v-row>
        <v-col>
          <v-text-field
            v-model="row.type"
            label="Item Type"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            v-model="row.item"
            label="Item Name"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            v-model="row.strength_or_volume"
            label="Strength/Volume"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            v-model="row.route_of_use"
            label="Route of Use"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="row.quantity_in_pack"
            label="Quantity in Pack"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            v-model="row.possible_side_effects"
            label="Possible Side Effects"
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            v-model="row.location"
            label="Location"
            :rules="[rules.required]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-container class="text-center">
        <v-btn color="primary" type="submit">Create</v-btn>
        <v-container v-if="typeof status === 'boolean'">{{ status ? "Successfully created" : "Error creating. Please try again" }}</v-container>
      </v-container>
    </v-form>
  </v-container>
</template>
