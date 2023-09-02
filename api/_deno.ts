
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import dns from 'node:dns/promises';

// console.log(dns)
serve(async (req: Request) => {
  console.log(req.headers.get('x-real-ip'));
  const data = await dns.lookup('cloudflare.com', { all: true });
  return new Response(JSON.stringify(data));
});
