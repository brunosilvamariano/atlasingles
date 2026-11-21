import { realLifeScenes } from './content/real-life.ts';
import { additionalScenes } from './content/additional.ts';
import { basicScenes } from './content/basic.ts';
import { intermediateScenes } from './content/intermediate.ts';
import { advancedScenes } from './content/advanced.ts';
import { newScenes } from './content/new-content.ts';
import type { Lesson } from './curriculum';
// Parallel token arrays are checked here and in the content audit to prevent silent gaps.
export const expandedLessons: Lesson[] = [...basicScenes, ...intermediateScenes, ...advancedScenes, ...additionalScenes, ...newScenes, ...realLifeScenes].map(scene => ({ id: scene.id, title: scene.title, category: scene.category, topic: scene.topic, icon: scene.icon, description: scene.objective, level: scene.level, cefr: scene.cefr, objective: scene.objective, context: scene.context, tip: scene.tip, phrases: scene.lines.map((line, i) => {
        const [en, pt, soundsText, meaningsText] = line.split('~');
        const tokens = en.replace(/[.,!?]/g, '').split(/\s+/);
        const sounds = soundsText.split('|'), meanings = meaningsText.split('|');
        if (tokens.length !== sounds.length || tokens.length !== meanings.length)
            throw new Error(scene.id + ' token mismatch ' + en + ' ' + [tokens.length, sounds.length, meanings.length].join('/'));
        return { en, pt, sound: sounds.join(' '), words: tokens.map((token, j) => [token, meanings[j], sounds[j]] as [
                string,
                string,
                string
            ]), role: scene.speakers[i % 2] };
    }) }));
