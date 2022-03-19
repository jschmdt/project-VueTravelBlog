import NavBar from '@/components/sections/NavBar.vue'

<template>
  <Suspense>
    <template #default>
      <main class="flex flex-row justify-items-stretch w-full h-full mt-40 md:mt-0 p-8 pt-20">
        <RouterView />
      </main>
    </template>
    <template #fallback>
      <span>I'm a loading screen, I'm waiting the view to be ready!</span>
    </template>
  </Suspense>
</template>

<script setup>
import { onErrorCaptured, ref } from 'vue'
import { RouterView } from 'vue-router'

const error = ref(null)
onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
