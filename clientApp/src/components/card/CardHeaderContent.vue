<template>
  <div v-if="props.city" class="flex flex-row w-full h-full justify-between z-30 overflow-hidden">
    <div
      class="flex flex-col w-2/3 justify-start group-hover:-translate-x-96 duration-700 transition ease-in-out"
    >
      <h1 class="color text-3xl font-bold">
        {{ Helpers.FirstWordBeforeComma(props.city?.cityName) }}
        {{ Helpers.GetFlagEmoji(props.weather?.country) }}
      </h1>
      <TempMain :weather="weather" />
    </div>

    <div
      v-if="weather"
      class="weatherWrap flex flex-col justify-end justify-items-end text-sm text-right group-hover:translate-x-40 duration-700 transition ease-in-out"
    >
      <WeatherIcon :weather="weather" />
      <TempMinMax :weather="weather" />

      <WeatherDesc :weather="weather" />
    </div>
  </div>
</template>

<script setup>
import WeatherIcon from '@/components/weather/WeatherIcon.vue'
import WeatherDesc from '@/components/weather/WeatherDesc.vue'
import TempMain from '@/components/weather/TempMain.vue'
import TempMinMax from '@/components/weather/TempMinMax.vue'
import Helpers from '@/services/Helpers'

const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
  weather: {
    type: Object,
    required: true,
  },
})
</script>
