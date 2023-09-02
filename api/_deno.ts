
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

import dns from 'node:dns/promises';

// console.log(dns)
serve(async (req: Request, c) => {
  console.log(c);
  const data = await dns.lookup('cloudflare.com', { all: true });
  return new Response(JSON.stringify(data));
});
