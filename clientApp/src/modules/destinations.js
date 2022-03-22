import { ref } from 'vue'
import ApiService from '@/services/ApiService'

export default function useDestinations() {
  const myCityData = ref(null)
  const error = ref(null)

  const load = async () => {
    await ApiService.getDestinations()
      .then((response) => {
        console.log(response.data)
        myCityData.value = response.data
        myCityData.value.reverse()

        Object.entries(myCityData?.value).forEach(([key, value]) => {
          console.log(key + ' - ' + value.cityName + ' / Id: ' + value.id)
        })
        // selectedCard.value = myCityData.value[0]
        // selectedWeather.value = myWeatherData
      })
      .catch((e) => {
        console.log(e)
        error.value = e
      })
  }
  return { myCityData, error, load }
}
