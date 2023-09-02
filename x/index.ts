

import type { VercelRequest, VercelResponse } from '@vercel/node'
export default async (request: VercelRequest, response: VercelResponse) => {
  return response.json({ v1: true })
}
