import MedsView from '@/views/MedsView.vue'
import NotificationsView from '@/views/NotificationsView.vue'
import SettingsView from '@/views/SettingsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/meds' },
    { path: '/meds', component: MedsView },
    { path: '/notifications', component: NotificationsView },
    { path: '/settings', component: SettingsView },
  ],
})

export default router
