<script setup lang="ts">

import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)
const router = useRouter()

</script>

<template>
  <div v-if="event">
    <h1>{{ event.first_name }}</h1>
    <div id="nav">
      <Router-link :to="{ name: 'event-detail', params: { id }}">Details</Router-link>
      |
      <Router-link :to="{ name: 'event-register', params: { id }}">Register</Router-link>
      |
      <Router-link :to="{ name: 'event-edit', params: { id }}">Edit</Router-link>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>


