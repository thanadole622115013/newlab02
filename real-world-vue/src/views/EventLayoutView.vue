<!-- <script setup lang="ts">

import { ref } from 'vue'
import type { EventItem } from '@/type'
import EventService from '@/services/EventService'
import { RouterLink, RouterView } from 'vue-router'

const event = ref<EventItem | null> (null)
const props = defineProps({
    id: String
})

EventService.getEventById(Number(props.id))
.then((response) => {
    event.value = response.data
}).catch(error => {
    console.log(error)
})

</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
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

 -->
