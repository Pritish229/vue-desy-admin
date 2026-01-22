<template>

    <aside class="bg-base-100 min-h-screen transition-all duration-200 border-r border-slate-200"
        :class="collapsed ? 'w-16' : 'w-56'">

        <!-- Header / Admin Branding -->
        <div class="flex items-center gap-2 p-3 ">

            <!-- Admin Icon -->
            <div class="w-8 h-8 rounded-lg bg-primary text-primary-content flex items-center justify-center">
                <Shield class="w-4 h-4" />
            </div>

            <!-- Title -->
            <span v-if="!collapsed" class="font-bold tracking-wide">
                Admin
            </span>

        </div>
      

        <!-- Menu -->
        <nav class="p-2 space-y-1">

            <RouterLink v-for="item in menuItems" :key="item.fullPath" :to="item.fullPath"
                class="btn btn-sm w-full justify-start gap-2" :class="isActive(item.fullPath)">
                <component :is="icons[item.icon]" class="w-5 h-5" />

                <span v-if="!collapsed">
                    {{ item.label }}
                </span>
            </RouterLink>

        </nav>
    </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import {
    LayoutDashboard,
    Users,
    Settings,
    Shield
} from 'lucide-vue-next'

/* Props from layout */
const props = defineProps({
    collapsed: {
        type: Boolean,
        default: false
    }
})

const router = useRouter()
const route = useRoute()

/* Icon Map */
const icons = {
    LayoutDashboard,
    Users,
    Settings
}

/* Build menu from router */
const menuItems = computed(() => {
    const root = router.options.routes.find(r => r.path === '/')
    if (!root?.children) return []

    return root.children
        .filter(r => r.meta?.sidebar)
        .map(r => ({
            label: r.meta.sidebar,
            icon: r.meta.icon,
            fullPath: r.path === '' ? '/' : `/${r.path}`
        }))
})

function isActive(path) {
    return route.path === path
        ? 'btn-primary'
        : 'btn-ghost'
}
</script>
