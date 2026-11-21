import 'server-only';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { isLocalMode } from '../local-mode';
export function isConfigured() { return !isLocalMode() && Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY && process.env.ADMIN_USER_ID); }
export async function createClient() {
 const store=await cookies();
 return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,{cookies:{getAll:()=>store.getAll(),setAll(values){try{for(const {name,value,options} of values)store.set(name,value,options);}catch{/* Server Components rely on proxy.ts to refresh cookies. */}}}});
}
// Always verify with Auth; never authorize from unverified session cookies.
export async function ownerSession(){if(!isConfigured())return null;const supabase=await createClient();const {data:{user},error}=await supabase.auth.getUser();if(error||!user||user.id!==process.env.ADMIN_USER_ID)return null;return {supabase,user};}
