import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';


const read = async () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));

  const file = path.resolve(dir, 'files', 'fileToRead.txt');
  const checkFile = fs.promises.access(file);

  checkFile.then(
    result => {
      fs.promises.readFile(file, { encoding: 'utf8' })
        .then((text) => console.log(text))
    },
    error => { throw new Error('FS operation failed'); }
  )
};

await read();