import { createClient, isConfigured } from '../../../lib/supabase/server';
import { NextResponse } from 'next/server';
export async function POST(request:Request){if(request.headers.get('origin')!==new URL(request.url).origin)return new Response('Origem inválida',{status:403});if(isConfigured()){const client=await createClient();await client.auth.signOut();}return NextResponse.redirect(new URL('/login',request.url),303);}
