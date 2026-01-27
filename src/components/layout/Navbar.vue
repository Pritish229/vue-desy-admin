<template>
  <header class="navbar bg-base-100 border-b border-base-300 px-4 gap-1">

    <!-- Left -->
    <div class="flex items-center gap-2">
      <!-- Desktop Toggle -->
      <button
        class="btn btn-ghost btn-circle hidden lg:flex"
        @click="$emit('toggle-sidebar')"
      >
        <Menu class="w-5 h-5" />
      </button>

      <!-- Mobile Toggle (Drawer) -->
      <label
        for="admin-drawer"
        class="btn btn-ghost btn-circle lg:hidden"
      >
        <Menu class="w-5 h-5" />
      </label>

      <div class="hidden md:flex">
        <input
          type="text"
          placeholder="Search..."
          class="input input-bordered input-sm w-48"
        />
      </div>
    </div>

    <div class="ml-auto"></div>

    <!-- Right -->
    <div class="flex items-center gap-3">

      <!-- DARK MODE TOGGLE -->
      <label class="toggle text-base-content">
        <input
          type="checkbox"
          class="theme-controller"
          :checked="isDark"
          :disabled="!darkSupported"
          @change="toggleDark"
        />

        <!-- Sun -->
        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </g>
        </svg>

        <!-- Moon -->
        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </g>
        </svg>
      </label>

      <!-- Notifications -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <Bell class="w-5 h-5" />
        </label>

        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box shadow w-64 mt-3">
          <li class="menu-title"><span>Notifications</span></li>
          <li><a>New user registered</a></li>
          <li><a>System update available</a></li>
          <li><a>Backup completed</a></li>
        </ul>
      </div>

      <!-- Theme Dropdown -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <Palette class="w-5 h-5" />
        </label>

        <ul
          tabindex="0"
          class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-56 max-h-72 overflow-y-auto"
        >
          <li v-for="theme in themes" :key="theme">
            <button class="flex justify-between" @click="setTheme(theme)">
              <span class="capitalize">{{ theme }}</span>
              <span v-if="currentTheme === theme">✓</span>
            </button>
          </li>
        </ul>
      </div>

      <!-- Profile -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar cursor-pointer">
          <div class="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
          </div>
        </label>

        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box shadow w-52 mt-3">
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
          <li class="text-error"><a>Logout</a></li>
        </ul>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { Menu, Palette, Bell } from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])

const themePairs = {
  light: 'dark',
  emerald: 'forest',
  corporate: 'night',
  retro: 'cyberpunk',
  garden: 'halloween'
}

const reversePairs = Object.fromEntries(
  Object.entries(themePairs).map(([k, v]) => [v, k])
)

const themes = [
  'light',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'retro',
  'garden'
]

const currentTheme = ref('light')
const baseTheme = ref('light')

const isDark = computed(() =>
  Object.values(themePairs).includes(currentTheme.value)
)

const darkSupported = computed(() =>
  !!themePairs[baseTheme.value]
)

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  currentTheme.value = theme
}

function toggleDark() {
  if (!darkSupported.value) return

  const base = baseTheme.value

  if (isDark.value) {
    applyTheme(base)
  } else {
    applyTheme(themePairs[base])
  }
}

function setTheme(theme) {
  baseTheme.value = theme

  if (isDark.value && themePairs[theme]) {
    applyTheme(themePairs[theme])
  } else {
    applyTheme(theme)
  }
}

onMounted(() => {
  const saved = localStorage.getItem('theme') || 'light'

  currentTheme.value = saved
  baseTheme.value = reversePairs[saved] || saved

  applyTheme(saved)
})
</script>
