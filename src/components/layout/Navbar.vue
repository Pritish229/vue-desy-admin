<template>
  <header class="navbar bg-base-100 border-b border-base-300 px-4 gap-1">

    <!-- Left -->
    <div class="flex items-center gap-2">
      <button class="btn btn-ghost btn-circle hidden lg:flex" @click="$emit('toggle-sidebar')">
        <ChevronLeft class="w-5 h-5" />
      </button>

      <label for="admin-drawer" class="btn btn-ghost btn-circle lg:hidden">
        <Menu class="w-5 h-5" />
      </label>

      <div class="hidden md:flex">
        <input type="text" placeholder="Search..." class="input input-bordered input-sm w-48" />
      </div>
    </div>

    <div class="ml-auto"></div>

    <!-- Right -->
    <div class="flex items-center gap-3">

      <!-- Notifications -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <Bell class="w-5 h-5" />
        </label>

        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box shadow w-64 mt-3 z-[50]">
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

        <ul tabindex="0" class="dropdown-content z-[50] bg-base-100 rounded-box shadow w-100">
          <div class="menu p-2 max-h-72 overflow-y-auto overscroll-contain">
            <li v-for="theme in themes" :key="theme">
              <button class="flex justify-between w-full" @click="setTheme(theme)">
                <span class="capitalize">{{ theme }}</span>
                <span v-if="currentTheme === theme">✓</span>
              </button>
            </li>
          </div>
        </ul>
      </div>

      <!-- Profile -->
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar cursor-pointer">
          <div class="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
          </div>
        </label>

        <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box shadow w-52 mt-3 z-[50]">
          <li><a>Profile</a></li>
          <li><a>Settings</a></li>
          <li class="text-error"><a>Logout</a></li>
        </ul>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ChevronLeft, Menu, Palette, Bell } from 'lucide-vue-next'

defineEmits(['toggle-sidebar'])

/* ALL THEMES */
const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset'
]

const currentTheme = ref('light')

/* APPLY THEME */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  currentTheme.value = theme
}

/* USER SELECTS THEME */
function setTheme(theme) {
  applyTheme(theme)
}

/* RESTORE SAVED THEME */
onMounted(() => {
  const saved = localStorage.getItem('theme') || 'light'
  applyTheme(saved)
})
</script>
