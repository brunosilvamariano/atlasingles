import { ownerSession } from '../../../../lib/supabase/server';
export async function GET(){const session=await ownerSession();return Response.json({authorized:!!session},{status:session?200:401,headers:{'Cache-Control':'private, no-store'}});}
