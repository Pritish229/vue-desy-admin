<template>
    <div class="min-h-screen bg-base-200">

        <div class="drawer lg:drawer-open">
            <input id="admin-drawer" type="checkbox" class="drawer-toggle" />

            <!-- Content -->
            <div class="drawer-content flex flex-col">

                <!-- Navbar controls sidebar -->
                <Navbar @toggle-sidebar="toggleSidebar" />

                <main class="p-6">
                    <PageHeader />
                    <RouterView />
                </main>
            </div>

            <!-- Sidebar -->
            <div class="drawer-side">
                <label for="admin-drawer" class="drawer-overlay"></label>
                <Sidebar :collapsed="collapsed" />
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/layout/Navbar.vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import PageHeader from '@/components/layout/PageHeader.vue'

const collapsed = ref(false)

function toggleSidebar() {
    collapsed.value = !collapsed.value
}
</script>
