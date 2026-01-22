import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Users from '@/views/Users.vue'
import Settings from '@/views/Settings.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

const routes = [
  {
    path: '/',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: Dashboard,
        meta: {
          breadcrumb: ['Home', 'Dashboard'],
          sidebar: 'Dashboard',
          icon: 'LayoutDashboard'
        }
      },
      {
        path: 'users',
        name: 'users',
        component: Users,
        meta: {
          breadcrumb: ['Home', 'Users'],
          sidebar: 'Users',
          icon: 'Users'
        }
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings,
        meta: {
          breadcrumb: ['Home', 'Settings'],
          sidebar: 'Settings',
          icon: 'Settings'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
