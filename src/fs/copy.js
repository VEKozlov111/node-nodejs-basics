import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const copy = async () => {
  const dir = path.dirname(fileURLToPath(import.meta.url));

  const folderFiles = path.resolve(dir, 'files');
  const folderFilesNew = path.resolve(dir, 'files_copy');

  const checkFolderFiles = fs.promises.access(folderFiles);
  const checkFolderFilesNew = fs.promises.access(folderFilesNew);

  const checkErr = Promise.allSettled([checkFolderFiles, checkFolderFilesNew])

  checkErr
    .then((errors) => {
      if (errors[0].status !== 'fulfilled' || errors[1].status !== 'rejected') {
        throw new Error('FS operation failed');
      }
    })
    .then(() => fs.promises.mkdir(folderFilesNew))
    .then(() => {
      fs.promises.readdir(folderFiles)
        .then((files) => {
          for (let filename of files) {
            fs.promises.copyFile(
              path.resolve(folderFiles, filename),
              path.resolve(folderFilesNew, filename)
            );
          }

        })
    })
};

await copy();
