<template>
  <div
    id="sidebar"
    class="fixed md:relative h-full w-full lg:w-4/5 xl:w-1/2 z-40 pb-16 hidden place-self-stretch"
  >
    <div class="h-full flex flex-col py-6 pt-9 pb-36 md:pb-16 bg-white shadow-xl overflow-y-scroll">
      <div class="px-4 sm:px-6">
        <div class="flex items-start justify-between">
          <h2 id="slide-over-title" class="text-lg font-medium text-gray-900">
            Travel / <span class="text-indigo-600">Add City</span>
          </h2>
          <div class="ml-3 h-7 flex items-center">
            <button
              id="closeSidebar"
              type="button"
              class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">Close panel</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
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
        </div>
      </div>
      <div class="mt-6 relative flex-1 px-4 sm:px-6 w-full">
        <!-- Replace with your content -->

        <div id="addForm">
          <hr class="mb-8" />
          <div class="flex">
            <div class="w-full">
              <div class="form-floating mb-6">
                <label for="inputCity" class="text-gray-700 mb-2"
                  >Travel Destination
                  <input
                    id="inputName"
                    type="text"
                    class="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Which city did you travel to?"
                  />
                </label>
              </div>

              <div class="flex gap-2 my-6">
                <div class="form-floating w-full">
                  <label for="inputDateStart" class="text-gray-700 mb-2"
                    >From
                    <input
                      id="inputDateStart"
                      type="date"
                      placeholder="MM/DD/YYYY"
                      class="form-control mt-2 bblock w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </label>
                </div>

                <div class="form-floating w-full">
                  <label for="inputDateEnd" class="text-gray-700 mb-2"
                    >To
                    <input
                      id="inputDateEnd"
                      type="date"
                      placeholder="MM/DD/YYYY"
                      class="form-control mt-2 bblock w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    />
                  </label>
                </div>
              </div>

              <div class="form-floating my-6">
                <label for="inputSummary" class="text-gray-700 mb-2"
                  >Summary
                  <textarea
                    id="inputSummary"
                    class="form-control mt-2 block h-36 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="summary"
                    rows="3"
                    placeholder="Short description about the trip"
                  ></textarea>
                </label>
              </div>

              <div class="form-floating my-6">
                <label for="inputRecommends" class="text-gray-700"
                  >Sightseeing Top Picks
                  <textarea
                    id="inputRecommends"
                    class="form-control mt-2 bblock w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="recommends"
                    rows="3"
                    placeholder="Places to visit or things to eat?"
                  ></textarea>
                </label>
              </div>
              <p id="stateInfo" class="text-green-700 my-4"></p>
              <button
                id="buttonSave"
                class="add p-4 border border-indigo-500 bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-8 rounded-full max-w-max transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
        <div id="detailList" class="hidden"></div>
        <!-- /End replace -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onErrorCaptured, ref } from 'vue'

const error = ref(null)
onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>
