const fileSystem = require('fs');
const path = './gulp/tasks/';
const arrayPathFiles = fileSystem.readdirSync(path).map(url => url = `${path}${url}`);
module.exports = arrayPathFiles;