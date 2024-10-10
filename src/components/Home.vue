<script setup>
  import logo from '@/assets/logo.png'
  import nasaHunch from '@/assets/nasa_hunch.png'
  import warrenTech from '@/assets/warren_tech.png'
</script>

<template>
  <v-container class="my-15">
    <v-row>
      <v-container class="justify-center">
        <v-row class="text-h2 justify-center">Medical Based</v-row>
        <v-row class="text-h1 justify-center my-5">Inventory System</v-row>
        <v-row class="ga-15 mx-15 my-10">
          <v-col>
            <v-img :src="nasaHunch"/>
          </v-col>
          <v-col>
            <v-img :src="logo" />
          </v-col>
          <v-col>
            <v-img :src="warrenTech"/>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <!-- <v-col cols="12" sm="8" md="6"> -->
    <v-row class="text-center justify-center ga-15">
      <v-btn class="button-styles elevation-10" size="x-large" to="/login">Demo Login</v-btn>
      <v-btn class="button-styles" size="x-large" to="/profile">Demo Profile</v-btn>
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
