import { createClient } from '@supabase/supabase-js';
import { randomBytes } from 'node:crypto';
import { existsSync } from 'node:fs';
// Run this only on your own computer. Never upload .env.setup or the secret key.
if(existsSync('.env.setup'))process.loadEnvFile('.env.setup');
const {SUPABASE_URL,SUPABASE_SECRET_KEY,ADMIN_EMAIL}=process.env;
if(!SUPABASE_URL||!SUPABASE_SECRET_KEY||!ADMIN_EMAIL){console.error('Preencha .env.setup seguindo .env.setup.example antes de executar.');process.exit(1);}
const client=createClient(SUPABASE_URL,SUPABASE_SECRET_KEY,{auth:{autoRefreshToken:false,persistSession:false}});
const password=randomBytes(24).toString('base64url');
const {data,error}=await client.auth.admin.createUser({email:ADMIN_EMAIL.trim(),password,email_confirm:true});
if(error){console.error('Conta não criada: '+error.message+'. Contas existentes não têm sua senha alterada por este script.');process.exit(1);}
console.log('Administrador criado no seu Supabase. Guarde as informações em um gerenciador de senhas.');
console.log('Login: '+data.user.email);
console.log('Senha: '+password);
console.log('ADMIN_USER_ID='+data.user.id);
console.log('Configure esse UUID em .env.local e na Vercel. A senha não foi gravada em arquivo.');
