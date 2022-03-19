/* eslint-disable vue/attribute-hyphenation */
<template>
  <Transition name="slide-fade">
    <div
      v-if="show"
      id="sidebar"
      class="wrapper flex flex-col placeholder:group relative text-align-left gap-2 p-8 w-full overflow-y-scroll rounded-lg"
    >
      <form
        class="flex flex-col md:pb-16 bg-white md:shadow-xl rounded-lg"
        @submit.stop.prevent="submit"
        @reset="onReset"
      >
        <div class="px-4 sm:px-6">
          <div class="flex items-start justify-between mb-4">
            <h2 id="slide-over-title" class="text-lg font-medium text-gray-900">
              <span class="text-blue-500 font-bold">Add Vacation</span>
            </h2>
            <div class="ml-3 h-7 flex items-center">
              <button
                id="closeSidebar"
                type="button"
                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click="pushToHome"
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
        <div class="relative flex-1 px-4 sm:px-6 w-full">
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
                      v-model="inputCity"
                      type="text"
                      class="form-control mt-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Which city did you travel to? [City name is enough]"
                      required
                    />
                  </label>
                </div>

                <div class="flex gap-2 my-6">
                  <div class="form-floating w-full">
                    <label for="inputDateStart" class="text-gray-700 mb-2"
                      >From
                      <input
                        id="inputDateStart"
                        v-model="inputDateStart"
                        type="date"
                        placeholder="MM/DD/YYYY"
                        class="form-control mt-2 bblock w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        required
                      />
                    </label>
                  </div>

                  <div class="form-floating w-full">
                    <label for="inputDateEnd" class="text-gray-700 mb-2"
                      >To
                      <input
                        id="inputDateEnd"
                        v-model="inputDateEnd"
                        type="date"
                        placeholder="MM/DD/YYYY"
                        class="form-control mt-2 bblock w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        required
                      />
                    </label>
                  </div>
                </div>

                <div class="form-floating my-6">
                  <label for="inputSummary" class="text-gray-700 mb-2"
                    >Summary
                    <textarea
                      id="inputSummary"
                      v-model="inputSummary"
                      class="form-control mt-2 block h-36 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="summary"
                      rows="3"
                      placeholder="Write a short description about the trip. [Plain and simple text]"
                      required
                    ></textarea>
                  </label>
                </div>

                <div class="form-floating my-6">
                  <label for="inputRecommends" class="text-gray-700"
                    >Sightseeing Top Picks
                    <textarea
                      id="inputRecommends"
                      v-model="inputRecommends"
                      class="form-control mt-2 bblock w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      name="recommends"
                      rows="3"
                      placeholder="Places to visit or things to eat? [Seperate with comma: entry #1, entry #2, ...]"
                      required
                    ></textarea>
                  </label>
                </div>

                <div class="flex flex-row gap-2">
                  <button
                    id="resetButton"
                    type="reset"
                    :disabled="!isAnythingPresent"
                    :class="{
                      'bg-red-500': isAnythingPresent,
                      'border-red-200': isAnythingPresent,
                      'hover:bg-red-700': isAnythingPresent,
                      'hover:border-red-400': isAnythingPresent,
                      'bg-gray-300': !isAnythingPresent,
                      'border-gray-200': !isAnythingPresent,
                      'hover:bg-gray-400': !isAnythingPresent,
                      'hover:border-gray-300': !isAnythingPresent,
                    }"
                    class="add p-4 border text-white text-center py-2 px-8 rounded-full max-w-max transition ease"
                  >
                    Reset
                  </button>
                  <button
                    id="addButton"
                    type="submit"
                    :class="{
                      'bg-indigo-500': isEverythingPresent,
                      'border-indigo-300': isEverythingPresent,
                      'hover:bg-indigo-700': isEverythingPresent,
                      'hover:border-indigo-500': isEverythingPresent,
                      'bg-gray-300': !isEverythingPresent,
                      'border-gray-200': !isEverythingPresent,
                      'hover:bg-gray-400': !isEverythingPresent,
                      'hover:border-gray-300': !isEverythingPresent,
                    }"
                    class="add p-4 border text-white text-center py-2 px-8 rounded-full max-w-max transition ease"
                  >
                    Add
                  </button>
                </div>

                <p v-if="isSubmitted" id="stateInfo" class="text-green-700 my-4">SUCCESS</p>
              </div>
            </div>
          </div>
          <div id="detailList" class="hidden"></div>
          <!-- /End replace -->
        </div>
      </form>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onErrorCaptured, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ApiService from '@/services/ApiService'

