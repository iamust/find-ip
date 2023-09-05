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
      const [pointA, pointB] = String(rectangle)
        .split(';')
        .map((point) => point.split(',').map(num => Number(num)))

      const longitude = pointA
      const latitude = pointB

      return response.json({
        longitude,
        latitude,
        province,
        adcode,
        city,
        ip
      })
    }

    return response.json({})
  } catch ({ message }) {
    return response.status(400).json({ message })
  }
}
