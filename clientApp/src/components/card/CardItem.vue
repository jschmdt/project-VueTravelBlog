<template>
  <RouterLink :to="{ name: 'CityDetail', params: { id: props.city.id } }">
    <li v-if="props.city" class="group h-full rounded-lg relative text-white border-2" autofocus>
      <div v-if="myWeatherData" class="flex flex-col h-48 z-20 relative rounded-t-lg">
        <CardHeaderContent :city="props.city" :weather="myWeatherData" class="p-5" />
        <CardHeaderBackground :city="props.city" :weather="myWeatherData" />
      </div>
      <div v-if="myWeatherData" class="relative p-5">
        <CardBodySummary :city="props.city" :weather="myWeatherData" />
      </div>
    </li>
    <li v-else>Fetchin data...</li>
  </RouterLink>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import ApiService from '@/services/ApiService'

import CardHeaderBackground from '@/components/card/CardHeaderBackground.vue'
import CardHeaderContent from '@/components/card/CardHeaderContent.vue'
import CardBodySummary from '@/components/card/CardBodySummary.vue'

const openWeatherData = ref()
// const myCityData = ref()
const myWeatherData = ref()
// const error = ref()

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
      console.log('events:', response.data)
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

  // await ApiService.getDestinationId('001')
  //   .then(response => {
  //     console.log('cities:', response.data)
  //     myCityData.value = response.data
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
})

// onErrorCaptured((e) => {
//   error.value = e
//   return true
// })
</script>
