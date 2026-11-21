import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const command = process.argv[2] === 'start' ? 'start' : 'dev';
const server = spawn(process.execPath, [
    require.resolve('next/dist/bin/next'),
    command,
    '--hostname', '127.0.0.1',
    ...(command === 'dev' ? ['--webpack'] : []),
], {
    stdio: 'inherit',
    env: { ...process.env, ATLAS_LOCAL_MODE: '1', NEXT_TELEMETRY_DISABLED: '1' },
});

server.on('error', error => {
    console.error(error.message);
    process.exitCode = 1;
});
server.on('exit', code => {
    process.exitCode = code ?? 1;
});
