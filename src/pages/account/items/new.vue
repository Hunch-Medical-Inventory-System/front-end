<script setup>

  import { useCrewStore } from '@/stores/tables';
  import { storeToRefs } from 'pinia';
import { ref } from 'vue';

  const store = useCrewStore();

  const { crewMembers } = storeToRefs(store);

  const currentCrewMember = ref(null);
  const newItem = ref({
    name: '',
    crew_members: [],
    dosage: '',
    quantity: '',
    units_per_package: '',
    exp_date: '',
    created_at: new Date(),
  });

</script>

<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h3 text-center">New Item</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              v-model="newItem.category"
              label="Item Category"
            ></v-text-field>
            <v-text-field
              v-model="newItem.name"
              label="Item Name"
            ></v-text-field>
            <v-text-field
              v-model="newItem.strengh_or_volume"
              label="Strengh/Volume"
            ></v-text-field>
            <v-text-field
              v-model="newItem.route_of_use"
              label="Route of Use"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="newItem.quantity_in_pack"
              label="Quantity in Pack"
            ></v-text-field>
            <v-text-field
              v-model="newItem.possibleSideEffects"
              label="Possible Side Effects"
            ></v-text-field>
            <v-text-field
              v-model="newItem.location"
              label="Location"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-container class="text-center">
          <v-btn color="primary">Create</v-btn>
        </v-container>
      </v-card-text>
    </v-card>
    <v-select
      v-model="currentCrewMember"
      :items="crewMembers"
      item-title="first_name"
      multiple
      chips
    ></v-select>
  </v-container>
</template>
