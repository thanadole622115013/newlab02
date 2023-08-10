import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventListView2 from '../views/EventListView2.vue'
import AboutView from '../views/AboutView.vue'
import StudentListView from '../views/StudentListView.vue'
import EventDetailView from '../views/EventDetailView.vue'
import EventEditView from '../views/EventEditView.vue'
import EventRegisterView from '../views/EventRegisterView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import NetWorkErrorView from '../views/NetWorkErrorView.vue'
import EventLayoutViewVue from '@/views/EventLayoutView.vue'
import { useEventStore } from '@/stores/event'
import EventService from '@/services/EventService'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
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
    {
      path: '/event/:id',
      name: 'event-layout',
      component: EventLayoutViewVue,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        return EventService.getEventById(id)
        .then((response) => {
          // set up
          eventStore.setEvent(response.data)
        })
        .catch((error) => {
          if(error.response && error.response.status === 404) {
            return {
              name: '404-resource',
              params: { resource:'event'}
            }
          } else {
            return { name: 'network-error'}
          }
        })
      },
      children: [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView,
          props: true
        }
      ]
    },
  
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetWorkErrorView 
    }
  ],
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0}
    }
  }
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
