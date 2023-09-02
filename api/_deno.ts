
// import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import dns from 'node:dns/promises';

// console.log(dns)
Deno.serve(async (req: Request) => {
  console.log(req.headers);
  const data = await dns.lookup('cloudflare.com', { all: true });
  return new Response(JSON.stringify(data));
});
