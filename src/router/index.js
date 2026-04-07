import { createRouter, createWebHashHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: ListView 
  },
  { 
    path: '/detail/:id', 
    name: 'Detail',
    component: DetailView 
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export const router = createRouter({
  history: createWebHashHistory('/shipment-tracker/'), 
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})