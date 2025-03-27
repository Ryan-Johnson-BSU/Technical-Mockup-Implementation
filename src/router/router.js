// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import ExercisePage from '../components/ExercisePage.vue'
import WorkoutPage from '../components/WorkoutPage.vue'
import SchedulePage from '../components/SchedulePage.vue'

const routes = [
  {
    path: '/exercise',
    name: 'Exercise',
    component: ExercisePage,
  },
  {
    path: '/workout',
    name: 'Workout',
    component: WorkoutPage,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: SchedulePage,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
