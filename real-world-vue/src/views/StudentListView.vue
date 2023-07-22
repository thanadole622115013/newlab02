<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { EventItem } from '@/type';
import StudentService from '../services/StudentService'
import { ref } from 'vue'

const students = ref<EventItem[]>([])

StudentService.getStudent()
  .then((response) => {
    students.value = response.data
    console.log(response.data)
  })

</script>

<template>
  <h1>Student List</h1>
  <main class="events">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
    <!-- <EventCardCO v-for="event in events" :key="event.id" :event="event"></EventCardCO> -->
  </main>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
