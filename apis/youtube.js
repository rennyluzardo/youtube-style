import axios from 'axios'

export const KEY = 'AIzaSyBO5ew3Dvb63aInBpVswuxkYsFuEDG4GGw'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})
