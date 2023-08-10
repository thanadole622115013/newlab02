<script setup lang="ts">

import type { PropType } from 'vue';
import type { EventItem } from '@/type'
import { RouterLink, RouterView } from 'vue-router'

defineProps({
  event: {
    type: Object as PropType<EventItem>,
      require: true
  }
})

</script>

<template>
  <div v-if="event">  
    <p>User ID: {{ event.id }}</p>
    <p>Name: {{ event.first_name + " " + event.last_name}} </p>
    <p>Email: {{ event.email }}</p>
    <p>Gender: {{ event.gender }}</p>
    <p>IP: {{ event.ip_address }}</p>
    <p>Source: {{ event.Source }}</p>
    <p>Destination: {{ event.Destination }}</p>
    <p>Date: {{ event.travelDate }}</p>
    <p>Airline ID: {{ event?.airlineId }}</p>
  </div>
</template>


