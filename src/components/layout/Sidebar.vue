<template>
  <aside
    class="bg-base-100 min-h-screen transition-all duration-200 border-r border-slate-200"
    :class="collapsed ? 'w-16' : 'w-56'"
  >
    <!-- Header / Branding -->
    <div class="flex items-center gap-2 p-3">
      <div
        class="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center"
      >
        <component :is="icons.LayoutDashboard" class="w-4 h-4" />
      </div>

      <span v-if="!collapsed" class="font-bold tracking-wide">
        Admin
      </span>
    </div>

    <!-- Menu -->
    <nav class="p-2 space-y-1">
      <div
        v-for="item in menuItems"
        :key="item.fullPath"
        class="relative group"
      >
        <!-- PARENT BUTTON -->
        <button
          class="btn btn-sm w-full justify-between"
          :class="isParentActive(item) ? 'btn-primary' : 'btn-ghost'"
          @click="toggle(item)"
        >
          <div class="flex items-center gap-2">
            <component
              :is="icons[item.icon] || icons.HelpCircle"
              class="w-5 h-5"
            />
            <span v-if="!collapsed">{{ item.label }}</span>
          </div>

          <!-- CHEVRON (expanded only) -->
          <component
            v-if="item.children?.length && !collapsed"
            :is="icons.ChevronDown"
            class="w-4 h-4 transition-transform duration-200"
            :class="isOpen(item.fullPath) ? 'rotate-180' : ''"
          />
        </button>

        <!-- CHILDREN (EXPANDED MODE) -->
        <transition
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-40"
          leave-active-class="transition-all duration-150 ease-in"
          leave-from-class="opacity-100 max-h-40"
          leave-to-class="opacity-0 max-h-0"
        >
          <div
            v-if="isOpen(item.fullPath) && !collapsed"
            class="ml-6 mt-1 space-y-1 overflow-hidden"
          >
            <RouterLink
              v-for="child in item.children"
              :key="child.fullPath"
              :to="child.fullPath"
              class="btn btn-xs w-full justify-start"
              :class="isChildActive(child.fullPath)"
            >
              {{ child.label }}
            </RouterLink>
          </div>
        </transition>

        <!-- CHILDREN (COLLAPSED MODE - HOVER CARD) -->
        <div
          v-if="collapsed && item.children?.length && isParentActive(item)"
          class="absolute left-16 top-1/2 -translate-y-1/2 z-[9999]"
        >
          <div
            class="bg-base-100 shadow-2xl rounded-xl p-3 min-w-[220px]
                   border border-base-300
                   transition-all duration-200 ease-out"
          >
            <!-- Header -->
            <div class="font-semibold text-sm mb-2 px-2">
              {{ item.label }}
            </div>

            <!-- Links -->
            <div class="space-y-1">
              <RouterLink
                v-for="child in item.children"
                :key="child.fullPath"
                :to="child.fullPath"
                class="btn btn-xs w-full justify-start"
                :class="isChildActive(child.fullPath)"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import * as Icons from 'lucide-vue-next'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()
const route = useRoute()

const openParents = ref({})

/* ICON MAP — ALL LUCIDE ICONS */
const icons = Icons

/* BUILD MENU FROM ROUTER */
const menuItems = computed(() => {
  const root = router.options.routes.find(r => r.path === '/')
  if (!root?.children) return []

  return root.children
    .filter(r => r.meta?.sidebar)
    .map(r => ({
      label: r.meta.sidebar,
      icon: r.meta.icon,
      fullPath: r.path === '' ? '/' : `/${r.path}`,
      children: (r.children || [])
        .filter(c => c.meta?.sidebar)
        .map(c => ({
          label: c.meta.sidebar,
          fullPath: `/${r.path}/${c.path}`
        }))
    }))
})

/* STATE HELPERS */
function isOpen(path) {
  return openParents.value[path]
}

function isParentActive(item) {
  return (
    route.path === item.fullPath ||
    route.path.startsWith(item.fullPath + '/')
  )
}

function isChildActive(path) {
  return route.path === path
    ? 'btn-primary'
    : 'btn-ghost'
}

/* CLICK BEHAVIOR */
function toggle(item) {
  if (!item.children?.length) {
    router.push(item.fullPath)
    return
  }

  openParents.value[item.fullPath] =
    !openParents.value[item.fullPath]
}

/* ACCORDION MODE: AUTO OPEN ACTIVE, CLOSE OTHERS */
watch(
  () => route.path,
  () => {
    const newState = {}

    menuItems.value.forEach(item => {
      if (
        route.path === item.fullPath ||
        route.path.startsWith(item.fullPath + '/')
      ) {
        newState[item.fullPath] = true
      } else {
        newState[item.fullPath] = false
      }
    })

    openParents.value = newState
  },
  { immediate: true }
)
</script>
