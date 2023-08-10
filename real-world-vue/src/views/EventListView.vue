<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import NProgress from 'nprogress'
import { useRouter } from 'vue-router';
import type { EventItem } from '@/type';
import EventService from '../services/EventService'
import { computed, ref, watchEffect } from 'vue'
import { AxiosResponse } from 'axios';
import router from '@/router';
import { onBeforeRouteUpdate } from 'vue-router';

const events = ref<EventItem[]>([])

const totalEvent = ref<number>(0)
const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value /3)
  return props.page.valueOf() <totalPages
})
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})


  EventService.getEvent(3, props.page).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
    console.log(response.data)
  }).catch(() => {
    router.push({ name: 'NetworkError' })
  })

  onBeforeRouteUpdate((to, from, next) => {
    const toPage = Number(to.query.page)
  
    EventService.getEvent(3, toPage).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
    next()
  }).catch(() => {
    next({ name: 'NetworkError' })
  })
  })



</script>

<template>
    <div>
          <h1>Events For Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="pagination">
      <RouterLink :to="{ name: 'EventList', query: { page: page - 1 } }" rel="prev" v-if="page!=1" id="page-prev">
    Prev Page
    </RouterLink>
    <RouterLink :to="{ name: 'EventList', query: { page: page + 1 } }" rel="next" v-if="hasNextPage" id="page-next">
    Next Page
    </RouterLink>
    </div>
    
  </main>
    </div>

  
  
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .pagination {
    display: flex;
    width: 290px;
  }
  .pagination a {
    flex: 1;
    text-decoration: none;
    color: #2c3e50;
  }
  #page-prev {
    text-align: left;
  }
  #page-next {
    text-align: right;
  }
</style>
