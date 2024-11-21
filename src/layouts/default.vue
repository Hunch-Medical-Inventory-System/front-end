<template>
  <v-app>
    <NavBar />
    <!-- <v-row class="bg-container"> -->
      <v-main>
          <router-view />
      </v-main>
    <!-- </v-row> -->
    <AppFooter />
  </v-app>
</template>

<style scoped>

.bg-container {
  background-image: url('@/assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
