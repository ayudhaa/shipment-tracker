import { createRouter, createWebHashHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  { path: '/', component: ListView },
  { path: '/detail/:id', component: DetailView }
]

export const router = createRouter({
  history: createWebHashHistory('/shipment-tracker/'), 
  routes
})