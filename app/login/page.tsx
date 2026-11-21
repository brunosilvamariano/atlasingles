import LoginForm from './LoginForm';
import { isConfigured, ownerSession } from '../../lib/supabase/server';
import { isLocalMode } from '../../lib/local-mode';
import { redirect } from 'next/navigation';
export const dynamic='force-dynamic';
export default async function Login(){if(isLocalMode() || await ownerSession())redirect('/');return <LoginForm configured={isConfigured()}/>;}
