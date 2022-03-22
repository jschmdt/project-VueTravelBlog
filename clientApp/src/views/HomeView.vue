<template>
  <div v-if="error" class="flex flex-row gap-4 p-8">
    {{ error }}
  </div>
  <div>
    <div class="flex flex-col h-full items-stretch sm:flex-col md:flex-row gap-4 p-8">
      <TravelList v-if="myCityData" :cities="myCityData" @selected="clickedCard" />
      <GoogleMapAll
        v-if="myCityData"
        :cities="myCityData"
        class="w-full md:w-7/12 order-1 md:order-2"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onErrorCaptured, ref } from 'vue'

import TravelList from '@/components/TravelList.vue'
import ApiService from '@/services/ApiService'
import GoogleMapAll from '../components/GoogleMapAll.vue'
// import useDestinations from '@/modules/destinations'
// import { myCityData, error, load } from '@/modules/destinations'

const error = ref()
const myCityData = ref()
const selectedCard = ref()

const clickedCard = (city) => {
  // console.log(city)
  selectedCard.value = city
}

onMounted(async () => {
  console.log('Hi, This is HomeView.vue')

  // const { myCityData, error, load } = useDestinations()
  // await load()

  await ApiService.getDestinations()
    .then((response) => {
      console.log(response.data)
      myCityData.value = response.data
      myCityData.value.reverse()

      Object.entries(myCityData?.value).forEach(([key, value]) => {
        console.log(key + ' - ' + value.cityName + ' / Id: ' + value.id)
      })
      // selectedCard.value = myCityData.value[0]
      // selectedWeather.value = myWeatherData
    })
    .catch((e) => {
      console.log(e)
      error.value = e
    })
})

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
