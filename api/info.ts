import { handle } from '@hono/node-server/vercel'
import { type Context, Hono } from 'hono'
import axios from 'axios'

const app = new Hono()

app.get('/info', async (c: Context) => {
  // console.log()
  return c.json(c.req.headers)
})

export default handle(app)

// import type { VercelRequest, VercelResponse } from '@vercel/node'
// export default async (request: VercelRequest, response: VercelResponse) => {
//   const ip = request.query.ip || request.headers['x-real-ip']

//   try {
//     const { data } = await axios.get('https://restapi.amap.com/v3/ip', {
//       params: {
//         key: process.env.AMAP_API_KEY,
//       }
//     })

//     return response.json(data)
//   } catch ({ message }) {
//     return response.json({ message })
//   }
// }
