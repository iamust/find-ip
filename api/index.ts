import type { VercelRequest, VercelResponse } from '@vercel/node'
import isIP from 'validator/lib/isIP'
import dns from 'dns/promises'

export default async (request: VercelRequest, response: VercelResponse) => {
  const ip = request.headers['x-real-ip']
  const host =
    request.method === 'POST'
      ? request.body?.host
      : request.query.host || request.query.hostname

  if (!host) {
    return response.json({ ip })
  }

  if (isIP(host)) {
    return response.redirect(`/info?ip=${host}`)
  }

  try {
    const result = await dns.lookup(host, { all: true })
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
