<template>
  <Transition name="slide-fade">
    <div class="w-full md:w-5/12 order-2 md:order-1 md:overflow-y-scroll md:px-4 pt-2 pb-2 md:pt-0">
      <ul
        v-if="show"
        class="place-content-start grid grid-cols-1 xl:grid-cols-2 gap-4 pb-6 list-none max-h-min"
      >
        <Suspense>
          <template #default>
            <AsyncCardItem
              v-for="city in props.cities"
              :key="city.cityName"
              :city="city"
              class="grid-item bg-white rounded-lg hover:drop-shadow-xl hover:z-40 transition duration-500 ease-out"
          /></template>
          <template #fallback>
            <li>Loading Cities ...</li>
          </template>
        </Suspense>
      </ul>
    </div>
  </Transition>
</template>

<!-- @click="clickedCard(city)" -->

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'
import LoadingComponent from '@/components/LoadingComp.vue'
import ErrorComponent from '@/components/ErrorComp.vue'

// import CardItem from '@/components/card/CardItem.vue'

const show = ref(false)
// const selectedWeather = ref(null)

// const AsyncCardItem = defineAsyncComponent(() => import('@/components/card/CardItem.vue'))

const AsyncCardItem = defineAsyncComponent({
  loader: () => import('@/components/card/CardItem.vue'),
  loadingComponent: LoadingComponent,
  error: ErrorComponent,
  delay: 200,
  suspensible: false,
})

const props = defineProps({
  cities: {
    type: Object,
    required: true,
  },
})

onMounted(() => {
  show.value = true
})
// const emit = defineEmits({
//   selected: () => true
// })

// const clickedCard = city => {
//   emit('selected', city)
//   // alert(`clicked ${city.cityName}`)
// }

// const clickedLi = myWeatherData => {
//   selectedWeather.value = myWeatherData
//   // alert(
//   //   `clicked ${selectedWeather.value.position.lat} ${selectedWeather.value.position.lng}`
//   // )
</script>

<style scoped>
.grid {
  /* direction: rtl; */
  grid-auto-flow: dense !important;
}
</style>
