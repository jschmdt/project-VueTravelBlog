<template>
  <div v-if="error" class="flex flex-row gap-4 p-8">
    {{ error }}
  </div>
  <div v-else class="flex flex-col md:flex-row gap-4">
    <TheContact />
  </div>
</template>

<script setup>
import { onErrorCaptured, ref } from 'vue'
import TheContact from '@/components/TheContact.vue'

const error = ref(null)

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
