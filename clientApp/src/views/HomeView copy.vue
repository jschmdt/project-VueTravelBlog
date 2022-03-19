<template>
  <Suspense
    ><div v-if="error" class="flex flex-row gap-4 p-8">
      {{ error }}
    </div>
    <div v-else class="flex flex-col items-stretch md:flex-row gap-4 p-8">
      Hallo
      <TravelList
        v-if="myCityData"
        :cities="myCityData"
        class="w-full md:w-5/12 order-2 md:order-1 md:overflow-y-scroll md:px-4 pt-2 pb-2 md:pt-0"
        @selected="clickedCard"
      />
      <GoogleMapAll
        v-if="myCityData"
        :cities="myCityData"
        class="w-full md:w-7/12 order-1 md:order-2"
      /></div
  ></Suspense>
</template>

<script setup>
import { onMounted, onErrorCaptured, ref } from 'vue'

import TravelList from '@/components/TravelList.vue'
import ApiService from '@/services/ApiService'
import GoogleMapAll from '../components/GoogleMapAll.vue'

// const eventInfo = ref(null)
// const cityIndex = ref(0)
const myCityData = ref()
const selectedCard = ref()
// const selectedWeather = ref(null)

// const cityArray = ref(null)
const error = ref()

const clickedCard = (city) => {
  // console.log(city)
  selectedCard.value = city
}

onMounted(async () => {
  console.log('Hi, This is HomeView.vue')
  await ApiService.getAllApis(`http://localhost:3333/destinations`)
    .then((response) => {
      console.log(response.data)
      myCityData.value = response.data
      myCityData.value.reverse()

      // selectedCard.value = myCityData.value[0]
      // selectedWeather.value = myWeatherData
    })
    .catch((error) => {
      console.log(error)
    })

  Object.entries(myCityData.value).forEach(([key, value]) => {
    console.log(key + ' - ' + value.cityName + ' / Id: ' + value.id)
  })
})

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
