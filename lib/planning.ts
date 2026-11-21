// Local calendar dates avoid UTC shifts near midnight.
export type PlannerNote = {
    id: string;
    text: string;
    date: string;
    createdAt?: string;
};
export type PlannerEvent = {
    id: string;
    title: string;
    date: string;
    details?: string;
    createdAt?: string;
    time?: string;
    category?: 'Estudo' | 'Revisão' | 'Pessoal';
};
export type NoteFocus = {
    id?: string;
    date?: string;
};
export function dateKey(date: Date) { return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-'); }
export function parseDay(key: string) { const [y, m, d] = key.split('-').map(Number); return new Date(y, m - 1, d, 12); }
export function monthDays(month: Date) { const start = new Date(month.getFullYear(), month.getMonth(), 1, 12); start.setDate(1 - start.getDay()); return Array.from({ length: 42 }, (_, i) => { const date = new Date(start); date.setDate(start.getDate() + i); return date; }); }
export function displayDay(key: string, options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }) { return parseDay(key).toLocaleDateString('pt-BR', options); }
