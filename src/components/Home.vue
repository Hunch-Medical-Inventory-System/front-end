<script setup>
  import logo from '@/assets/logo.png'
  import nasaHunch from '@/assets/nasa_hunch.png'
  import warrenTech from '@/assets/warren_tech.png'
</script>

<template>
  <v-container class="my-15">
    <v-row>
      <v-container class="justify-center">
        <v-row class="text-h2 justify-center text-center">Medical Based</v-row>
        <v-row class="text-h1 justify-center text-center my-5">Inventory System</v-row>
        <v-row class="">
          <v-col>
            <v-img max-height="250px" :src="nasaHunch"/>
          </v-col>
          <v-col>
            <v-img max-height="250px" :src="logo" />
          </v-col>
          <v-col>
            <v-img max-height="250px" :src="warrenTech"/>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <!-- <v-col cols="12" sm="8" md="6"> -->
    <v-row class="text-center justify-center">
      <v-col>
        <v-btn class="button-styles elevation-10" size="x-large" to="/login">Demo Login</v-btn>
      </v-col>
      <v-col>
        <v-btn class="button-styles" size="x-large" to="/profile">Demo Profile</v-btn>
      </v-col>
      <v-col>
        <v-btn class="button-styles" size="x-large" to="/expired">Expiry Table</v-btn>
      </v-col>
      <v-col>
        <v-btn class="button-styles" size="x-large" to="/update">Update</v-btn>
      </v-col>
    </v-row>
    <!-- </v-col> -->
  </v-container>
</template>

<style scoped>

  .button-styles {
    border: 1px solid transparent;
    transition: all 1s ease;
  }

  .button-styles:hover {
    border: 1px solid transparent;
    border-image: linear-gradient(to right, hwb(198 2% 10%), hwb(228 7% 20%)) 1;
  }
</style>
