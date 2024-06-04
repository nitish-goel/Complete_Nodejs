// Inbuild modules/library in nodejs.
// we can read and learn about these packages from https/nodejs.org/api


const { log } = require('console');
let os = require('os'); // importing os module in current file. os module is used for to give user info.

let fs = require('fs');  // file system module is used to create file or handle files.

log(os.userInfo());

fs.appendFile('index.html', '\n<p>This is file created by using fs module \n From HWnode2.js file</p>', () => {
    log("file is created");
});

