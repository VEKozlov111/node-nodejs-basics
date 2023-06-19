import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const rename = async () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));


  const file = path.resolve(dir, 'files', 'wrongFilename.txt');
  const renamedFile = path.resolve(dir, 'files', 'properFilename.md');

  const checkFile = fs.promises.access(file);
  const checkRenamedFile = fs.promises.access(renamedFile);


  const checkErr = Promise.allSettled([checkFile, checkRenamedFile])

  checkErr
    .then((errors) => {
      if (errors[0].status !== 'fulfilled' || errors[1].status !== 'rejected') {
        throw new Error('FS operation failed');
      }
    })
    .then(() => fs.promises.rename(file, renamedFile))

};

await rename();