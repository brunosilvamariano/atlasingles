import type { LearningLevel } from './content/types';
export const levels: {
    id: LearningLevel;
    label: string;
    range: string;
    description: string;
    promise: string;
}[] = [{ id: 'basic', label: 'Básico', range: 'A1–A2', description: 'Comece do zero e construa sua base.', promise: 'Apresentações, pedidos e pequenas conversas.' }, { id: 'intermediate', label: 'Intermediário', range: 'B1–B2', description: 'Converse com autonomia no dia a dia.', promise: 'Explique problemas, planos e opiniões.' }, { id: 'advanced', label: 'Avançado', range: 'C1', description: 'Expresse nuances e negocie ideias.', promise: 'Argumentação, sutilezas e situações complexas.' }];
export function levelLabel(level?: LearningLevel) { return levels.find(l => l.id === (level || 'basic'))!.label; }
