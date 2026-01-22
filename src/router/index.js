import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import UsersLayout from '@/views/users/UsersLayout.vue'
import Students from '@/views/users/Students.vue'
import Roles from '@/views/users/Roles.vue'
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
        component: UsersLayout,
        meta: {
          breadcrumb: ['Home', 'Users'],
          sidebar: 'Users',
          icon: 'Users'
        },
        children: [
          {
            path: '',
            redirect: { name: 'students' }
          },
          // CHILD 1
          {
            path: 'students',
            name: 'students',
            component: Students,
            meta: {
              breadcrumb: ['Home', 'Users', 'Students'],
              sidebar: 'Students'
            }
          },
          // CHILD 2
          {
            path: 'roles',
            name: 'roles',
            component: Roles,
            meta: {
              breadcrumb: ['Home', 'Users', 'Roles'],
              sidebar: 'Roles'
            }
          }
        ]
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

router.afterEach((to) => {
  const crumbs = to.meta?.breadcrumb || []

  const pageTitle = crumbs.length
    ? crumbs[crumbs.length - 1]
    : 'Dashboard'

  document.title = `${pageTitle} | Admin`
})

export default router
