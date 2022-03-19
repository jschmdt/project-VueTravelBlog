<template>
  <div v-if="props.weather" class="self-end">
    <img
      class="weatherIcon w-20 self-end"
      :src="`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`"
    />
  </div>
</template>

<script setup>
console.log('Hi, This is WeatherIcon.vue')
const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
})
</script>
