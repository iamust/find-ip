import type { VercelRequest, VercelResponse } from '@vercel/node'
import amap from '../lib/helpers/amap'

export default async (request: VercelRequest, response: VercelResponse) => {
  const ip = request.query.ip || request.headers['x-real-ip']

  try {
    const { data } = await amap.get('/ip', {
      params: { ip }
    })

    return response.json(data)
  } catch ({ message }) {
    return response.json({ message })
  }
}
