export type LearningLevel = 'basic' | 'intermediate' | 'advanced';
export type SceneSpec = {
    id: string;
    title: string;
    category: string;
    topic?: string;
    icon: string;
    level: LearningLevel;
    cefr: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
    objective: string;
    context: string;
    tip: string;
    speakers: [
        string,
        string
    ];
    lines: string[];
};
