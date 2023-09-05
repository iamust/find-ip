import { type ConnInfo, serve } from 'https://deno.land/std@0.195.0/http/server.ts'
import { type Context, Hono } from 'https://deno.land/x/hono@v3.5.8/mod.ts'
import { cors } from 'https://deno.land/x/hono@v3.5.8/middleware.ts'

const app = new Hono()

app.use(
  '/*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'OPTIONS', 'POST']
  })
)

app.get('/', (c: Context) => {
  return c.text(`${c.env.hostname}\n`)
})

app.get('/:domain', async (c: Context) => {
  const domain = c.req.param('domain')

  //   const result = await Deno.resolveDns(domain, 'A')
  const result = await Deno.resolveDns(domain, 'NS', {
    nameServer: { ipAddr: '8.8.8.8' }
  })

  return c.json({ result })
})

serve((request: Request, { remoteAddr }: ConnInfo) => {
  const { hostname } = remoteAddr as Deno.NetAddr
  return app.fetch(request, { hostname })
})
