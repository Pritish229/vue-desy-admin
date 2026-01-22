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

            <div v-for="item in menuItems" :key="item.fullPath">

                <!-- PARENT -->
                <button class="btn btn-sm w-full justify-between"
                    :class="isParentActive(item) ? 'btn-primary' : 'btn-ghost'" @click="toggle(item)">
                    <div class="flex items-center gap-2">
                        <component :is="icons[item.icon]" class="w-5 h-5" />
                        <span v-if="!collapsed">{{ item.label }}</span>
                    </div>

                    <!-- CHEVRON -->
                    <ChevronDown v-if="item.children?.length && !collapsed"
                        class="w-4 h-4 transition-transform duration-200"
                        :class="isOpen(item.fullPath) ? 'rotate-180' : ''" />
                </button>

                <!-- CHILDREN -->
                <transition enter-active-class="transition-all duration-200 ease-out"
                    enter-from-class="opacity-0 max-h-0" enter-to-class="opacity-100 max-h-40"
                    leave-active-class="transition-all duration-150 ease-in" leave-from-class="opacity-100 max-h-40"
                    leave-to-class="opacity-0 max-h-0">
                    <div v-if="isOpen(item.fullPath) && !collapsed" class="ml-6 mt-1 space-y-1 overflow-hidden">
                        <RouterLink v-for="child in item.children" :key="child.fullPath" :to="child.fullPath"
                            class="btn btn-xs w-full justify-start" :class="isChildActive(child.fullPath)">
                            {{ child.label }}
                        </RouterLink>
                    </div>
                </transition>

            </div>

        </nav>


    </aside>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
    LayoutDashboard,
    Users,
    Settings,
    Shield,
    ChevronDown
} from 'lucide-vue-next'

const props = defineProps({
    collapsed: {
        type: Boolean,
        default: false
    }
})

const router = useRouter()
const route = useRoute()

const openParents = ref({})

const icons = {
    LayoutDashboard,
    Users,
    Settings
}

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

function isOpen(path) {
    return openParents.value[path]
}

function toggle(item) {
    if (!item.children?.length) {
        router.push(item.fullPath)
        return
    }

    openParents.value[item.fullPath] = !openParents.value[item.fullPath]
}

function isParentActive(item) {
    return route.path === item.fullPath ||
        route.path.startsWith(item.fullPath + '/')
}

function isChildActive(path) {
    return route.path === path
        ? 'btn-primary'
        : 'btn-ghost'
}

/* AUTO OPEN WHEN ROUTE CHANGES */
watch(
    () => route.path,
    () => {
        const newState = {}

        menuItems.value.forEach(item => {
            // Open only the active parent
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
