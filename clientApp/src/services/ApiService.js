import axios from 'axios'

// const MOCK_URL = 'https://my-json-server.typicode.com/jschmdt/json-test-data'
const SERVER_URL = 'http://localhost:3333'
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
})

export default {
  getAllApis(url) {
    return apiClient.get(url)
  },
  getDestinations() {
    return apiClient.get(SERVER_URL + '/destinations/')
  },
  getDestinationId(id) {
    return apiClient.get(SERVER_URL + '/destinations/' + id)
  },
  updateDestinationId(updatedcity, pos) {
    return apiClient.post(SERVER_URL + '/update/' + pos, updatedcity)
  },
  // deleteDestinationId(id) {
  //   return apiClient.get(SERVER_URL + '/delete/' + id)
  // },
  deleteDestinationId(pos) {
    return apiClient.get(SERVER_URL + '/delete/' + pos)
  },
  getWeather(travelName) {
    return apiClient.get(
      WEATHER_API_URL + `?q=${travelName}&units=metric&appid=` + import.meta.env.VITE_WEATHER_API
    )
  },
  addCity(newcity) {
    return apiClient.post(SERVER_URL + '/addcity', newcity)
  },
}
