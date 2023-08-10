 <script setup lang="ts">
 import type { EventItem } from '@/type'
 
 import { useRouter } from 'vue-router'
 import { useMessageStore } from '@/stores/message'
 import { RouterLink, RouterView } from 'vue-router'
 import type { PropType } from 'vue';
 
 const props = defineProps({
     event: {
       type: Object as PropType<EventItem>,
         require: true
     }
 })
 
 const router = useRouter()
 const store = useMessageStore()
 
 function edit(){
 router.push({ path: '/'})
 store.updateMesage(props.event?.title + ' The data has been updated ')
 setTimeout(() => {
   store.resetMessage()
 }, 5000)
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
     <p>Edit the event here</p>
     <button @click="edit">Edit Me</button>
   </div>
 </template>
 
 
 