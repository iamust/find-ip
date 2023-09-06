import type { VercelRequest, VercelResponse } from '@vercel/node'
import isEmpty from 'lodash/isEmpty'
import dns from 'dns/promises'

export default async (request: VercelRequest, response: VercelResponse) => {
  const ip = request.headers['x-real-ip']
  const domain =
    request.method === 'POST'
      ? request.body?.domain
      : request.query.domain || request.query.d

  if (isEmpty(domain)) {
    return response.json({ ip })
  }

  try {
    const result = await dns.lookup(domain, { all: true })
    return response.json(
      result.map(({ address, family }) => ({
        type: { 4: 'A', 6: 'AAAA' }[family],
        value: address,
        family
      }))
    )
  } catch ({ message }) {
    return response.status(400).json({ message })
  }
}
