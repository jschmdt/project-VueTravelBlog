<template>
  <div v-if="error" class="flex flex-row gap-4 p-8">
    {{ error }}
  </div>
  <div v-else>
    <TravelList v-if="myCityData" :cities="myCityData" class="w-7/12" @selected="clickedCard" />
    <TravelDetail v-if="myCityData" :selected="selectedCard" class="w-5/12" />
  </div>
</template>

<script setup>
import { onMounted, onErrorCaptured, ref } from 'vue'

import TravelList from '@/components/TravelList.vue'
import TravelDetail from '@/components/TravelDetail.vue'
import ApiService from '@/services/ApiService'

// const eventInfo = ref(null)
// const cityIndex = ref(0)
const myCityData = ref(null)
const selectedCard = ref(null)
// const selectedWeather = ref(null)

// const cityArray = ref(null)
const error = ref(null)

onMounted(async () => {
  console.log('Hi, This is TravelList.vue')
  await ApiService.getAllApis(
    `${import.meta.env.BASE_URL}:${import.meta.env.VITE_DB_PORT}/destinations`
  )
    .then((response) => {
      console.log(response.data)
      myCityData.value = response.data
      selectedCard.value = myCityData.value[0]
      // selectedWeather.value = myWeatherData
    })
    .catch((error) => {
      console.log(error)
    })

  Object.entries(myCityData.value).forEach(([key, value]) => {
    console.log(key + ' - ' + value.cityName)
  })
})

const clickedCard = (city) => {
  // console.log(city)
  selectedCard.value = city
}

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
