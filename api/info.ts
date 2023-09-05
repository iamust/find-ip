import { handle } from '@hono/node-server/vercel'
import { type Context, Hono } from 'hono'

const app = new Hono()

app.get('/info', async (c: Context) => {
  // console.log()
  return c.json({a:c.req.header['x-real-ip']})
})

export default handle(app)

// import type { VercelRequest, VercelResponse } from '@vercel/node'
// import axios from 'axios'

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
