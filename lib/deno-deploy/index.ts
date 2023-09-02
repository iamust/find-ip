
import { type ConnInfo, serve } from "https://deno.land/std@0.195.0/http/server.ts";

// import dns from 'node:dns/promises';
// import type { ConnInfo } from 'https://deno.land/std@0.155.0/http/server.ts'
// console.log(dns)

serve((req: Request, conn: ConnInfo) => {
  return new Response(JSON.stringify(conn.remoteAddr));
});
