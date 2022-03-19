<template>
  <div id="logo">
    <RouterLink
      to="/"
      class="flex flex-nowrap my-4 flex-1 text-gray-300 hover:text-gray-500 pointer-events-auto place-items-center transition ease-out"
    >
      <img
        class="lg:block h-8 w-auto mr-2 hover:scale-105 transition"
        src="@/assets/img/emoji-globe-apple.png"
        alt="Workflow"
      />
      <h1 class="hidden lg:block text-lg w-auto text-gray-500 font-bold">
        {{ props.title }}
      </h1>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    default: 'MyTravelBlog',
    required: true,
  },
})
</script>
