<template>
  <div class="card bg-base-100 border border-base-300 p-4">

    <div class="flex justify-between">
      <div>
        <div class="text-sm opacity-70">{{ title }}</div>
        <div class="text-2xl font-bold mt-1">{{ value }}</div>
      </div>
      <div class="text-primary">📈</div>
    </div>

    <div
      class="mt-3 text-xs px-2 py-1 rounded inline-block"
      :class="positive ? 'bg-success text-success-content' : 'bg-error text-error-content'"
    >
      {{ delta }} since last week
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: String,
  delta: String,
  positive: Boolean
})
</script>