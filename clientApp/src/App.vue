<script setup>
import { onErrorCaptured, ref } from 'vue'

import TheHeader from '@/components/TheHeader.vue'
const error = ref(null)
onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>

<template>
  <div v-if="error" class="flex flex-row gap-4 p-8">
    {{ error }}
  </div>
  <div v-else class="h-full">
    <TheHeader />
    <div class="grid grid-cols-1 grid-rows-1 h-full items-stretch pt-16">
      <RouterView></RouterView>
      <RouterView name="RightSidebar"></RouterView>
    </div>
  </div>
</template>

<style>
@import '@/assets/base.css';

html,
body {
  margin: 0;
  height: 100%;
}
#app {
  margin: 0 auto;
  padding: 0;
  height: 100vh;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
} */

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  background-color: hsla(217, 91%, 60%, 0.05);
  color: hsla(215, 91%, 60%, 1);
}

nav #logo a.router-link-exact-active {
  background-color: white !important;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: rgb(120, 120, 120); /* bg-blue-500 */
}

nav a.router-link-exact-active:hover {
  background-color: hsla(215, 91%, 60%, 1);
  color: white;
}

nav #logo a.router-link-exact-active:hover {
  background-color: white !important;
}

nav #logo a:hover {
  background-color: white !important;
}

nav #nav--profile a:hover {
  background-color: transparent !important;
  color: white;
}

nav a:hover {
  background-color: hsla(217, 91%, 60%, 1);
  color: white;
}

nav a:first-of-type {
  border: 0;
}

.vue-map {
  min-height: 50vh;
  height: 100%;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(20px);
  opacity: 0;
}
</style>
