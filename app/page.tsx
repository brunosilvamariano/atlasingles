import Dashboard from '../components/atlas/Dashboard';
import { ownerSession } from '../lib/supabase/server';
import { isLocalMode } from '../lib/local-mode';
import { redirect } from 'next/navigation';
export const dynamic = 'force-dynamic';

export default async function Page() {
    const localMode = isLocalMode();
    if (!localMode && !await ownerSession()) redirect('/login');
    return <Dashboard name="Bruno" localMode={localMode}/>;
}
