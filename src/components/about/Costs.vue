<script setup>
  import physical from '@/assets/api/physical.json'
</script>

<template>
  <v-row class="text-h2 my-5">Physical Components</v-row>
  <v-container>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Item
          </th>
          <th class="text-left">
            Description
          </th>
          <th class="text-left">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in physical"
          :key="item.Component"
        >
          <td>{{ item.Item }}</td>
          <td>{{ item.Description }}</td>
          <td>{{ item.Cost }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
