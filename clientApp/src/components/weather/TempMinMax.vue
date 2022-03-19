<template>
  <div v-if="props.weather" class="weatherTempMinMax">
    <!-- <ArrowNarrowUpIcon class="h-3 w-3 text-white" /> -->
    <span><span class="font-bold">H: </span>{{ props.weather.tempMax }}° </span>

    <span><span class="font-bold">L: </span>{{ props.weather.tempMin }}°</span>
  </div>
</template>

<script setup>
// import { ArrowNarrowUpIcon } from '@heroicons/vue/outline'

console.log('Hi, This is TempMinMax.vue')
const props = defineProps({
  weather: {
    type: Object,
    required: true,
  },
})
</script>
