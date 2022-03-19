/* eslint-disable vue/attribute-hyphenation */
<template>
  <Suspense>
    <template #default>
      <div
        v-if="myCityDetails"
        class="wrapper flex flex-col min-h-max placeholder:group relative overflow-hidden text-align-left gap-2 p-8 w-full overflow-y-scroll"
      >
        <RouterLink
          to="/"
          class="flex flex-nowrap mb-4 text-gray-500 hover:text-gray-500 pointer-events-auto place-items-center transition ease-out"
        >
          <ChevronLeftIcon class="h-5 w-5 pr-1" /><span>Overview</span>
        </RouterLink>

        <div v-if="openWeatherData" class="flex justify-between gap-2 mb-4">
          <h2 class="cityName color text-4xl font-bold">
            {{ Helpers.FirstWordBeforeComma(myCityDetails?.cityName) }}
            {{ Helpers.GetFlagEmoji(openWeatherData?.sys.country) }}

            <!-- {{ Helpers.GetFlagEmoji(props.weather.country) }} -->
          </h2>
          <span class="flex text-gray-500 text-2xl self-end">{{
            Helpers.GetFullYear(myCityDetails?.dateStart)
          }}</span>
        </div>
        <!-- <hr class="mb-6" /> -->

        <div class="grid gap-4">
          <div class="flex flex-col sm:flex-row flex-nowrap justify-between gap-4 mb-2 text-sm">
            <div class="flex flex-wrap gap-1">
              <div class="flex flex-nowrap gap-1">
                <CalendarIcon class="h-5 w-5 text-blue-500" />
                <LocaleDate
                  :date="myCityDetails?.dateStart"
                  datestyle="medium"
                  :userlocale="myUserLocale"
                />
              </div>

              <div class="flex flex-nowrap gap-1">
                <span class="text-gray-500">»</span>
                <LocaleDate
                  :date="myCityDetails?.dateEnd"
                  datestyle="medium"
                  :userlocale="myUserLocale"
                />
              </div>

              <div class="flex flex-nowrap gap-1 text-gray-500">({{ myDaysTotal }} days)</div>
            </div>

            <div class="flex flex-wrap gap-1">
              <div class="flex flex-nowrap gap-1">
                <LocationMarkerIcon class="h-5 w-5 text-blue-500" />
                <span class="font-bold">Lon</span>
                {{ myPosition?.position.lat }}
              </div>
              <span class="text-gray-500">/</span>
              <div>
                <span class="font-bold">Lat</span>
                {{ myPosition?.position.lng }}
              </div>
            </div>
          </div>
          <div class="group rounded-lg overflow-hidden mb-4">
            <img
              :src="`https://source.unsplash.com/1600x900/?` + myCityDetails.cityName"
              class="h-96 w-full object-cover object-center grayscale-90 group-hover:grayscale-0 brightness-100 group-hover:brightness-95 group-hover:scale-105 transition-all duration-500 ease-in-out transform"
            />
          </div>
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
            <p class="text-sm">{{ myCityDetails?.summary }}</p>
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
                class="flex px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 rounded-xl transition duration-150 ease-out hover:ease-in cursor-default"
              >
                {{ recommends }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-4">
            <h2 class="cityName color text-2xl font-bold">About the city</h2>
            <GMapMap
              v-if="myPosition"
              class="flex items-center justify-centermd:h-96 placeholder:w-full mb-4 rounded-lg overflow-hidden"
              :center="myPosition?.position"
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
              style="height: 250px"
            >
              <GMapCluster>
                <GMapMarker
                  :key="myCityDetails?.cityName"
                  :position="myPosition?.position"
                  :clickable="true"
                  :draggable="false"
                >
                  <GMapInfoWindow :opened="false">
                    <div class="p-2">{{ myCityDetails?.cityName }}</div>
                  </GMapInfoWindow>
                </GMapMarker>
              </GMapCluster>
            </GMapMap>

            <div>
              <div class="flex justify-between mb-4">
                <div class="flex flex-row flex-nowrap gap-1">
                  <BookOpenIcon class="h-5 w-5 text-blue-500" />
                  <h3 class="font-bold">From Wikipedia</h3>
                </div>
              </div>
              <p class="p-0 m-0 mb-4 text-sm" :class="{ 'line-clamp-3': isClamped }">
                {{ wikiExtract }}
              </p>
              <button
                class="readMore text-blue-500 hover:text-blue-700 text-sm"
                @click="isClamped = !isClamped"
              >
                <span v-if="isClamped">Show more</span>
                <span v-else>Show less</span>
              </button>
            </div>
          </div>

          <div class="flex gap-2">
            <button
              class="del border border-grey-500 bg-transparent hover:bg-red-500 text-red-500 hover:text-white text-center py-2 px-4 rounded-full max-w-max transition"
              @click="deleteCityById"
            >
              Remove
            </button>

            <RouterLink
              :to="{
                name: 'FormEdit',
                params: { city: myCityDetails, id: props.id, position: myCityPos },
              }"
            >
              <button
                class="edit border border-orange-500 bg-orange-500 hover:bg-orange-400 text-white text-center py-2 px-8 rounded-full max-w-max transition"
              >
                Edit
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </template>
    <template #fallback> Details are loading... </template>
  </Suspense>
