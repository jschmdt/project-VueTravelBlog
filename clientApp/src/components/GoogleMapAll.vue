/* eslint-disable vue/this-in-template */
<template>
  <Transition name="slide-fade">
    <div v-if="show" class="h-full">
      <div v-if="posArray" class="h-full">
        <GMapMap
          class="h-full mb-4 rounded-lg overflow-hidden"
          :center="center || { lat: 51.093048, lng: 6.84212 }"
          :zoom="4"
          :disableDefaultUI="true"
          :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
          }"
          map-type-id="terrain"
          style="width: 100%; height: 500px"
        >
          <GMapCluster>
            <GMapMarker
              v-for="(m, index) in posArray"
              :key="index"
              :position="m.position"
              :clickable="true"
              :draggable="false"
              :icon="{
                url: 'images/bxs-map.svg',
                scaledSize: { width: 77, height: 77 },
                labelOrigin: { x: 16, y: -10 },
              }"
              @click="
                {
                  ;(center = m.position), openMarker(m.id)
                }
              "
            >
              <GMapInfoWindow
                :closeclick="true"
                :opened="openedMarkerID === m.id"
                @closeclick="openMarker(null)"
              >
                <div class="flex flex-col group">
                  <RouterLink :to="{ name: 'CityDetail', params: { id: m.id } }">
                    <div class="p-4">
                      <div class="pt-1">
                        <h3 class="text-gray-700 text-left text-3xl font-bold mb-2">
                          {{ m.cityName }}
                        </h3>
                      </div>
                      <div>
                        <div class="flex flex-nowrap items-center gap-1 mb-4 rounded-lg">
                          <CalendarIcon
                            class="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition duration-1000 ease-out"
                          />
                          <LocaleDate
                            :date="m.dateStart"
                            :userlocale="myUserLocale"
                            datestyle="medium"
                            class="text-gray-500 group-hover:text-black transition duration-1000 ease-out text-left"
                          />
                          <span
                            class="text-gray-500 group-hover:text-black transition duration-1000 ease-out text-left"
                            >»</span
                          >
                          <LocaleDate
                            :date="m.dateEnd"
                            :userlocale="myUserLocale"
                            datestyle="medium"
                            class="text-gray-500 group-hover:text-black transition duration-1000 ease-out text-left"
                          />
                        </div>
                        <div
                          class="flex items-center justify-center w-64 h-full rounded-lg overflow-hidden mb-4"
                        >
                          <img
                            :src="`https://source.unsplash.com/1600x900/?` + m.cityName"
                            class="transition-all w-full h-auto grayscale-90 group-hover:grayscale-0 brightness-75 group-hover:brightness-95 group-hover:scale-105 duration-1000 ease-in-out transform"
                          />
                        </div>
                        <div
                          class="text-gray-500 group-hover:text-blue-500 font-bold mb-2 transition duration-1000 ease-out text-left"
                        >
                          Click for more info
                        </div>
                      </div>
                    </div>
                  </RouterLink>
                </div>
              </GMapInfoWindow>
            </GMapMarker>
          </GMapCluster>
        </GMapMap>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onErrorCaptured, ref } from 'vue'
import { CalendarIcon } from '@heroicons/vue/outline'

import ApiService from '@/services/ApiService'
import Helpers from '@/services/Helpers'

import LocaleDate from '@/components/LocaleDate.vue'

const openWeatherData = ref()
const posArray = ref([])
const myPosition = ref()
// const myCityDetails = ref()
const center = ref()
const show = ref(false)
const error = ref()

const openedMarkerID = ref()
const myUserLocale = ref()

const GetUserLocale = () => {
  myUserLocale.value = Helpers.GetLang()
}

const props = defineProps({
  cities: {
    type: Object,
    required: true,
  },
})

const openMarker = (id) => {
  openedMarkerID.value = id
}

onMounted(() => {
  console.log('Hi, This is GoogleMapsAll.vue')
  show.value = true
  center.value = { lat: 51.093048, lng: 6.84212 }
  GetUserLocale()
  props?.cities?.forEach(async (element) => {
    console.log(element.cityName)
    await ApiService.getWeather(element.cityName)
      .then((response) => {
        openWeatherData.value = response.data
        myPosition.value = {
          id: element.id,
          cityName: element.cityName,
          summary: element.summary,
          dateStart: element.dateStart,
          dateEnd: element.dateEnd,
          position: {
            lat: parseFloat(openWeatherData.value.coord.lat),
            lng: parseFloat(openWeatherData.value.coord.lon),
          },
        }
        posArray.value.push(myPosition.value)
        console.log(posArray.value)
      })
      .catch((error) => {
        console.log(error)
      })
  })
})

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>

<style>
/* 'Infinite Ocean' background when there are no tiles */
.vue-map:first-child > div {
  background-color: #aadaff !important;
}
/* Changes styling of the number which appears inside a cluster of Google Map Markers */
.cluster span {
  color: white !important;
  font-weight: bold !important;
}

.gm-style .gm-style-iw-c {
  padding: 0 !important;
}
</style>
