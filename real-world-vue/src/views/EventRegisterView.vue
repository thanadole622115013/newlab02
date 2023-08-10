<script setup lang="ts">
import type { PropType } from 'vue'
import type { EventItem } from '@/type'

import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps({
    event: {
      type: Object as PropType<EventItem>,
        require: true
    }
})

const router = useRouter()
const store = useMessageStore()

function register(){

store.updateMesage('You are successfully registered for ' + props.event?.first_name)
setTimeout(() => {
  store.resetMessage()
}, 3000)
router.push({
  name: 'event-detail',
  params: {
    id: [props.event?.id]
  }
})
}

</script>

<template>
  <div v-if="event">
    <p>Registration from here</p>
    <button @click="register">Register Me</button>
  </div>
</template>


