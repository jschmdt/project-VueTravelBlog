<template>
  <li v-if="myWeatherData" class="group h-full rounded-lg relative text-white border-2" autofocus>
    <div class="flex flex-col h-48 z-20 relative rounded-t-lg">
      <CardContent :city="city" :weather="myWeatherData" />
      <CardBackground :city="city" :weather="myWeatherData" />
    </div>
    <div class="relative p-6">
      <CardSummary :city="city" :weather="myWeatherData" />
    </div>
  </li>
  <li v-else>Fetchin data...</li>
</template>

<script setup>
import { onMounted, onErrorCaptured, ref } from 'vue'

import ApiService from '@/services/ApiService'

import CardBackground from '@/components/card/CardBackground.vue'
import CardContent from '@/components/card/CardContent.vue'
import CardSummary from '@/components/card/CardSummary.vue'

const openWeatherData = ref(null)
const myWeatherData = ref(null)
const error = ref(null)

const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
})

// const emit = defineEmits({
//   selected: () => true
// })

// const clickedLi = weather => {
//   emit('selected', weather)
//   // alert(`clicked ${weather}`)
// }

onMounted(async () => {
  console.log('Hi, This is CardItem.vue')
  await ApiService.getWeather(props.city?.cityName)
    .then((response) => {
      // console.log('events:', response.data)
      openWeatherData.value = response.data
      console.log(response.data)
      myWeatherData.value = {
        description: openWeatherData.value.weather[0].description,
        temp: Math.round(openWeatherData.value.main.temp),
        tempMin: Math.round(openWeatherData.value.main.temp_min),
        tempMax: Math.round(openWeatherData.value.main.temp_max),
        icon: openWeatherData.value.weather[0].icon,
        country: openWeatherData.value.sys.country,
        position: {
          lat: parseFloat(openWeatherData.value.coord.lat),
          lng: parseFloat(openWeatherData.value.coord.lon),
        },
      }
      // clickedLi(myWeatherData.value)
    })
    .catch((error) => {
      console.log(error)
    })
})

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
