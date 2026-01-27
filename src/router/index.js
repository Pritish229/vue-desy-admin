import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import Alerts from '@/views/uicomponents/Alerts.vue'
import Buttons from '@/views/uicomponents/Buttons.vue'
import cards from '@/views/uicomponents/cards.vue'
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
        path: 'Components',
        // component: Alerts,
        meta: {
          breadcrumb: ['Home', 'Components'],
          sidebar: 'Components',
          icon: 'AlignVerticalSpaceBetween'
        },
        children: [
          {
            path: '',
            redirect: { name: 'Components' }
          },
          // CHILD 1
          {
            path: 'Alerts',
            name: 'Alerts',
            component: Alerts,
            meta: {
              breadcrumb: ['Home', 'Components', 'Alerts'],
              sidebar: 'Alerts'
            }
          },
          // CHILD 2
          {
            path: 'Buttons',
            name: 'Buttons',
            component: Buttons,
            meta: {
              breadcrumb: ['Home', 'Components', 'Buttons'],
              sidebar: 'Buttons'
            }
          },
          {
            path: 'cards',
            name: 'cards',
            component: cards,
            meta: {
              breadcrumb: ['Home', 'Components', 'cards'],
              sidebar: 'cards'
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
