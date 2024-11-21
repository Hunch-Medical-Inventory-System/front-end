<script setup>
  import logo from '@/assets/logo.png'
</script>

<template>
  <v-app-bar color="lighter" elevate-on-scroll>
    <template #prepend>
    </template>
    <v-img :src="logo" max-height="50px" max-width="50px" />
    <v-app-bar-title>Medical Supplies</v-app-bar-title>
    <template #append>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/account/login" exact>Demo Login</v-btn>
      <v-btn to="/account" exact>Demo Profile</v-btn>
      <v-btn to="/account/available" exact>Available Table</v-btn>
      <v-btn to="/items" exact>Supplies Table</v-btn>
      <v-btn to="/items/logs" exact>Logs Table</v-btn>
    </template>

  </v-app-bar>
</template>