</template>

<script setup>
import { onMounted, onErrorCaptured, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import ApiService from '@/services/ApiService'
import Helpers from '@/services/Helpers'
import LocaleDate from '@/components/LocaleDate.vue'

import { CalendarIcon } from '@heroicons/vue/outline'
import { LocationMarkerIcon } from '@heroicons/vue/outline'
import { DocumentTextIcon } from '@heroicons/vue/outline'
import { StarIcon } from '@heroicons/vue/outline'
import { BookOpenIcon } from '@heroicons/vue/outline'
import { ChevronLeftIcon } from '@heroicons/vue/outline'

const router = useRouter()
const error = ref()

const wikiData = ref()
const wikiExtract = ref()
const openWeatherData = ref()
const myCityDetails = ref()
const myCityPos = ref()
const myPosition = ref()
// const center = ref(null)
const myRecommends = ref()
const myUserLocale = ref()
const myDaysTotal = ref()

const isDeleted = ref(false)
const isClamped = ref(true)

const props = defineProps({
  id: {
    type: String,
    default: '001',
    required: true,
  },
})

const recommendTransform = () => {
  console.log('05 recommends Transform')
  myRecommends.value = Helpers.GetStringArray(myCityDetails.value?.recommends)
}

const GetUserLocale = () => {
  console.log('04 GetUser Locale')
  myUserLocale.value = Helpers.GetLang()
}

const getCityById = async () => {
  await ApiService.getDestinationId(props.id)
    .then((response) => {
      console.log('events:', response.data)
      myCityDetails.value = response.data.city
      myCityPos.value = response.data.position

      console.log(`Pos: ${myCityPos.value}`)
      console.log(`Id: ${myCityDetails.value.id}`)
    })
    .catch((error) => {
      console.log(error)
    })
}

const deleteCityById = async () => {
  await ApiService.deleteDestinationId(myCityPos.value)
    .then((response) => {
      console.log('events:', response.data)
      myCityDetails.value = response.data
      router.push({
        path: '/',
        query: { deleted: null },
      })
      isDeleted.value = true
    })
    .catch((error) => {
      console.log(error)
    })
}

const wikiFetch = () => {
  console.log('03 WikiFetch')
  const wikiString = myCityDetails.value.cityName.replace(/,[^,]+$/, '')
  ApiService.getAllApis(
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

const weatherFetch = () => {
  console.log('02 WeatherFetch')
  ApiService.getWeather(myCityDetails.value.cityName)
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

onMounted(async () => {
  console.log('Hi, This is CityDetail.vue')
  await getCityById()
  await weatherFetch()
  await wikiFetch()
  GetUserLocale()
  recommendTransform()
  myDaysTotal.value =
    (new Date(myCityDetails.value?.dateEnd) - new Date(myCityDetails.value?.dateStart)) /
    (1000 * 60 * 60 * 24)
})

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>

<style scoped>
.wrapper {
  padding: 0 1rem;
  padding-top: 2rem !important;
  padding-bottom: 4rem !important;
}
@media only screen and (min-width: 768px) {
  .wrapper {
    padding: 0 2rem;
    padding-top: 2rem !important;
    padding-bottom: 4rem !important;
  }
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    padding: 0 15rem;
  }
}

@media only screen and (min-width: 1280px) {
  .wrapper {
    padding: 0 20rem;
  }
}

@media only screen and (min-width: 1440px) {
  .wrapper {
    padding: 0 25rem;
  }
}

@media only screen and (min-width: 1920px) {
  .wrapper {
    padding: 0 35rem;
  }
}
</style>
