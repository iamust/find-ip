import axios from 'axios'

export default axios.create({
  baseURL: 'https://restapi.amap.com/v3',
  params: {
    key: process.env.AMAP_API_KEY
  }
})
