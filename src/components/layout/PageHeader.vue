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
                    <span>{{ item }}</span>
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
</script>