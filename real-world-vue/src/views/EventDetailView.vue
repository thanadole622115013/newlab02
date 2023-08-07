<script setup lang="ts">

import { ref } from 'vue'
import type { Ref } from 'vue'
import type { EventItem } from '@/type'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

const event = ref<EventItem | null> (null)
const props = defineProps({
    id: String
})

const router = useRouter()
EventService.getEventById(Number(props.id))
.then((response) => {
    event.value = response.data
}).catch(error => {
    console.log(error)
    if( error.response && error.response.status === 404){
      router.push({ name: '404-resource', params: { resource: 'event' }})
    } else {
      router.push({ name: 'network-error'})
    }
    
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


