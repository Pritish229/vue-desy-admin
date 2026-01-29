<template>
    <div class=" space-y-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <!-- CARD 1 — NORMAL + SOFT ALERTS -->
            <div class="card bg-base-100 border border-base-300">
                <div class="card-body space-y-4">
                    <h2 class="card-title">Normal & Soft Alerts</h2>

                    <!-- Normal -->
                    <div class="space-y-2">
                        <div class="alert">
                            <span>Default alert</span>
                        </div>
                        <div class="alert alert-info">
                            <component :is="icons.Info" class="w-5 h-5" />
                            <span>Info alert</span>
                        </div>
                        <div class="alert alert-success">
                            <component :is="icons.CheckCircle" class="w-5 h-5" />
                            <span>Success alert</span>
                        </div>
                        <div class="alert alert-warning">
                            <component :is="icons.AlertTriangle" class="w-5 h-5" />
                            <span>Warning alert</span>
                        </div>
                        <div class="alert alert-error">
                            <component :is="icons.XCircle" class="w-5 h-5" />
                            <span>Error alert</span>
                        </div>
                    </div>

                    <!-- Soft -->
                    <div class="space-y-2">
                        <div class="alert alert-info alert-soft">
                            <component :is="icons.Info" class="w-5 h-5" />
                            <span>Soft info alert</span>
                        </div>
                        <div class="alert alert-success alert-soft">
                            <component :is="icons.CheckCircle" class="w-5 h-5" />
                            <span>Soft success alert</span>
                        </div>
                        <div class="alert alert-warning alert-soft">
                            <component :is="icons.AlertTriangle" class="w-5 h-5" />
                            <span>Soft warning alert</span>
                        </div>
                        <div class="alert alert-error alert-soft">
                            <component :is="icons.XCircle" class="w-5 h-5" />
                            <span>Soft error alert</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CARD 2 — OUTLINE + DASH ALERTS -->
            <div class="card bg-base-100 border border-base-300">
                <div class="card-body space-y-4">
                    <h2 class="card-title">Outline & Dash Alerts</h2>

                    <!-- Outline -->
                    <div class="space-y-2">
                        <div class="alert alert-info alert-outline">
                            <component :is="icons.Info" class="w-5 h-5" />
                            <span>Outline info alert</span>
                        </div>
                        <div class="alert alert-success alert-outline">
                            <component :is="icons.CheckCircle" class="w-5 h-5" />
                            <span>Outline success alert</span>
                        </div>
                        <div class="alert alert-warning alert-outline">
                            <component :is="icons.AlertTriangle" class="w-5 h-5" />
                            <span>Outline warning alert</span>
                        </div>
                        <div class="alert alert-error alert-outline">
                            <component :is="icons.XCircle" class="w-5 h-5" />
                            <span>Outline error alert</span>
                        </div>
                    </div>

                    <!-- Dash -->
                    <div class="space-y-2">
                        <div class="alert alert-info alert-dash">
                            <component :is="icons.Info" class="w-5 h-5" />
                            <span>Dash info alert</span>
                        </div>
                        <div class="alert alert-success alert-dash">
                            <component :is="icons.CheckCircle" class="w-5 h-5" />
                            <span>Dash success alert</span>
                        </div>
                        <div class="alert alert-warning alert-dash">
                            <component :is="icons.AlertTriangle" class="w-5 h-5" />
                            <span>Dash warning alert</span>
                        </div>
                        <div class="alert alert-error alert-dash">
                            <component :is="icons.XCircle" class="w-5 h-5" />
                            <span>Dash error alert</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CARD 3 — RESPONSIVE + TITLED ALERT -->
            <div class="card bg-base-100 border border-base-300">
                <div class="card-body space-y-4">
                    <h2 class="card-title">Responsive & Titled Alerts</h2>

                    <div class="alert alert-info alert-vertical sm:alert-horizontal">
                        <component :is="icons.Info" class="w-5 h-5" />
                        <div class="flex-auto">
                            <h3 class="font-bold">Heads up!</h3>
                            <p class="text-sm opacity-80">
                                This alert adapts to screen size.
                            </p>
                        </div>
                        <div class="flex-none space-x-1">
                            <button class="btn btn-xs">Deny</button>
                            <button class="btn btn-xs btn-primary">Accept</button>
                        </div>
                    </div>
                    <div class="alert alert-success alert-vertical sm:alert-horizontal">
                        <component :is="icons.Info" class="w-5 h-5" />
                        <div class="flex-auto">
                            <h3 class="font-bold">Heads up!</h3>
                            <p class="text-sm opacity-80">
                                This alert adapts to screen size.
                            </p>
                        </div>
                        <div class="flex-none space-x-1">
                            <button class="btn btn-xs">Deny</button>
                            <button class="btn btn-xs btn-primary">Accept</button>
                        </div>
                    </div>
                    <div class="alert alert-warning alert-vertical sm:alert-horizontal">
                        <component :is="icons.Info" class="w-5 h-5" />
                        <div class="flex-auto">
                            <h3 class="font-bold">Heads up!</h3>
                            <p class="text-sm opacity-80">
                                This alert adapts to screen size.
                            </p>
                        </div>
                        <div class="flex-none space-x-1">
                            <button class="btn btn-xs">Deny</button>
                            <button class="btn btn-xs btn-primary">Accept</button>
                        </div>
                    </div>
                    <div class="alert alert-error alert-vertical sm:alert-horizontal">
                        <component :is="icons.Info" class="w-5 h-5" />
                        <div class="flex-auto">
                            <h3 class="font-bold">Heads up!</h3>
                            <p class="text-sm opacity-80">
                                This alert adapts to screen size.
                            </p>
                        </div>
                        <div class="flex-none space-x-1">
                            <button class="btn btn-xs">Deny</button>
                            <button class="btn btn-xs btn-primary">Accept</button>
                        </div>
                    </div>
                </div>
            </div>

         


          

            <!-- CARD 6 — LOADING ALERT -->
            <div class="card bg-base-100 border border-base-300">
                <div class="card-body space-y-4">
                    <h2 class="card-title">Loading Alert</h2>

                    <div class="alert alert-info">
                        <span class="loading loading-spinner loading-sm"></span>
                        <span>Processing request...</span>
                    </div>
                    <div class="alert alert-success">
                        <span class="loading loading-spinner loading-sm"></span>
                        <span>Processing request...</span>
                    </div>
                    <div class="alert alert-warning">
                        <span class="loading loading-spinner loading-sm"></span>
                        <span>Processing request...</span>
                    </div>
                    <div class="alert alert-error">
                        <span class="loading loading-spinner loading-sm"></span>
                        <span>Processing request...</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import * as Icons from 'lucide-vue-next'
import { ref, useTemplateRef, onMounted } from 'vue'


const icons = Icons

const showInfo = ref(true)
const showSuccess = ref(true)
</script>
