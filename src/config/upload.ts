import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const tempFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tempFolder,

  storage: multer.diskStorage({
    // dirname makes all the path until this file location
    destination: tempFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
