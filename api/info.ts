import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'

export default async (request: VercelRequest, response: VercelResponse) => {
  const ip = request.query.ip || request.headers['x-real-ip']
  const key = process.env.AMAP_API_KEY

  try {
    const { data } = await axios.get('https://restapi.amap.com/v3/ip', {
      params: { key, ip }
    })

    return response.json(data)
  } catch ({ message }) {
    return response.status(400).json({ message })
  }
}
