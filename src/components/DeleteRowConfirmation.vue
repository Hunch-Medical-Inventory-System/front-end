<script setup>
  import { ref } from 'vue'
  import { deleteRowFromTable } from '@/lib/supabaseClient'

  const emits = defineEmits(['close'])
  const props = defineProps(['id', 'table'])

  const isOpened = ref(false)

  const toggleDelete = () => {
    isOpened.value = !isOpened.value
    emits('close')
  }

  const deleteItem = async () => {
    await deleteRowFromTable(props.table, props.id)
    toggleDelete()
  }
</script>

<template>
  <v-card>
    <v-card-text>
      <p>Are you sure you want to delete this item?</p>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        @click="toggleDelete"
      >
        Cancel
      </v-btn>
      <v-btn
        color="error"
        @click="deleteItem"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
