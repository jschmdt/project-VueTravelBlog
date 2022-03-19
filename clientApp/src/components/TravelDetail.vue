/* eslint-disable vue/attribute-hyphenation */
<template>
  <div
    v-if="props.selected"
    class="grid group rounded-lg relative w-full overflow-hidden text-align-left border-2 gap-2 p-8"
  >
    <div class="grid gap-4">
      <div class="flex justify-between gap-2 mb-4">
        <h2 class="cityName color text-4xl font-bold">
          {{ Helpers.GetFlagEmojiString(props.selected?.cityName) }}
          {{ props.selected?.cityName }}
        </h2>
        <span class="flex text-gray-400 text-2xl self-end">{{
          Helpers.GetFullYear(props.selected?.dateStart)
        }}</span>
      </div>
    </div>

    <hr class="mb-6" />

    <div class="grid gap-4">
      <div
        class="dateWrap flex flex-col lg:flex-row flex-nowrap justify-between gap-2 mb-2 text-sm"
      >
        <div class="flex flex-wrap gap-1 flex-1">
          <div class="flex flex-nowrap gap-1">
            <CalendarIcon class="h-5 w-5 text-blue-500" />{{ props.selected?.dateStart }}
          </div>

          <div class="flex flex-nowrap gap-1">
            <span class="font-bold">»</span>
            {{
              new Date(props.selected?.dateEnd).toLocaleString('en-US', {
                dateStyle: 'short',
                timeStyle: 'short',
              })
            }}
          </div>
          <span class="font-bold">=</span>
          <div class="flex flex-nowrap gap-1">{{ daysTotal }} days</div>
        </div>

        <div class="flex flex-wrap gap-1">
          <div class="flex flex-nowrap gap-1">
            <LocationMarkerIcon class="h-5 w-5 text-blue-500" />
            <span class="font-bold">Lon</span>
            {{ myPosition?.position.lat }}
          </div>
          <span class="font-bold">/</span>
          <div>
            <span class="font-bold">Lat</span>
            {{ myPosition?.position.lng }}
          </div>
        </div>
      </div>

      <GMapMap
        v-if="myPosition"
        class="h-64 mb-4 rounded-lg overflow-hidden"
        :center="myPosition.position"
        :zoom="10"
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
        style="width: 500px; height: 300px"
      >
        <GMapCluster>
          <GMapMarker
            :key="props.selected.cityName"
            :position="myPosition.position"
            :clickable="true"
            :draggable="false"
          >
            <GMapInfoWindow :opened="false">
              <div class="p-2">{{ props.selected.cityName }}</div>
            </GMapInfoWindow>
          </GMapMarker>
        </GMapCluster>
      </GMapMap>
    </div>
    <!-- @click="
              ;[openInfoWindow(marker.id), (center = myPosition.position)]
            " -->

    <!-- {{ myPosition?.position }} -->
    <div class="grid gap-8">
      <div class="flex flex-col gap-2">
        <div class="flex flex-row flex-nowrap gap-1 mb-2">
          <DocumentTextIcon class="h-5 w-5 text-blue-500" />
          <h3 class="font-bold">Summary</h3>
        </div>
        <p class="text-sm">{{ props.selected?.summary }}</p>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row flex-nowrap gap-1 mb-2">
          <StarIcon class="h-5 w-5 text-blue-500" />
          <h3 class="font-bold">Travel Tips</h3>
        </div>

        <!-- <p class="mb-8 text-sm">{{ props.selected?.recommends }}</p> -->
        <ul class="flex flex-wrap flex-row gap-2">
          <li
            v-for="(recommends, index) in myRecommends"
            :key="index"
            class="flex px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-800 rounded-xl transition duration-150 ease-out hover:ease-in cursor-default"
          >
            {{ recommends }}
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-4">
        <h2 class="cityName color text-2xl font-bold">About the city</h2>
        <div class="flex justify-between">
          <div class="flex flex-row flex-nowrap gap-1 mb-2">
            <BookOpenIcon class="h-5 w-5 text-blue-500" />
            <h3 class="font-bold">From Wikipedia</h3>
          </div>
          <button
            class="readMore text-indigo-500 hover:text-indigo-700 text-sm"
            @click="isClamped = !isClamped"
          >
            Show more
          </button>
        </div>
        <p class="p-0 m-0 mb-12 text-sm" :class="{ 'line-clamp-3': isClamped }">
          {{ wikiExtract }}
        </p>
      </div>

      <div class="flex gap-2">
        <button
          class="del border border-grey-500 bg-transparent hover:bg-red-500 text-red-500 hover:text-white text-center py-2 px-4 rounded-full max-w-max transition"
          data-index="${i}"
        >
          Remove
        </button>
        <button
          class="edit border border-orange-500 bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-8 rounded-full max-w-max transition"
          data-index="${i}"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, toRefs, watch, onErrorCaptured, ref } from 'vue'
import ApiService from '@/services/ApiService'
import Helpers from '@/services/Helpers'

import { CalendarIcon } from '@heroicons/vue/outline'
import { LocationMarkerIcon } from '@heroicons/vue/outline'
import { DocumentTextIcon } from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/outline'
import { BookOpenIcon } from '@heroicons/vue/outline'

const wikiData = ref(null)
const wikiExtract = ref(null)
const openWeatherData = ref(null)
const myPosition = ref(null)
// const center = ref(null)
const myRecommends = ref(null)
const error = ref(null)
const daysTotal = ref(null)
const isClamped = ref(true)

const props = defineProps({
  selected: {
    type: Object,
    required: true,
  },
})

const { selected } = toRefs(props)

const recommendTransform = () => {
  myRecommends.value = Helpers.GetStringArray(props.selected.recommends)
}

const wikiFetch = async () => {
  const wikiString = props.selected.cityName.replace(/,[^,]+$/, '')
  await ApiService.getAllApis(
    `https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=${wikiString}`
  )
    .then((response) => {
      // console.log('events:', response.data)
      wikiData.value = response.data
      const wikiResponse = wikiData.value.query.pages
      const wikiPageId = Object.keys(wikiResponse)[0]
      wikiExtract.value = wikiResponse[wikiPageId].extract
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

const weatherFetch = async () => {
  await ApiService.getWeather(props.selected.cityName)
    .then((response) => {
      openWeatherData.value = response.data
      myPosition.value = {
        position: {
          lat: parseFloat(openWeatherData.value.coord.lat),
          lng: parseFloat(openWeatherData.value.coord.lon),
        },
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

onMounted(() => {
  console.log('Hi, This is TravelDetail.vue')
  wikiFetch()
  weatherFetch()
  recommendTransform()
  daysTotal.value =
    (new Date(props.selected.dateEnd) - new Date(props.selected.dateStart)) / (1000 * 60 * 60 * 24)
})

watch(selected, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  wikiFetch()
  weatherFetch()
  recommendTransform()
  daysTotal.value =
    (new Date(props.selected.dateEnd) - new Date(props.selected.dateStart)) / (1000 * 60 * 60 * 24)
})

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
