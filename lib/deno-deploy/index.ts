import { type ConnInfo, serve } from 'https://deno.land/std@0.195.0/http/server.ts'

serve((request: Request, { remoteAddr }: ConnInfo) => {
  const { hostname } = remoteAddr as Deno.NetAddr
  return Response.json({ address: hostname })
})
