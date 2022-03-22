import axios from 'axios'

// const MOCK_URL = 'https://my-json-server.typicode.com/jschmdt/json-test-data'
// const SERVER_URL = import.meta.env.BASE_URL + import.meta.env.VITE_DB_PORT
// console.log(import.meta.env.BASE_URL)
// console.log(import.meta.env.VITE_DB_PORT)

const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'

const getBaseUrl = () => window.location.host.split(':')[0]
const baseURL = getBaseUrl()
console.log(`The BaseURL is ${baseURL}`)

const apiClient = axios.create({
  baseURL: `http://${baseURL}:${import.meta.env.VITE_DB_PORT}`,
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
    return apiClient.get('/destinations/')
  },
  getDestinationId(id) {
    return apiClient.get('/destinations/' + id)
  },
  updateDestinationId(updatedcity, pos) {
    return apiClient.post('/update/' + pos, updatedcity)
  },
  // deleteDestinationId(id) {
  //   return apiClient.get('/delete/' + id)
  // },
  deleteDestinationId(pos) {
    return apiClient.get('/delete/' + pos)
  },
  getWeather(travelName) {
    return apiClient.get(
      WEATHER_API_URL + `?q=${travelName}&units=metric&appid=` + import.meta.env.VITE_WEATHER_API
    )
  },
  addCity(newcity) {
    return apiClient.post('/addcity', newcity)
  },
}
