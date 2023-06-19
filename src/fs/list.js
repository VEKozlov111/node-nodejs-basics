import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const list = async () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));

  const folder = path.resolve(dir, 'files');
  const checkFolder = fs.promises.access(folder);

  checkFolder.then(
    result => {
      fs.promises.readdir(folder)
        .then((files) => {
          for (let filename of files) {
            console.log(filename)
          }
        })
    },
    error => { throw new Error('FS operation failed'); }
  )
};

await list();