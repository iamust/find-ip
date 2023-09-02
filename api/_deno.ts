
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";
import dns from 'node:dns/promises';

console.log(dns)
serve((req: Request) => new Response("Hello Deno!"));
