import 'server-only';

export function isLocalMode() {
    return process.env.ATLAS_LOCAL_MODE === '1' && !process.env.VERCEL;
}
