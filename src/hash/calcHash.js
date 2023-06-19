import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import { createHash } from 'crypto';


const calculateHash = async () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const file = path.resolve(dir, 'files', 'fileToCalculateHashFor.txt');
  const content = fs.readFile(file);

  content
    .then((content) => {
      const hash = createHash('sha256').update('' + content).digest('hex');
      console.log(hash)
    })

};

await calculateHash();