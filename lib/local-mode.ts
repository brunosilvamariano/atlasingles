import 'server-only';

export function isLocalMode() {
    const explicitlyLocal = process.env.ATLAS_LOCAL_MODE === '1' && !process.env.VERCEL;
    const hasAccountConfiguration = Boolean(
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY &&
        process.env.ADMIN_USER_ID
    );
    // Until Supabase is connected, studies stay in this browser without a login.
    // Once all account settings exist, the private login flow resumes automatically.
    return explicitlyLocal || !hasAccountConfiguration;
}
