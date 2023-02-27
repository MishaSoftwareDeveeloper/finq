import { createRouter, createWebHistory } from 'vue-router'
import Persons from '../components/persons/index.vue'
import EditPerson from '../components/edit-person/index.vue'

const routes = [
  {
    path: '/',
    name: 'persons',
    component: Persons,
    props: true
   },
   {
    path: '/edit-person',
    name: 'editPersons',
    component: EditPerson,
    props: true
   }

]

const router = createRouter({
  mode:'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
