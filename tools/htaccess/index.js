/* eslint-disable */
/**
 * Copies .htaccess to the public folder.
 */
import fs from 'fs-extra';
import path from 'path';
import colors from 'colors';

const outPath = path.resolve(__dirname, '..', '..', 'public', '.htaccess');
const filePath = path.resolve(__dirname, '.htaccess');

fs.removeSync(outPath);

fs.copy(filePath, outPath, function(err) {
  if (err) return console.error(err.red);
  console.log('📦', ' .htaccess moved to the public folder'.green);
});
