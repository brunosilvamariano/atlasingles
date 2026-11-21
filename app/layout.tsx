import type { Metadata } from 'next';
import './globals.css';
import './stories.css';
export const metadata: Metadata = { title: 'Atlas English — Seu inglês, sem fronteiras', description: 'Uma jornada de inglês americano feita para você.' };
export default function Layout({ children }: {
    children: React.ReactNode;
}) { return <html lang="pt-BR"><body>{children}</body></html>; }