const router = useRouter()

const myCityData = ref()
const myCityDetails = ref()
const error = ref()
const daysTotal = ref()
const cityToAdd = ref()
const getPos = ref()
const maxId = ref()

const isSubmitted = ref(false)
const isValid = ref(false)

const inputCity = ref('')
const inputDateStart = ref('')
const inputDateEnd = ref('')
const inputSummary = ref('')
const inputRecommends = ref('')

const show = ref(false)

const onReset = () => {
  console.log('Reset called')

  inputCity.value = ''
  inputDateStart.value = ''
  inputDateEnd.value = ''
  inputSummary.value = ''
  inputRecommends.value = ''
}

const submit = () => {
  console.log('Submit called')
  if (isValid.value) {
    cityToAdd.value = {
      id: parseInt(maxId.value) + 1,
      cityName: inputCity.value,
      dateStart: inputDateStart.value,
      dateEnd: inputDateEnd.value,
      summary: inputSummary.value,
      recommends: inputRecommends.value,
    }

    // console.log(cityToAdd)
    // console.log(typeof cityToAdd.value)

    ApiService.addCity(cityToAdd.value)
      .then((response) => {
        console.log(response.data)
        myCityData.value = response.data
        isSubmitted.value = true
        onReset()
        router.push({
          path: '/',
          params: { myCityData: myCityData.value },
          query: { submitted: null },
        })
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    alert('Please fill out all the required fields')
  }
}

const isCityPresent = computed(() => inputCity.value.length > 0)
const isDateStartPresent = computed(() => inputDateStart.value !== '')
const isDateEndPresent = computed(() => inputDateEnd.value !== '')
const isSummaryPresent = computed(() => inputSummary.value.length > 0)
const isRecommendsPresent = computed(() => inputRecommends.value.length > 0)

const isAnythingPresent = computed(
  () =>
    isCityPresent.value ||
    isDateStartPresent.value ||
    isDateEndPresent.value ||
    isSummaryPresent.value ||
    isRecommendsPresent.value
)

const isEverythingPresent = computed(
  () =>
    isCityPresent.value &&
    isDateStartPresent.value &&
    isDateEndPresent.value &&
    isSummaryPresent.value &&
    isRecommendsPresent.value
)

isValid.value = computed(() => isAnythingPresent)

const pushToHome = () => {
  router.replace({
    path: '/',
  })
}

const getMaxId = (data) => {
  console.log(data.length)
  getPos.value = data.length - 1
  return data[getPos.value].id
}

onMounted(async () => {
  console.log('Hi, This is FormAdd.vue')

  await ApiService.getAllApis(`http://localhost:3333/destinations`)
    .then((response) => {
      myCityData.value = response.data
      show.value = true
      maxId.value = getMaxId(myCityData.value)
      console.log(maxId.value)
    })
    .catch((error) => {
      console.log(error)
    })
  daysTotal.value =
    (new Date(myCityDetails.value?.dateEnd) - new Date(myCityDetails.value?.dateStart)) /
    (1000 * 60 * 60 * 24)
})

onErrorCaptured((e) => {
  error.value = e
  return true
})
</script>

<style scoped>
.wrapper {
  padding: 0 1rem;
  padding-top: 2rem !important;
  padding-bottom: 4rem !important;
}
@media only screen and (min-width: 768px) {
  .wrapper {
    padding: 0 2rem;
    padding-top: 2rem !important;
    padding-bottom: 0 !important;
  }
}

@media only screen and (min-width: 1024px) {
  .wrapper {
    padding: 0 15rem;
  }
}

@media only screen and (min-width: 1280px) {
  .wrapper {
    padding: 0 20rem;
  }
}

@media only screen and (min-width: 1440px) {
  .wrapper {
    padding: 0 25rem;
  }
}

@media only screen and (min-width: 1920px) {
  .wrapper {
    padding: 0 35rem;
  }
}
</style>
