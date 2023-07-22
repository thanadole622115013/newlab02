import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventListView2 from '../views/EventListView2.vue'
import AboutView from '../views/AboutView.vue'
import StudentListView from '../views/StudentListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/EventList2',
      name: 'EventList2',
      component: EventListView2
    },
    {
      path: '/student',
      name: 'student',
      component: StudentListView
    },
  ]
})

export default router
