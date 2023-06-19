import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const write = async () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));

  const file = path.resolve(dir, 'files', 'fileToWrite.txt');

  const writeFile = fs.createWriteStream(file);
  process.stdin.on('data', (text) => {
    writeFile.write(text);
  });
};

await write();