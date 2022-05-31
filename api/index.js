const { promises: dns } = require('dns')
const isEmpty = require('lodash/isEmpty')
const isURL = require('validator/lib/isURL')

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

  if (isURL(domain)) {
    const { host } = new URL(domain)
    return response.redirect(`/?d=${host}`)
  }

  return isEmpty(domain)
    ? response.json({ address })
    : response.json(await dnsLookup(domain))
}
