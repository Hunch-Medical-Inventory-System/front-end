<script setup>
  import { ref } from 'vue'

  import logo from '@/assets/logo.png'

  const drawer = ref(false)
</script>

<template>

  <v-app-bar
    color="primary"
    prominent
  >
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" v-if="$vuetify.display.mdAndDown"></v-app-bar-nav-icon>
    <v-toolbar-title>Medical Inventory</v-toolbar-title>

    <v-spacer></v-spacer>

    <template v-if="!$vuetify.display.mdAndDown">
      <v-btn to="/">Home</v-btn>
      <v-btn to="/account" exact>Demo Profile Table</v-btn>
      <v-btn to="/account/available" exact>Available Table</v-btn>
      <v-btn to="/items" exact>Supplies Table</v-btn>
      <v-btn to="/items/logs" exact>Logs Table</v-btn>

    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list>
      <v-list-item><v-btn to="/" exact>Home</v-btn></v-list-item>
      <v-list-item><v-btn to="/account" exact>Demo Profile Table</v-btn></v-list-item>
      <v-list-item><v-btn to="/account/available" exact>Available Table</v-btn></v-list-item>
      <v-list-item><v-btn to="/items" exact>Supplies Table</v-btn></v-list-item>
      <v-list-item><v-btn to="/items/logs" exact>Logs Table</v-btn></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
