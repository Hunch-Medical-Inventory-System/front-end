<script setup>
  import completeTimeline from '@/assets/api/nasa_timeline.json'

  const timeline = completeTimeline.Timeline.map(event => {
    let icon
    let color
    switch (event.Component) {
      case 'Vue Front-End':
        icon = 'mdi-vuejs'
        color = 'teal'
        break
      case 'Public Webapp':
        icon = 'mdi-vuetify'
        color = 'blue'
        break
      case 'Supabase Database':
        icon = 'mdi-lightning-bolt'
        color = 'green'
        break
      case 'RFID Scanner':
        icon = 'mdi-barcode-scan'
        color = 'purple'
        break

      default:
        break
    }

    return {
      date: event['End date'],
      title: event.Task,
      icon,
      color,
    }
  })

  const test = [
    {
      date: '10/14/2022',
      title: 'Vuetify 3.0 Released',
      icon: 'vuetify',
    },
  ]
</script>

<template>
  <v-row class="text-h2 my-5">Expected Timeline</v-row>
  <v-timeline align="start" side="end">
    <v-timeline-item v-for="item in timeline" :key="item.date" :dot-color="item.color" size="small">
      <v-container>
        <v-row class="text-center"><v-icon class="mr-2">{{ item.icon }}</v-icon>{{ item.title }}</v-row>
        <v-row class="text-center text-subtitle-2">{{ item.date }}</v-row>
      </v-container>
    </v-timeline-item>
  </v-timeline>

</template>
