<script setup>
  import logo from '@/assets/logo.png'
  import nasaHunch from '@/assets/nasa_hunch.png'
  import warrenTech from '@/assets/warren_tech.png'
</script>

<template> 
 <v-app class="bg-container">
    <v-container class="my-15">
      <v-row>
        <v-container class="justify-center">
          <v-row class="title2 justify-center text-center" style="margin-bottom: 0;">Medical Based</v-row>
          <v-row class="title justify-center text-center my-1">Inventory System</v-row>
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
</v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Share+Tech+Mono&display=swap');

.button-styles {
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  color: hsl(210, 17%, 98%);
  background: linear-gradient(135deg, hwb(198 2% 10%), hwb(228 7% 20%));
  border: none;
  border-radius: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.button-styles:hover {
  background: linear-gradient(135deg, hsl(215, 86%, 32%), hsl(215, 86%, 22%));
  color: hsl(210, 17%, 98%);
  transform: translateY(-2px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
}

.title {
  font-family: "Audiowide", sans-serif;
  font-weight: 400;
  font-size: 80px;
  font-style: normal;
  color: hsl(210, 10%, 95%);
}

.bg-container {
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.title2 {
  font-family: "Share Tech Mono", monospace;
  font-weight: 400;
  font-size: 60px;
  font-style: normal;
  color: hsl(210, 15%, 90%);
}
</style>

