<template>
  <div v-if="props.weather" class="weatherTemp color text-3xl font-light">
    {{ props.weather.temp }}°
  </div>
</template>

<script setup>
console.log('Hi, This is TempMain.vue')
const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
})
</script>
