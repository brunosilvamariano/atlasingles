import assert from 'node:assert/strict';
import {lessons,plans} from '../lib/curriculum.ts';
const ids=new Set();let phrases=0;
for(const lesson of lessons){assert(!ids.has(lesson.id),'Duplicate lesson');ids.add(lesson.id);for(const phrase of lesson.phrases){phrases++;assert(phrase.en&&phrase.pt&&phrase.sound);const tokens=phrase.en.replace(/[.,!?]/g,'').split(/\s+/);assert.deepEqual(phrase.words.map(w=>w[0].replace(/[.,!?]/g,'')),tokens,'Missing word translation: '+phrase.en);for(const [word,translation,sound] of phrase.words)assert(word&&translation&&sound,'Missing pronunciation: '+word)}}
assert.equal(plans.find(p=>p.id==='annual').price,30*12);
console.log(lessons.length+' lessons; '+phrases+' phrases; all words have meanings and pronunciation cues; annual pricing verified.');

const categories=[...new Set(lessons.map(l=>l.category))];
for(const category of categories){for(const level of ['basic','intermediate','advanced']){assert(lessons.filter(l=>l.category===category&&l.level===level&&l.phrases.every(p=>p.role)).length>=2,'Missing level '+category+'/'+level)}}
assert(lessons.length>=116);assert(phrases>=537);
assert(lessons.find(l=>l.id==='hello').phrases[0].words.some(w=>w[0]==='my'&&w[2]==='mai'));
assert(lessons.find(l=>l.id==='hello').phrases[0].words.some(w=>w[0]==='name'&&w[2]==='nêim'));
console.log(categories.length+' categories cover basic, intermediate and advanced; my/name pronunciation verified.');

const real=lessons.filter(l=>l.category==='Conversas & histórias reais');assert.equal(real.length,30);for(const level of ['basic','intermediate','advanced'])assert.equal(real.filter(l=>l.level===level).length,10);assert(real.every(l=>l.phrases.length===8&&l.context.includes('fictícia')));console.log('30 new connected stories, 10 per level, 240 complete turns.');
