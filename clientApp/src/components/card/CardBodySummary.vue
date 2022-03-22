<template>
  <div v-if="props.city" class="flex flex-col gap-4 overflow-hidden">
    <div class="flex justify-between mb-1">
      <div class="flex flex-nowrap gap-1">
        <LocationMarkerIcon
          class="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition duration-1000 ease-out"
        />
        <span
          class="text-sm text-gray-500 group-hover:text-black transition duration-1000 ease-out"
        >
          {{ Helpers.FirstWordBeforeComma(props.city?.cityName) }}, {{ props.weather?.country }}
        </span>
      </div>

      <div class="flex flex-nowrap gap-1">
        <LocaleDate
          :date="props.city.dateStart"
          :userlocale="myUserLocale"
          datestyle="medium"
          class="text-gray-500 group-hover:text-black transition duration-1000 ease-out text-right"
        />
        <CalendarIcon
          class="h-5 w-5 text-gray-500 group-hover:text-blue-500 transition duration-1000 ease-out"
        />
      </div>
    </div>

    <p
      class="text-gray-500 group-hover:text-black line-clamp-3 mb-2 transition duration-1000 ease-out"
    >
      {{ props.city.summary }}
    </p>
    <hr class="mb-2" />
    <div class="flex justify-between items-center">
      <RouterLink
        :to="{ name: 'CityDetail', params: { id: props.city.id } }"
        class="text-gray-400 font-bold group-hover:text-blue-500 align-self-end transition duration-1000 ease-out"
        >Read More</RouterLink
      >
      <div
        class="flex flex-nowrap items-center opacity-0 group-hover:opacity-100 transition duration-700 ease"
      >
        <span class="text-gray-400 group-hover:text-black text-sm pr-2 text-right">{{
          props?.author
        }}</span>
        <CardAvatar class="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Helpers from '@/services/Helpers'

import LocaleDate from '@/components/LocaleDate.vue'
import CardAvatar from '@/components/card/CardAvatar.vue'

import { LocationMarkerIcon } from '@heroicons/vue/outline'
import { CalendarIcon } from '@heroicons/vue/outline'

const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
  author: {
    type: String,
    default: 'Jonas Schmidt',
    required: false,
  },
  weather: { type: Object, required: true },
})

const myUserLocale = ref()

const GetUserLocale = () => {
  myUserLocale.value = Helpers.GetLang()
}

onMounted(() => {
  console.log('Hi, This is CardBodySummary.vue')
  GetUserLocale()
})
</script>
