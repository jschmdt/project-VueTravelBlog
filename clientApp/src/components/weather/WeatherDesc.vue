<template>
  <div v-if="props.weather" class="weatherDesc">
    {{ props.weather.description }}
  </div>
</template>

<script setup>
console.log('Hi, This is WeatherDesc.vue')
const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
})
</script>
