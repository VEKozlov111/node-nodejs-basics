import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const remove = async () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));

  const file = path.resolve(dir, 'files', 'fileToRemove.txt');
  const checkFile = fs.promises.access(file);

  checkFile.then(
    result => { fs.promises.unlink(file) },
    error => { throw new Error('FS operation failed'); }
  )

};

await remove();