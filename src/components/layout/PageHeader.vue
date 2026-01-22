<template>
  <div class="flex items-center justify-between mb-4">

    <!-- Page Title -->
    <h1 class="text-2xl font-bold">
      {{ title }}
    </h1>

    <!-- Breadcrumbs Right -->
    <div class="breadcrumbs text-sm">
      <ul>
        <li v-for="(item, i) in crumbs" :key="i">
          <RouterLink
            v-if="i !== crumbs.length - 1"
            :to="getPath(i)"
          >
            {{ item }}
          </RouterLink>

          <span v-else>
            {{ item }}
          </span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const crumbs = computed(() => route.meta.breadcrumb || [])
const title = computed(() => crumbs.value[crumbs.value.length - 1] || '')

/* Maps breadcrumb index → route path */
function getPath(index) {
  // Home always goes to dashboard
  if (index === 0) return '/'

  const map = {
    Users: '/users',
    Students: '/users/students',
    Roles: '/users/roles',
    Settings: '/settings'
  }

  return map[crumbs.value[index]] || '/'
}
</script>
