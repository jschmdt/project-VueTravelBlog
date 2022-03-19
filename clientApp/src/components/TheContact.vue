/* eslint-disable vue/attribute-hyphenation */
<template>
  <Transition name="slide-fade">
    <div v-if="show" class="w-full">
      <div class="flex sm:overflow-hidden h-screen sm:h-2/6 items-center">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            src="@/assets/img/contact_jonas.jpg"
            alt="It's me"
          />
          <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
        </div>

        <div
          class="wrapper relative w-full py-16 sm:py-24 lg:py-32 text-center sm:text-left flex flex-col justify-center sm:justify-start"
        >
          <p class="text-indigo-200 mb-4">Full-Stack Web Development</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Ready to take off?
          </h1>
          <h1 class="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            More than ever 🚀
          </h1>

          <div class="mt-10 sm:flex sm:justify-start">
            <a
              href="mailto:mail@jonas-schmidt.net?subject=Hey Dev, I need help!"
              class="px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
            >
              Need a dev?
            </a>
          </div>
        </div>
      </div>

      <div
        class="wrapper flex flex-col min-h-max placeholder:group relative overflow-hidden text-align-left gap-2 w-full"
      >
        <div class="flex flex-col gap-4 mb-4">
          <h2 class="text-2xl font-bold mb-4">About the project</h2>
          <p class="mb-4">
            Moin, I'm Jonas Schmidt – a Creative Director based in Hamburg, Germany. <br />
            This project was created as part of the 6-months "Full-Stack Program – 04/2021" at
            <a
              href="https://hamburgcodingschool.com/fullstackprogram/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              class="font-bold text-blue-500 underline"
              >Hamburg Coding School</a
            >
          </p>
          <h3 class="font-bold text-gray-600 mb-2">Tools used</h3>
          <p>
            Vue 3 <span class="text-gray-400"> / </span> HTML, CSS & JavaScript
            <span class="text-gray-400"> / </span> Node.js
            <span class="text-gray-400"> / </span> Axios
            <span class="text-gray-400"> / </span> Tailwind CSS
          </p>
        </div>

        <hr class="my-4" />
        <h2 class="text-2xl font-bold mb-4">Tasks</h2>
        <div
          class="grid place-items-start place-content-start gap-12 sm:grid-cols-2 sm:grid-rows-1 sm:gap-8 mb-4"
        >
          <div>
            <h3 class="text-lg font-bold mb-4">✅ Done</h3>
            <div class="flex flex-col line-height-4 gap-6">
              <ul>
                <li class="font-bold text-gray-600 mb-2">Project Pages</li>
                <ul class="pl-4 list-disc">
                  <li>Travel List <span class="text-gray-400"> / </span> Overview</li>
                  <li>Detail page</li>
                  <li>Contact pge</li>
                  <li>CRUD input forms (Add & Edit)</li>
                </ul>
              </ul>
              <ul>
                <li class="font-bold text-gray-600 mb-2">APIs</li>
                <ul class="pl-4 list-disc">
                  <li>Google Maps</li>
                  <li>OpenWeatherMaps</li>
                </ul>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">🏆 Bonus</h3>
            <div class="flex flex-col line-height-4 gap-6">
              <ul>
                <li class="font-bold text-gray-600 mb-2">NodeJS RestAPI Backend</li>
                <ul class="pl-4 list-disc">
                  <li>Routes, CORS, Parameters</li>
                  <li>404 Handling</li>
                </ul>
              </ul>
              <ul>
                <li class="font-bold text-gray-600 mb-2">Google Maps</li>
                <ul class="pl-4 list-disc">
                  <li>Clickable Info Boxes</li>
                  <li>Click on Info Box centers viewport</li>
                </ul>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">🤯 Honorable Mentions</h3>

            <div class="flex flex-col line-height-4 gap-6">
              <ul>
                <li class="font-bold text-gray-600 mb-2">Vue 3</li>
                <ul class="pl-4 list-disc">
                  <li>
                    Composition API <span class="text-gray-400"> / </span> Script setup
                    <span class="text-gray-400"> / </span> Router
                  </li>
                  <li>API Fetch with Axios</li>
                  <li>
                    Ref State <span class="text-gray-400"> / </span> Form Input Checks
                    <span class="text-gray-400"> / </span> Transition FX
                  </li>
                </ul>
              </ul>
              <ul>
                <li class="font-bold text-gray-600 mb-2">CSS Framework & Code Setup</li>
                <ul class="pl-4 list-disc">
                  <li>
                    Tailwind CSS 3 <span class="text-gray-400"> / </span> Responsive & Mobile menu
                    (with timeout)
                  </li>
                  <li>
                    Custom Configs for Tailwind CSS <span class="text-gray-400"> / </span> ESLint
                    <span class="text-gray-400"> / </span> Prettier
                  </li>
                </ul>
              </ul>
              <ul>
                <li class="font-bold text-gray-600 mb-2">Other</li>
                <ul class="pl-4 list-disc">
                  <li>Wikipedia: Excerpt Fetcher</li>
                  <li>OpenWeather: Country Code > Emoji Converter</li>
                  <li>LocaleDate is set by browser language</li>
                </ul>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-4">🏎 Roadmap</h3>
            <div class="flex flex-col line-height-4 gap-6">
              <ul>
                <li class="font-bold text-gray-600 mb-2">Database Connection</li>
                <ul class="pl-4 list-disc">
                  <li>MySQL <span class="text-gray-400"> / </span> HeidiSQL</li>
                  <li>MongoDB</li>
                </ul>
              </ul>
              <ul>
                <li class="font-bold text-gray-600 mb-2">Authentication</li>
                <ul class="pl-4 list-disc">
                  <li>Supabase</li>
                  <li>Firebase</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <hr class="my-4" />
        <h2 class="text-2xl font-bold mb-4">About the creator</h2>

        <div class="grid gap-12 sm:grid-cols-2 sm:grid-rows-2 sm:gap-2 grid-flow-row-dense mb-4">
          <div>
            <h3 class="text-lg font-bold mb-2">Address</h3>
            <div class="flex flex-col line-height-4 gap-6">
              <ul>
                <li>Jonas Schmidt</li>
                <li>Albers-Schönberg-Stieg 15</li>
                <li>22307 Hamburg</li>
              </ul>
              <ul>
                <li>
                  <a class="text-blue-500 hover:underline" href="tel:+491754051592"
                    >+49 175 4051592</a
                  >
                </li>
                <li>
                  <a class="text-blue-500 hover:underline" href="mailto:mail@jonas-schmidt.net"
                    >mail@jonas-schmidt.net</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 class="text-lg font-bold mb-2">Connect</h3>
            <ul>
              <li>
                <a
                  class="text-blue-500 hover:underline"
                  href="https://github.com/jschmdt"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  >GitHub</a
                >

                <span class="text-gray-400"> / </span>
                <a
                  class="text-blue-500 hover:underline"
                  href="https://twitter.com/_jschmidt"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  >Twitter</a
                >
                <span class="text-gray-400"> / </span>
                <a
                  class="text-blue-500 hover:underline"
                  href="https://jonas-schmidt.net"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  >Website</a
                >
              </li>
              <li>
                <a
                  class="text-blue-500 hover:underline"
                  href="https://www.linkedin.com/in/jonas-schmidt-22329544/"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  >LinkedIn</a
                >
                <span class="text-gray-400"> / </span>
                <a
                  class="text-blue-500 hover:underline"
                  href="https://www.xing.com/profile/Jonas_Schmidt13/cv"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                  >XING</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  show.value = true
})
</script>

<style scoped>
.wrapper {
  padding: 2rem 1rem;
  /* padding-top: 2rem !important; */
  /* padding-bottom: 4rem !important; */
}
@media only screen and (min-width: 768px) {
  .wrapper {
    padding-left: 2rem;
    padding-right: 2rem;
    /* padding-top: 2rem !important; */
    /* padding-bottom: 4rem !important; */
  }
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    padding-left: 15rem;
    padding-right: 15rem;
  }
}

@media only screen and (min-width: 1280px) {
  .wrapper {
    padding-left: 20rem;
    padding-right: 20rem;
  }
}

@media only screen and (min-width: 1440px) {
  .wrapper {
    padding-left: 25rem;
    padding-right: 25rem;
  }
}

@media only screen and (min-width: 1920px) {
  .wrapper {
    padding-left: 35rem;
    padding-right: 35rem;
  }
}
</style>
