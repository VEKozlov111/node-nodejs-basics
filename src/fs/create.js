import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';


const create = async () => {
  /*fs.writeFile('./fs/files/fresh.txt', 'I am fresh and young', (error) => {
    if (error) {
      console.log(error)
    }
  })*/
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const file = path.resolve(dir, 'files', 'fresh.txt');
  fs.access(file, (error) => {
    if (error) {
      fs.appendFile(file, 'I am fresh and young', (error) => {
        if (error) throw error;
      });
      return;
    }
    throw new Error('FS operation failed');
  });
};

await create();