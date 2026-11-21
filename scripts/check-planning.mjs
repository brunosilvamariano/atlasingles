import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import ts from 'typescript';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
async function load(file){const js=ts.transpileModule(await fs.readFile(new URL('../'+file,import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;const module={exports:{}};new Function('require','module','exports',js)(require,module,module.exports);return module.exports;}
const {dateKey,parseDay,monthDays}=await load('lib/planning.ts');
for(const [year,month] of [[2026,10],[2024,1],[2025,11],[2026,0]]){const days=monthDays(new Date(year,month,1));assert.equal(days.length,42);assert.equal(days[0].getDay(),0);assert.equal(days[41].getDay(),6);assert.equal(new Set(days.map(dateKey)).size,42);assert.equal(days.filter(d=>d.getMonth()===month&&d.getFullYear()===year).length,new Date(year,month+1,0).getDate());}
assert.equal(dateKey(monthDays(new Date(2026,10,1))[0]),'2026-11-01');
assert.equal(dateKey(parseDay('2024-02-29')),'2024-02-29');
const {learnerStateSchema}=await load('lib/learner-state.ts');
const state={completed:[],saved:[],notes:[{id:'old-note',text:'Anterior',date:'2026-10-01'}],events:[{id:'old-event',title:'Anterior',date:'2026-10-01'},{id:'new',title:'Prática',date:'2026-12-03',details:'Linha um\nLinha dois',time:'09:30',category:'Revisão',createdAt:'2026-11-01T18:00:00.000Z'}],activity:{},goal:15};
assert.deepEqual(learnerStateSchema.parse(state),state);
assert.equal(learnerStateSchema.safeParse({...state,events:[{...state.events[1],time:'25:99'}]}).success,false);
console.log('Planning checks passed: month boundaries, leap year, local dates, legacy records, full notes and timestamps.');
