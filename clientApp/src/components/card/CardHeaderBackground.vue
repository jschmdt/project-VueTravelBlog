<template>
  <div v-if="props.city" class="background absolute h-full w-full overflow-hidden rounded-t-lg">
    <div
      class="bgOverlay overflow-hidden absolute z-10 h-full w-full object-cover object-center bg-indigo-900 mix-blend-multiply opacity-80 group-hover:opacity-0 transition-all duration-1000 ease-in-out transform"
    ></div>
    <img
      :src="`https://source.unsplash.com/1600x900/?` + props.city.cityName"
      class="absolute z-0 h-full w-full object-cover object-center grayscale-90 group-hover:grayscale-0 brightness-75 group-hover:brightness-95 group-hover:scale-105 transition-all duration-1000 ease-in-out transform"
    /><br />
  </div>
</template>

<script setup>
console.log('Hi, This is CardBackground.vue')
const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
})
</script>
