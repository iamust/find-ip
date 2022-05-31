const { promises: dns } = require('dns')
const isEmpty = require('lodash/isEmpty')

async function dnsLookup(domain) {
  try {
    return await dns.lookup(domain)
  } catch ({ message }) {
    return { message }
  }
}

module.exports = async (request, response) => {
  const address = request.headers['x-real-ip']
  const domain = (request.query.domain ||
                  request.query.d)

  return isEmpty(domain)
    ? response.json({ address })
    : response.json(await dnsLookup(domain))
}
