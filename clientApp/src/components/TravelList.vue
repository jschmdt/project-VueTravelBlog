<template>
  <Transition name="slide-fade">
    <ul
      v-if="show"
      class="place-content-start grid grid-cols-1 xl:grid-cols-2 gap-4 pb-6 list-none max-h-min"
    >
      <CardItem
        v-for="city in props.cities"
        :key="city.cityName"
        :city="city"
        class="grid-item bg-white rounded-lg hover:drop-shadow-xl hover:z-40 transition duration-500 ease-out"
      />
    </ul>
  </Transition>
</template>

<!-- @click="clickedCard(city)" -->

<script setup>
import { onErrorCaptured, ref, onMounted } from 'vue'
import CardItem from '@/components/card/CardItem.vue'
const error = ref(null)
const show = ref(false)
// const selectedWeather = ref(null)

const props = defineProps({
  cities: {
    type: Object,
    required: true,
  },
})

onMounted(() => {
  show.value = true
}),
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
  // }

  onErrorCaptured((e) => {
    error.value = e
    return true
  })
</script>

<style scoped>
.grid {
  /* direction: rtl; */
  grid-auto-flow: dense !important;
}
</style>
