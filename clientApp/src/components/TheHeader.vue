import NavBar from '@/components/sections/NavBar.vue'

<template>
  <header class="bg-indigo-600 w-full md:relative z-50" :class="{ 'pb-28': !isHidden }">
    <nav class="bg-white shadow z-50 fixed top-0">
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <button
                type="button"
                class="flex items-center justify-center p-2 border-solid border-2 border-gray-100 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                @click="isHiddenToggle"
              >
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" -->
                <svg
                  :class="{ block: isHidden, hidden: !isHidden }"
                  class="h-6 w-6 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <!-- Icon when menu is open. Heroicon name: outline/x - Menu open: "block", Menu closed: "hidden" -->
                <svg
                  :class="{ block: !isHidden, hidden: isHidden }"
                  class="h-6 w-6 transition"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-shrink-0 flex items-center">
              <TheLogo title="Travel Blog" />
            </div>
            <div class="hidden md:ml-6 md:flex">
              <RouterLink
                to="/"
                class="border-indigo-500 inline-flex items-center px-8 border-b-2 text-sm font-medium noEvents"
                >Travel List</RouterLink
              >
              <RouterLink
                :to="{ name: 'TheContact' }"
                class="border-transparent hover:border-gray-300 inline-flex items-center px-8 border-b-2 text-sm font-medium"
                >Contact</RouterLink
              >
            </div>
          </div>
          <div id="nav--profile" class="flex items-center">
            <div class="flex-shrink-0">
              <RouterLink
                :to="{ name: 'FormAdd' }"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 border-b-2 text-sm font-medium"
              >
                <button
                  id="openSidebar"
                  type="button"
                  class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <!-- Heroicon name: solid/plus-sm -->
                  <svg
                    class="-ml-1 mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>Add Vacation</span>
                </button>
              </RouterLink>
            </div>
            <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    id="user-menu-button"
                    type="button"
                    class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <a href="https://jonas-schmidt.net" target="_blank" class="p-0 m-0" nodefer
                      ><CardAvatar
                    /></a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div id="mobile-menu" :class="{ hidden: isHidden }" class="md:hidden">
        <div class="pt-3 pb-3 space-y-1">
          <RouterLink
            to="/"
            class="border-indigo-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >Travel List</RouterLink
          >
          <RouterLink
            :to="{ name: 'TheContact' }"
            class="border-transparent hover:border-gray-300 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
            >Contact</RouterLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onErrorCaptured, ref } from 'vue'
import { RouterLink } from 'vue-router'

import TheLogo from '@/components/TheLogo.vue'
import CardAvatar from '@/components/card/CardAvatar.vue'

const hiddenSwitch = () => {
  isHidden.value = !isHidden.value
}

const isHiddenToggle = () => {
  hiddenSwitch()
  setTimeout(function () {
    hiddenSwitch()
  }, 4000)
}

const isHidden = ref(true)

const error = ref(null)
onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
