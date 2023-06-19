import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const read = async () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));

  const file = path.resolve(dir, 'files', 'fileToRead.txt');

  const readFile = fs.createReadStream(file)

  readFile.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();