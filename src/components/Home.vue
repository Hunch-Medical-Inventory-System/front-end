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
        <v-btn class="button-styles elevation-10" size="x-large" to="/account/login">Demo Login</v-btn>
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
      <v-col>
        <v-btn class="button-styles" size="x-large" to="/log">NFC logs</v-btn>
      </v-col>
      <v-col>
        <v-btn class="button-styles" size="x-large" to="/alerts">Alerts</v-btn>
      </v-col>
    </v-row>
    <!-- </v-col> -->
  </v-container>
</template>

<style scoped>
.button-styles {
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #333; 
  border: 2px solid transparent; 
  border-radius: 25px; 
  transition: all 0.4s ease; 
}

.button-styles:hover {
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: hsl(215, 86%, 22%); 
  border: 2px solid transparent; 
  border-radius: 25px; 
}
</style>

