/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const cp = require('child_process');

function postBuild(pages, callback) {
  cp.Shell.execSync('cp -r assets/* public/');
  callback();
}

module.exports = postBuild;
