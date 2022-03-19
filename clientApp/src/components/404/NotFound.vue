<template>
  <div class="flex justify-center items-center relative sm:overflow-hidden">
    <div class="absolute inset-0">
      <img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1545132147-d037e6c54cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
        alt="404 Not"
      />
      <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
    </div>

    <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
      <p class="mt-6 max-w-lg mx-auto text-center text text-indigo-200 sm:max-w-3xl">404 Error</p>
      <h1 class="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl text-center">
        Uh oh! I think you’re lost.
      </h1>

      <p class="mt-6 max-w-lg mx-auto text-center text text-indigo-200 sm:max-w-3xl">
        It looks like the page you’re looking for doesn't exist.
      </p>
      <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
        <RouterLink
          to="/"
          class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
        >
          Fly back home
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
