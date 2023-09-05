import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async (request: VercelRequest, response: VercelResponse) => {
  const ip = request.query.ip || request.headers['x-real-ip']
  const key = process.env.AMAP_API_KEY

  try {
    const { data } = await axios.get('https://restapi.amap.com/v3/ip', {
      params: { key, ip }
    })

    if (data.info === 'OK' && typeof data.city === 'string') {
      const { province, city, adcode, rectangle } = data
      const [pointA, pointB] = rectangle?.split(';')
      const longitude = pointA
      const latitude = pointB
      // 116.4951289,23.56898281

      return response.json({
        longitude,
        latitude,
        province,
        adcode,
        city
      })
    }

    return response.json({})
  } catch ({ message }) {
    return response.status(400).json({ message })
  }
}
