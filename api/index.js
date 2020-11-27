const { promises: dns } = require('dns')
const isEmpty = require('lodash/isEmpty')

module.exports = async (request, response) => {
  const address = request.headers['x-real-ip']
  const domain = request.query.domain ||
                 request.query.d

  if (isEmpty(domain)) {
    return response.json({ address })
  }

  try {
    const data = await dns.lookup(domain)
    return response.json(data)
  } catch ({ message }) {
    return response.json({ message })
  }
}
